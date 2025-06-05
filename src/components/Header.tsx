
// import React from 'react';
// import { motion } from 'framer-motion';
// import { Moon, Star, Sparkles } from 'lucide-react';

// const Header = () => {
//   return (
//     <motion.header 
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className="relative z-20 bg-white/10 backdrop-blur-md border-b border-white/20"
//     >
//       <div className="container mx-auto px-4 py-6">
//         <div className="flex items-center justify-between">
//           <motion.div 
//             className="flex items-center gap-3"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             <motion.div
//               animate={{ rotate: 360 }}
//               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//             >
//               <Moon className="text-yellow-300" size={32} />
//             </motion.div>
//             <h1 className="text-2xl font-bold text-white bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
//               Dreamy Tales
//             </h1>
//           </motion.div>
          
//           <nav className="hidden md:flex items-center gap-6">
//             <motion.a 
//               href="#home"
//               className="text-purple-200 hover:text-white transition-colors"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Home
//             </motion.a>
//             <motion.a 
//               href="#stories"
//               className="text-purple-200 hover:text-white transition-colors"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Stories
//             </motion.a>
//             <motion.a 
//               href="#about"
//               className="text-purple-200 hover:text-white transition-colors"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               About
//             </motion.a>
//           </nav>
          
//           <motion.div 
//             className="flex items-center gap-2"
//             animate={{ y: [-5, 5, -5] }}
//             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//           >
//             <Star className="text-yellow-300" size={16} />
//             <Sparkles className="text-pink-300" size={16} />
//           </motion.div>
//         </div>
//       </div>
//     </motion.header>
//   );
// };

// export default Header;


import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Star, Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-20 bg-white/10 backdrop-blur-md border-b border-white/20"
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Moon className="text-yellow-300" size={32} />
            </motion.div>
            <h1 className="text-2xl font-bold text-white bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Dreamy Tales
            </h1>
          </motion.div>
          
          <nav className="hidden md:flex items-center gap-6">
            <motion.a 
              href="#home"
              className="text-purple-200 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Home
            </motion.a>
            <motion.a 
              href="#stories"
              className="text-purple-200 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Stories
            </motion.a>
            <motion.a 
              href="#features"  // 👈 scrolls to FeaturesSection
              className="text-purple-200 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              About
            </motion.a>
          </nav>
          
          <motion.div 
            className="flex items-center gap-2"
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Star className="text-yellow-300" size={16} />
            <Sparkles className="text-pink-300" size={16} />
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
