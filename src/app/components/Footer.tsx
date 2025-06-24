'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPinIcon, ClockIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-[#f9f5f2] py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-3xl font-serif">
              AMOR
            </Link>
            <p className="mt-4 text-gray-600">Quý khách vui lòng đặt lịch trước</p>
          </div>

          <div>
            <ul className="space-y-3">
              <li>    
                <Link href="/about" className="text-gray-600 hover:text-[#9c5a5a]">
                  VỀ AMOR
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-600 hover:text-[#9c5a5a]">
                  MENU
                </Link>
              </li>
              <li>
                <Link href="/startup" className="text-gray-600 hover:text-[#9c5a5a]">
                  KHỞI NGHIỆP
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPinIcon className="h-5 w-5" />
              <span>30 Đặng Tất, Q. 1, TP.HCM</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <ClockIcon className="h-5 w-5" />
              <span>09:00 - 20:00 mỗi ngày</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <PhoneIcon className="h-5 w-5" />
              <span>090 232 8566</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4">
              <Link href="#" className="text-gray-600 hover:text-[#9c5a5a]">
                <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#9c5a5a]">
                <Image src="/icons/zalo.svg" alt="Zalo" width={24} height={24} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#9c5a5a]">
                <Image src="/icons/messenger.svg" alt="Messenger" width={24} height={24} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          ©2025 AMOR, all rights reserved, powered by MERA TECH
        </div>
      </div>
    </footer>
  );
} 