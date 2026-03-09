import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.tech.some((t) => t.toLowerCase() === filter.toLowerCase()));

  const allTech = [...new Set(projects.flatMap((p) => p.tech))];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of web applications and tools I've built.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              filter === 'all' ? 'bg-accent-500 text-white' : 'glass hover:bg-gray-200 dark:hover:bg-white/10'
            }`}
          >
            All
          </button>
          {allTech.slice(0, 8).map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(filter === tech ? 'all' : tech)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === tech ? 'bg-accent-500 text-white' : 'glass hover:bg-gray-200 dark:hover:bg-white/10'
              }`}
            >
              {tech}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-500 py-12"
            >
              No projects match this filter.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
