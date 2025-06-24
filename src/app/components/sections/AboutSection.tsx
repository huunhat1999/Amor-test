'use client';

import Link from 'next/link';
import { DocumentTextIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-center mb-12">QUÊN HẾT MỌI MỆT NHỌC Ở AMOR</h2>
        
        <div className="max-w-3xl mx-auto text-center space-y-6 text-gray-600">
          <p>
            Khám phá góc nhỏ bình yên giữa lòng Sài Gòn, nơi bạn tìm thấy sự thư thái và nguồn năng lượng mới. 
            Amor Thảo Mộc mang đến trải nghiệm chăm sóc sắc đẹp, thư giãn cơ thể và tâm hồn trong không gian 
            tràn ngập hương thơm dịu nhẹ của thảo mộc.
          </p>
          <p>
            Mỗi dịch vụ là một bản giao hưởng giữa tinh hoa cổ truyền và kỹ thuật hiện đại. 
            Chúng tôi mang đến trải nghiệm dưỡng sinh đỉnh cao, giúp bạn thư thái và tái tạo năng lượng một cách trọn vẹn.
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-12">
          <Link
            href="/menu"
            className="flex items-center gap-2 bg-[#9c5a5a] text-white px-8 py-3 rounded-full hover:bg-[#8a4f4f] transition-all duration-300"
          >
            <DocumentTextIcon className="h-5 w-5" />
            Xem Menu
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 border border-[#9c5a5a] text-[#9c5a5a] px-8 py-3 rounded-full hover:bg-[#9c5a5a] hover:text-white transition-all duration-300"
          >
            <ChatBubbleBottomCenterTextIcon className="h-5 w-5" />
            Liên hệ ngay
          </Link>
        </div>
      </div>
    </section>
  );
} 