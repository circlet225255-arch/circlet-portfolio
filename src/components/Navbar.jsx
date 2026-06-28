import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { circletBrandBadge, close, menu } from "../assets";
import { navLinks } from "../data";

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id) => {
    setActive(id);
    setToggle(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50% 0px'
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav
      className="w-full flex items-center bg-gradient-to-b from-black sm:bg-none p-8 sm:px-16 sm:py-10 fixed z-40 pointer-events-none"
    >
      <div className='w-full flex justify-between items-start mx-auto'>
        <Link
          to='/'
          className='flex items-start'
          onClick={(event) => {
            event.preventDefault();
            scrollToSection("hero");
          }}
        >
          <div className="pointer-events-auto cursor-pointer group relative rounded-[10px] border border-[#e96d5e]/70 bg-black/60 p-[2px] shadow-[0_0_22px_rgba(255,43,214,0.45)] backdrop-blur-md">
            <div className="absolute -inset-[1px] rounded-[10px] bg-[linear-gradient(120deg,rgba(25,247,255,0.8),rgba(255,43,214,0.9),rgba(255,243,64,0.7))] opacity-40 blur-[6px] transition-opacity duration-300 group-hover:opacity-80" />
            <img
              src={circletBrandBadge}
              alt="CircleT CRT brand"
              className="relative h-[36px] w-[122px] rounded-[8px] object-cover object-center sm:h-[46px] sm:w-[160px]"
            />
            <div className="pointer-events-none absolute inset-0 rounded-[10px] bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0)_42%)]" />
          </div>
        </Link>

        <ul className='list-none hidden sm:flex flex-col gap-5'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`relative flex items-center ${
                active === nav.id ? "text-[#fff4ec]" : "text-[#a09e7e]"
              } hover:text-[#ff9760] text-[16px] lg:text-[20px] font-bold pointer-events-auto cursor-pointer`}
              onClick={() => scrollToSection(nav.id)}
            >
              {active === nav.id && (
                <div className="fixed right-10 w-2 h-6 lg:h-8 bg-[#e96d5e] shadow-[0_0_18px_rgba(255,43,214,0.8)]"></div>
              )}
              <a href={`#${nav.id}`} onClick={(event) => event.preventDefault()}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain pointer-events-auto cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-30 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.id ? "text-quaternary" : "text-secondary"
                  }`}
                  onClick={() => scrollToSection(nav.id)}
                >
                  <a href={`#${nav.id}`} onClick={(event) => event.preventDefault()}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
