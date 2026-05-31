import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { portfolio, storyChapters } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  image,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn("up", "spring", 0, 0.75)}
      className={`skill-card w-full mt-[-2px] flex flex-col md:flex-row ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-5`}
    >
        <div className='cyber-frame relative w-full md:w-3/5 overflow-hidden rounded-[18px] bg-[#061026]'>
          <img
            src={image}
            alt='project_image'
            className='h-[300px] w-full object-cover opacity-80 saturate-150 contrast-125'
          />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#030617]/88 via-[#121236]/18 to-[#ff2bd6]/32" />
        <div className="absolute bottom-5 left-5 rounded-full border border-[#19f7ff]/45 bg-[#030617]/68 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-[#f7fbff] shadow-[0_0_26px_rgba(25,247,255,0.25)] backdrop-blur-md">
          Mission Case
        </div>
      </div>

      <div className={`w-full md:w-2/5 px-6 md:p-16 flex flex-col justify-center ${isEven ? "text-left md:text-left" : "text-left md:text-right"}`}>
        <span className="mb-4 text-sm font-black uppercase tracking-[0.32em] text-[#19f7ff]">0{index + 1}</span>
        <h3 className='text-[#f7fbff] font-black text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:text-5xl leading-tight drop-shadow-[0_0_18px_rgba(25,247,255,0.32)]'>{name}</h3>
        <p className='mt-4 text-[#bceef4] text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl leading-7'>{description}</p>
      </div>
    </motion.div>
  );
};

const StoryPanel = ({ chapter, index }) => {
  const isLead = index === 0;

  return (
    <motion.article
      variants={fadeIn("up", "spring", index * 0.08, 0.9)}
      className={`story-panel ${isLead ? "story-panel--lead" : ""}`}
    >
      <img src={chapter.image} alt="" className="story-panel__image cyber-image" />
      <div className="story-panel__shade" />
      <div className="story-panel__content">
        <span>{chapter.eyebrow}</span>
        <h3>{chapter.title}</h3>
        <p>{chapter.description}</p>
      </div>
    </motion.article>
  );
};

const Portfolio = () => {
  return (
    <div className='sand-grid text-center md:text-left md:px-20 lg:px-40'>
      <motion.div variants={textVariant()}>
        <p className="mb-3 text-sm font-black uppercase tracking-[0.4em] text-[#19f7ff]">Mission Logs</p>
        <h2 className={`${styles.sectionText}`}>A Portfolio Told In Neon Chapters</h2>
        <p className="mt-5 max-w-3xl text-[#bceef4] text-base sm:text-lg leading-8">
          Bộ ảnh bạn cung cấp được chuyển thành những trang truyện cyberpunk: mỗi khung là một nhiệm vụ, mỗi kỹ năng là một tín hiệu dẫn khách hàng đi qua thế giới sự kiện của CircleT.
        </p>
      </motion.div>

      <div className="storybook-grid mt-10 md:mt-16">
        {storyChapters.map((chapter, index) => (
          <StoryPanel key={chapter.title} chapter={chapter} index={index} />
        ))}
      </div>

      <motion.div variants={textVariant()} className="mt-20 md:mt-28">
        <p className="mb-3 text-sm font-black uppercase tracking-[0.4em] text-[#19f7ff]">Core Skills</p>
        <h2 className={`${styles.sectionText}`}>Cyber Creative Toolkit</h2>
      </motion.div>

      <div className='mt-10 md:mt-16 flex flex-col gap-10 md:gap-20'>
        {portfolio.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Portfolio, "portfolio");
