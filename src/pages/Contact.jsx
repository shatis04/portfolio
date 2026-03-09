import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail, HiPhone } from 'react-icons/hi';
import emailjs from '@emailjs/browser';
import { resumeData } from '../data/resume';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(''); // 'sending' | 'success' | 'error'
  const [errorDetail, setErrorDetail] = useState('');

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';
  const isConfigured =
    serviceId && templateId && publicKey && !serviceId.startsWith('your_');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorDetail('');

    if (!isConfigured) {
      setStatus('error');
      setErrorDetail('EmailJS is not configured. Add your keys to .env and restart the dev server.');
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: 'Portfolio Contact',
          time: new Date().toLocaleString(),
        },
        publicKey
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('EmailJS Error:', err);
      setStatus('error');
      setErrorDetail(err?.text || err?.message || 'Check your Service ID, Template ID, and Public Key.');
    }
  };

  const mailtoLink = `mailto:${resumeData.email}?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\n---\nFrom: ' + formData.email)}`;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to connect? Send me a message.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="p-8 rounded-2xl glass"
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-dark-700 border border-gray-200 dark:border-white/10 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors text-gray-900 dark:text-gray-100"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-dark-700 border border-gray-200 dark:border-white/10 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors text-gray-900 dark:text-gray-100"
                placeholder="your@email.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-dark-700 border border-gray-200 dark:border-white/10 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors resize-none text-gray-900 dark:text-gray-100"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-3 rounded-xl bg-accent-500 hover:bg-accent-600 text-white font-medium transition-all disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className="mt-4 text-accent-400 text-sm">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <div className="mt-4 space-y-2">
                <p className="text-red-400 text-sm">{errorDetail || 'Failed to send.'}</p>
                <a
                  href={mailtoLink}
                  className="inline-flex items-center gap-2 text-accent-400 text-sm hover:text-accent-300"
                >
                  <HiMail className="w-4 h-4" />
                  Or email me directly instead
                </a>
              </div>
            )}
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-2xl glass dark:glass">
              <h3 className="text-lg font-semibold mb-6">Connect</h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${resumeData.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <HiMail className="w-6 h-6 text-accent-400 shrink-0" />
                  <span>{resumeData.email}</span>
                </a>
                <a
                  href={`tel:${resumeData.phone.replace(/\D/g, '')}`}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <HiPhone className="w-6 h-6 text-accent-400 shrink-0" />
                  <span>{resumeData.phone}</span>
                </a>
                <a
                  href={resumeData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <FaGithub className="w-6 h-6 text-accent-400 shrink-0" />
                  <span>GitHub</span>
                </a>
                <a
                  href={resumeData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <FaLinkedin className="w-6 h-6 text-accent-400 shrink-0" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
