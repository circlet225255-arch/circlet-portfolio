import { SpacemanCanvas } from ".";
import Position from "./Position";
import { heroCyberpunk } from "../assets";

const Hero = ({ scrollContainer }) => {
  return (
    <section className="parallax">
      <img className="hero-reference-bg" src={heroCyberpunk} alt="" />
      <div className="hero-scrim" />
      <div className="sun-disc" />
      <div className="poster-stripe" />

      <div className='parallax__content'>
        <div className="w-full min-w-0 max-w-4xl">
          <p className="mb-5 text-[13px] sm:text-[15px] font-bold tracking-[0.42em] uppercase text-[#ffb891]">
            Cyberpunk Event Portfolio
          </p>
          <h1 className='cyber-heading font-black text-[#fff4ec] text-[42px] xs:text-[58px] sm:text-[76px] md:text-[92px] xl:text-[108px] leading-[1.06]'>
            Đặng Hoàng Trường
          </h1>
          <Position />
          <p className="mt-14 max-w-2xl break-words text-[16px] sm:text-[20px] leading-8 text-[#ffe8d0]">
            Tôi thiết kế trải nghiệm sự kiện như một nhiệm vụ trong thành phố neon: có concept rõ, proposal sắc, vận hành chắc và media đủ mạnh để khách hàng nhớ lâu.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Proposal System", "Event Ops", "Signal Planning", "Media Archive"].map((item) => (
              <span key={item} className="cyber-pill rounded-full px-4 py-2 text-sm font-bold backdrop-blur-md">
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
