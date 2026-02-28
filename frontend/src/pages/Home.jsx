import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const navigate = useNavigate();

  const fullText = "Apology letter to cutest girl (cutie 😊 and dheyam 👻)";

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const sorryLanguages = [
    // English
    { text: "Sorry", emoji: "🥺" },
    // Telugu
    { text: "క్షమించండి", emoji: "👉👈" },
    // Hindi
    { text: "क्षमा करें", emoji: "🙈" },
    // South Indian Languages
    { text: "மன்னிக்கவும்", emoji: "🌸" },     // Tamil
    { text: "ಕ್ಷಮಿಸಿ", emoji: "🐣" },          // Kannada
    { text: "ക്ഷമിക്കണം", emoji: "🐥" },        // Malayalam
    { text: "ಕ್ಷಮಿಸು", emoji: "🎀" },           // Tulu
    // North Indian Languages
    { text: "ਮਾਫ ਕਰਨਾ", emoji: "🫣" },         // Punjabi
    { text: "माफ करा", emoji: "🍓" },          // Marathi
    { text: "માફ કરજો", emoji: "🐰" },         // Gujarati
    { text: "ক্ষমা করবেন", emoji: "🌷" },      // Bengali
    { text: "ମାଫ କରନ୍ତୁ", emoji: "🧸" },       // Odia
    { text: "মাফ কৰিব", emoji: "🥹" },          // Assamese
    // Other Indian / Regional
    { text: "माफ करिहा", emoji: "🌼" },        // Bhojpuri
    { text: "कृपा करके माफ करें", emoji: "🐻" }, // Urdu
    // International Languages
    { text: "Lo siento", emoji: "💮" },        // Spanish
    { text: "Désolé", emoji: "🐾" },           // French
    { text: "Entschuldigung", emoji: "🍬" },   // German
    { text: "Mi dispiace", emoji: "🌺" },      // Italian
    { text: "Sumimasen", emoji: "🫶" },        // Japanese
    { text: "죄송합니다", emoji: "✨" },        // Korean
    { text: "对不起", emoji: "🌟" },            // Chinese
    { text: "Извини", emoji: "🫶" }            // Russian
  ];

  // Beautiful color theme - Rose Gold & Blush
  const colors = {
    bgStart: "#2C1A4D", // Deep purple
    bgMid: "#4A2F6B",   // Royal purple
    bgEnd: "#6B4E8F",   // Lavender purple
    accent: "#FFD1DC",  // Blush pink
    text: "#FFF0F5",    // Lavender blush
    cardBg: "rgba(255, 255, 255, 0.15)"
  };

  // Floating elements
  const floatingSymbols = ["✨", "🌟", "💫", "⭐", "☄️"];

  // Animation styles
  useEffect(() => {
    const style = document.createElement('style');
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
      @keyframes float-slow {
        0%, 100% { transform: translateY(0px) translateX(0px); }
        25% { transform: translateY(-15px) translateX(10px); }
        50% { transform: translateY(-25px) translateX(-5px); }
        75% { transform: translateY(-10px) translateX(15px); }
      }
      @keyframes twinkle {
        0%, 100% { opacity: 0.2; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.3); }
      }
      @keyframes pulse-glow {
        0%, 100% { box-shadow: 0 0 20px rgba(255,209,220,0.3); }
        50% { box-shadow: 0 0 40px rgba(255,209,220,0.6); }
      }
      @keyframes rotate-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      .animate-gradient {
        animation: gradientFlow 12s ease infinite;
        background-size: 300% 300%;
      }
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      .animate-float-slow {
        animation: float-slow 10s ease-in-out infinite;
      }
      .animate-twinkle {
        animation: twinkle 3s ease-in-out infinite;
      }
      .animate-pulse-glow {
        animation: pulse-glow 3s ease-in-out infinite;
      }
      .animate-rotate {
        animation: rotate-slow 20s linear infinite;
      }
    `;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-4 sm:p-6">
      
      {/* Animated Gradient Background */}
      <div 
        className="absolute inset-0 animate-gradient"
        style={{
          background: `linear-gradient(135deg, ${colors.bgStart}, ${colors.bgMid}, ${colors.bgEnd})`,
          backgroundSize: "300% 300%",
        }}
      />
      
      {/* Soft overlay with blur */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
      
      {/* Floating sparkles - Layer 1 (slow) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`slow-${i}`}
            className="absolute text-3xl"
            style={{ color: colors.accent }}
            initial={{ 
              y: Math.random() * 100 + "%", 
              x: Math.random() * 100 + "%",
              opacity: 0.1
            }}
            animate={{ 
              y: [null, "-30%", "-60%"],
              x: [null, "5%", "-5%"],
              rotate: [0, 360],
              opacity: [0.1, 0.4, 0.1]
            }}
            transition={{
              duration: 25 + Math.random() * 15,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          >
            {floatingSymbols[i % floatingSymbols.length]}
          </motion.div>
        ))}
      </div>

      {/* Floating sparkles - Layer 2 (fast) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`fast-${i}`}
            className="absolute text-2xl"
            style={{ color: "#FFE4E9" }}
            initial={{ 
              y: Math.random() * 100 + "%", 
              x: Math.random() * 100 + "%",
              opacity: 0.2
            }}
            animate={{ 
              y: [null, "-20%", "-40%"],
              x: [null, "3%", "-3%"],
              rotate: [0, -360],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear"
            }}
          >
            {floatingSymbols[(i + 5) % floatingSymbols.length]}
          </motion.div>
        ))}
      </div>

      {/* Twinkling stars - Static but twinkling */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`twinkle-${i}`}
            className="absolute text-sm"
            style={{
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              color: "#FFFFFF"
            }}
            animate={{ 
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          >
            ✦
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-white"
            style={{ textShadow: "0 0 30px rgba(255,209,220,0.5)" }}
          >
            {displayedText}
            <motion.span 
              animate={{ 
                opacity: [1, 0, 1],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="ml-2 inline-block"
            >✨</motion.span>
          </motion.h1>
          
          
        </motion.div>

        {/* Languages Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mb-12"
        >
          <motion.h2
            animate={{ 
              opacity: [0.7, 1, 0.7],
              scale: [1, 1.02, 1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-center text-white/90 text-xl mb-8 font-light tracking-wide"
          >
            Saying Sorry in 22 Languages 💫
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 max-w-6xl mx-auto">
            {sorryLanguages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  delay: 1.5 + index * 0.02,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "rgba(255,255,255,0.25)",
                  y: -8,
                  transition: { type: "spring", stiffness: 400 }
                }}
                whileTap={{ scale: 0.95 }}
                className="group p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 cursor-default"
              >
                <motion.p 
                  className="text-white/90 text-xs sm:text-sm text-center font-medium"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, delay: index * 0.1, repeat: Infinity }}
                >
                  {item.text}
                </motion.p>
                <motion.p 
                  className="text-center text-2xl mt-2"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    delay: index * 0.05,
                    repeat: Infinity 
                  }}
                >
                  {item.emoji}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Next Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.08,
              boxShadow: "0 0 50px rgba(255,209,220,0.8)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/letter")}
            className="relative px-10 py-4 bg-white/20 backdrop-blur-md text-white rounded-full font-semibold border-2 border-white/40 overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-400/30 to-purple-400/30"
              animate={{
                x: ["-100%", "100%"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <span className="relative z-10 flex items-center gap-3 text-lg">
              Read Apology Letter
              <motion.span
                animate={{ 
                  x: [0, 8, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block"
              >
                💌
              </motion.span>
            </span>
          </motion.button>
        </motion.div>

        {/* Decorative Ghost */}
        <motion.div 
          className="fixed bottom-5 right-5 text-5xl opacity-40"
          animate={{ 
            y: [0, -20, -15, -25, 0],
            x: [0, 5, -5, 5, 0],
            rotate: [0, 10, -10, 15, -15, 0],
            scale: [1, 1.1, 0.9, 1.1, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          👻
        </motion.div>

        {/* Floating decorations */}
        <motion.div 
          className="fixed top-10 left-10 text-3xl opacity-30 hidden md:block animate-rotate"
        >
          ✦
        </motion.div>

        <motion.div 
          className="fixed top-20 right-20 text-4xl opacity-30 hidden md:block"
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          ✧
        </motion.div>

      </div>
    </div>
  );
}

export default Home;