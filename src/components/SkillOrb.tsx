import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface SkillOrbProps {
  skill: string;
  category: string;
  index: number;
  categoryColor: string;
}

export const SkillOrb: React.FC<SkillOrbProps> = ({ skill, category, index, categoryColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.05,
        type: "spring",
        stiffness: 200
      }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.1,
        rotateY: 15,
        rotateX: 15,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group cursor-pointer"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <motion.div
        className={`relative px-4 py-2 rounded-full border backdrop-blur-sm transition-all duration-300`}
        style={{
          background: isHovered 
            ? `linear-gradient(135deg, ${categoryColor}20, ${categoryColor}10)`
            : `${categoryColor}10`,
          borderColor: isHovered ? `${categoryColor}60` : `${categoryColor}30`,
        }}
        animate={{
          boxShadow: isHovered 
            ? `0 0 20px ${categoryColor}40`
            : `0 0 0px ${categoryColor}00`,
        }}
      >
        <span 
          className="text-sm font-medium transition-colors duration-300"
          style={{ 
            color: isHovered ? categoryColor : '#e5e7eb'
          }}
        >
          {skill}
        </span>

        {/* Floating particles */}
        <motion.div
          className="absolute -top-1 -right-1 w-1 h-1 rounded-full"
          style={{ backgroundColor: categoryColor }}
          animate={{
            y: isHovered ? [-3, 3, -3] : [0],
            opacity: isHovered ? [0.5, 1, 0.5] : [0.3],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          y: isHovered ? -40 : -30,
        }}
        transition={{ duration: 0.2 }}
        className="absolute left-1/2 transform -translate-x-1/2 bg-gray-900/90 text-white px-2 py-1 rounded text-xs whitespace-nowrap pointer-events-none z-10"
      >
        {category}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/90" />
      </motion.div>
    </motion.div>
  );
};