"use client";
import { motion } from "framer-motion";

import {
  GitBranch,
  User,
  Mail,
  Phone,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-0 border-t border-white/10 bg-[#050816] overflow-hidden">
       {/* Background Glow */}
<div className="absolute top-[-200px] left-[-100px] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[180px]" />

<div className="absolute bottom-[-200px] right-[-100px] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[180px]" />

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px]" />
 {/* Floating Particles */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  {[...Array(40)].map((_, i) => (
    <motion.span
      key={i}
      className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse shadow-[0_0_12px_rgba(168,85,247,0.8)]"
      style={{
  left: [
    "5%", "15%", "28%", "40%", "55%",
    "70%", "82%", "92%", "10%", "22%",
    "35%", "48%", "60%", "75%", "88%",
    "8%", "18%", "30%", "45%", "58%",
    "72%", "85%", "95%", "25%", "65%"
  ][i],

  top: [
    "10%", "25%", "15%", "40%", "20%",
    "55%", "35%", "70%", "80%", "50%",
    "65%", "30%", "85%", "45%", "60%",
    "5%", "90%", "22%", "75%", "12%",
    "95%", "42%", "28%", "58%", "38%"
  ][i],
}}
      animate={{
        y: [-20, 20, -20],
        opacity: [0.2, 1, 0.2],
      }}
      transition={{
        duration: 4 + (i % 5),
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  ))}
</div>

      {/* Top Glow */}
      

      <div className="max-w-7xl mx-auto relative z-10 px-6 py-10">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo & About */}
          <div>
            <div className="inline-flex items-center gap-3">
  <div
    className="
      w-12 h-12
      rounded-2xl
      bg-white/[0.05]
      border border-white/10
      flex items-center justify-center
      shadow-[0_0_25px_rgba(168,85,247,0.25)]
    "
  >
    <span className="font-bold text-xl">
      <span className="text-white">M</span>
      <span className="text-purple-500">S</span>
    </span>
  </div>
</div>
            <p className="text-gray-400 mt-4 leading-7">
              Mohammed Siyad NS
              <br />
              B.Tech Information Technology Graduate
              <br />
              Full Stack Developer & AI Enthusiast
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <a href="#about" className="hover:text-purple-400 transition">
                About
              </a>

              <a href="#skills" className="hover:text-purple-400 transition">
                Skills
              </a>

              <a href="#projects" className="hover:text-purple-400 transition">
                Projects
              </a>

              <a href="#experience" className="hover:text-purple-400 transition">
                Experience
              </a>

              <a href="#contact" className="hover:text-purple-400 transition">
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Connect
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <a
                href="mailto:siyadpovval@gmail.com"
                className="flex items-center gap-3 hover:text-purple-400 transition"
              >
                <Mail size={18} />
                siyadpovval.sp@gmail.com
              </a>

              <a
                href="tel:+918921980155"
                className="flex items-center gap-3 hover:text-purple-400 transition"
              >
                <Phone size={18} />
                +91 8921980155
              </a>

              <a
                href="https://github.com/MohammedSiyadNS"
                target="_blank"
                className="flex items-center gap-3 hover:text-purple-400 transition"
              >
                <GitBranch size={18} />
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/siyadns"
                target="_blank"
                className="flex items-center gap-3 hover:text-purple-400 transition"
              >
                <User size={18} />
                LinkedIn
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-sm">
            © 2026 Mohammed Siyad NS. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="
              mt-4 md:mt-0
              flex items-center gap-2
              px-4 py-2
              rounded-xl
              bg-white/[0.05]
              border border-white/10
              hover:border-purple-400/40
              hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]
              transition-all
            "
          >
            <ArrowUp size={18} />
            Back To Top
          </a>
        
        </div>

      </div>
    </footer>
  );
}