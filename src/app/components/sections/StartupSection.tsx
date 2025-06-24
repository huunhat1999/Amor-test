'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

export default function StartupSection() {
  return (
    <section className="py-20 bg-[#f9f5f2]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[600px] rounded-2xl overflow-hidden">
            <Image
              src="/images/business.jpg"
              alt="Business opportunity"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="space-y-8">
            <h2 className="text-4xl font-serif">
              BẮT ĐẦU TỪ ĐAM MÊ,<br />
              KINH DOANH TỪ SỰ TỰ TIN
            </h2>
            
            <p className="text-gray-600">
              Bạn yêu thích lĩnh vực chăm sóc sắc đẹp và mong muốn bắt đầu kinh doanh spa, 
              nhưng lại e ngại về rủi ro tài chính và thiếu kinh nghiệm? AMOR Spa mang đến 
              giải pháp hoàn hảo dành cho bạn với mô hình nhượng quyền spa thông minh, chi phí tối ưu.
            </p>

            <div className="flex gap-6">
              <Link
                href="/startup"
                className="flex items-center gap-2 bg-[#9c5a5a] text-white px-8 py-3 rounded-full hover:bg-[#8a4f4f] transition-all duration-300"
              >
                <ArrowRightIcon className="h-5 w-5" />
                Khám phá thêm
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
        </div>
      </div>
    </section>
  );
} 