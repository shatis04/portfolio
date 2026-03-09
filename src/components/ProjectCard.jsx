import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SkillBadge from './SkillBadge';

export default function ProjectCard({ project, index = 0 }) {
  const [imgError, setImgError] = useState(false);
  const showImage = project.image && !imgError;
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group relative overflow-hidden rounded-2xl glass dark:glass hover:glow-accent transition-all duration-300"
    >
      <div className="aspect-video bg-gray-200 dark:bg-dark-600 overflow-hidden">
        {showImage ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-accent-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
            <span className="text-4xl font-bold text-white/20 group-hover:text-white/40 transition-colors">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-500 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 4).map((tech) => (
            <SkillBadge key={tech} skill={tech} />
          ))}
        </div>

        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-accent-500 transition-colors"
            >
              <FaGithub className="w-4 h-4" />
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-accent-500 transition-colors"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
