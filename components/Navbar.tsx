"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";


export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isOpen,setIsOpen] = useState(false);

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "skills",
      "projects",
      "experience",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActive(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-2.5 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-3xl font-black tracking-tight transition-all duration-300 hover:scale-105">
          <span className="text-white">M</span>
          <span className="text-purple-500 drop-shadow-[0_0_8px_rgba(168,85,247,0.35)]">
            S
          </span>
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">

          <li>
            <a
              href="#home"
              className={`transition-all duration-300 ${
                active === "home"
                  ? "text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                  : "hover:text-purple-400 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]"
              }`}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className={`transition-all duration-300 ${
                active === "about"
                  ? "text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                  : "hover:text-purple-400 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]"
              }`}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className={`transition-all duration-300 ${
                active === "skills"
                  ? "text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                  : "hover:text-purple-400 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]"
              }`}
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className={`transition-all duration-300 ${
                active === "projects"
                  ? "text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                  : "hover:text-purple-400 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]"
              }`}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#experience"
              className={`transition-all duration-300 ${
                active === "experience"
                  ? "text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                  : "hover:text-purple-400 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]"
              }`}
            >
              Experience
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={`transition-all duration-300 ${
                active === "contact"
                  ? "text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                  : "hover:text-purple-400 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]"
              }`}
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Button */}
        
        <div className="flex items-center gap-3">

          <a
            href="#contact"
            className="
              bg-purple-600
              hover:bg-purple-500
              hover:shadow-[0_0_25px_rgba(168,85,247,0.8)]
              hover:scale-105
              transition-all
              duration-300
              px-5
              py-2
              rounded-xl
              font-medium
            "
          >
            Let's Talk
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

      </div>
      {isOpen && (
  <div className="md:hidden bg-[#050816]/95 backdrop-blur-xl border-t border-white/10">

    <div className="flex flex-col items-center py-6 gap-6">

      <a href="#home" onClick={() => setIsOpen(false)}>
        Home
      </a>

      <a href="#about" onClick={() => setIsOpen(false)}>
        About
      </a>

      <a href="#skills" onClick={() => setIsOpen(false)}>
        Skills
      </a>

      <a href="#projects" onClick={() => setIsOpen(false)}>
        Projects
      </a>

      <a href="#experience" onClick={() => setIsOpen(false)}>
        Experience
      </a>

      <a href="#contact" onClick={() => setIsOpen(false)}>
        Contact
      </a>

    </div>

  </div>
)}
    </nav>
  );
}