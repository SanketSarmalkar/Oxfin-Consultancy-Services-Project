"use client";
import Image from 'next/image';
import Navbar from './components/navbar.js';
import PageView from './components/pageview.js';
import navbarStyles from './style/Navbar.module.css';
import PopularConsultant from './components/popularConsultants.js';
import HowItWorks from './components/workings.js';
import TurstBlock from './components/trustpage.js';
import JoinAsConsultant from './components/joinAsConsultantBlock.js';
import Footer from './components/footerBlock.js';

export default function Home() {
  return (
    <main >
      <Navbar />
      <PageView />
      <HowItWorks />
      <TurstBlock />
      <PopularConsultant />
      <JoinAsConsultant />
      <Footer />
    </main>
  )
}
