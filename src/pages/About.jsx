import { motion } from 'framer-motion';
import Timeline from '../components/Timeline';
import SkillBadge from '../components/SkillBadge';
import { resumeData } from '../data/resume';

const timelineItems = [
  {
    year: '2022',
    title: 'First Steps in Programming (C)',
    description:
      'Started my programming journey with C language, learning fundamentals like variables, control structures, loops, and basic problem-solving. This phase helped me understand how computers execute logic step by step.',
  },
  {
    year: '2022',
    title: 'Transition to C++ and OOP',
    description:
      'Moved from C to C++ to explore Object-Oriented Programming—classes, objects, inheritance, and polymorphism. This helped me write more structured and scalable programs.',
  },
  {
    year: '2023',
    title: 'Data Structures & Algorithms',
    description:
      'Focused on DSA to strengthen problem-solving skills. Learned arrays, linked lists, stacks, queues, trees, graphs, and algorithm optimization.',
  },
  {
    year: '2024',
    title: 'Exploring Web Development',
    description:
      'Started exploring modern web development with HTML, CSS, and JavaScript. This opened the door to building real-world applications that users can interact with.',
  },
  {
    year: '2025',
    title: 'Full Stack Development (MERN)',
    description:
      'Expanded into full stack development with React, Node.js, and Express to build scalable web applications with modern UI and backend APIs.',
  },
  {
    year: '2025',
    title: 'Built Neelyatra',
    description:
      'Developed Neelyatra, an AI-powered travel platform with intelligent itinerary generation and an interactive user experience. Gained hands-on experience building complete applications from frontend to backend.',
  },
  {
    year: '2025',
    title: 'Exploring AI & Machine Learning',
    description:
      'Started exploring AI/ML concepts and neural networks—understanding how intelligent systems work and how machine learning can be integrated into real-world applications.',
  },
  {
    year: 'Present',
    title: 'Continuous Learning and Building',
    description:
      'Focused on improving full stack development, problem-solving, and system design while building projects and preparing for software engineering opportunities.',
  },
];

const skills = resumeData.skills;

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My journey from curiosity to building production applications.
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="p-8 rounded-2xl glass dark:glass">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Hi, I'm Shatis Singh, a final-year B.Tech student and an aspiring Full Stack Developer
              who enjoys building meaningful and scalable web applications. My journey into
              programming began with C and later C++, where I developed a strong interest in
              understanding how software works and how logical problems can be solved through code.
              While learning programming fundamentals, I also focused on Data Structures and
              Algorithms, which helped me build a solid problem-solving mindset and a strong
              technical foundation.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              As my curiosity about technology grew, I started exploring modern web development and
              moved towards building real-world applications. I work with technologies like React,
              Node.js, Express, and the MERN stack to create responsive and interactive web
              applications. I enjoy the complete process of development—from designing clean user
              interfaces to building secure and efficient backend systems.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              One of my notable projects is <strong className="text-gray-800 dark:text-gray-200">Neelyatra</strong>, an
              AI-powered travel platform that helps users plan trips through intelligent itinerary
              generation and an interactive dashboard. Building this project gave me practical
              experience in developing full-stack applications, implementing authentication systems,
              and creating scalable user interfaces.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I am passionate about continuously learning new technologies, building innovative
              projects, and improving my development skills. My goal is to grow as a software
              engineer, work on impactful products, and contribute to solving real-world problems
              through technology.
            </p>
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl font-semibold mb-12 text-center">
            Coding <span className="gradient-text">Journey</span>
          </h2>
          <Timeline items={timelineItems} />
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-12 text-center">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="p-6 rounded-2xl glass dark:glass"
              >
                <h3 className="text-lg font-medium mb-4 capitalize">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
