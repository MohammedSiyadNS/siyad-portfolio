"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex items-center bg-cover bg-center pt-32"
      initial={{ scale: 1.08, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5 }}
      style={{
        backgroundImage: "url('/images/landd.PNG')",
        backgroundSize: "cover",
        backgroundPosition: "center 0.1px",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/25"></div>

       {/* Left Fade */}
              <div className="absolute bottom-0 left-0 w-24 h-full bg-gradient-to-r from-[#050816] to-transparent z-20"></div>


      {/* Purple Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/90 via-[#050816]/40 to-transparent"></div>
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
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6">
        <motion.div
          className="max-w-2xl relative"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Purple Glow */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px] -z-10"></div>

          <span className="inline-block px-4 py-2 rounded-full border border-purple-500 text-purple-400 text-sm">
            Hello Recruiter 👋
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
  <span className="text-white">
    Mohammed
  </span>

  <br />

  <span className="text-purple-500 font-black">
    Siyad
  </span>
</h1>
          <p className="mt-5 text-xl text-gray-300">
            BTech Graduate <span className="text-purple-500 font-black"> | </span> Software Developer <span className="text-purple-500 font-black"> | </span> ERP Enthusiast
          </p>

          <p className=" uppercase tracking-[1px] text-sm mt-4 text-gray-300 leading-8 max-w-xl">
            I build cross-platform applications and ERP solutions that solve
            real-world problems and create efficient systems.
          </p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#projects" className="bg-purple-600 hover:bg-purple-500 hover:scale-105 transition-all duration-300 px-8 py-4 rounded-xl font-medium shadow-lg shadow-purple-500/40">
              Explore My Work
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 hover:border-purple-500 hover:scale-105 transition duration-300 px-8 py-4 rounded-xl"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex gap-4 mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="https://github.com/MohammedSiyadNS"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-purple-500 hover:text-purple-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/siyadns"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-purple-500 hover:text-purple-400 transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="mailto:siyadpovval.sp@gmail.com"
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-purple-500 hover:text-purple-400 transition"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://instagram.com/siyad_pachu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-purple-500 hover:text-purple-400 transition"
            >
              <FaInstagram />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}