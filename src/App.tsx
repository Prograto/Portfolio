import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink,
  Calendar,
  Award,
  Briefcase,
  GraduationCap,
  Code,
  Heart,
  Send,
  Star,
  Trophy,
  Target
} from 'lucide-react';
import myImg from './assets/myimg.jpeg';

// Components
import { CustomCursor } from './components/CustomCursor';
import { BackgroundVideo } from './components/BackgroundVideo';
import { InteractiveBackground } from './components/InteractiveBackground';
import { TypedText } from './components/TypedText';
import { ProjectCard } from './components/ProjectCard';
import { SkillOrb } from './components/SkillOrb';
import { ScrollProgress } from './components/ScrollProgress';
import { Navigation } from './components/Navigation';
import { CertificateCard } from './components/CertificateCard';

// Data
import { portfolioData, skillColors } from './data/portfolio';
import { certificates } from './data/certificates';

function App() {
  const [cursorState, setCursorState] = useState({ isHovering: false, hoverText: '' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Hide default cursor
  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  const handleCursorEnter = (text: string) => {
    setCursorState({ isHovering: true, hoverText: text });
  };

  const handleCursorLeave = () => {
    setCursorState({ isHovering: false, hoverText: '' });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:${portfolioData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white overflow-x-hidden">
      <CustomCursor {...cursorState} />
      <BackgroundVideo />
      <InteractiveBackground />
      <ScrollProgress />
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative px-4 pt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center md:justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-cyan-400 p-1"
              >
                <div className="w-full h-full rounded-full bg-gray-900" />
              </motion.div>
              
              {/* Pulsing outer ring */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-400/30 to-violet-500/30 blur-sm"
              />
              
              <img
                src={myImg}
                alt="Chandra Sekhar Arasavalli"
                className="relative w-80 h-80 rounded-full object-cover border-4 border-gray-900 shadow-2xl"
              />
              
              {/* Floating tech icons around profile */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity }
                }}
                className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <Code className="w-6 h-6 text-gray-900" />
              </motion.div>
              
              <motion.div
                animate={{ 
                  rotate: -360,
                  y: [0, -10, 0]
                }}
                transition={{ 
                  rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                  y: { duration: 3, repeat: Infinity }
                }}
                className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-violet-400 to-violet-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <Target className="w-5 h-5 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                Chandra Sekhar
              </span>
              <br />
              <span className="text-white">Arasavalli</span>
            </motion.h1>

            <div className="text-xl md:text-2xl text-gray-300 mb-6 h-16">
              <TypedText texts={portfolioData.headline_titles} />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl"
            >
              {portfolioData.summary}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start mb-8"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => handleCursorEnter('Hire Me')}
                onMouseLeave={handleCursorLeave}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
              >
                Hire Me
              </motion.a>
              
              <motion.a
                href={portfolioData.resume_pdf}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => handleCursorEnter('Download Resume')}
                onMouseLeave={handleCursorLeave}
                className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400/10 transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Resume
              </motion.a>
              
              <motion.a
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => handleCursorEnter('View GitHub')}
                onMouseLeave={handleCursorLeave}
                className="px-8 py-3 border border-violet-400 text-violet-400 rounded-full font-semibold hover:bg-violet-400/10 transition-all flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                GitHub
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex gap-4 justify-center md:justify-start"
            >
              <motion.a
                href={portfolioData.social.linkedin_primary}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                onMouseEnter={() => handleCursorEnter('LinkedIn')}
                onMouseLeave={handleCursorLeave}
                className="w-12 h-12 bg-gray-800/50 rounded-full flex items-center justify-center hover:bg-blue-500/20 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-blue-400" />
              </motion.a>
              
              <motion.a
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                onMouseEnter={() => handleCursorEnter('GitHub')}
                onMouseLeave={handleCursorLeave}
                className="w-12 h-12 bg-gray-800/50 rounded-full flex items-center justify-center hover:bg-gray-500/20 transition-colors"
              >
                <Github className="w-5 h-5 text-gray-400" />
              </motion.a>
              
              <motion.a
                href={`mailto:${portfolioData.email}`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                onMouseEnter={() => handleCursorEnter('Email')}
                onMouseLeave={handleCursorLeave}
                className="w-12 h-12 bg-gray-800/50 rounded-full flex items-center justify-center hover:bg-red-500/20 transition-colors"
              >
                <Mail className="w-5 h-5 text-red-400" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto mb-8" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -8, boxShadow: "0 8px 32px 0 rgba(0,255,255,0.10)" }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 relative transition-all duration-100"
          >
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Based in {portfolioData.location}</h3>
                <p className="text-gray-300 leading-relaxed">
                  I build practical, affordable tech that solves real problems for education, logistics & automation. 
                  Currently pursuing B.Tech CSE while gaining hands-on experience through internships and startup collaborations.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-cyan-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">Problem Solver</h4>
                <p className="text-gray-400 text-sm">Converting complex challenges into elegant, cost-effective solutions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-violet-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-violet-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">Full-Stack Builder</h4>
                <p className="text-gray-400 text-sm">From IoT hardware to AI models to scalable web platforms</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-yellow-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">Open to Opportunities</h4>
                <p className="text-gray-400 text-sm">Internships, freelance projects, and startup collaborations</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto mb-8" />
          </motion.div>

          <div className="space-y-8">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -8, boxShadow: "0 8px 32px 0 rgba(0,255,255,0.10)" }}
                className="relative transition-all duration-100"
                onMouseEnter={() => handleCursorEnter('Experience')}
                onMouseLeave={handleCursorLeave}
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                      <h4 className="text-xl text-cyan-400 mb-2">{exp.company}</h4>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <div className="flex gap-3 mt-4 md:mt-0">
                      {Object.entries(exp.links).map(([key, url]) => (
                        <motion.a
                          key={key}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          onMouseEnter={() => handleCursorEnter('Visit Site')}
                          onMouseLeave={handleCursorLeave}
                          className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg hover:bg-cyan-500/30 transition-colors flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          {key}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, highlightIndex) => (
                      <motion.li
                        key={highlightIndex}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: highlightIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto mb-8" />
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              A showcase of real-world solutions combining AI/ML, IoT, and full-stack development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {portfolioData.projects_featured.map((project, index) => (
              <div key={index} onMouseEnter={() => handleCursorEnter('View Project')} onMouseLeave={handleCursorLeave}>
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto mb-8" />
          </motion.div>

          <div className="space-y-12">
            {Object.entries(portfolioData.skills_grouped).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 text-center">{category}</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {skills.map((skill, skillIndex) => (
                    <div key={skill} onMouseEnter={() => handleCursorEnter(skill)} onMouseLeave={handleCursorLeave}>
                      <SkillOrb
                        skill={skill}
                        category={category}
                        index={skillIndex}
                        categoryColor={skillColors[category as keyof typeof skillColors]}
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                Certificates & Credentials
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto mb-8" />
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Professional certifications and achievements that validate my technical expertise and leadership skills
            </p>
          </motion.div>

          {/* Certificate Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certificates.map((certificate, index) => (
              <div key={index} onMouseEnter={() => handleCursorEnter('View Certificate')} onMouseLeave={handleCursorLeave}>
                <CertificateCard certificate={certificate} index={index} />
              </div>
            ))}
          </div>

          {/* Certificate Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl font-bold text-cyan-400 mb-2"
              >
                {certificates.filter(c => c.category === 'technical').length}
              </motion.div>
              <p className="text-gray-400">Technical Certs</p>
            </div>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl font-bold text-violet-400 mb-2"
              >
                {certificates.filter(c => c.category === 'leadership').length}
              </motion.div>
              <p className="text-gray-400">Leadership</p>
            </div>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl font-bold text-yellow-400 mb-2"
              >
                {certificates.filter(c => c.category === 'achievement').length}
              </motion.div>
              <p className="text-gray-400">Achievements</p>
            </div>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-3xl font-bold text-green-400 mb-2"
              >
                {new Date().getFullYear() - 2022}
              </motion.div>
              <p className="text-gray-400">Years Active</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto mb-8" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolioData.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300"
                onMouseEnter={() => handleCursorEnter('Education')}
                onMouseLeave={handleCursorLeave}
              >
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <GraduationCap className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">{edu.program}</h3>
                <h4 className="text-cyan-400 mb-2">{edu.institution}</h4>
                <p className="text-gray-400 mb-2">{edu.years || edu.year}</p>
                {(edu.gpa || edu.score || edu.cgpa) && (
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-yellow-400 font-semibold">
                      {edu.gpa || edu.score || `CGPA: ${edu.cgpa}`}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                Achievements & Recognition
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto mb-8" />
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Recognition for technical excellence, leadership, and community contributions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500/40 transition-all duration-300"
                onMouseEnter={() => handleCursorEnter('Achievement')}
                onMouseLeave={handleCursorLeave}
              >
                <motion.div
                  className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Trophy className="w-6 h-6 text-gray-900" />
                </motion.div>
                <p className="text-gray-300 leading-relaxed">{achievement}</p>
                
                {/* Floating particles */}
                <motion.div
                  className="absolute top-3 right-3 w-2 h-2 bg-yellow-400 rounded-full"
                  animate={{
                    y: [-3, 3, -3],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                Let's Work Together
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto mb-8" />
            <p className="text-gray-400 text-lg">
              Ready to bring your ideas to life? Let's discuss your next project.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
          >
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Your Name"
                    onMouseEnter={() => handleCursorEnter('Enter Name')}
                    onMouseLeave={handleCursorLeave}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="your.email@example.com"
                    onMouseEnter={() => handleCursorEnter('Enter Email')}
                    onMouseLeave={handleCursorLeave}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400 resize-none"
                  placeholder="Tell me about your project..."
                  onMouseEnter={() => handleCursorEnter('Enter Message')}
                  onMouseLeave={handleCursorLeave}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={() => handleCursorEnter('Send Message')}
                onMouseLeave={handleCursorLeave}
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-3"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-700">
              <div className="flex flex-wrap justify-center gap-6">
                <motion.a
                  href={`mailto:${portfolioData.email}`}
                  whileHover={{ scale: 1.05 }}
                  onMouseEnter={() => handleCursorEnter('Email')}
                  onMouseLeave={handleCursorLeave}
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  {portfolioData.email}
                </motion.a>
                
                <motion.a
                  href={portfolioData.social.linkedin_primary}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  onMouseEnter={() => handleCursorEnter('LinkedIn')}
                  onMouseLeave={handleCursorLeave}
                  className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </motion.a>
                
                <motion.a
                  href={portfolioData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  onMouseEnter={() => handleCursorEnter('GitHub')}
                  onMouseLeave={handleCursorLeave}
                  className="flex items-center gap-3 text-gray-300 hover:text-gray-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p 
            className="text-gray-400"
            whileHover={{ scale: 1.05 }}
            onMouseEnter={() => handleCursorEnter('Made with Passion')}
            onMouseLeave={handleCursorLeave}
          >
            © 2025 Chandra Sekhar Arasavalli(Prograto).
          </motion.p>
        </div>
      </footer>
    </div>
  );
}

export default App;