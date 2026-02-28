import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Letter() {
  const navigate = useNavigate();

  // Split the letter into meaningful paragraphs
  const paragraphs = [
    {
      emoji: "💫",
      text: "Nuvu naku parichayam ayyi eerojuki 52 days ayindhi... kani ee 52 rojullo nuvu naku chala dhaggara aypoyavu.. 🫠 Intha thakkuva time lo ne oka ammai ni cutie... 🤌 dheyyam.. 👻 ani nickname petti pilavadam first time.. ✨️"
    },
    {
      emoji: "🥺",
      text: "Kani nenu konni saarlu na limit ki minchi matladanu ane anukuntuna... 😔 kani konchem late ga realise avtha... 🥺 Ninnu hurt chesiunte nenu nijamga sorry.. 🙃 Nuvvu chala saarlu nanu kashminchinavu.. ee sari kuda alane vadilestav ani anukuntuna... kani eesari repeat avakunda chuskunta... 🥲 okavela nenu eepudina ekuva matladhtuna niku nachanidhi matlathuna ventane cheppu.. 🙃"
    },
    {
      emoji: "😅",
      text: "Oka vishayam chepana... aa 🤭 cute face ki antha kopam ela vasthundhi andi babu..? 😅 Normal gane nuvu chala cute ga untavu... 🤗 kani kopam lo inka entha cute ga untavo chudali anipisthundi... ✨️ Kani.. aa kopam ki karanam nenu ayithe naku baadha ga anipistundhi... 😓"
    },
    {
      emoji: "📸",
      text: "Eesari miku kopam vachinappudu nanu gurthupettukoni oka snap pettandi... aa cute face ni kopam lo chudali anni undhi... 😉 kani mundu nannu kshaminchandi.. 🤕 Inka chala cheppali anipisthundi... 💌 kani malli emaina tappu matladathanu emi ani konchem bayamesthundhi.. 🤐"
    },
    {
      emoji: "😊",
      text: "Sorry cute dheyyam ❤️👻"
    }
  ];

  // Same color theme
  const colors = {
    bgStart: "#2C1A4D",
    bgMid: "#4A2F6B",
    bgEnd: "#6B4E8F",
    accent: "#FFD1DC"
  };

  // Floating elements
  const floatingSymbols = ["✨", "🌟", "💫", "⭐", "☄️"];

  // Animation styles (same as Home)
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
    `;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-4 sm:p-6">
      
      {/* Animated Gradient Background - Same as Home */}
      <div 
        className="absolute inset-0 animate-gradient"
        style={{
          background: `linear-gradient(135deg, ${colors.bgStart}, ${colors.bgMid}, ${colors.bgEnd})`,
          backgroundSize: "300% 300%",
        }}
      />
      
      {/* Soft overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
      
      {/* Floating sparkles - Layer 1 (slow) - Same as Home */}
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

      {/* Floating sparkles - Layer 2 (fast) - Same as Home */}
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

      {/* Twinkling stars - Same as Home */}
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
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        
        {/* Header with Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.button
            whileHover={{ 
              x: -8,
              scale: 1.05
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
          >
            <motion.span
              animate={{ x: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ←
            </motion.span>
            <span>Back to Languages</span>
          </motion.button>
        </motion.div>

        {/* Letter Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/15 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 animate-pulse-glow"
        >
          {/* Letter Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mb-10"
          >
            
            <motion.h2 
              className="text-3xl text-white font-light tracking-wide"
              animate={{ 
                textShadow: [
                  "0 0 10px rgba(255,209,220,0.3)",
                  "0 0 20px rgba(255,209,220,0.6)",
                  "0 0 10px rgba(255,209,220,0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              My Apology Letter
            </motion.h2>
            <motion.div 
              className="w-20 h-px bg-white/30 mx-auto mt-4"
              animate={{ 
                width: ["20px", "80px", "20px"],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>

          {/* Letter Content */}
          <div className="space-y-8">
            {paragraphs.map((para, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: 0.6 + index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  x: 5,
                  transition: { type: "spring", stiffness: 400 }
                }}
                className="flex items-start gap-4 group"
              >
                <motion.span 
                  className="text-3xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 8, -8, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    delay: index * 0.3,
                    repeat: Infinity 
                  }}
                  whileHover={{ scale: 1.3 }}
                >
                  {para.emoji}
                </motion.span>
                <motion.p 
                  className="text-white/90 text-base md:text-lg leading-relaxed flex-1"
                  animate={{ 
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    duration: 4, 
                    delay: index * 0.2,
                    repeat: Infinity 
                  }}
                >
                  {para.text}
                </motion.p>
              </motion.div>
            ))}
          </div>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-12 text-right"
          >
            
          </motion.div>

          {/* Decorative line */}
          <motion.div 
            className="mt-8 flex justify-center gap-3"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.span 
                key={i} 
                className="text-2xl text-white/40"
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 15, -15, 0]
                }}
                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
              >
                ✦
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Next Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="flex justify-center mt-8"
        >
          <motion.button
            whileHover={{ 
              scale: 1.08,
              boxShadow: "0 0 50px rgba(255,209,220,0.8)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/forgive")}
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
              Will you forgive me?
              <motion.span
                animate={{ 
                  x: [0, 5, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block"
              >
                🥺
              </motion.span>
            </span>
          </motion.button>
        </motion.div>

        {/* Ghost decoration - Same as Home */}
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

      </div>
    </div>
  );
}

export default Letter;