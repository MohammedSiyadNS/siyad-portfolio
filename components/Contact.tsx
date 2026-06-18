"use client";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MessageCircle,
  GitBranch,
  User,
  MapPin,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 px-6 bg-[#050816] overflow-hidden"
    >
       {/* Background Glow */}
<div className="absolute bottom-[-200px] left-[-100px] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[180px]" />

<div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[180px]" />

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
      

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          
          <p className="text-purple-400 uppercase tracking-[6px] text-sm">
            CONTACT
          </p>

          <div className="mt-0 mb-0.5 mx-auto w-50 h-0.5 rounded-full bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.8)]"></div>
          <h2 className="text-5xl md:text-6xl font-bold mt-4">
            Let's
            <span className="text-purple-500"> Connect</span>
          </h2>
          
          <p className="text-gray-300 text-sm uppercase tracking-[3px] relative z-4 mt-6 max-w-2xl mx-auto">
            Feel free to reach out for opportunities, collaborations,
            projects or just a friendly conversation.
          </p>
        </div>

        <div className="flex justify-center mt-6 mb-10">
  <a
  href="/resume.pdf"
  download
  className="
    relative
    inline-flex
    items-center
    gap-2
    px-8
    py-4
    rounded-2xl

    bg-white/[0.08]
    backdrop-blur-3xl

    border
    border-white/10

    text-white
    font-semibold

    shadow-[0_8px_32px_rgba(168,85,247,0.25)]

    hover:-translate-y-1
    hover:border-purple-400/50
    hover:shadow-[0_0_45px_rgba(168,85,247,0.45)]

    transition-all
    duration-300

    overflow-hidden
  "
>
  {/* Shine Effect */}
  <span
    className="
      absolute
      inset-0
      bg-gradient-to-br
      from-white/10
      via-transparent
      to-purple-500/10
      pointer-events-none
    "
  />

  {/* Top Glow Line */}
  <span
    className="
      absolute
      top-0
      left-1/2
      -translate-x-1/2
      w-24
      h-[2px]
      bg-purple-400
      blur-sm
    "
  />

  📄 Download Resume
</a>
</div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">

          {/* Email */}
          <a
            href="mailto:siyadpovval@gmail.com"
            className="
relative
overflow-hidden
rounded-[28px]
border
border-white/10
bg-white/[0.04]
backdrop-blur-3xl
shadow-[0_8px_40px_rgba(0,0,0,0.45)]
transition-all
duration-500
hover:-translate-y-2
hover:border-purple-400/50
hover:shadow-[0_0_45px_rgba(168,85,247,0.35)]
p-6
"
          >{/* Premium Glass Glow */}
<div
  className="
    absolute inset-0
    rounded-[28px]
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
    absolute top-0 left-1/2
    -translate-x-1/2
    w-32 h-[2px]
    bg-purple-400
    blur-md
    opacity-70
    pointer-events-none
  "
/>

{/* Corner Glow */}
<div
  className="
    absolute -top-20 -right-20
    w-40 h-40
    bg-purple-500/20
    rounded-full
    blur-3xl
    pointer-events-none
  "
/>

{/* Inner Border */}
<div
  className="
    absolute inset-[1px]
    rounded-[26px]
    border border-white/5
    pointer-events-none
  "
/>
            <Mail className="text-purple-400 mb-4" size={30} />
            <h3 className="text-xl font-bold">Email</h3>
            <p className="text-gray-400 mt-2">
              siyadpovval@gmail.com
            </p>
          </a>

          {/* Phone */}
          <a
            href="tel:+918921980155"
            className="
relative
overflow-hidden
rounded-[28px]
border
border-white/10
bg-white/[0.04]
backdrop-blur-3xl
shadow-[0_8px_40px_rgba(0,0,0,0.45)]
transition-all
duration-500
hover:-translate-y-2
hover:border-purple-400/50
hover:shadow-[0_0_45px_rgba(168,85,247,0.35)]
p-6
">{/* Premium Glass Glow */}
<div
  className="
    absolute inset-0
    rounded-[28px]
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
    absolute top-0 left-1/2
    -translate-x-1/2
    w-32 h-[2px]
    bg-purple-400
    blur-md
    opacity-70
    pointer-events-none
  "
/>

{/* Corner Glow */}
<div
  className="
    absolute -top-20 -right-20
    w-40 h-40
    bg-purple-500/20
    rounded-full
    blur-3xl
    pointer-events-none
  "
/>

{/* Inner Border */}
<div
  className="
    absolute inset-[1px]
    rounded-[26px]
    border border-white/5
    pointer-events-none
  "
/>
            <Phone className="text-purple-400 mb-4" size={30} />
            <h3 className="text-xl font-bold">Phone</h3>
            <p className="text-gray-400 mt-2">
              +91 8921980155
            </p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/918921980155"
            target="_blank"
            rel="noopener noreferrer"
           className="
relative
overflow-hidden
rounded-[28px]
border
border-white/10
bg-white/[0.04]
backdrop-blur-3xl
shadow-[0_8px_40px_rgba(0,0,0,0.45)]
transition-all
duration-500
hover:-translate-y-2
hover:border-purple-400/50
hover:shadow-[0_0_45px_rgba(168,85,247,0.35)]
p-6
">{/* Premium Glass Glow */}
<div
  className="
    absolute inset-0
    rounded-[28px]
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
    absolute top-0 left-1/2
    -translate-x-1/2
    w-32 h-[2px]
    bg-purple-400
    blur-md
    opacity-70
    pointer-events-none
  "
/>

{/* Corner Glow */}
<div
  className="
    absolute -top-20 -right-20
    w-40 h-40
    bg-purple-500/20
    rounded-full
    blur-3xl
    pointer-events-none
  "
/>

{/* Inner Border */}
<div
  className="
    absolute inset-[1px]
    rounded-[26px]
    border border-white/5
    pointer-events-none
  "
/>
            <MessageCircle
              className="text-green-400 mb-4"
              size={30}
            />

            <h3 className="text-xl font-bold">
              WhatsApp
            </h3>

            <p className="text-gray-400 mt-2">
              Chat Directly
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/MohammedSiyadNS"
            target="_blank"
            rel="noopener noreferrer"
            className="
relative
overflow-hidden
rounded-[28px]
border
border-white/10
bg-white/[0.04]
backdrop-blur-3xl
shadow-[0_8px_40px_rgba(0,0,0,0.45)]
transition-all
duration-500
hover:-translate-y-2
hover:border-purple-400/50
hover:shadow-[0_0_45px_rgba(168,85,247,0.35)]
p-6
">{/* Premium Glass Glow */}
<div
  className="
    absolute inset-0
    rounded-[28px]
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
    absolute top-0 left-1/2
    -translate-x-1/2
    w-32 h-[2px]
    bg-purple-400
    blur-md
    opacity-70
    pointer-events-none
  "
/>

{/* Corner Glow */}
<div
  className="
    absolute -top-20 -right-20
    w-40 h-40
    bg-purple-500/20
    rounded-full
    blur-3xl
    pointer-events-none
  "
/>

{/* Inner Border */}
<div
  className="
    absolute inset-[1px]
    rounded-[26px]
    border border-white/5
    pointer-events-none
  "
/>
            <GitBranch className="text-purple-400 mb-4" size={30} />

            <h3 className="text-xl font-bold">
              GitHub
            </h3>

            <p className="text-gray-400 mt-2">
              View My Projects
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/siyadns"
            target="_blank"
            rel="noopener noreferrer"
            className="
relative
overflow-hidden
rounded-[28px]
border
border-white/10
bg-white/[0.04]
backdrop-blur-3xl
shadow-[0_8px_40px_rgba(0,0,0,0.45)]
transition-all
duration-500
hover:-translate-y-2
hover:border-purple-400/50
hover:shadow-[0_0_45px_rgba(168,85,247,0.35)]
p-6
">{/* Premium Glass Glow */}
<div
  className="
    absolute inset-0
    rounded-[28px]
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
    absolute top-0 left-1/2
    -translate-x-1/2
    w-32 h-[2px]
    bg-purple-400
    blur-md
    opacity-70
    pointer-events-none
  "
/>

{/* Corner Glow */}
<div
  className="
    absolute -top-20 -right-20
    w-40 h-40
    bg-purple-500/20
    rounded-full
    blur-3xl
    pointer-events-none
  "
/>

{/* Inner Border */}
<div
  className="
    absolute inset-[1px]
    rounded-[26px]
    border border-white/5
    pointer-events-none
  "
/>
            <User
              className="text-purple-400 mb-4"
              size={30}
            />

            <h3 className="text-xl font-bold">
              LinkedIn
            </h3>

            <p className="text-gray-400 mt-2">
              Connect With Me
            </p>
          </a>

          {/* Location */}
          <div
           className="
relative
overflow-hidden
rounded-[28px]
border
border-white/10
bg-white/[0.04]
backdrop-blur-3xl
shadow-[0_8px_40px_rgba(0,0,0,0.45)]
transition-all
duration-500
hover:-translate-y-2
hover:border-purple-400/50
hover:shadow-[0_0_45px_rgba(168,85,247,0.35)]
p-6
">{/* Premium Glass Glow */}
<div
  className="
    absolute inset-0
    rounded-[28px]
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
    absolute top-0 left-1/2
    -translate-x-1/2
    w-32 h-[2px]
    bg-purple-400
    blur-md
    opacity-70
    pointer-events-none
  "
/>

{/* Corner Glow */}
<div
  className="
    absolute -top-20 -right-20
    w-40 h-40
    bg-purple-500/20
    rounded-full
    blur-3xl
    pointer-events-none
  "
/>

{/* Inner Border */}
<div
  className="
    absolute inset-[1px]
    rounded-[26px]
    border border-white/5
    pointer-events-none
  "
/>
            <MapPin
              className="text-purple-400 mb-4"
              size={30}
            />

            <h3 className="text-xl font-bold">
              Location
            </h3>

            <p className="text-gray-400 mt-2">
              Kasaragod, Kerala, India
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}