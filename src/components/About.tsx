import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Un Refugio Junto al Mar
            </h2>
            <p className="text-gray-700 mb-4">
              Hotel Paraíso es más que un lugar para hospedarse; es una experiencia única 
              que combina la belleza natural de la playa con el lujo y la comodidad que mereces.
            </p>
            <p className="text-gray-700 mb-4">
              Ubicado en una de las playas más hermosas de la costa, nuestro hotel ofrece 
              vistas espectaculares al océano, acceso directo a la playa y una atmósfera 
              tranquila perfecta para relajarse y desconectar.
            </p>
            <p className="text-gray-700">
              Con habitaciones elegantemente diseñadas, servicios de primera clase y un 
              personal dedicado a hacer de tu estadía una experiencia memorable, Hotel Paraíso 
              es el destino perfecto para tus vacaciones.
            </p>
          </div>
          <div className="relative h-96 md:h-full min-h-[400px]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1678393834156-f8aed69b05f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFsbSUyMHRyZWVzfGVufDF8fHx8MTc3MDQ0Njc3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Playa tropical"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
