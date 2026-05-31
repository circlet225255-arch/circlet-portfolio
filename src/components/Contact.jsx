import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const Contact = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  return (
    <div
      className="md:m-12 md:px-48 flex flex-col sm:flex-row gap-10 overflow-hidden"
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {
            opacity: 0,
            y: 100,
          },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              type: "tween",
              duration: 1,
              delay: 0.2,
            },
          },
        }}
        className='flex-[0.8] md:pb-40 mx-4 sm:mx-auto'
      >
        <p className="mb-3 text-sm font-black uppercase tracking-[0.4em] text-[#6ee7d4]">Let's build</p>
        <h3 className={styles.sectionText}>Contact</h3>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[#cce4dd]">
          Nếu cần một event manager có tư duy creative, proposal mạnh và khả năng kéo dự án từ ý tưởng đến show day, hãy để lại lời nhắn.
        </p>

        <form
          action="https://getform.io/f/8b086558-47d4-49d0-852d-ec8c22da40f7"
          method="POST"
          className="mt-12 gap-4 flex flex-col"
        >
          <span className='text-[#fff6dc] font-medium mt-3'>Full Name</span>
          <input
            type="text"
            name="name"
            placeholder="Tên của bạn"
            className="bg-[#062731]/80 p-4 text-[#fff6dc] border border-[#f5d79c]/30 font-medium rounded-xl"
          />
          <span className='text-[#fff6dc] font-medium mt-3'>Email Address</span>
          <input
            type="text"
            name="email"
            placeholder="Email liên hệ"
            className="bg-[#062731]/80 p-4 text-[#fff6dc] border border-[#f5d79c]/30 font-medium rounded-xl"
          />
          <span className='text-[#fff6dc] font-medium mt-3'>Message</span>
          <textarea
            name="message"
            placeholder="Nội dung bạn muốn trao đổi"
            rows="10"
            className="bg-[#062731]/80 p-4 text-[#fff6dc] border border-[#f5d79c]/30 font-medium rounded-xl"
          />
          <button
            type='submit'
            className='bg-[#f0b86a] py-3 px-8 w-fit text-[#092a32] font-black shadow-md shadow-primary rounded-full'
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
