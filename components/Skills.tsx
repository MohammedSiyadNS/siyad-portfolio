"use client";
import { motion } from "framer-motion";
import react from "react";
import { DiPostgresql } from "react-icons/di";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFlutter,
  SiPython,
  SiJavascript,
  SiMysql,
  SiFirebase,
  SiGithub,
  SiGit,
  SiErpnext,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-16 px-6 bg-[#050816] overflow-hidden"
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
{/* Floating Tech Icons */}

<div className="absolute top-24 left-10 text-cyan-400/60 text-8xl animate-slow">
  <SiReact />
</div>

<div className="absolute top-24 right-10 text-white/50 text-7xl animate-slow">
  <SiNextdotjs />
</div>

<div className="absolute top-1/2 left-5 text-yellow-400/50 text-7xl animate-slow">
  <SiPython />
</div>

<div className="absolute bottom-24 left-10 text-white/60 text-8xl animate-slow">
  <SiGithub />
</div>

<div className="absolute bottom-20 right-10 text-blue-400/70 text-7xl animate-slow">
  <SiMysql />
</div>

<div className="absolute top-1/2 right-5 text-cyan-300/60 text-7xl animate-slow">
  <SiTailwindcss />
</div>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-purple-400 uppercase tracking-[5px] text-sm mb-4">
            MY SKILLS
          </p>
        <div className="mt-1 mb-0.5 mx-auto w-50 h-0.5 rounded-full bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.8)]"></div>
           <h2 className="text-4xl md:text-6xl font-bold mt-4">
  <span className="text-white">
    Technologies I
  </span>{" "}
  <span className="text-purple-500">
    Work With
  </span>
</h2>

          <p className=" uppercase tracking-[2px] text-smtext-gray-300 mt-6 max-w-1xl mx-auto">
            A Passionate Developer Who Loves Tech's
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-[0.8fr_2fr] gap-6">

          {/* Left Side */}
          <div>
            <div className="inline-block px-4 py-2 rounded-full border border-purple-500/30 text-purple-300 text-sm">
              ABOUT MY SKILLS
            </div>

            <h3 className="text-4xl font-bold mt-8 leading-tight">
              I Build With Modern Technologies And
              <span className="text-purple-500">
                {" "}BEST PRACTICES.
              </span>
            </h3><
            div className="mt-6 mb-6 w-70 h-0.5 rounded-full bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.8)]"></div>
            <p className=" uppercase tracking-[1px] text-smtext-gray-300 leading-6 max-w-md">
              I Enjoy Turning Ideas Into Real Products
              Using Clean code, Scalable Architecture
              And The Right Tools For The Job.
            </p>
          </div>

          {/* Right Side Cards */}
          <div className="text grid md:grid-cols-3 gap-4">

            <SkillCard
              title="Frontend"
              skills={["React", "Next.js", "Tailwind", "JavaScript"]}
              icons={[
            <SiReact className="text-cyan-400" />,
            <SiNextdotjs className="text-white" />,
          <SiTailwindcss className="text-sky-400" />,
          <SiJavascript className="text-yellow-400" />
          ]}
            />

            <SkillCard
              title="Backend"
              skills={["Python", "ERPNext", "Firebase", "Flutter"]}
              icons={[
  <SiPython className="text-yellow-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />,
  <SiErpnext className="text-blue-400drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />,
  <SiFirebase className="text-orange-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />,
  <SiFlutter className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
]}
            />

            <SkillCard
              title="Database"
              skills={["MySQL", "Firebase DB","Mongo DB","PostgreSQL"]}
              icons={[
  <SiMysql className="text-blue-500 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />,
  <SiFirebase className="text-orange-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />,
  <SiMongodb className="text-orange-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />,
  <SiPostgresql className="text-orange-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
]}
            />

            <SkillCard
              title="Tools"
              skills={["Git", "GitHub"]}
             icons={[
  <SiGit className="text-orange-500 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />,
  <SiGithub className="text-white drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
]}
            />

            <SkillCard
              title="Learning"
              skills={["Docker", "TypeScript", "AWS"]}
              icons={[
  <SiGit className="text-blue-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />,
  <SiJavascript className="text-blue-350 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />,
  <SiGithub className="text-orange-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
]}
            />

            <SkillCard
              title="Other"
              skills={["REST API", "VS Code", "Figma"]}
              icons={[
  <SiPython className="text-green-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />,
  <SiGithub className="text-blue-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />,
  <SiReact className="text-pink-400  drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
]}
            />

          </div>
        </div>

        {/* Stats */}

      </div>
    </section>
  );
}

function SkillCard({
  title,
  skills,
  icons,
}: {
  title: string;
  skills: string[];
  icons: React.ReactNode[];
}) {
  return (
    <div className="bg-white/[0.03] border border-purple-500/20 rounded-3xl p-4 backdrop-blur-xl hover:border-purple-500 transition">

      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      <div className="grid gap-2">

        {skills.map((skill, index) => (
          <div
            key={skill}
            className="flex items-center gap-3 bg-white/5 rounded-xl p-2.5 border border-white/10"
          >
            <div className="text-purple-400 text-xl">
              {icons[index]}
            </div>

            <span>{skill}</span>
          </div>
        ))}

      </div>

    </div>
  );
}

