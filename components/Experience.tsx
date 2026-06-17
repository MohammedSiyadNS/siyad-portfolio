"use client";

import { useState } from "react";
import { GraduationCap, Laptop, Building2, School } from "lucide-react";
import { motion } from "framer-motion";

const roadmap = [
  {
    year: "2018",
    title: "SSLC",
    subtitle: "Thanbeehul  Islam HSS",
    extra: "Secondary Education",
    icon: <School size={30} />,
    description:
      "Completed secondary education and built a strong academic foundation.",
  },
  {
    year: "2020",
    title: "Computer Science",
    subtitle: "Higher Secondary",
    extra: "Secondary Education",
    icon: <Laptop size={30} />,
    description:
      "Studied Computer Science and developed interest in technology and programming.",
  },
  {
    year: "2023",
    title: "Diploma Civil",
    subtitle: " Govt Polytechnic Periya",
    extra:"CGPA:8.01%",
    icon: <Building2 size={30} />,
    description:
      "Completed Diploma in Civil Engineering and gained technical problem-solving skills.",
  },
  {
    year: "2026",
    title: "B.Tech IT",
    subtitle: "LBS College of Engineering",
    extra:"CGPA:8.13",
    icon: <GraduationCap size={30} />,
    description:
      "Graduated in Information Technology with focus on software development, web technologies and databases.",
  },
];

export default function Experience() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="experience"
      className="relative py-10 px-6 bg-[#050816] overflow-hidden"
    >
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
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-10">
          <p className="text-purple-400 uppercase tracking-[6px] text-sm">
            MY JOURNEY
          </p>
          <div className="mt-0 mb-0.5 mx-auto w-50 h-0.5 rounded-full bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.8)]"></div>
          <h2 className="text-5xl md:text-6xl font-bold mt-4">
            Learning
            <span className="text-purple-500"> Roadmap</span>
          </h2>

           <p className="text-gray-300 text-sm uppercase tracking-[3px] relative z-4 mt-6">
            Tap A Milestone To Explore My Learning Journey
          </p>
        </div>

        <div className="hidden md:flex items-center justify-center mb-12">
          <div className="flex items-center w-full max-w-5xl">

            <div className="w-5 h-5 rounded-full bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.8)]" />
            <div className="flex-1 h-[2px] bg-purple-500/40" />

            <div className="w-5 h-5 rounded-full bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.8)]" />
            <div className="flex-1 h-[2px] bg-purple-500/40" />

            <div className="w-5 h-5 rounded-full bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.8)]" />
            <div className="flex-1 h-[2px] bg-purple-500/40" />

            <div className="w-5 h-5 rounded-full bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.8)]" />

          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">

          {roadmap.map((item, index) => (
            <div
              key={index}
              onClick={() => {}}
              className="
                relative
                overflow-hidden
                cursor-pointer
                h-[270px]
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-3xl
                shadow-[0_8px_40px_rgba(168,85,247,0.12)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-purple-400/50
                hover:shadow-[0_0_45px_rgba(168,85,247,0.55)]
                p-6
                flex
                flex-col
                items-center
                justify-center
                text-center
              "
            >
              {/* Premium Glass Glow */}
<div
  className="
    absolute
    inset-[1px]
    rounded-[26px]
    border border-white/5
    bg-gradient-to-br
    from-white/[0.08]
    via-transparent
    to-purple-500/[0.06]
    pointer-events-none
  "
/>

{/* Top Shine */}
<div
  className="
    absolute
    top-0
    left-1/2
    -translate-x-1/2
    w-32
    h-[2px]
    bg-purple-400
    blur-md
    opacity-70
    pointer-events-none
  "
/>

{/* Corner Glow */}
<div
  className="
    absolute
    -top-20
    -right-20
    w-40
    h-40
    bg-purple-500/20
    rounded-full
    blur-3xl
    pointer-events-none
  "
/>

              {active === index ? (
  <>
    <p className="text-gray-300 leading-7 text-sm">
      {item.description}
    </p>

    <button
      onClick={(e) => {
        e.stopPropagation();
        setActive(null);
      }}
      className="
        mt-4
        px-4
        py-2
        rounded-xl
        bg-purple-500/10
        border border-purple-500/20
        text-purple-300
        text-sm
        hover:bg-purple-500/20
        transition-all
      "
    >
      Back
    </button>
  </>
) : (
  <>
    <div
  className="
  w-14 h-14
  rounded-2xl
  bg-purple-500/10
  border border-purple-500/20
  flex items-center justify-center
  mb-4
  shadow-[0_0_20px_rgba(168,85,247,0.25)]
"
>
  <div className="text-purple-400">
    {item.icon}
  </div>
</div>

    <div className="mb-3">
  <p className="text-purple-400 text-sm">
    {item.year}
  </p>

  <span
    className="
    mt-2 inline-block
    px-3 py-1
    rounded-full
    text-xs
    bg-green-500/10
    text-green-400
    border border-green-500/20
    "
  >
    Completed
  </span>
</div>
    <h3 className="text-2xl font-bold">
      {item.title}
    </h3>

    <p className="text-gray-300 mt-2 text-sm">
  {item.subtitle}
</p>

<p className="text-purple-300 text-xs mt-2">
  {item.extra}
</p>

    <button
      onClick={(e) => {
        e.stopPropagation();
        setActive(index);
      }}
      className="
        mt-4
        px-4
        py-2
        rounded-xl
        bg-purple-500/10
        border border-purple-500/20
        text-purple-300
        text-sm
        hover:bg-purple-500/20
        transition-all
      "
    >
      View Details
    </button>
  </>
)}

            </div>
          ))}

        </div>
      {/* Current Status */}
<div className="mt-8 max-w-3xl mx-auto">
  <div
    className="
  relative
  overflow-hidden
  rounded-[28px]
  border border-white/10
  bg-gradient-to-br from-white/[0.08] to-white/[0.03]
  backdrop-blur-3xl
  p-8
  text-center
  shadow-[0_0_25px_rgba(168,85,247,0.15)]
  hover:shadow-[0_0_60px_rgba(168,85,247,0.35)]
  transition-all duration-500
"
  >
    <div
  className="
    absolute
    inset-[1px]
    rounded-[26px]
    border border-white/5
    bg-gradient-to-br
    from-white/[0.08]
    via-transparent
    to-purple-500/[0.06]
    pointer-events-none
  "
/>

{/* Top Shine */}
<div
  className="
    absolute
    top-0
    left-1/2
    -translate-x-1/2
    w-32
    h-[2px]
    bg-purple-400
    blur-md
    opacity-70
    pointer-events-none
  "
/>

{/* Corner Glow */}
<div
  className="
    absolute
    -top-20
    -right-20
    w-40
    h-40
    bg-purple-500/20
    rounded-full
    blur-3xl
    pointer-events-none
  "
/>
    <p className="text-purple-400 text-sm uppercase tracking-[5px] relative z-10">
      CURRENT STATUS
    </p>

    <h3 className="text-2xl font-bold mt-3">
      B.Tech IT Graduate • 2026
    </h3>

    <p className="text-gray-300 text-sm uppercase tracking-[1px] mt-4 leading-7 relative z-8">
      Actively seeking opportunities in Software Development,
      Full Stack Development and AI-powered applications.
    </p>
  </div>
</div>
      </div>
    </section>
  );
}