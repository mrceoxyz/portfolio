'use client';

import { motion } from 'framer-motion';
import {
  Code,
  Cpu,
  Database,
  Server,
  Cloud,
  Zap,
  Computer,
  Gpu,
  MemoryStick,
  UserCheck,
  GithubIcon,
  GitCommit,
  CircuitBoard,
  SolarPanel,
  AtomIcon,
} from 'lucide-react';

const icons = [Code, Cpu, Database, Server, Cloud, Zap,Computer,Gpu,MemoryStick,UserCheck,GithubIcon,GitCommit,CircuitBoard,SolarPanel,AtomIcon];

export default function FloatingTechIcons() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute text-blue-500/20 dark:text-blue-400/20"
          style={{
            left: `${(index * 15 + 10) % 100}%`,
            top: `${(index * 20 + 15) % 100}%`,
          }}
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
            rotate: [100, 8, -8, 0],
          }}
          transition={{
            duration: 18 + index * 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Icon className="w-10 h-10 sm:w-10 sm:h-10 blur-[0.6px]" />
        </motion.div>
      ))}
    </div>
  );
}
