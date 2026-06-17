"use client";
import {
  SiReact,
  SiPython,
  SiNextdotjs,
  SiFlutter,
  SiGithub,
 
} from "react-icons/si";


import { FaAws, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCode,
} from "react-icons/fa";
import { FaGit } from "react-icons/fa6";

export default function About() {
  return (
    <section
  id="about"
  className="relative pt-36 pb-24 px-6 overflow-hidden bg-[#050816]"
>
  
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
<div className="absolute top-[-200px] left-[-100px] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[180px]" />
<div className="absolute bottom-[-200px] left-[-200px] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px]" />

  
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        >

          <p className="text-purple-400 uppercase tracking-widest text-sm">
            ABOUT ME
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            Get To Know 
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
  {" "}ME
</span>
          </h2>

          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center">

            {/* Left Side */}
            <div>

              <p className=" uppercase tracking-[1px] text-smtext-gray-300 leading-7 text-lg">
                I'm a BTech IT Graduate passionate about software development,
                Flutter applications, ERP systems and modern web technologies.
                I enjoy turning ideas into real-world applications that solve
                practical problems.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">

                {/* Card 1 */}
                <div className=" glass-card bg-white/[0.03] backdrop-blur-2xl border border-purple-500/20 rounded-2xl p-5 hover:border-purple-500 hover:-translate-y-2 transition-all duration-300 shadow-[0_0_25px_rgba(168,85,247,0.08)]">
                <div className="absolute top-20 right-20 w-96 h-96 bg-purple-600/5 rounded-full blur-[150px]"></div>  
                  <FaGraduationCap className="text-purple-400 text-3xl mb-4" />

                  <h3 className="font-semibold text-lg">
                    BTech Graduate
                  </h3>

                  <p className="text-gray-400 text-sm mt-2">
                    Information Technology
                  </p>

                </div>

                {/* Card 2 */}
                <div className="glass-card bg-white/[0.03] backdrop-blur-2xl border border-purple-500/20 rounded-2xl p-5 hover:border-purple-500 hover:-translate-y-2 transition-all duration-300 shadow-[0_0_25px_rgba(168,85,247,0.08)]">
                <div className="absolute top-20 right-20 w-96 h-96 bg-purple-600/5 rounded-full blur-[150px]"></div>
                  <FaMapMarkerAlt className="text-purple-400 text-3xl mb-4" />

                  <h3 className="font-semibold text-lg">
                    Based In
                  </h3>

                  <p className="text-gray-400 text-sm mt-2">
                    Kasaragod,Kerala, India
                  </p>

                </div>

                {/* Card 3 */}
                <div className=" glass-card bg-white/[0.03] backdrop-blur-2xl border border-purple-500/20 rounded-2xl p-5 hover:border-purple-500 hover:-translate-y-2 transition-all duration-300 shadow-[0_0_25px_rgba(168,85,247,0.08)]">
                <div className="absolute top-20 right-20 w-96 h-96 bg-purple-600/5 rounded-full blur-[150px]"></div>  <div className="absolute top-20 right-20 w-96 h-96 bg-purple-600/5 rounded-full blur-[150px]"></div>
                  <FaCode className="text-purple-400 text-3xl mb-4" />

                  <h3 className="font-semibold text-lg">
                    Passionate About
                  </h3>

                  <p className="text-gray-400 text-sm mt-2">
                    ERP Development & Coding
                  </p>

                </div>

              </div>
              {/* Stats */}
<div className="grid grid-cols-4 gap-3 mt-8 pt-6 border-t border-purple-500/20">

  <div className="glass cardtext-center bg-white/[0.03] border border-purple-500/20 rounded-xl p-4 backdrop-blur-xl">
    <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent">
  5+
</h3>
    <p className="text-gray-400 text-sm">Projects</p>
  </div>

 <div className=" glass-card text-center bg-white/[0.03] border border-purple-500/20 rounded-xl p-4 backdrop-blur-xl">
    <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent">
  12+
</h3>
    <p className="text-gray-400 text-sm">Technologies</p>
  </div>

  <div className=" glass-card text center bg-white/[0.03] border border-purple-500/20 rounded-xl p-4 backdrop-blur-xl">
    <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent">
  3+
</h3>
    <p className="text-gray-400 text-sm">Years Learning</p>
  </div>

  <div className=" glass-card text-center bg-white/[0.03] border border-purple-500/20 rounded-xl p-4 backdrop-blur-xl">
    <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent">
  100%
</h3>
    <p className="text-gray-400 text-sm">Passion</p>
  </div>

</div>



            </div>

            {/* Right Side */}
            <div className="relative flex justify-end items-center overflow-hidden">

              {/* Purple Glow */}
              <div className="absolute w-[450px] h-[450px] bg-purple-500/5 rounded-full blur-[140px]"></div>

              {/* Fade Top */}
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#050816] to-transparent z-20"></div> 

              {/* Left Fade */}
              <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-[#050816] to-transparent z-20"></div>

              {/* Right Fade */}
              <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-[#050816] to-transparent z-20"></div>

              {/* Bottom Fade */}
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#050816] to-transparent z-20"></div>
            {/* Floating React */}
<motion.div
  className="absolute top-10 right-20 text-cyan-400 text-5xl z-20 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]"
  animate={{ y: [-10, 10, -10] }}
  transition={{ duration: 4, repeat: Infinity }}
  whileHover={{ scale: 1.2, rotate: 10 }}
>
  <SiReact />
</motion.div>

{/* Floating Python */}
<motion.div
  className="absolute top-18 left-12 text-yellow-400 text-5xl z-20 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]"
  animate={{ y: [10, -10, 10] }}
  transition={{ duration: 5, repeat: Infinity }}
  whileHover={{ scale: 1.2, rotate: 10 }}
>
  <SiPython />
</motion.div>

{/* Floating Next.js */}
<motion.div
  className="absolute bottom-14 left-13 text-white text-5xl z-20 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]"
  animate={{ y: [-8, 8, -8] }}
  transition={{ duration: 4.5, repeat: Infinity }}
  whileHover={{ scale: 1.2, rotate: 10 }}
>
  <SiNextdotjs />
</motion.div>

{/* Floating Flutter */}
<motion.div
  className="absolute bottom-16 right-16 text-sky-400 text-5xl z-20 drop-shadow-[0_0_20px_rgba(34,151,219,0.8)]"
  animate={{ y: [8, -8, 8] }}
  transition={{ duration: 5.5, repeat: Infinity }}
  whileHover={{ scale: 1.2, rotate: 10 }}
>
  <SiFlutter />
</motion.div>

{/* Floating AWS */}
<motion.div
  className="absolute top-1/2 right-8 text-orange-400 text-5xl z-20"
  animate={{ y: [-12, 12, -12] }}
  transition={{ duration: 6, repeat: Infinity }}
  whileHover={{ scale: 1.2, rotate: 10 }}
>
  <FaAws />
</motion.div>

{/* Floating Github */}
<motion.div
  className="absolute top-1/2 left-13 text-red-400 text-5xl z-20"
  animate={{ y: [-12, 12, -12] }}
  transition={{ duration: 6, repeat: Infinity }}
  whileHover={{ scale: 1.2, rotate: 10 }}
>
  <FaGithub />
</motion.div>
              <Image
                src="/images/compp.png"
                alt="Developer Illustration"
                width={750}
                height={750}
                priority
                className="relative z-10 object-contain animate-float drop-shadow-[0_0_40px_rgba(168,85,247,0.25)]"
              />

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}