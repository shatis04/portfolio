import { motion } from 'framer-motion';
import { HiDownload, HiPhone } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import SkillBadge from '../components/SkillBadge';
import { projects } from '../data/projects';
import { resumeData } from '../data/resume';

export default function Resume() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Resume</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Download my full resume or explore the summary below.
          </p>
          <a
            href="/Resume_Shatis_ws.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent-500 hover:bg-accent-600 text-white font-medium transition-all"
          >
            <HiDownload className="w-5 h-5" /> Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-8 md:p-12 rounded-2xl glass dark:glass space-y-10"
        >
          <div>
            <h2 className="text-2xl font-bold mb-1">{resumeData.name}</h2>
            <p className="text-accent-400 mb-4">{resumeData.title}</p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
              <a href={`mailto:${resumeData.email}`} className="hover:text-accent-400 flex items-center gap-2">
                {resumeData.email}
              </a>
              <span className="flex items-center gap-2">
                <HiPhone className="w-4 h-4" /> {resumeData.phone}
              </span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Education</h3>
            <div className="space-y-4">
              {resumeData.education.map((edu) => (
                <div key={edu.institution}>
                  <p className="font-medium">{edu.degree}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.institution} • {edu.period}</p>
                  {edu.details && <p className="text-gray-500 text-sm">{edu.details}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Technical Skills</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-300 mb-2">Languages</p>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.languages.map((s) => (
                    <SkillBadge key={s} skill={s} />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-300 mb-2">Developer Tools</p>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.developerTools.map((s) => (
                    <SkillBadge key={s} skill={s} />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-300 mb-2">Areas of Interest</p>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.areasOfInterest.map((s) => (
                    <SkillBadge key={s} skill={s} />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-300 mb-2">Coursework</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{resumeData.skills.coursework.join(', ')}</p>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Key Projects</h3>
            <ul className="space-y-4">
              {projects.map((project) => (
                <li key={project.id}>
                  <p className="font-medium">{project.title}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.tech.slice(0, 5).map((t) => (
                      <span key={t} className="text-xs text-accent-400/80">
                        {t}
                        {t !== project.tech[project.tech.length - 1] && ','}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Achievements</h3>
            <ul className="space-y-2">
              {resumeData.achievements.map((achievement, i) => (
                <li key={i} className="text-gray-600 dark:text-gray-400 text-sm flex items-start gap-2">
                  <span className="text-accent-400 mt-1">•</span> {achievement}
                </li>
              ))}
            </ul>
          </div>

          {/* Coding Platforms */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Coding Platforms</h3>
            <div className="flex flex-wrap gap-4">
              {resumeData.codingPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.name === 'LeetCode' ? resumeData.leetcode : '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg glass dark:glass hover:border-accent-500/50 transition-colors"
                >
                  {platform.name === 'LeetCode' && <SiLeetcode className="w-5 h-5 text-accent-400" />}
                  <span className="text-sm">{platform.name}: {platform.username}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Positions of Responsibility */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Positions of Responsibility</h3>
            <div className="space-y-4">
              {resumeData.positions.map((pos) => (
                <div key={pos.role}>
                  <p className="font-medium">{pos.role}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{pos.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="pt-4 border-t border-gray-200 dark:border-white/10">
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href={resumeData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass dark:glass hover:border-accent-500/50 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6 text-accent-400" />
              </a>
              <a
                href={resumeData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass dark:glass hover:border-accent-500/50 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6 text-accent-400" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
