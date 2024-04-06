import AboutSection from '@/components/layout/AboutSection';
import ContactSection from '@/components/layout/ContactSection';
import { Footer } from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Hero from '@/components/layout/Hero';
import HomeMenu from '@/components/layout/HomeMenu';
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <HomeMenu/>
      <AboutSection/>
      <ContactSection/>
      <Footer/>
    </>
  );
}
