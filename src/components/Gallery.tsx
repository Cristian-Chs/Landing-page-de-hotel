import { ImageWithFallback } from './figma/ImageWithFallback';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1729708790927-d14be7384d10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWFjaCUyMHJlc29ydHxlbnwxfHx8fDE3NzA0MDY3NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Vista del resort'
  },
  {
    src: 'https://images.unsplash.com/photo-1701568129402-0d4541e3dab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHBvb2wlMjBzdW5zZXR8ZW58MXx8fHwxNzcwNDcyMjkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Piscina al atardecer'
  },
  {
    src: 'https://images.unsplash.com/photo-1609602126247-4ab7188b4aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJvb20lMjBvY2VhbiUyMHZpZXd8ZW58MXx8fHwxNzcwNDcyMjg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Habitación con vista al mar'
  },
  {
    src: 'https://images.unsplash.com/photo-1604161926875-bb58f9a0d81b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHdlbGxuZXNzfGVufDF8fHx8MTc3MDQzNjQwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Spa y wellness'
  },
  {
    src: 'https://images.unsplash.com/photo-1678393834156-f8aed69b05f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFsbSUyMHRyZWVzfGVufDF8fHx8MTc3MDQ0Njc3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Playa paradisíaca'
  },
  {
    src: 'https://images.unsplash.com/photo-1755493872556-5c29bac85c5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHJlc29ydCUyMGRpbmluZ3xlbnwxfHx8fDE3NzA0NzIyOTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Restaurante del resort'
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Galería
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Una vista previa de lo que te espera en Hotel Paraíso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative h-64 overflow-hidden rounded-lg group cursor-pointer"
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
