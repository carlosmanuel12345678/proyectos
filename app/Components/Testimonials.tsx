// app/Components/Testimonials.tsx
import Image from "next/image";

export default function Testimonials() {
  const opiniones = [
    { id: 1, src: "/testimonios/opinion1.jpg", alt: "Opinión de cliente 1" },
    { id: 2, src: "/testimonios/opinion2.jpg", alt: "Opinión de cliente 2" },
    { id: 3, src: "/testimonios/opinion3.jpg", alt: "Opinión de cliente 3" },
    { id: 4, src: "/testimonios/opinion4.jpg", alt: "Opinión de cliente 4" },
    { id: 5, src: "/testimonios/opinion5.jpg", alt: "Opinión de cliente 5" },
    { id: 6, src: "/testimonios/opinion6.jpg", alt: "Opinión de cliente 6" },
    { id: 7, src: "/testimonios/opinion7.jpg", alt: "Opinión de cliente 7" },
    { id: 8, src: "/testimonios/opinion8.jpg", alt: "Opinión de cliente 8" },
    { id: 9, src: "/testimonios/opinion9.jpg", alt: "Opinión de cliente 9" },
    { id: 10, src: "/testimonios/opinion10.jpg", alt: "Opinión de cliente 10" },
    { id: 11, src: "/testimonios/opinion11.jpg", alt: "Opinión de cliente 11" },
    { id: 12, src: "/testimonios/opinion12.jpg", alt: "Opinión de cliente 12" },
    { id: 13, src: "/testimonios/opinion13.jpg", alt: "Opinión de cliente 13" },
    { id: 14, src: "/testimonios/opinion14.jpg", alt: "Opinión de cliente 14" },
    { id: 15, src: "/testimonios/opinion15.jpg", alt: "Opinión de cliente 15" },
    
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {opiniones.map((o) => (
        <div
          key={o.id}
          className="rounded-xl overflow-hidden shadow-md hover:shadow-lg bg-yellow transition-all duration-200"
        >
          <Image
            src={o.src}
            alt={o.alt}
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>
      ))}
    </div>
  );
}
