import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Forgive() {
  const [accepted, setAccepted] = useState(false);
  const [noPosition, setNoPosition] = useState({ top: 50, left: 70 });

  // Same color theme as Home and Letter pages
  const colors = {
    bgStart: "#2C1A4D", // Deep purple
    bgMid: "#4A2F6B", // Royal purple
    bgEnd: "#6B4E8F", // Lavender purple
    accent: "#FFD1DC", // Blush pink
  };

  // Animation styles
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes gradientFlow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(5deg); }
      }
      @keyframes twinkle {
        0%, 100% { opacity: 0.2; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.3); }
      }
      @keyframes pulse-glow {
        0%, 100% { box-shadow: 0 0 20px rgba(255,209,220,0.3); }
        50% { box-shadow: 0 0 40px rgba(255,209,220,0.6); }
      }
      .animate-gradient {
        animation: gradientFlow 12s ease infinite;
        background-size: 300% 300%;
      }
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      .animate-twinkle {
        animation: twinkle 3s ease-in-out infinite;
      }
      .animate-pulse-glow {
        animation: pulse-glow 3s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  const handleAccept = async () => {
    const formData = new FormData();
    formData.append("form-name", "forgive-click");
    formData.append("clickedAt", new Date().toISOString());
    formData.append("userAgent", navigator.userAgent);

    await fetch("/", {
      method: "POST",
      body: formData,
    });

    setAccepted(true);
  };

  const moveNoButton = () => {
    // Move anywhere on the screen (5% to 85% to keep it visible)
    // But ensure it doesn't overlap with Yes button area (center area)
    let newTop, newLeft;
    do {
      newTop = 5 + Math.random() * 80;
      newLeft = 5 + Math.random() * 80;
    } while (
      // Avoid center area where Yes button is (approx 40-60% range)
      newTop > 40 &&
      newTop < 60 &&
      newLeft > 40 &&
      newLeft < 60
    );

    setNoPosition({ top: newTop, left: newLeft });
  };

  // Floating symbols
  const floatingSymbols = ["✨", "🌟", "💫", "⭐", "☄️"];

  // Celebration emojis for background
  const celebrationEmojis = [
    "🎉",
    "🎊",
    "✨",

  ];

  return (
    <>
      {/* Main content */}
      <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4 sm:p-6">
        <form name="forgive-click" method="POST" data-netlify="true" hidden>
          <input type="hidden" name="form-name" value="forgive-click" />
          <input type="text" name="clickedAt" />
          <input type="text" name="userAgent" />
        </form>
        {/* Animated Gradient Background */}
        <div
          className="absolute inset-0 animate-gradient"
          style={{
            background: `linear-gradient(135deg, ${colors.bgStart}, ${colors.bgMid}, ${colors.bgEnd})`,
            backgroundSize: "300% 300%",
          }}
        />

        {/* Soft overlay */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />

        {/* Floating sparkles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`slow-${i}`}
              className="absolute text-3xl"
              style={{ color: colors.accent }}
              initial={{
                y: Math.random() * 100 + "%",
                x: Math.random() * 100 + "%",
                opacity: 0.1,
              }}
              animate={{
                y: [null, "-30%", "-60%"],
                x: [null, "5%", "-5%"],
                rotate: [0, 360],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 25 + Math.random() * 15,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear",
              }}
            >
              {floatingSymbols[i % floatingSymbols.length]}
            </motion.div>
          ))}
        </div>

        {/* Twinkling stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={`twinkle-${i}`}
              className="absolute text-sm"
              style={{
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                color: "#FFFFFF",
              }}
              animate={{
                opacity: [0.1, 0.8, 0.1],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              ✦
            </motion.div>
          ))}
        </div>

        {/* Main Content (without the No button) */}
        <div className="relative z-10 w-full max-w-2xl mx-auto">
          {!accepted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
              }}
              className="bg-white/15 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 text-center border border-white/20 animate-pulse-glow"
            >
              {/* Icon */}
              {/* Icon */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-7xl mb-6"
              >
                💌
              </motion.div>
           
              {/* Icon */}
              <motion.h1
                className="text-3xl md:text-5xl font-bold mb-10 text-white leading-relaxed"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(255,209,220,0.3)",
                    "0 0 20px rgba(255,209,220,0.6)",
                    "0 0 10px rgba(255,209,220,0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                nuvu na sorry accept chesunava..? 🥺
              </motion.h1>

              <div className="flex justify-center gap-12 relative min-h-[250px] items-center">
                {/* YES Button */}
                <motion.button
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 0 30px rgba(255,255,255,0.4)",
                    backgroundColor: "rgba(255,255,255,0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAccept}
                  className="px-10 py-5 bg-white/20 backdrop-blur-md text-white rounded-2xl text-2xl font-bold shadow-2xl border-2 border-white/40 transition-all hover:border-white/60"
                >
                  <span className="flex items-center gap-3">
                    Accept
                    <motion.span
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="inline-block"
                    >
                      ✨
                    </motion.span>
                  </span>
                </motion.button>
              </div>

              {/* Hint text */}
              <motion.p
                className="text-white/50 text-sm mt-12"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                (No button keeps running away! 🏃‍♂️)
              </motion.p>

              {/* Decorative line */}
              <motion.div
                className="mt-6 flex justify-center gap-3"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="text-2xl text-white/40"
                    animate={{
                      scale: [1, 1.3, 1],
                      rotate: [0, 15, -15, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity,
                    }}
                  >
                    ✦
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                duration: 0.8,
              }}
              className="bg-white/15 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 text-center border border-white/20"
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="text-8xl mb-6"
              >
                🎉
              </motion.div>

              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-4 text-white"
                animate={{
                  scale: [1, 1.05, 1],
                  textShadow: [
                    "0 0 10px rgba(255,209,220,0.3)",
                    "0 0 30px rgba(255,209,220,0.8)",
                    "0 0 10px rgba(255,209,220,0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Yaaayyy! 🥳
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-white/90 mb-6"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Thank you.. Sahithi... na sorry accept chesinandhuku.. ✨
              </motion.p>

              {/* Floating celebration emojis inside card */}
              <div className="flex justify-center gap-4 flex-wrap mt-8">
                {["🎉", "✨", "🎀", "🧸", "🌟", "💫", "🦋"].map((emoji, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -25, 0],
                      rotate: [0, 15, -15, 0],
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 2.5 + i * 0.2,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: "easeInOut",
                    }}
                    className="text-4xl md:text-5xl"
                  >
                    {emoji}
                  </motion.div>
                ))}
              </div>

              {/* Decorative line */}
              <motion.div
                className="mt-10 flex justify-center gap-3"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {[...Array(7)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="text-2xl text-white/60"
                    animate={{
                      scale: [1, 1.5, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 3,
                      delay: i * 0.1,
                      repeat: Infinity,
                    }}
                  >
                    ✦
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* Ghost decoration */}
          <motion.div
            className="fixed bottom-5 right-5 text-5xl opacity-40"
            animate={{
              y: [0, -20, -15, -25, 0],
              x: [0, 5, -5, 5, 0],
              rotate: [0, 10, -10, 15, -15, 0],
              scale: [1, 1.1, 0.9, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            👻
          </motion.div>

          {/* Floating decorations */}
          <motion.div
            className="fixed top-10 left-10 text-3xl opacity-30 hidden md:block"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            ✦
          </motion.div>

          <motion.div
            className="fixed top-20 right-20 text-4xl opacity-30 hidden md:block"
            animate={{
              rotate: [360, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          >
            ✧
          </motion.div>
        </div>
      </div>

      {/* NO Button - Fixed to viewport, moves anywhere on the screen */}
      {!accepted && (
        <motion.button
          onMouseEnter={moveNoButton}
          onClick={moveNoButton}
          animate={{
            top: `${noPosition.top}vh`,
            left: `${noPosition.left}vw`,
          }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 15,
          }}
          className="fixed px-8 py-4 bg-white/15 backdrop-blur-md text-white/90 rounded-xl text-xl font-semibold shadow-2xl border-2 border-white/30 cursor-pointer z-[100] hover:bg-white/25"
          style={{
            transform: "translate(-50%, -50%)",
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(255,255,255,0.3)",
          }}
        >
          <span className="flex items-center gap-2">
            No 😜
            <motion.span
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              👻
            </motion.span>
          </span>
        </motion.button>
      )}

      {/* Celebration background when accepted */}
      {accepted && (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
         
        </div>
      )}
    </>
  );
}

export default Forgive;
