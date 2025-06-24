'use client';

import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'CHĂM SÓC TÓC\nCHUYÊN NGHIỆP',
    description: 'Tóc Đẹp cùng liệu pháp Gội đầu thải độc tố bằng nước kiềm hydrogen điện phân, ',
    image: '/images/hair-care.jpg',
  },
  {
    title: 'CHĂM SÓC DA\nCHUYÊN SÂU',
    description: 'Phương pháp khóa tuổi đông y, bảo dưỡng vùng đầu giúp tái tạo năng lượng, da ',
    image: '/images/skin-care.jpg',
  },
  {
    title: 'BODY AROMA\nTHÔNG THÁI',
    description: 'Trị liệu với tinh dầu thiên nhiên cao cấp giúp cơ thể được phục hồi chuyên sâu.',
    image: '/images/body-care.jpg',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-[#f9f5f2]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif mb-4 whitespace-pre-line">{service.title}</h3>
                <p className="text-gray-600 mb-6 whitespace-pre-line">{service.description}</p>
                <Link
                  href="/contact"
                  className="inline-block bg-[#9c5a5a] text-white px-6 py-2 rounded-full hover:bg-[#8a4f4f] transition-colors duration-300"
                >
                  Gọi ngay
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 