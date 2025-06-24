'use client';

import Image from 'next/image';


export default function HeroSection() {
  return (
    <section className="relative w-full h-[598px] md:h-[600px]">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/banners/banner.webp"
          alt="Amor Spa - Nơi lưu giữ bình yên"
          fill
          className="object-cover "
          priority
          quality={100}
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-black/30" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        <div className="text-center ">
          <h1 className="text-[24px] md:text-[40px] font-serif tracking-[0.2em] text-white font-light ">
            AMOR THẢO MỘC
          </h1>
          <h1 className="text-[24px] md:text-[40px] font-serif tracking-[0.2em] text-white font-light mb-16">
            NƠI LƯU GIỮ BÌNH YÊN
          </h1>
        </div>
      </div>
    </section>
  );
} 