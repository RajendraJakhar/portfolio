import type { Metric, Skill, Project, Certification } from '../types';

export const metrics: Metric[] = [
  {
    label: 'Projects Built',
    value: '4+',
    sub: 'AI & Web Projects',
    color: 'cyan',
    icon: 'Layers',
  },
  {
    label: 'Technologies',
    value: '8+',
    sub: 'Tools & Frameworks',
    color: 'green',
    icon: 'Cpu',
  },
  {
    label: 'GitHub Repositories',
    value: '7+',
    sub: 'Open Source',
    color: 'purple',
    icon: 'Github',
  },
  {
    label: 'Internship Goal',
    value: '2026',
    sub: 'Target: Top Tech Co.',
    color: 'blue',
    icon: 'goal',
  },
];

export const skills: Skill[] = [
  { name: 'Python', level: 30, category: 'Language', color: 'cyan', icon: 'Code2' },
  { name: 'Machine Learning', level: 12, category: 'AI/ML', color: 'green', icon: 'Brain' },
  { name: 'Data Analysis', level: 75, category: 'Data Science', color: 'purple', icon: 'BarChart3' },
  { name: 'Deep Learning', level: 55, category: 'AI/ML', color: 'cyan', icon: 'Network' },
  { name: 'React / TypeScript', level: 48, category: 'Web Dev', color: 'blue', icon: 'Globe' },
  { name: 'SQL & NoSQL', level: 40, category: 'Database', color: 'green', icon: 'Database' },
  { name: 'TensorFlow / PyTorch', level: 12, category: 'AI/ML', color: 'purple', icon: 'Zap' },
  { name: 'FastAPI / Flask', level: 16, category: 'Backend', color: 'cyan', icon: 'Server' },
  { name: 'Pandas / NumPy', level: 88, category: 'Data Science', color: 'green', icon: 'Table' },
  { name: 'Computer Vision', level: 70, category: 'AI/ML', color: 'blue', icon: 'Eye' },
  { name: 'NLP / LLMs', level: 73, category: 'AI/ML', color: 'purple', icon: 'MessageSquare' },
  { name: 'Git & Docker', level: 82, category: 'DevOps', color: 'cyan', icon: 'GitBranch' },
];

export const projects = [
  {
  id: 1,
  title: "AI Career Decision Assistant",
  description: "AI assistant that generates career roadmap using multi-step reasoning.",
  longDescription:
    "Built an AI-powered assistant using Flowise and OpenRouter that collects user inputs step-by-step and generates personalized career paths, courses, and daily learning plans.",
  tags: ["AI", "LLM", "Flowise", "OpenRouter"],
  color: "cyan",
  status: "live",
  github: "https://github.com/RajendraJakhar/ai-career-assistant",
  demo: "https://cloud.flowiseai.com/chatbot/0245d853-cea5-42e5-a41c-84786393b1ae",
  featured: true,
},
  {
  id: 2,
  title: "Employee Attrition Prediction",
  description: "ML model using Weka to predict employee attrition with data analysis and visualization.",
  longDescription:
    "Built a machine learning model using Weka on IBM HR dataset to predict employee attrition. Performed data cleaning, visualization, and analyzed overfitting and underfitting.",
  tags: ["Machine Learning", "Weka", "Data Analysis"],
  color: "cyan",
  status: "completed",
  github: "https://github.com/RajendraJakhar/Employee-Attrition-Prediction",
  featured: true,
},

  // 🔥 Coming Soon Projects
  {
    id: 3,
    title: "AI Chatbot (Coming Soon)",
    description: "Working on an AI chatbot using Python.",
    longDescription:
      "Currently building a chatbot using Python and basic NLP techniques.",
    tags: ["Python", "AI"],
    color: "purple",
    status: "in-progress",
    featured: false,
  },
  {
    id: 4,
    title: "Data Visualization Dashboard (Coming Soon)",
    description: "Interactive dashboard for data insights.",
    longDescription:
      "Planning to build a dashboard using Python libraries like Matplotlib and Plotly.",
    tags: ["Python", "Visualization"],
    color: "blue",
    status: "in-progress",
    featured: false,
  },
];

export const certifications: Certification[] = [
  {
    id: 1,
    title: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI / Coursera',
    date: 'Dec 2024',
    color: 'cyan',
    credentialId: 'ML-2024-DLAI',
  },
  {
    id: 2,
    title: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI / Coursera',
    date: 'Nov 2024',
    color: 'green',
    credentialId: 'DL-2024-DLAI',
  },
  {
    id: 3,
    title: 'IBM Data Science Professional',
    issuer: 'IBM / Coursera',
    date: 'Sep 2024',
    color: 'purple',
    credentialId: 'IBM-DS-2024',
  },
  {
    id: 4,
    title: 'Python for Data Science & AI',
    issuer: 'IBM / edX',
    date: 'Jul 2024',
    color: 'blue',
    credentialId: 'IBM-PY-2024',
  },
  {
    id: 5,
    title: 'TensorFlow Developer Certificate',
    issuer: 'Google / Coursera',
    date: 'Jun 2024',
    color: 'cyan',
    credentialId: 'TF-DEV-2024',
  },
  {
    id: 6,
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Apr 2024',
    color: 'green',
    credentialId: 'AWS-CLF-2024',
  },
];

export const githubStats = {
  totalRepos: 19,
  totalStars: 36,
  totalForks: 12,
  contributions: 170,
  languages: [
    { name: 'Python', percentage: 17, color: 'cyan' },
    { name: 'JavaScript', percentage: 8, color: 'green' },
    { name: 'TypeScript', percentage: 6, color: 'blue' },
    { name: 'Other', percentage: 5, color: 'purple' },
  ],
};
