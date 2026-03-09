import { motion } from 'framer-motion';

export default function Timeline({ items }) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-500 via-accent-500/50 to-transparent" />

      <div className="space-y-6">
        {items.map((item, index) => (
          <motion.div
            key={`${item.year}-${item.title}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="relative pl-14 md:pl-20"
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-6 top-6 w-4 h-4 rounded-full bg-accent-500 shrink-0 ring-4 ring-white dark:ring-dark-900" />

            <div className="p-5 rounded-xl glass dark:glass hover:border-accent-500/30 transition-colors border border-transparent">
              <span className="inline-block px-3 py-1 rounded-full bg-accent-500/20 text-accent-400 text-xs font-medium mb-3">
                {item.year}
              </span>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
