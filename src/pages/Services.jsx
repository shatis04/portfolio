import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

const services = [
  { title: 'Full Stack Web Development', description: 'End-to-end web applications with modern stacks' },
  { title: 'React Website Development', description: 'Fast, responsive single-page applications' },
  { title: 'REST API Development', description: 'Scalable backend APIs with Node.js & Express' },
  { title: 'UI Development', description: 'Modern, accessible interfaces with Tailwind CSS' },
  { title: 'Website Performance Optimization', description: 'Faster load times and better UX' },
];

export default function Services() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl font-bold mb-4">
            Freelance <span className="gradient-text">Services</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional web development services for your business.
          </p>
        </motion.div>

        {/* Services Offered */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Services <span className="gradient-text">Offered</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl glass dark:glass hover:glow-accent transition-all"
              >
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">Have a custom project in mind?</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent-500 hover:bg-accent-600 text-white font-medium transition-all"
          >
            Start a Project <HiArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
