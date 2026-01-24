'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

interface WhatsAppWidgetProps {
  phone: string; // international format e.g. 2348012345678
  message?: string;
}

export default function WhatsAppWidget({
  phone,
  message = 'Hello, I would like to make an enquiry.',
}: WhatsAppWidgetProps) {
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full
                 bg-green-500 text-white shadow-lg hover:bg-green-600
                 focus:outline-none focus:ring-4 focus:ring-green-300
                 dark:focus:ring-green-800"
    >
      <MessageCircle className="h-6 w-6" />
    </motion.a>
  );
}
