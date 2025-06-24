import Image from 'next/image';

export default function AboutFounder() {
  return (
    <section className="relative w-full bg-[#FFEEE2] text-[#3a2c2c] py-20 font-montserrat">
      <div className="max-w-[1440px] mx-auto px-4 md:px-16">
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-[500px] md:max-w-none mb-10">
            <div className="aspect-[2] md:aspect-[2] relative">
              <Image
                src="/abouts/founder.webp"
                alt="Ty Anh Nguyen - Founder"
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
          </div>

          <div className="max-w-[800px] mx-auto">
            <div className="space-y-8">
              <h2 className="text-2xl md:text-[32px] font-serif text-[#8a5a4a] uppercase text-center leading-normal">
                MẾN CHÀO QUÝ KHÁCH,<br />
                <span className="block mt-1">TÔI LÀ TY ANH NGUYỄN</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-[#3a2c2c]/80 leading-relaxed text-base md:text-lg">
                <div className="space-y-6">
                  <p>
                    Là nhà sáng lập Amor Thảo Mộc từ 2019, với kinh nghiệm hơn 15 năm gắn bó với lĩnh vực sức khỏe và sắc đẹp, tôi đã không ngừng học hỏi, nghiên cứu và vinh dự trở thành người đồng hành đáng tin cậy của hàng trăm phụ nữ Việt trên hành trình tìm về vẻ đẹp tự nhiên, sự cân bằng từ sâu bên trong.
                  </p>
                  <p>
                    Amor Spa không chỉ là một tâm huyết mà còn hiện thực hóa tầm nhìn của tôi về một nơi mà vẻ đẹp được kiến tạo an toàn và bền vững. Chúng tôi đặt trọn tình yêu, niềm đam mê và tâm huyết vào từng liệu trình,
                  </p>
                </div>
                <div>
                  <p className='pb-10'>
                    từng dịch vụ, với mong muốn mang đến vẻ đẹp từ gốc cho quý khách hàng.
                  </p>
                  <p>
                    Tại Amor Spa, chữ tín là kim chỉ nam cho mọi hoạt động, từ sự tận tâm trong phục vụ đến sự chuyển mình linh hoạt trong việc liên tục đổi mới, kết hợp hài hòa giữa tinh hoa truyền thống và những phương pháp hiện đại nhất. Chúng tôi cam kết sẽ là nơi bạn tìm thấy sự bình yên, tái tạo năng lượng và kiến tạo nên phiên bản khỏe đẹp, rạng ngời nhất của chính mình.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}