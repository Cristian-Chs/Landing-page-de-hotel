import { Waves, Utensils, Dumbbell, Sparkles, Car, Coffee } from 'lucide-react';

const amenities = [
  {
    icon: Waves,
    title: 'Piscina Infinity',
    description: 'Piscina con vista al mar abierta 24/7'
  },
  {
    icon: Utensils,
    title: 'Restaurante Gourmet',
    description: 'Gastronomía internacional y local de primera'
  },
  {
    icon: Sparkles,
    title: 'Spa & Wellness',
    description: 'Tratamientos de relajación y belleza'
  },
  {
    icon: Dumbbell,
    title: 'Gimnasio',
    description: 'Equipamiento moderno disponible 24 horas'
  },
  {
    icon: Car,
    title: 'Estacionamiento',
    description: 'Estacionamiento privado gratuito'
  },
  {
    icon: Coffee,
    title: 'Bar Lounge',
    description: 'Cócteles y bebidas con vista al atardecer'
  }
];

export function Amenities() {
  return (
    <section id="amenities" className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Servicios y Amenidades
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Todo lo que necesitas para unas vacaciones perfectas en un solo lugar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-50 transition"
              >
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <Icon size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-serif mb-2">{amenity.title}</h3>
                <p className="text-gray-600">{amenity.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
