"use client";
import { motion } from "framer-motion";
import image from "next/image";

const projects = [
  {
    title: "ERP System",
    image: "/projects/erp.PNG",
    description:
      "Complete ERP solution for Shop Management that works both online and offline. It includes inventory management, billing, and customer management features.",
    tech: ["React", "PostgressSQL", "Node.js", "Tailwind", "DBLITE"],
  },
  {
    title: "BATMAN Website",
    image: "/projects/batman.png",
    description:
      "Modern cinematic website for the Dark Knight.",
    tech: ["Next.js", "Tailwind","ViteProject"],
  },
  {
    title: "College Admission Chatbot",
    image: "/projects/chatbot.PNG",
    description:
      "AI chatbot helping students with admission process and queries.",
    tech: [ "Python", "XGboost","HTML","CSS","JavaScript"],
  },
  {
    title: "Portfolio Website",
    image: "/projects/port.PNG",
    description:
      "Modern personal portfolio with animations and glassmorphism.",
    tech: ["Next.js", "Tailwind"],
  },
  {
    title: "Farming Assistance Web Service",
    image: "/projects/farm.PNG",
    description:
      "E-commerce web service for farmers to sell their products and customers to directly buy from them without any middlemen.",
    tech: ["React", "Python", "MySQL"],
  },

  
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-[#050816] overflow-hidden"
    >
      {/* Background Glow */}
<div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[180px]" />

<div className="absolute bottom-[-200px] left-[-100px] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[180px]" />

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px]" />
 {/* Floating Particles */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  {[...Array(20)].map((_, i) => (
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
      <div className="max-w-8xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">

          <p className="text-purple-400 uppercase tracking-[5px] text-sm">
            MY PROJECTS
          </p>
          
          <div className="mt-0 mb-0.5 mx-auto w-50 h-0.5 rounded-full bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.8)]"></div>

          <h2 className="text-5xl md:text-6xl font-bold mt-4">
            Things I
            <span className="text-purple-500"> 've Built</span>
          </h2>

          <p className=" uppercase tracking-[3px] text-sm text-gray-300 mt-6 max-w-xl mx-auto">
             Projects That I Have Built During My Learning Journey.
          </p>

        </div>

        {/* Horizontal Scroll */}
<div className="overflow-hidden">


  <div
    className="
      projects-scroll
      w-screen
      relative
      left-1/2
      -translate-x-1/2
      flex
      gap-8
      overflow-x-auto
      px-24
      pb-4
    "
  >

          {projects.map((project, index) => (

            <div
              key={index}
              className="
                  min-w-[280px]
                  sm:min-w-[320px]
                  md:min-w-[350px]
                  max-w-[280px]
                  sm:max-w-[320px]
                  md:max-w-[350px]
                  snap-center
                  bg-white/[0.03]
                  border
                  border-purple-500/20
                  rounded-3xl
                  p-4
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-purple-400
                  hover:shadow-[0_0_35px_rgba(168,85,247,0.35)]
                  "
            >

              {/* Preview */}
              <div className="h-36 md:h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-black border border-purple-500/20 mb-6">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover"
                  />

              </div>

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-sm md:text-base line clamp-3 text-gray-400 leading-7 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">

                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-3
                      py-1
                      rounded-full
                      bg-purple-500/10
                      border
                      border-purple-500/20
                      text-purple-300
                      text-sm
                    "
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
      </div>
    </section>
  );
}