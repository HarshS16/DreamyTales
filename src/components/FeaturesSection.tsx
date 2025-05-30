
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Play, Download } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    { 
      icon: Sparkles, 
      title: "AI-Generated Stories", 
      desc: "Unique tales created just for you every time", 
      color: "from-pink-500 to-purple-600" 
    },
    { 
      icon: Play, 
      title: "Soothing Audio", 
      desc: "Stories read aloud like grandma's voice", 
      color: "from-blue-500 to-green-600" 
    },
    { 
      icon: Download, 
      title: "Save & Share", 
      desc: "Keep your favorite stories forever", 
      color: "from-yellow-500 to-orange-600" 
    }
  ];

  return (
    <motion.div 
      className="mt-16 text-center"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <h3 className="text-3xl font-bold text-white mb-8">✨ Magical Features ✨</h3>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <motion.div 
            key={feature.title}
            className="text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
            whileHover={{ y: -10 }}
          >
            <motion.div 
              className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <feature.icon className="text-white" size={32} />
            </motion.div>
            <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
            <p className="text-purple-200">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
