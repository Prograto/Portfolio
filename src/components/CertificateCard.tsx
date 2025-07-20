import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, Star } from 'lucide-react';

interface Certificate {
  name: string;
  issuer: string;
  year?: string;
  level?: string;
  description?: string;
  link?: string;
  category: 'technical' | 'academic' | 'leadership' | 'achievement';
}

interface CertificateCardProps {
  certificate: Certificate;
  index: number;
}

const categoryColors = {
  technical: { bg: 'from-cyan-500/20 to-blue-500/20', border: 'border-cyan-500/30', text: 'text-cyan-300', icon: 'text-cyan-400' },
  academic: { bg: 'from-violet-500/20 to-purple-500/20', border: 'border-violet-500/30', text: 'text-violet-300', icon: 'text-violet-400' },
  leadership: { bg: 'from-yellow-500/20 to-orange-500/20', border: 'border-yellow-500/30', text: 'text-yellow-300', icon: 'text-yellow-400' },
  achievement: { bg: 'from-green-500/20 to-emerald-500/20', border: 'border-green-500/30', text: 'text-green-300', icon: 'text-green-400' }
};

export const CertificateCard: React.FC<CertificateCardProps> = ({ certificate, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const colors = categoryColors[certificate.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.03,
        rotateY: 5,
        z: 50
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <motion.div
        className={`relative bg-gradient-to-br ${colors.bg} backdrop-blur-sm border ${colors.border} rounded-xl p-6 h-full overflow-hidden`}
        animate={{
          boxShadow: isHovered 
            ? `0 20px 40px rgba(0,0,0,0.3), 0 0 20px ${colors.border.includes('cyan') ? 'rgba(0,216,255,0.2)' : colors.border.includes('violet') ? 'rgba(138,46,255,0.2)' : colors.border.includes('yellow') ? 'rgba(255,200,87,0.2)' : 'rgba(34,197,94,0.2)'}`
            : '0 4px 6px rgba(0,0,0,0.1)'
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated background pattern */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            background: isHovered 
              ? `radial-gradient(circle at 50% 50%, ${colors.border.includes('cyan') ? '#00d8ff' : colors.border.includes('violet') ? '#8a2eff' : colors.border.includes('yellow') ? '#ffc857' : '#22c55e'} 0%, transparent 70%)`
              : 'transparent'
          }}
          transition={{ duration: 0.5 }}
        />

        <div className="relative z-10">
          {/* Header with icon and category */}
          <div className="flex items-start justify-between mb-4">
            <motion.div
              className={`w-12 h-12 bg-gradient-to-br ${colors.bg} rounded-full flex items-center justify-center border ${colors.border}`}
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{ duration: 0.8 }}
            >
              <Award className={`w-6 h-6 ${colors.icon}`} />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isHovered ? 1 : 0.7, scale: isHovered ? 1 : 0.9 }}
              className={`px-2 py-1 ${colors.bg} rounded-full text-xs ${colors.text} border ${colors.border} capitalize`}
            >
              {certificate.category}
            </motion.div>
          </div>

          {/* Certificate name */}
          <motion.h3 
            className={`text-lg font-bold text-white mb-2 group-hover:${colors.text} transition-colors`}
            animate={{ x: isHovered ? 5 : 0 }}
          >
            {certificate.name}
          </motion.h3>

          {/* Issuer */}
          <p className={`${colors.text} text-sm mb-3 font-medium`}>
            {certificate.issuer}
          </p>

          {/* Level and Year */}
          <div className="flex items-center gap-4 mb-3">
            {certificate.level && (
              <div className="flex items-center gap-1">
                <Star className={`w-4 h-4 ${colors.icon}`} />
                <span className="text-gray-300 text-sm">{certificate.level}</span>
              </div>
            )}
            {certificate.year && (
              <div className="flex items-center gap-1">
                <Calendar className={`w-4 h-4 ${colors.icon}`} />
                <span className="text-gray-300 text-sm">{certificate.year}</span>
              </div>
            )}
          </div>

          {/* Description */}
          {certificate.description && (
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              {certificate.description}
            </p>
          )}

          {/* Link */}
          {certificate.link && (
            <motion.a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r ${colors.bg} hover:opacity-80 ${colors.text} rounded-lg transition-all text-sm border ${colors.border}`}
            >
              <ExternalLink className="w-4 h-4" />
              View Certificate
            </motion.a>
          )}
        </div>

        {/* Floating particles */}
        <motion.div
          className={`absolute top-3 right-3 w-2 h-2 ${colors.icon.replace('text-', 'bg-')} rounded-full`}
          animate={{
            y: isHovered ? [-3, 3, -3] : [0],
            opacity: isHovered ? [0.5, 1, 0.5] : [0.3],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className={`absolute bottom-3 left-3 w-1 h-1 ${colors.icon.replace('text-', 'bg-')} rounded-full`}
          animate={{
            x: isHovered ? [-2, 2, -2] : [0],
            opacity: isHovered ? [0.4, 0.8, 0.4] : [0.2],
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
};