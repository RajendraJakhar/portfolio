import { motion } from 'framer-motion';
import { Layers, Cpu, Github, Target } from 'lucide-react';
import type { Metric } from '../types';

const iconMap: Record<string, React.ElementType> = {
  Layers,
  Cpu,
  Github,
  Target,
};

const glowMap: Record<string, string> = {
  cyan: 'rgba(0,245,255,0.15)',
  green: 'rgba(0,255,136,0.15)',
  purple: 'rgba(139,92,246,0.15)',
  blue: 'rgba(59,130,246,0.15)',
};

const borderMap: Record<string, string> = {
  cyan: 'rgba(0,245,255,0.25)',
  green: 'rgba(0,255,136,0.25)',
  purple: 'rgba(139,92,246,0.25)',
  blue: 'rgba(59,130,246,0.25)',
};

const textMap: Record<string, string> = {
  cyan: '#00f5ff',
  green: '#00ff88',
  purple: '#a78bfa',
  blue: '#60a5fa',
};

interface MetricCardProps {
  metric: Metric;
  index: number;
}

export default function MetricCard({ metric, index }: MetricCardProps) {
  const Icon = iconMap[metric.icon] ?? Layers;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: 'easeOut' }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="relative p-6 rounded-2xl cursor-default overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.0)',
        border: `1px solid ${borderMap[metric.color]}`,
        backdropFilter: 'blur(20px)',
        boxShadow: `0 0 0px ${glowMap[metric.color]}`,
      }}
    >
      <div
        className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0"
        style={{ background: textMap[metric.color], transform: 'translate(30%, -30%)' }}
      />
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center"
          style={{ background: glowMap[metric.color], border: `1px solid ${borderMap[metric.color]}` }}
        >
          <Icon size={20} style={{ color: textMap[metric.color] }} />
        </div>
        <span
          className="text-sm font-medium px-2 py-1 rounded-full"
          style={{ background: glowMap[metric.color], color: textMap[metric.color] }}
        >
          Active
        </span>
      </div>
      <p className="text-3xl font-bold text-white mb-1">
        {metric.value}
      </p>
      <p className="text-sm font-semibold text-white mb-1">{metric.label}</p>
      <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{metric.sub}</p>
    </motion.div>
  );
}
