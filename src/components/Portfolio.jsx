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
      <div className='relative w-full md:w-3/5 overflow-hidden rounded-[28px] border border-[#f5d79c]/20 bg-[#08242d]'>
        <img
          src={image}
          alt='project_image'
          className='h-[300px] w-full object-cover opacity-90'
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#031920]/75 via-transparent to-[#ff5a1f]/24" />
        <div className="absolute bottom-5 left-5 rounded-full border border-[#fff6dc]/40 bg-[#031920]/55 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-[#fff6dc] backdrop-blur-md">
          Creative Case
        </div>
      </div>

      <div className={`w-full md:w-2/5 px-6 md:p-16 flex flex-col justify-center ${isEven ? "text-left md:text-left" : "text-left md:text-right"}`}>
        <span className="mb-4 text-sm font-black uppercase tracking-[0.32em] text-[#6ee7d4]">0{index + 1}</span>
        <h3 className='text-[#fff6dc] font-black text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:text-5xl leading-tight'>{name}</h3>
        <p className='mt-4 text-[#cce4dd] text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl leading-7'>{description}</p>
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
      <img src={chapter.image} alt="" className="story-panel__image" />
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
        <p className="mb-3 text-sm font-black uppercase tracking-[0.4em] text-[#6ee7d4]">Visual Story</p>
        <h2 className={`${styles.sectionText}`}>A Portfolio Told In Chapters</h2>
        <p className="mt-5 max-w-3xl text-[#cce4dd] text-base sm:text-lg leading-8">
          Tôi dùng bộ ảnh bạn cung cấp như những trang truyện: mở đầu bằng không gian, đi qua proposal, vận hành, truyền thông và kết lại bằng media.
        </p>
      </motion.div>

      <div className="storybook-grid mt-10 md:mt-16">
        {storyChapters.map((chapter, index) => (
          <StoryPanel key={chapter.title} chapter={chapter} index={index} />
        ))}
      </div>

      <motion.div variants={textVariant()} className="mt-20 md:mt-28">
        <p className="mb-3 text-sm font-black uppercase tracking-[0.4em] text-[#6ee7d4]">Core Skills</p>
        <h2 className={`${styles.sectionText}`}>Creative Toolkit</h2>
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
