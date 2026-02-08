import { Users, Maximize2, Wifi } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const rooms = [
  {
    name: 'Habitación Estándar Vista al Mar',
    description: 'Disfruta de vistas panorámicas al océano desde tu balcón privado.',
    capacity: '2 personas',
    size: '28 m²',
    price: '$150',
    image: 'https://images.unsplash.com/photo-1609602126247-4ab7188b4aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJvb20lMjBvY2VhbiUyMHZpZXd8ZW58MXx8fHwxNzcwNDcyMjg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Suite Deluxe',
    description: 'Espacio amplio con sala de estar y vistas espectaculares al mar.',
    capacity: '3 personas',
    size: '45 m²',
    price: '$250',
    image: 'https://images.unsplash.com/photo-1701568129402-0d4541e3dab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHBvb2wlMjBzdW5zZXR8ZW58MXx8fHwxNzcwNDcyMjkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Villa Presidencial',
    description: 'La máxima expresión de lujo con piscina privada y acceso directo a la playa.',
    capacity: '4 personas',
    size: '80 m²',
    price: '$450',
    image: 'https://images.unsplash.com/photo-1755493872556-5c29bac85c5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHJlc29ydCUyMGRpbmluZ3xlbnwxfHx8fDE3NzA0NzIyOTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function Rooms() {
  return (
    <section id="rooms" className="py-20 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Nuestras Habitaciones
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Cada habitación está diseñada para ofrecerte la máxima comodidad y las mejores vistas al océano.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="relative h-64">
                <ImageWithFallback
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                
                <div className="flex gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>{room.capacity}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Maximize2 size={16} />
                    <span>{room.size}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Wifi size={16} />
                    <span>WiFi</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-serif text-blue-600">{room.price}</span>
                    <span className="text-gray-500">/noche</span>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition">
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
