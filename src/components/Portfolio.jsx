import { motion } from "framer-motion";
import React from "react";

import {
  careerModules,
  educationStats,
  hobbies,
  personalProfile,
  softSkills,
  storyChapters,
} from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

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

const InfoPanel = ({ eyebrow, title, children, className = "" }) => (
  <motion.section variants={fadeIn("up", "spring", 0.08, 0.85)} className={`profile-panel ${className}`}>
    <span className="profile-panel__eyebrow">{eyebrow}</span>
    <h3>{title}</h3>
    {children}
  </motion.section>
);

const CareerModule = ({ module, index }) => (
  <motion.article variants={fadeIn("up", "spring", index * 0.07, 0.85)} className="career-module">
    <img src={module.image} alt="" className="career-module__image" />
    <div className="career-module__shade" />
    <div className="career-module__content">
      <span>{module.tag}</span>
      <h4>{module.name}</h4>
      <p>{module.description}</p>
    </div>
  </motion.article>
);

const Portfolio = () => {
  const [operatorChapter] = storyChapters;

  return (
    <div className='sand-grid text-center md:text-left md:px-20 lg:px-40'>
      <motion.div variants={textVariant()}>
        <p className="mb-3 text-sm font-black uppercase tracking-[0.4em] text-[#ff9760]">Mission Logs</p>
        <h2 className={`${styles.sectionText}`}>A Portfolio Told In Neon Chapters</h2>
        <p className="mt-5 max-w-3xl text-[#ffd4b0] text-base sm:text-lg leading-8">
          Bộ ảnh bạn cung cấp được chuyển thành những trang truyện cyberpunk: mỗi khung là một nhiệm vụ, mỗi kỹ năng là một tín hiệu dẫn khách hàng đi qua thế giới sự kiện của CircleT.
        </p>
      </motion.div>

      <div className="storybook-grid mt-10 md:mt-16">
        <StoryPanel chapter={operatorChapter} index={0} />
      </div>

      <motion.div variants={textVariant()} className="mt-20 md:mt-28">
        <p className="mb-3 text-sm font-black uppercase tracking-[0.4em] text-[#ff9760]">Identity Database</p>
        <h2 className={`${styles.sectionText}`}>Creative Profile System</h2>
        <p className="mt-5 max-w-3xl text-[#ffd4b0] text-base sm:text-lg leading-8">
          Thông tin được sắp xếp lại như một hồ sơ nghề nghiệp: ưu tiên năng lực Creative, event, media và digital để khách hàng đọc nhanh đúng thế mạnh của bạn.
        </p>
      </motion.div>

      <div className="profile-grid mt-10 md:mt-16">
        <InfoPanel eyebrow="Personal ID" title="Giới thiệu bản thân" className="profile-panel--wide">
          <div className="profile-facts">
            {personalProfile.map((item) => (
              <div key={item.label} className="profile-fact">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </InfoPanel>

        <InfoPanel eyebrow="Soft Skills" title="Các kỹ năng mềm">
          <ul className="profile-list">
            {softSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </InfoPanel>

        <InfoPanel eyebrow="Education" title="Học vấn">
          <div className="education-grid">
            {educationStats.map((item) => (
              <div key={item.label} className="education-stat">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </InfoPanel>

        <InfoPanel eyebrow="Interests" title="Sở thích" className="profile-panel--hobbies">
          <div className="hobby-chips">
            {hobbies.map((hobby) => (
              <span key={hobby}>{hobby}</span>
            ))}
          </div>
        </InfoPanel>
      </div>

      <motion.div variants={textVariant()} className="mt-20 md:mt-28">
        <p className="mb-3 text-sm font-black uppercase tracking-[0.4em] text-[#ff9760]">Priority Work</p>
        <h2 className={`${styles.sectionText}`}>Cyber Creative Toolkit</h2>
      </motion.div>

      <div className="career-grid mt-10 md:mt-16">
        {careerModules.map((module, index) => (
          <CareerModule key={module.name} module={module} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Portfolio, "portfolio");
