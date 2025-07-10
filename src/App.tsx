import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import Portfolio from './components/Portfolio';
import ContactSection from './components/Contact';
import Experience from './components/Experience';

export default function App() {


  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white p-4">

      <Navbar />

      <main className="px-6 md:px-16 lg:px-32 py-20 max-w-7xl mx-auto">
        <Hero />
        <Experience />
        <Technologies />
        <Portfolio />
        <ContactSection />
      </main>
    </div>
  );
}