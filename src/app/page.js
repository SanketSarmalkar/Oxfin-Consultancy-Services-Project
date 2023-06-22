import Image from 'next/image';
import Navbar from './components/navbar.js';
import PageView from './components/pageview.js';
import navbarStyles from './style/Navbar.module.css';
import PopularConsultant from './components/popularConsultants.js';

export default function Home() {
  return (
    <main >
      <Navbar />
      <PageView />
      <PopularConsultant />
    </main>
  )
}
