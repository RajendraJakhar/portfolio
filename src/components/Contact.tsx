import { motion } from 'framer-motion';
import {
  Mail,
  Github,
  Youtube,
  Linkedin,
  Send,
  Copy,
  MapPin,
  Phone,
  CheckCircle,
  User
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useState } from 'react';

const links = [
  {
    icon: Github,
    label: 'GitHub',
    handle: '@RajendraJakhar',
    href: 'https://github.com/RajendraJakhar',
    color: '#00f5ff',
    desc: 'Check out my open source work',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    handle: 'rajendrajakhar',
    href: 'https://linkedin.com/in/rajendrajakhar',
    color: '#00ff88',
    desc: 'Connect professionally',
  },
  {
    icon: Mail,
    label: 'Academic Email',
    handle: 'b24bs2273@iitj.ac.in',
    href: 'mailto:b24bs2273@iitj.ac.in',
    color: '#60a5fa',
    desc: 'Best for academic/professional inquiries',
  },
  {
    icon: Youtube,
    label: 'YouTube',
    handle: 'Rajendra Jakhar',
    href: 'https://youtube.com/@RajendraJakharIITian',
    color: '#ff0000',
    desc: 'Content and projects',
  },
  {
    icon: Mail,
    label: 'Personal Email',
    handle: 'contact.rajendrajakhar@gmail.com',
    href: 'mailto:contact.rajendrajakhar@gmail.com',
    color: '#f59e0b',
    desc: 'Alternative contact email',
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const fields = [
    {
      label: 'Your Name',
      key: 'name',
      type: 'text',
      placeholder: 'your name',
      icon: User
    },
    {
      label: 'Email Address',
      key: 'email',
      type: 'email',
      placeholder: 'your@email.com',
      icon: Mail
    }
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText('b24bs2273@iitj.ac.in');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">Contact</h2>
        <p className="text-sm text-gray-400">Let's build something amazing together</p>
      </div>

      <ScrollReveal direction="up">
        <div
          className="p-6 rounded-2xl relative overflow-hidden"
          style={{
            background: 'rgba(0,245,255,0.04)',
            border: '1px solid rgba(0,245,255,0.2)',
            boxShadow: '0 0 60px rgba(0,245,255,0.08)',
          }}
        >
          <div
            className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-10"
            style={{ background: '#00f5ff' }}
          />

          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-medium" style={{ color: '#00ff88' }}>
                  Open to Opportunities
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">
                Looking for Summer 2026 Internships
              </h3>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Open to internship opportunities where I can learn, contribute and gain hands-on experience in AI and software development.
              </p>
            </div>

            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=b24bs2273@iitj.ac.in"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-black flex-shrink-0"
              style={{ background: 'linear-gradient(135deg,#00f5ff,#00a8cc)' }}
            >
              <Mail size={15} />
              Hire Me
            </motion.a>
          </div>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          {links.map((link, i) => {
            const Icon = link.icon;
            return (
              <ScrollReveal key={link.label} delay={i * 0.03} direction="up">
                <motion.a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-2xl"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)'
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: `${link.color}14` }}
                  >
                    <Icon size={18} style={{ color: link.color }} />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">{link.label}</p>
                    <p className="text-sm text-white font-semibold">{link.handle}</p>
                    <p className="text-xs text-gray-500">{link.desc}</p>
                  </div>
                </motion.a>
              </ScrollReveal>
            );
          })}

          <ScrollReveal direction="up" delay={0.15}>
            <div
              className="p-4 rounded-2xl space-y-3"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)'
              }}
            >
              <div className="flex items-center gap-3">
                <MapPin size={14} style={{ color: '#00f5ff' }} />
                <span className="text-xs text-gray-400">Jodhpur, Rajasthan, India</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={14} style={{ color: '#00ff88' }} />
                <span className="text-xs text-gray-400">Open to internship discussions</span>
              </div>

              <button
                onClick={handleCopy}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)'
                }}
              >
                <div className="flex items-center gap-2">
                  <Mail size={14} style={{ color: '#60a5fa' }} />
                  <span className="font-mono text-xs text-gray-300">b24bs2273@iitj.ac.in</span>
                </div>

                {copied ? (
                  <CheckCircle size={13} style={{ color: '#00ff88' }} />
                ) : (
                  <Copy size={13} />
                )}
              </button>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="up" delay={0.05}>
          <div
            className="p-6 rounded-2xl"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.07)'
            }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">Send a Message</h3>

            {sent ? (
              <div className="text-center py-16">
                <CheckCircle size={36} className="mx-auto mb-3 text-green-400" />
                <p className="text-white font-semibold">Message Sent!</p>
              </div>
            ) : (
              <form
                action="https://formspree.io/f/xnjlgdqb"
                method="POST"
                className="space-y-4"
              >
                {fields.map((field) => {
                  const Icon = field.icon;
                  return (
                    <div key={field.key}>
                      <label className="block text-xs mb-2 text-gray-400">{field.label}</label>
                      <div className="relative">
                        <Icon size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                        <input
                          type={field.type}
                          name={field.key}
                          required
                          placeholder={field.placeholder}
                          value={form[field.key as keyof typeof form]}
                          onChange={(e) =>
                            setForm((f) => ({ ...f, [field.key]: e.target.value }))
                          }
                          className="w-full pl-11 pr-4 py-2.5 rounded-xl text-white"
                          style={{
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.09)'
                          }}
                        />
                      </div>
                    </div>
                  );
                })}

                <div>
                  <label className="block text-xs mb-2 text-gray-400">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell me about your project or collaboration idea..."
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className="w-full px-4 py-2.5 rounded-xl text-white resize-none"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.09)'
                    }}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-black font-semibold"
                  style={{ background: 'linear-gradient(135deg,#00f5ff,#00a8cc)' }}
                >
                  <Send size={15} />
                  Send Message
                </motion.button>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </motion.div>
  );
}
