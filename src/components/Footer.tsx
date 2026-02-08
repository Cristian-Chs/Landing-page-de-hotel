import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif mb-4">Hotel Paraíso</h3>
            <p className="text-gray-400">
              Tu refugio perfecto junto al mar
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition">Nosotros</a></li>
              <li><a href="#rooms" className="hover:text-white transition">Habitaciones</a></li>
              <li><a href="#amenities" className="hover:text-white transition">Servicios</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Políticas</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-white transition">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition">Política de Cancelación</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Hotel Paraíso. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
