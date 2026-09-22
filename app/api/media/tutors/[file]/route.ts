import { readFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

const ALLOWED = new Set(["alexander-coyle.png", "loic-peloille.png"]);

function isAllowedRequest(request: Request) {
  const site = request.headers.get("sec-fetch-site");
  // Allow embedding from this site only. Block direct navigation / cross-site.
  if (site === "same-origin" || site === "same-site") return true;

  const referer = request.headers.get("referer");
  const host = request.headers.get("host");
  if (referer && host) {
    try {
      const refHost = new URL(referer).host;
      if (refHost === host) return true;
    } catch {
      return false;
    }
  }

  return false;
}

export async function GET(
  request: Request,
  context: { params: Promise<{ file: string }> }
) {
  if (!isAllowedRequest(request)) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  const { file } = await context.params;
  const safeName = path.basename(file);

  if (!ALLOWED.has(safeName)) {
    return new NextResponse("Not found", { status: 404 });
  }

  try {
    const filePath = path.join(process.cwd(), "private", "tutors", safeName);
    const data = await readFile(filePath);

    return new NextResponse(data, {
      status: 200,
      headers: {
        "Content-Type": "image/png",
        "Content-Disposition": "inline",
        "Cache-Control": "private, no-store",
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "DENY",
        "Referrer-Policy": "same-origin",
      },
    });
  } catch {
    return new NextResponse("Not found", { status: 404 });
  }
}
