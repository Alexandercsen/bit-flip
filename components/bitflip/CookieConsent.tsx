"use client";

import { useCallback, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { Button } from "./ui";

const STORAGE_KEY = "bitflip-cookie-consent";
const SSR_SENTINEL = "__ssr__";

type ConsentValue = "accepted" | "rejected" | "custom";

function readConsent(): string | null {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  return () => window.removeEventListener("storage", onStoreChange);
}

export function CookieConsent() {
  const stored = useSyncExternalStore(
    subscribe,
    readConsent,
    () => SSR_SENTINEL
  );
  const [dismissed, setDismissed] = useState(false);
  const [showManage, setShowManage] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  const visible = !dismissed && stored === null;

  const save = useCallback((value: ConsentValue, allowAnalytics: boolean) => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          value,
          analytics: allowAnalytics,
          updatedAt: new Date().toISOString(),
        })
      );
      window.dispatchEvent(new Event("storage"));
    } catch {
      // Ignore storage failures; banner may reappear next visit.
    }
    setDismissed(true);
    setShowManage(false);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      className="fixed inset-x-0 bottom-0 z-[70] border-t border-jb-border bg-jb-surface/95 p-4 shadow-[0_-12px_40px_rgba(0,0,0,0.45)] backdrop-blur-md sm:p-5"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-4">
        <div>
          <p
            id="cookie-consent-title"
            className="text-[15px] font-semibold text-jb-text"
          >
            Cookies
          </p>
          <p
            id="cookie-consent-desc"
            className="mt-2 text-[14px] text-jb-secondary"
          >
            We use cookies (and similar storage) to run the website. Where you
            agree, we may also use them to understand how people use it. Right
            now we do not load third-party analytics; your choice is stored so we
            respect it if that changes.{" "}
            <Link
              href="/cookies"
              className="text-jb-link hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jb-link"
            >
              Cookie Policy
            </Link>
          </p>
        </div>

        {showManage && (
          <label className="flex items-start gap-3 rounded-xl border border-jb-border bg-jb-elevated px-3 py-3 text-[14px] text-jb-secondary">
            <input
              type="checkbox"
              checked={analytics}
              onChange={(e) => setAnalytics(e.target.checked)}
              className="mt-1"
            />
            <span>
              <span className="font-mono text-[12px] text-jb-link">
                Non-essential
              </span>
              <br />
              Optional analytics / usage cookies. Off by default. We are not
              currently using any.
            </span>
          </label>
        )}

        <div className="flex flex-wrap gap-2">
          <Button onClick={() => save("accepted", true)}>Accept all</Button>
          <Button variant="ghost" onClick={() => save("rejected", false)}>
            Reject non-essential
          </Button>
          {showManage ? (
            <Button
              variant="secondary"
              onClick={() => save("custom", analytics)}
            >
              Save choices
            </Button>
          ) : (
            <Button variant="secondary" onClick={() => setShowManage(true)}>
              Manage choices
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
