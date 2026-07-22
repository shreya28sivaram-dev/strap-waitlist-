"use client";

import posthog from "posthog-js";

export function HeroCta() {
  return (
    <a
      href="#signup"
      className="cta-primary"
      onClick={() => posthog.capture("waitlist_cta_clicked")}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        padding: "16px 26px",
        background: "#0a0a0f",
        color: "#f7f7f8",
        borderRadius: "12px",
        fontWeight: 600,
        fontSize: "15px",
        letterSpacing: "-0.005em",
        boxShadow: "0 8px 24px -8px rgba(10,10,15,0.4)",
        transition: "transform 0.15s ease",
      }}
    >
      Join the waitlist
      <span style={{ display: "inline-block", transform: "translateY(-1px)" }}>
        →
      </span>
    </a>
  );
}
