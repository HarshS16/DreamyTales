
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Moon, Star, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="relative mt-20 bg-white/5 backdrop-blur-sm border-t border-white/10"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div 
            className="text-center md:text-left"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Moon className="text-yellow-300" size={32} />
              </motion.div>
              <h3 className="text-2xl font-bold text-white bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                Dreamy Tales
              </h3>
            </div>
            <p className="text-purple-200 text-sm leading-relaxed">
              Creating magical bedtime stories with AI to bring sweet dreams to children everywhere.
            </p>
          </motion.div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center justify-center gap-2">
              <Sparkles size={16} className="text-pink-300" />
              Quick Links
            </h4>
            <div className="space-y-2">
              {['Home', 'Create Story', 'About Us', 'Help'].map((link, index) => (
                <motion.a
                  key={link}
                  href="#"
                  className="block text-purple-200 hover:text-white transition-colors text-sm"
                  whileHover={{ x: 5 }}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Magic Stats */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center justify-center gap-2">
              <Star size={16} className="text-yellow-300" />
              Magic Stats
            </h4>
            <div className="space-y-3">
              <motion.div 
                className="text-purple-200"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <div className="text-2xl font-bold text-pink-300">1000+</div>
                <div className="text-xs">Stories Created</div>
              </motion.div>
              <motion.div 
                className="text-purple-200"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7, type: "spring" }}
              >
                <div className="text-2xl font-bold text-yellow-300">500+</div>
                <div className="text-xs">Happy Children</div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-white/10 pt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-purple-200 text-sm flex items-center justify-center gap-2">
            Made with 
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart size={16} className="text-red-400" />
            </motion.div>
            by Harsh Srivastava 
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
