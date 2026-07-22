import { HeroCta } from "./components/HeroCta";
import { WaitlistForm } from "./components/WaitlistForm";

// The bundle hardcoded "'JetBrains Mono',monospace"; next/font generates the
// real family name into this variable.
const mono = "var(--font-jetbrains-mono), monospace";

export default function Home() {
  return (
    <main
      style={{
        minWidth: 0,
        width: "100%",
        maxWidth: "100%",
        overflowX: "hidden",
        background: "#f7f7f8",
        color: "#0a0a0f",
      }}
    >
      {/* ============ HERO ============ */}
      <section
        style={{
          position: "relative",
          padding:
            "clamp(28px,6vw,64px) clamp(20px,6vw,80px) clamp(64px,10vw,140px)",
          overflow: "hidden",
          background: "linear-gradient(180deg,#f7f7f8 0%,#f2f1f5 100%)",
        }}
      >
        {/* subtle background accent */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(60% 50% at 85% 10%, rgba(91,61,245,0.10), transparent 60%), radial-gradient(50% 40% at 10% 90%, rgba(37,99,235,0.08), transparent 60%)",
          }}
        />

        {/* nav */}
        <nav
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "1200px",
            margin: "0 auto 0",
            paddingBottom: "clamp(48px,8vw,96px)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "8px",
                background: "#0a0a0f",
                display: "grid",
                placeItems: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg,#5b3df5,#2563eb)",
                }}
              />
            </div>
            <span
              style={{
                fontWeight: 700,
                letterSpacing: "-0.01em",
                fontSize: "16px",
              }}
            >
              STRaP
            </span>
          </div>
          <div
            className="nav-meta"
            style={{
              fontFamily: mono,
              fontSize: "12px",
              color: "#6b6b78",
              letterSpacing: "0.02em",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#5b3df5",
                marginRight: "8px",
                verticalAlign: "middle",
                animation: "floatDot 2.4s ease-in-out infinite",
              }}
            />
            private beta · 2026
          </div>
        </nav>

        <div
          className="hero-grid"
          style={{
            position: "relative",
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0,1.15fr) minmax(0,1fr)",
            gap: "clamp(32px,6vw,80px)",
            alignItems: "center",
          }}
        >
          {/* copy */}
          <div style={{ minWidth: 0 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 12px",
                border: "1px solid rgba(10,10,15,0.10)",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.6)",
                backdropFilter: "blur(8px)",
                fontFamily: mono,
                fontSize: "11px",
                letterSpacing: "0.04em",
                color: "#0a0a0f",
                marginBottom: "28px",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#5b3df5",
                }}
              />
              FOR PLANNERS WHO PROCRASTINATE
            </div>

            <h1
              style={{
                fontSize: "clamp(40px,6.6vw,84px)",
                lineHeight: 0.98,
                letterSpacing: "-0.035em",
                fontWeight: 700,
                margin: "0 0 24px",
                color: "#0a0a0f",
                textWrap: "balance",
              }}
            >
              See how far
              <br />
              you&apos;ve come.
              <br />
              <span
                style={{
                  background: "linear-gradient(120deg,#5b3df5 0%,#2563eb 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Know the next step.
              </span>
            </h1>

            <p
              style={{
                fontSize: "clamp(16px,1.6vw,20px)",
                lineHeight: 1.55,
                color: "#4a4a56",
                maxWidth: "560px",
                margin: "0 0 40px",
                textWrap: "pretty",
              }}
            >
              STRaP tracks your progress across everything you&apos;re learning
              and quietly shows you the single next step toward your goal — so
              ambitious planners stop stalling and start moving.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
                alignItems: "center",
              }}
            >
              <HeroCta />
              <span
                style={{
                  fontFamily: mono,
                  fontSize: "12px",
                  color: "#6b6b78",
                }}
              >
                no credit card · early access invites weekly
              </span>
            </div>
          </div>

          {/* visual placeholder: progress spine */}
          <div
            className="hero-visual"
            style={{
              minWidth: 0,
              position: "relative",
              maxWidth: "520px",
              justifySelf: "end",
              width: "100%",
              background: "#0a0a0f",
              borderRadius: "24px",
              padding: "32px",
              color: "#f7f7f8",
              overflow: "hidden",
              boxShadow: "0 30px 80px -30px rgba(10,10,15,0.5)",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(50% 40% at 20% 0%, rgba(91,61,245,0.35), transparent 60%), radial-gradient(50% 40% at 100% 100%, rgba(37,99,235,0.28), transparent 60%)",
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "28px",
                fontFamily: mono,
                fontSize: "11px",
                color: "rgba(247,247,248,0.55)",
                letterSpacing: "0.06em",
              }}
            >
              <span>GOAL · LEARN LINEAR ALGEBRA</span>
              <span>62%</span>
            </div>

            {/* progress bar */}
            <div
              style={{
                position: "relative",
                height: "6px",
                background: "rgba(247,247,248,0.08)",
                borderRadius: "999px",
                overflow: "hidden",
                marginBottom: "36px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "0 38% 0 0",
                  background: "linear-gradient(90deg,#5b3df5,#2563eb)",
                  borderRadius: "999px",
                }}
              />
            </div>

            {/* steps */}
            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "14px 16px",
                  borderRadius: "12px",
                  background: "rgba(247,247,248,0.04)",
                  border: "1px solid rgba(247,247,248,0.06)",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: "rgba(91,61,245,0.2)",
                    border: "1.5px solid #5b3df5",
                    display: "grid",
                    placeItems: "center",
                    flex: "none",
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#5b3df5",
                    }}
                  />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: "13px", lineHeight: 1.3 }}>
                    Vectors &amp; vector spaces
                  </div>
                  <div
                    style={{
                      fontFamily: mono,
                      fontSize: "10px",
                      color: "rgba(247,247,248,0.4)",
                      marginTop: "2px",
                    }}
                  >
                    done · 8 sessions
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "14px 16px",
                  borderRadius: "12px",
                  background: "rgba(247,247,248,0.04)",
                  border: "1px solid rgba(247,247,248,0.06)",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: "rgba(91,61,245,0.2)",
                    border: "1.5px solid #5b3df5",
                    flex: "none",
                  }}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: "13px", lineHeight: 1.3 }}>
                    Matrix operations
                  </div>
                  <div
                    style={{
                      fontFamily: mono,
                      fontSize: "10px",
                      color: "rgba(247,247,248,0.4)",
                      marginTop: "2px",
                    }}
                  >
                    done · 5 sessions
                  </div>
                </div>
              </div>

              {/* next step, highlighted */}
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "16px 18px",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(135deg,rgba(91,61,245,0.18),rgba(37,99,235,0.12))",
                  border: "1px solid rgba(91,61,245,0.5)",
                  boxShadow: "0 0 0 4px rgba(91,61,245,0.08)",
                }}
              >
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    background: "#5b3df5",
                    flex: "none",
                    display: "grid",
                    placeItems: "center",
                    color: "#fff",
                    fontSize: "12px",
                    fontWeight: 600,
                  }}
                >
                  →
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontFamily: mono,
                      fontSize: "10px",
                      color: "rgba(247,247,248,0.6)",
                      letterSpacing: "0.05em",
                      marginBottom: "2px",
                    }}
                  >
                    NEXT STEP · 20 MIN
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: 1.3,
                    }}
                  >
                    Watch: Eigenvalues, intuition first
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "14px 16px",
                  borderRadius: "12px",
                  opacity: 0.5,
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    border: "1.5px solid rgba(247,247,248,0.25)",
                    flex: "none",
                  }}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: "13px", lineHeight: 1.3 }}>
                    Eigenvectors, worked problems
                  </div>
                  <div
                    style={{
                      fontFamily: mono,
                      fontSize: "10px",
                      color: "rgba(247,247,248,0.4)",
                      marginTop: "2px",
                    }}
                  >
                    upcoming
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "14px 16px",
                  borderRadius: "12px",
                  opacity: 0.35,
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    border: "1.5px solid rgba(247,247,248,0.25)",
                    flex: "none",
                  }}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: "13px", lineHeight: 1.3 }}>
                    Singular value decomposition
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BENEFITS ============ */}
      <section
        style={{
          padding: "clamp(72px,10vw,140px) clamp(20px,6vw,80px)",
          background: "#f7f7f8",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "16px",
              marginBottom: "clamp(40px,6vw,72px)",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(28px,3.6vw,44px)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                fontWeight: 700,
                margin: 0,
                color: "#0a0a0f",
                maxWidth: "640px",
                textWrap: "balance",
              }}
            >
              Built for the gap between{" "}
              <span style={{ color: "#5b3df5" }}>planning</span> and{" "}
              <span style={{ color: "#2563eb" }}>doing</span>.
            </h2>
            <div
              style={{
                fontFamily: mono,
                fontSize: "12px",
                color: "#6b6b78",
                letterSpacing: "0.04em",
              }}
            >
              01 · WHY STRaP
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: "20px",
            }}
          >
            {/* card 1 */}
            <article
              className="benefit-card"
              style={{
                position: "relative",
                padding: "32px 28px 36px",
                background: "#fff",
                border: "1px solid rgba(10,10,15,0.06)",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                minHeight: "320px",
                transition: "transform 0.2s ease,box-shadow 0.2s ease",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "#0a0a0f",
                    display: "grid",
                    placeItems: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "radial-gradient(60% 60% at 50% 100%, rgba(91,61,245,0.6), transparent 70%)",
                    }}
                  />
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      alignItems: "flex-end",
                      gap: "3px",
                      height: "18px",
                    }}
                  >
                    <div
                      style={{
                        width: "3px",
                        height: "6px",
                        background: "#f7f7f8",
                        borderRadius: "1px",
                      }}
                    />
                    <div
                      style={{
                        width: "3px",
                        height: "10px",
                        background: "#f7f7f8",
                        borderRadius: "1px",
                      }}
                    />
                    <div
                      style={{
                        width: "3px",
                        height: "14px",
                        background: "#f7f7f8",
                        borderRadius: "1px",
                      }}
                    />
                    <div
                      style={{
                        width: "3px",
                        height: "18px",
                        background: "#5b3df5",
                        borderRadius: "1px",
                      }}
                    />
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: mono,
                    fontSize: "11px",
                    color: "#a0a0ab",
                    letterSpacing: "0.06em",
                  }}
                >
                  B·01
                </span>
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "22px",
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                    fontWeight: 600,
                    margin: "0 0 12px",
                    color: "#0a0a0f",
                    textWrap: "balance",
                  }}
                >
                  See how far you&apos;ve come.
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.55,
                    color: "#4a4a56",
                    margin: 0,
                    textWrap: "pretty",
                  }}
                >
                  A living map of every topic you&apos;ve touched, so momentum is
                  visible instead of imagined.
                </p>
              </div>
            </article>

            {/* card 2 */}
            <article
              className="benefit-card"
              style={{
                position: "relative",
                padding: "32px 28px 36px",
                background: "#fff",
                border: "1px solid rgba(10,10,15,0.06)",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                minHeight: "320px",
                transition: "transform 0.2s ease,box-shadow 0.2s ease",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "#0a0a0f",
                    display: "grid",
                    placeItems: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "radial-gradient(60% 60% at 50% 100%, rgba(37,99,235,0.55), transparent 70%)",
                    }}
                  />
                  <div
                    style={{
                      position: "relative",
                      color: "#f7f7f8",
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: 1,
                    }}
                  >
                    →
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: mono,
                    fontSize: "11px",
                    color: "#a0a0ab",
                    letterSpacing: "0.06em",
                  }}
                >
                  B·02
                </span>
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "22px",
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                    fontWeight: 600,
                    margin: "0 0 12px",
                    color: "#0a0a0f",
                    textWrap: "balance",
                  }}
                >
                  Know the next step.
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.55,
                    color: "#4a4a56",
                    margin: 0,
                    textWrap: "pretty",
                  }}
                >
                  One small, decidable action — never a to-do list, never a wall.
                  Just what to do now.
                </p>
              </div>
            </article>

            {/* card 3 */}
            <article
              className="benefit-card"
              style={{
                position: "relative",
                padding: "32px 28px 36px",
                background: "#fff",
                border: "1px solid rgba(10,10,15,0.06)",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                minHeight: "320px",
                transition: "transform 0.2s ease,box-shadow 0.2s ease",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "#0a0a0f",
                    display: "grid",
                    placeItems: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "radial-gradient(60% 60% at 50% 50%, rgba(91,61,245,0.45), transparent 70%)",
                    }}
                  />
                  <div
                    style={{
                      position: "relative",
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      border: "1.5px solid #f7f7f8",
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#5b3df5",
                      }}
                    />
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: mono,
                    fontSize: "11px",
                    color: "#a0a0ab",
                    letterSpacing: "0.06em",
                  }}
                >
                  B·03
                </span>
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "22px",
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                    fontWeight: 600,
                    margin: "0 0 12px",
                    color: "#0a0a0f",
                    textWrap: "balance",
                  }}
                >
                  A path shaped around you.
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.55,
                    color: "#4a4a56",
                    margin: 0,
                    textWrap: "pretty",
                  }}
                >
                  Your learning journey adapts to how you actually work — pace,
                  gaps, and detours included.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ============ SIGNUP ============ */}
      <section
        id="signup"
        style={{
          padding: "clamp(72px,10vw,140px) clamp(20px,6vw,80px)",
          background: "#0a0a0f",
          color: "#f7f7f8",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(50% 60% at 20% 0%, rgba(91,61,245,0.28), transparent 60%), radial-gradient(45% 55% at 90% 100%, rgba(37,99,235,0.22), transparent 60%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            maxWidth: "720px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: mono,
              fontSize: "12px",
              color: "rgba(247,247,248,0.55)",
              letterSpacing: "0.08em",
              marginBottom: "20px",
            }}
          >
            02 · GET EARLY ACCESS
          </div>

          <h2
            style={{
              fontSize: "clamp(32px,5vw,56px)",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              fontWeight: 700,
              margin: "0 0 20px",
              textWrap: "balance",
            }}
          >
            Stop planning.{" "}
            <span
              style={{
                background: "linear-gradient(120deg,#8b74ff,#5b8bf5)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Start moving.
            </span>
          </h2>

          <p
            style={{
              fontSize: "clamp(15px,1.5vw,18px)",
              lineHeight: 1.55,
              color: "rgba(247,247,248,0.65)",
              margin: "0 auto 44px",
              maxWidth: "520px",
              textWrap: "pretty",
            }}
          >
            Join the waitlist. We&apos;ll send an invite when your slot opens —
            no marketing noise.
          </p>

          <WaitlistForm />

          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "28px",
              fontFamily: mono,
              fontSize: "11px",
              color: "rgba(247,247,248,0.45)",
              letterSpacing: "0.04em",
            }}
          >
            <span>· private beta</span>
            <span>· weekly invites</span>
            <span>· unsubscribe anytime</span>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer
        style={{
          padding: "32px clamp(20px,6vw,80px)",
          background: "#f7f7f8",
          borderTop: "1px solid rgba(10,10,15,0.06)",
        }}
      >
        <div
          className="footer-inner"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "22px",
                height: "22px",
                borderRadius: "6px",
                background: "#0a0a0f",
                display: "grid",
                placeItems: "center",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg,#5b3df5,#2563eb)",
                }}
              />
            </div>
            <span
              style={{
                fontWeight: 600,
                fontSize: "13px",
                color: "#0a0a0f",
              }}
            >
              STRaP
            </span>
          </div>
          <div
            style={{
              fontSize: "13px",
              color: "#6b6b78",
              textWrap: "balance",
            }}
          >
            Built in Software Product Management, ISB ·{" "}
            <span style={{ color: "#0a0a0f", fontWeight: 500 }}>Team STRaP</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
