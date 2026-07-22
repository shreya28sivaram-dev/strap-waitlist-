"use client";

import { useEffect, useRef } from "react";
import posthog from "posthog-js";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  // React runs effects twice in dev StrictMode; without this guard
  // waitlist_page_viewed would fire twice per load and skew the funnel.
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;

    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;
    if (!key || !host) return;

    posthog.init(key, {
      api_host: host,
      // We fire waitlist_page_viewed ourselves; autocapture and the built-in
      // $pageview would add noise around the three events we care about.
      capture_pageview: false,
      autocapture: false,
    });

    posthog.capture("waitlist_page_viewed");
  }, []);

  return <>{children}</>;
}
