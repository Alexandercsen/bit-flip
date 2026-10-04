import { readFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

const ALLOWED = new Set(["alexander-coyle.png", "loic-peloille.png"]);

function isAllowedRequest(request: Request) {
  const site = request.headers.get("sec-fetch-site");
  // Modern browsers send this for subresource loads from the page.
  if (site === "same-origin" || site === "same-site") return true;

  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (origin && host) {
    try {
      if (new URL(origin).host === host) return true;
    } catch {
      // ignore
    }
  }

  const referer = request.headers.get("referer");
  if (referer && host) {
    try {
      if (new URL(referer).host === host) return true;
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
  // Reject encoded path tricks before basename normalisation.
  if (
    file.includes("..") ||
    file.includes("/") ||
    file.includes("\\") ||
    file.includes("%")
  ) {
    return new NextResponse("Not found", { status: 404 });
  }

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
        "Cross-Origin-Resource-Policy": "same-origin",
      },
    });
  } catch {
    return new NextResponse("Not found", { status: 404 });
  }
}
