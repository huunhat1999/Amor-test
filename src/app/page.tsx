'use client';

import Navbar from './components/Navbar';
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import AboutSection from './components/sections/AboutSection';
// import StartupSection from './components/sections/StartupSection';
// import ContactSection from './components/sections/ContactSection';
// import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      {/* <StartupSection />
      <ContactSection /> */}
    </main>
  );
}
