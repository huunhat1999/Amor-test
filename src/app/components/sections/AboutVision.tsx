import Image from 'next/image';

export default function AboutVision() {
  return (
    <section className="relative w-full bg-[#FFEEE2] text-[#3a2c2c] py-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-light tracking-[0.2em] text-[#3a2c2c]">Tầm Nhìn</h2>
              <p className="text-[#3a2c2c]/80 leading-relaxed">
                Trở thành thương hiệu khỏe đẹp uy tín hàng đầu Việt Nam
              </p>
            </div>
            <div className="relative h-[400px] w-full">
              <Image
                src="/abouts/vision.webp"
                alt="Amor Spa Vision"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-light tracking-[0.2em] text-[#3a2c2c]">Sứ mệnh</h2>
              <p className="text-[#3a2c2c]/80 leading-relaxed">
                Chúng tôi tạo ra giá trị bền vững cho ngành spa giúp cho hàng nghìn khách hàng 
                khỏe đẹp an toàn từ các sản phẩm thiên nhiên
              </p>
            </div>
            <div className="relative h-[400px] w-full">
              <Image
                src="/abouts/mission.webp"
                alt="Amor Spa Mission"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 