import React from 'react';

export default function AboutQuote() {
  return (
    <div className="bg-[#FFEEE2] py-16">
      <div className="container mx-auto px-6">
        <blockquote className="text-center">
          <p className="text-2xl font-serif italic mb-4">
            &ldquo;Chúng tôi tin rằng mỗi khách hàng đều xứng đáng được trải nghiệm dịch vụ tốt nhất, và đó là lý do chúng tôi luôn nỗ lực không ngừng để mang đến những giây phút thư giãn hoàn hảo.&rdquo;
          </p>
          <footer className="text-gray-600">
            - Đội ngũ AMOR
          </footer>
        </blockquote>
      </div>
    </div>
  );
}