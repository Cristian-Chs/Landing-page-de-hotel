import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="relative h-screen">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1729708790927-d14be7384d10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWFjaCUyMHJlc29ydHxlbnwxfHx8fDE3NzA0MDY3NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Resort frente a la playa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 lg:px-12">
        <div className="text-white text-2xl font-serif">Hotel Paraíso</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-white">
          <button onClick={() => scrollToSection('about')} className="hover:text-blue-200 transition">Nosotros</button>
          <button onClick={() => scrollToSection('rooms')} className="hover:text-blue-200 transition">Habitaciones</button>
          <button onClick={() => scrollToSection('amenities')} className="hover:text-blue-200 transition">Servicios</button>
          <button onClick={() => scrollToSection('gallery')} className="hover:text-blue-200 transition">Galería</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-blue-200 transition">Contacto</button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 md:hidden">
            <div className="flex flex-col gap-4 px-6 py-6 text-white">
              <button onClick={() => scrollToSection('about')} className="text-left hover:text-blue-200 transition">Nosotros</button>
              <button onClick={() => scrollToSection('rooms')} className="text-left hover:text-blue-200 transition">Habitaciones</button>
              <button onClick={() => scrollToSection('amenities')} className="text-left hover:text-blue-200 transition">Servicios</button>
              <button onClick={() => scrollToSection('gallery')} className="text-left hover:text-blue-200 transition">Galería</button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-blue-200 transition">Contacto</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100%-88px)] text-center px-6">
        <h1 className="text-white text-5xl md:text-7xl font-serif mb-6">
          Bienvenido al Paraíso
        </h1>
        <p className="text-white text-xl md:text-2xl mb-8 max-w-2xl">
          Tu escape perfecto frente al mar. Lujo, comodidad y vistas inolvidables.
        </p>
        <button 
          onClick={() => scrollToSection('contact')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition text-lg"
        >
          Reservar Ahora
        </button>
      </div>
    </div>
  );
}
