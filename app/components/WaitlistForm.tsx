"use client";

import { useState } from "react";
import posthog from "posthog-js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Success = { message: string; position: number };

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<Success | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (!EMAIL_RE.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        setError(data.message ?? "Something went wrong. Please try again.");
        return;
      }

      posthog.capture("waitlist_signup_completed");
      setSuccess({ message: data.message, position: data.position });
    } catch {
      setError("Couldn't reach the server. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div
        style={{
          padding: "22px 24px",
          background: "rgba(247,247,248,0.06)",
          border: "1px solid rgba(91,61,245,0.5)",
          borderRadius: "16px",
          backdropFilter: "blur(8px)",
          maxWidth: "520px",
          margin: "0 auto",
          boxShadow: "0 0 0 4px rgba(91,61,245,0.08)",
        }}
      >
        <div
          style={{
            fontSize: "17px",
            fontWeight: 600,
            lineHeight: 1.4,
            color: "#f7f7f8",
          }}
        >
          {success.message} You are number {success.position}.
        </div>
      </div>
    );
  }

  return (
    <>
      <form
        onSubmit={onSubmit}
        noValidate
        className="signup-form"
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          padding: "8px",
          background: "rgba(247,247,248,0.06)",
          border: "1px solid rgba(247,247,248,0.12)",
          borderRadius: "16px",
          backdropFilter: "blur(8px)",
          maxWidth: "520px",
          margin: "0 auto",
        }}
      >
        <input
          type="email"
          placeholder="you@work.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={submitting}
          style={{
            flex: 1,
            minWidth: "200px",
            padding: "14px 16px",
            background: "transparent",
            border: 0,
            outline: 0,
            color: "#f7f7f8",
            fontSize: "15px",
          }}
        />
        <button
          type="submit"
          className="submit-btn"
          disabled={submitting}
          style={{
            padding: "14px 22px",
            background: "linear-gradient(135deg,#5b3df5,#2563eb)",
            color: "#fff",
            border: 0,
            borderRadius: "10px",
            fontWeight: 600,
            fontSize: "15px",
            cursor: submitting ? "not-allowed" : "pointer",
            letterSpacing: "-0.005em",
            boxShadow: "0 8px 24px -8px rgba(91,61,245,0.6)",
            transition: "transform 0.15s ease",
            opacity: submitting ? 0.7 : 1,
          }}
        >
          {submitting ? "Joining…" : "Join the waitlist"}
        </button>
      </form>

      {error && (
        <div
          role="alert"
          style={{
            maxWidth: "520px",
            margin: "14px auto 0",
            fontSize: "13px",
            color: "#ff9d9d",
          }}
        >
          {error}
        </div>
      )}
    </>
  );
}
