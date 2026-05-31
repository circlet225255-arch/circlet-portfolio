import { SpacemanCanvas } from ".";
import Position from "./Position";
import { styleCity } from "../assets";

const Hero = ({ scrollContainer }) => {
  return (
    <section className="parallax">
      <img className="hero-reference-bg" src={styleCity} alt="" />
      <div className="hero-scrim" />
      <div className="sun-disc" />
      <div className="poster-stripe" />

      <div className='parallax__content'>
        <div className="w-full min-w-0 max-w-4xl">
          <p className="mb-5 text-[13px] sm:text-[15px] font-bold tracking-[0.42em] uppercase text-[#6ee7d4]">
            Creative Event Portfolio
          </p>
          <h1 className='font-black text-[#fff6dc] text-[42px] xs:text-[58px] sm:text-[76px] md:text-[92px] xl:text-[108px] leading-[1.06] drop-shadow-[0_14px_34px_rgba(8,24,34,0.55)]'>
            Đặng Hoàng Trường
          </h1>
          <Position />
          <p className="mt-14 max-w-2xl break-words text-[16px] sm:text-[20px] leading-8 text-[#fff1d2]">
            Tôi xây dựng trải nghiệm sự kiện từ concept, proposal, kế hoạch truyền thông đến media delivery, với tinh thần hình ảnh cinematic và giàu cảm xúc.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Proposal Design", "Event Project", "Marketing Plan", "Media Direction"].map((item) => (
              <span key={item} className="rounded-full border border-[#fff0c2]/40 bg-[#05222b]/45 px-4 py-2 text-sm font-bold text-[#fff6dc] backdrop-blur-md">
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>

      <SpacemanCanvas scrollContainer={scrollContainer} />
    </section>
  );
};

export default Hero;
