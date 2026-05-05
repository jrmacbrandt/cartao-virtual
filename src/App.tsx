/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  MapPin, 
  Mail, 
  Globe, 
  UserPlus, 
  Instagram, 
  Linkedin, 
  Facebook, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        staggerChildren: 0.1
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const handleSaveContact = () => {
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:Roberto Brandt
N:Brandt;Roberto;;;
TEL;TYPE=CELL:+5521980914107
EMAIL;TYPE=INTERNET:jrmacbrandt@yahoo.com
URL:https://portfolio-roberto-five.vercel.app/
ORG:J.R. Brandt Web Design
TITLE:Webdesigner & Developer
NOTE:Crio sites e sistemas que ajudam pequenos negócios a atrair e reter mais clientes.
END:VCARD`;

    const blob = new Blob([vCard], { type: 'text/vcard;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Roberto_Brandt.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Cleanup to prevent memory leaks
    setTimeout(() => window.URL.revokeObjectURL(url), 100);
  };

  return (
    <div className="min-h-screen relative overflow-hidden font-sans">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 bg-[#000]" />
      
      {/* Decorative Gradient Background (Subtle Red Glow) */}
      <div className="fixed top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-accent/5 blur-[150px]" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-accent/5 blur-[150px]" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full min-h-screen py-12 px-4 flex flex-col items-center">
        <motion.main 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-[400px] flex flex-col gap-8"
          id="main-card"
        >
          {/* 1. Header Section */}
          <motion.section variants={itemVariants} className="flex flex-col items-center text-center gap-6">
            <div className="relative">
              <div className="w-40 h-40 rounded-full border border-white/10 p-1 bg-black shadow-[0_0_40px_rgba(255,0,0,0.1)]">
                <img 
                  src="/jrbrandt-foto.png" 
                  alt="Roberto Brandt"
                  className="w-full h-full rounded-full object-cover grayscale brightness-90 contrast-125"
                />
              </div>
              <div className="absolute top-2 right-2 bg-accent w-3 h-3 rounded-full border-2 border-black" />
            </div>
            
            <div className="space-y-6 px-2">
              <h1 className="text-3xl font-extrabold tracking-tight leading-tight uppercase text-white">
                Seu negócio merece mais do que apenas redes sociais <span className="text-accent">ou plataformas de terceiros.</span>
              </h1>
              <p className="text-white/60 text-base leading-relaxed font-medium">
                Como Webdesigner, crio sites e sistemas sob medida para ajudar pequenos negócios a atrair e reter mais clientes qualificados.
              </p>
            </div>
          </motion.section>

          {/* 2. Main CTA */}
          <motion.button 
            variants={itemVariants}
            whileHover={{ scale: 1.02, backgroundColor: '#d10000' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open('https://wa.me/5521980914107', '_blank')}
            className="w-full bg-accent text-white font-black py-5 rounded-none flex items-center justify-center gap-3 shadow-2xl transition-all duration-300 tracking-[0.1em] text-sm uppercase"
            id="main-cta-btn"
          >
            <span>QUERO DESTACAR MEU NEGÓCIO</span>
            <ExternalLink className="w-4 h-4" />
          </motion.button>

          {/* 3. Action Grid */}
          <motion.section variants={itemVariants} className="grid grid-cols-3 gap-2">
            <ActionButton 
              icon={<MessageCircle className="w-4 h-4" />} 
              label="WhatsApp" 
              href="https://wa.me/5521980914107"
            />
            <ActionButton 
              icon={<Globe className="w-4 h-4" />} 
              label="Website" 
              href="https://portfolio-roberto-five.vercel.app/"
            />
            <ActionButton 
              icon={<Mail className="w-4 h-4" />} 
              label="E-mail" 
              href="mailto:jrmacbrandt@yahoo.com"
            />
          </motion.section>

          {/* 4. Secondary Action */}
          <motion.button 
            variants={itemVariants}
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open('https://portfolio-roberto-five.vercel.app/', '_blank')}
            className="w-full border border-white/20 text-white font-bold py-4 rounded-none flex items-center justify-center gap-3 transition-all duration-300 tracking-[0.1em] text-[10px] uppercase"
            id="solutions-btn"
          >
            <span>VER SOLUÇÕES</span>
            <ChevronRight className="w-3 h-3" />
          </motion.button>

          {/* 5. Save Contact Button Highlighted */}
          <motion.button 
            variants={itemVariants}
            whileHover={{ scale: 1.02, backgroundColor: '#d10000' }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSaveContact}
            className="w-full bg-accent text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-xl transition-all duration-300 tracking-[0.2em] text-[10px] uppercase"
          >
            <UserPlus className="w-3 h-3" />
            <span>Salvar contato agora</span>
          </motion.button>

          {/* 6. Social Section */}
          <motion.section variants={itemVariants} className="flex flex-col items-center gap-8 mt-4">
            <div className="flex gap-8">
              <SocialIcon icon={<Instagram className="w-5 h-5" />} href="#" />
              <SocialIcon icon={<Linkedin className="w-5 h-5" />} href="#" />
              <SocialIcon icon={<Facebook className="w-5 h-5" />} href="#" />
            </div>
          </motion.section>
        </motion.main>
      </div>
    </div>
  );
}

function ActionButton({ icon, label, href }: { icon: React.ReactNode, label: string, href: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03, borderColor: 'rgba(255,0,0,0.4)', backgroundColor: 'rgba(255,0,0,0.02)' }}
      whileTap={{ scale: 0.97 }}
      className="flex flex-col items-center justify-center gap-3 p-5 border border-white/5 bg-[#0d0d0d] transition-all"
    >
      <div className="text-accent">
        {icon}
      </div>
      <span className="text-[9px] font-bold text-white/60 uppercase tracking-[0.2em]">{label}</span>
    </motion.a>
  );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode, href: string }) {
  return (
    <motion.a 
      href={href}
      whileHover={{ scale: 1.1, color: 'var(--color-accent)', borderColor: 'var(--color-accent)' }}
      className="text-white p-3 border border-white/10 rounded-full transition-all"
    >
      {icon}
    </motion.a>
  );
}
