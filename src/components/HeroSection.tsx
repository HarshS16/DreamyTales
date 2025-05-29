
import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Star, BookOpen, Sparkles, Heart } from 'lucide-react';

const HeroSection = () => {
  const floatingStars = Array.from({ length: 6 }, (_, i) => i);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Floating Stars Animation */}
      {floatingStars.map((star) => (
        <motion.div
          key={star}
          className="absolute text-yellow-200"
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: Math.random() * 400,
            opacity: 0 
          }}
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        >
          <Star size={12 + Math.random() * 8} />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <motion.div
            animate={{ 
              rotate: [0, -10, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Moon className="text-yellow-300" size={64} />
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-7xl font-bold text-white bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Dreamy Tales
          </motion.h1>
          
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          >
            <BookOpen className="text-yellow-300" size={64} />
          </motion.div>
        </motion.div>

        <motion.p 
          className="text-xl md:text-2xl text-purple-200 max-w-3xl mx-auto mb-8 leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Where AI weaves magical bedtime stories just for you! Let our enchanting tales carry you to dreamland with soothing narration that feels like a warm hug from grandma.
        </motion.p>

        <motion.div 
          className="flex items-center justify-center gap-2 text-pink-300"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart size={20} />
          </motion.div>
          <span className="text-lg font-medium">Sweet dreams await!</span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            <Sparkles size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
