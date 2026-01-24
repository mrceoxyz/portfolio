/* eslint-disable react-hooks/purity */
'use client';

import { motion } from 'framer-motion';
import {
  Laptop2Icon,
  UsbIcon,
  Smartphone,
  CpuIcon,
  GpuIcon,
  CableIcon,
  HardDrive,
  Server,
  Database,
  Router,
  Github,
  Code,
  Barcode
} from 'lucide-react';

const icons = [
  Laptop2Icon,
  UsbIcon,
  Smartphone,
  CpuIcon,
  GpuIcon,
  CableIcon,
  HardDrive,
  Server,
  Database,
  Router,
  Github,
  Code,
  Barcode
];

export default function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/10 dark:text-primary/15"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 18 + index * 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Icon className="h-16 w-16 md:h-20 md:w-20 blur-[0.5px]" />
        </motion.div>
      ))}
    </div>
  );
}
