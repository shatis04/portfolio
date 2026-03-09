import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { resumeData } from '../data/resume';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold gradient-text">Shatis Singh</span>
            <span className="text-gray-500 text-sm">© {currentYear}</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={resumeData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-accent-500 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href={resumeData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-accent-500 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${resumeData.email}`}
              className="text-gray-600 dark:text-gray-400 hover:text-accent-500 transition-colors"
              aria-label="Email"
            >
              <HiMail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-white/5 flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-500">
          <Link to="/projects" className="text-gray-600 dark:text-gray-500 hover:text-accent-500 transition-colors">
            Projects
          </Link>
          <Link to="/services" className="text-gray-600 dark:text-gray-500 hover:text-accent-500 transition-colors">
            Services
          </Link>
          <Link to="/contact" className="text-gray-600 dark:text-gray-500 hover:text-accent-500 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
