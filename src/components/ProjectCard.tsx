import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Play, Code2, Zap, Database } from 'lucide-react';

//images
import swarnandhrianImg from '../assets/swarnandhrian.png';
import facialattendanceImg from '../assets/facialattendance.png';
import bustrackingImg from '../assets/bustrackingsystem.png';
import smartcheckoutImg from '../assets/smartcheckout.png';

interface Project {
  name: string;
  tagline: string;
  tech: string[];
  live?: string;
  github?: string;
  media?: string;
  image?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const projectImages = {
  "Swarnandhrian Training Platform": swarnandhrianImg,
  "Facial Attendance System": facialattendanceImg,
  "IoT Live Bus Tracking": bustrackingImg,
  "Smart Checkout System": smartcheckoutImg
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const projectImage = projectImages[project.name as keyof typeof projectImages];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative h-[420px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        whileHover={{ 
          rotateY: 5,
          rotateX: 5,
          scale: 1.02,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full overflow-hidden"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          animate={{
            background: isHovered 
              ? 'linear-gradient(45deg, rgba(0,216,255,0.3), rgba(138,46,255,0.3), rgba(0,216,255,0.3))'
              : 'transparent'
          }}
          transition={{ duration: 0.3 }}
        />
        
        <div className="relative z-10 h-full flex flex-col">
          {/* Project Image with Animation */}
          <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 rounded-xl mb-4 overflow-hidden relative">
            <AnimatePresence>
              {projectImage && (
                <motion.img
                  src={projectImage}
                  alt={project.name}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ 
                    scale: isHovered ? 1.1 : 1,
                    opacity: imageLoaded ? 1 : 0
                  }}
                  transition={{ duration: 0.6 }}
                  onLoad={() => setImageLoaded(true)}
                />
              )}
            </AnimatePresence>
            
            {/* Overlay with animated elements */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"
              animate={{ opacity: isHovered ? 1 : 0.7 }}
            />
            
            {/* Floating tech icons */}
            <motion.div
              className="absolute top-4 right-4 flex gap-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -10 }}
              transition={{ delay: 0.2 }}
            >
              {project.tech.includes('Python') && <Code2 className="w-5 h-5 text-cyan-400" />}
              {project.tech.includes('IoT') && <Zap className="w-5 h-5 text-yellow-400" />}
              {(project.tech.includes('MongoDB') || project.tech.includes('Database')) && <Database className="w-5 h-5 text-green-400" />}
            </motion.div>

            {/* Play button overlay */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.8
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ rotate: isHovered ? 360 : 0 }}
                transition={{ duration: 2, ease: "linear" }}
                className="w-16 h-16 border-2 border-cyan-400/50 rounded-full flex items-center justify-center bg-gray-900/50 backdrop-blur-sm"
              >
                <Play className="w-8 h-8 text-cyan-400" />
              </motion.div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col">
            <motion.h3 
              className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors"
              animate={{ x: isHovered ? 5 : 0 }}
            >
              {project.name}
            </motion.h3>
            
            <p className="text-gray-300 text-sm mb-4 leading-relaxed flex-1">
              {project.tagline}
            </p>

            {/* Tech Stack with staggered animation */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, techIndex) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: techIndex * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30 cursor-pointer"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Action Buttons with enhanced animations */}
            <div className="flex gap-3 mt-auto">
              {project.live && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 hover:from-cyan-500/30 hover:to-cyan-600/30 text-cyan-300 rounded-lg transition-all text-sm border border-cyan-500/30"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </motion.a>
              )}
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-violet-500/20 to-violet-600/20 hover:from-violet-500/30 hover:to-violet-600/30 text-violet-300 rounded-lg transition-all text-sm border border-violet-500/30"
                >
                  <Github className="w-4 h-4" />
                  Code
                </motion.a>
              )}
            </div>
          </div>
        </div>

        {/* Enhanced floating particles */}
        <motion.div
          className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full"
          animate={{
            y: isHovered ? [-5, 5, -5] : [0],
            opacity: isHovered ? [0.5, 1, 0.5] : [0.3],
            scale: isHovered ? [1, 1.2, 1] : [1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-4 left-4 w-1 h-1 bg-violet-400 rounded-full"
          animate={{
            y: isHovered ? [5, -5, 5] : [0],
            opacity: isHovered ? [0.5, 1, 0.5] : [0.3],
            scale: isHovered ? [1, 1.5, 1] : [1],
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-2 w-1.5 h-1.5 bg-yellow-400 rounded-full"
          animate={{
            x: isHovered ? [-3, 3, -3] : [0],
            opacity: isHovered ? [0.4, 0.8, 0.4] : [0.2],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
};