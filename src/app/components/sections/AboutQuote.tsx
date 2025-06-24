import Image from 'next/image';

export default function AboutQuote() {
  return (
    <section className="relative w-full min-h-screen bg-[#FFEEE2] text-[#3a2c2c] py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-4xl font-light tracking-[0.2em] text-[#3a2c2c] uppercase">Ty Anh Nguyen</h2>
              <blockquote className="text-[#3a2c2c]/80 text-lg leading-relaxed italic">
                "Tôi luôn tin rằng khi phụ nữ biết yêu thương và chăm sóc bản thân, họ không chỉ làm đẹp cho chính mình 
                mà còn truyền cảm hứng và hạnh phúc đến mọi người xung quanh. Vẻ đẹp đích thực không chỉ là bề ngoài, 
                mà là ánh sáng từ bên trong."
              </blockquote>
              <p className="text-[#3a2c2c] text-lg font-light tracking-[0.1em]">- Ty Anh Nguyễn</p>
            </div>
          </div>

          <div className="relative h-[700px] w-full">
            <Image
              src="/abouts/founder.webp"
              alt="Ty Anh Nguyen Quote"
              fill
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 