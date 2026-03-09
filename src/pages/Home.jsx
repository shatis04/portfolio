import { useState, useEffect } from 'react';

const AVATAR_IMAGE = '/images/avatar.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiDownload, HiArrowRight } from 'react-icons/hi';
import ProjectCard from '../components/ProjectCard';
import SkillBadge from '../components/SkillBadge';
import { projects } from '../data/projects';
import { resumeData } from '../data/resume';

const ROLES = ['Full Stack Developer', 'Problem Solver', 'DSA Enthusiast', 'AI/ML Explorer'];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [avatarError, setAvatarError] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const featuredProjects = projects.filter((p) => p.featured);
  const keySkills = resumeData.skills.languages.concat(resumeData.skills.developerTools).slice(0, 8);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            {!avatarError ? (
              <img
                src={AVATAR_IMAGE}
                alt="Shatis Singh"
                onError={() => setAvatarError(true)}
                className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full object-cover ring-4 ring-accent-500/30 shadow-xl shadow-accent-500/20"
              />
            ) : (
              <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full bg-gradient-to-br from-accent-500 to-purple-600 flex items-center justify-center text-white font-bold text-3xl sm:text-4xl ring-4 ring-accent-500/30 shadow-xl shadow-accent-500/20">
                SS
              </div>
            )}
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent-400 font-mono text-sm mb-4"
          >
            Welcome to my portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
          >
            Hi, I'm <span className="gradient-text">Shatis Singh</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 mb-2"
          >
            Full Stack Developer
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="h-8 mb-8"
          >
            <span className="text-accent-400 font-mono">Building scalable web applications • </span>
            <span className="text-accent-400 font-mono inline-block min-w-[200px] border-r-2 border-accent-500 animate-pulse">
              {ROLES[roleIndex]}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/projects"
              className="px-6 py-3 rounded-xl bg-accent-500 hover:bg-accent-600 text-white font-medium transition-all hover:shadow-lg hover:shadow-accent-500/25 flex items-center gap-2"
            >
              View Projects <HiArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl glass dark:glass hover:glow-accent font-medium transition-all flex items-center gap-2"
            >
              Hire Me
            </Link>
            <a
              href="/Resume_Shatis_ws.pdf"
              download
              className="px-6 py-3 rounded-xl border border-gray-300 dark:border-white/20 hover:border-accent-500 hover:text-accent-500 font-medium transition-all flex items-center gap-2"
            >
              <HiDownload className="w-4 h-4" /> Download Resume
            </a>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 font-medium"
            >
              View all projects <HiArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 px-4 bg-gray-100 dark:bg-dark-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Key <span className="gradient-text">Technologies</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {keySkills.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400 mb-8"
          >
            Final-year B.Tech student and Full Stack Developer. I build scalable web apps with React,
            Node.js, and explore AI/ML. 600+ problems solved on LeetCode, Coding Ninjas & GFG.
          </motion.p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 font-medium"
          >
            Learn more about me <HiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center p-12 rounded-3xl glass dark:glass"
        >
          <h2 className="text-2xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Recruiters and clients — I'm open to new opportunities and freelance projects.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent-500 hover:bg-accent-600 text-white font-medium transition-all"
          >
            Get in Touch <HiArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
