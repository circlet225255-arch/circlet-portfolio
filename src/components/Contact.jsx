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
        <p className="mb-3 text-sm font-black uppercase tracking-[0.4em] text-[#ff9760]">Open Channel</p>
        <h3 className={styles.sectionText}>Contact</h3>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[#ffd4b0]">
          Nếu cần một event manager có tư duy creative, proposal mạnh và khả năng kéo dự án từ ý tưởng đến show day, hãy gửi tín hiệu cho tôi.
        </p>

        <form
          action="https://getform.io/f/8b086558-47d4-49d0-852d-ec8c22da40f7"
          method="POST"
          className="mt-12 gap-4 flex flex-col"
        >
          <span className='text-[#fff4ec] font-medium mt-3'>Full Name</span>
          <input
            type="text"
            name="name"
            placeholder="Tên của bạn"
            className="bg-[#2a2d4e]/80 p-4 text-[#fff4ec] border border-[#ff9760]/35 font-medium rounded-xl outline-none focus:border-[#e96d5e] focus:shadow-[0_0_28px_rgba(255,43,214,0.25)]"
          />
          <span className='text-[#fff4ec] font-medium mt-3'>Email Address</span>
          <input
            type="text"
            name="email"
            placeholder="Email liên hệ"
            className="bg-[#2a2d4e]/80 p-4 text-[#fff4ec] border border-[#ff9760]/35 font-medium rounded-xl outline-none focus:border-[#e96d5e] focus:shadow-[0_0_28px_rgba(255,43,214,0.25)]"
          />
          <span className='text-[#fff4ec] font-medium mt-3'>Message</span>
          <textarea
            name="message"
            placeholder="Nội dung bạn muốn trao đổi"
            rows="10"
            className="bg-[#2a2d4e]/80 p-4 text-[#fff4ec] border border-[#ff9760]/35 font-medium rounded-xl outline-none focus:border-[#e96d5e] focus:shadow-[0_0_28px_rgba(255,43,214,0.25)]"
          />
          <button
            type='submit'
            className='bg-[#ffe69d] py-3 px-8 w-fit text-[#2a2d4e] font-black shadow-[0_0_30px_rgba(255,222,70,0.35)] rounded-full'
          >
            Send Signal
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
