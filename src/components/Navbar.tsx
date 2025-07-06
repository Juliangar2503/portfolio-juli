import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
        {/* Navbar */}
      <header className="sticky top-0 z-50 bg-[#0f172a]/80 backdrop-blur border border-white/10  mx-auto px-6 py-4 rounded-2xl flex items-center justify-between max-w-7xl">
        <div className="text-lg font-semibold uppercase tracking-widest">Julián Garrido</div>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#servicios" className="text-gray-300 hover:text-white hover:underline">SERVICIOS</a>
          <a href="#tecnologia" className="text-gray-300 hover:text-white hover:underline">TECNOLOGÍA</a>
          <a href="#portfolio" className="text-gray-300 hover:text-white hover:underline">PORTFOLIO</a>
          <a href="#contacto" className="text-gray-300 hover:text-white hover:underline">CONTACTO</a>
        </nav>

        {/* Mobile nav button */}
        <button className="md:hidden text-white focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden px-6 pb-4 space-y-2 text-sm font-medium text-gray-300">
          <a href="#servicios" className="block hover:text-white">SERVICIOS</a>
          <a href="#tecnologia" className="block hover:text-white">TECNOLOGÍA</a>
          <a href="#portfolio" className="block hover:text-white">PORTFOLIO</a>
          <a href="#contacto" className="block hover:text-white">CONTACTO</a>
        </nav>
      )}
    </div>
  );
}
