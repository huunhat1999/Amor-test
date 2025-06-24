'use client';

import Image from 'next/image';
import Link from 'next/link';
import { DocumentTextIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

export default function ContactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[600px] rounded-2xl overflow-hidden">
            <Image
              src="/images/contact.jpg"
              alt="Amor spa contact"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="space-y-8">
            <h2 className="text-4xl font-serif">
              YÊU MÌNH ĐỦ<br />
              BẠN CÓ CẢ THẾ GIỚI
            </h2>
            
            <p className="text-gray-600">
              Hãy để AMOR đồng hành cùng bạn trong hành trình tìm lại sự an yên và nâng tầm sống tích cực. 
              Khách yêu hãy đặt lịch ngay hôm nay để yêu thương bản thân theo cách trọn vẹn nhất nhé!
            </p>

            <div className="flex gap-6">
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
        </div>
      </div>
    </section>
  );
} 