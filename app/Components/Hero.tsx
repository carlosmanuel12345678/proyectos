// app/Components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="relative">
      <Image
        src="/logo.png"
        alt="Pollo horneado"
        width={2400}
        height={1400}
        priority
        className="h-[72vh] w-full object-cover brightness-[.75]"
      />

      <div className="absolute inset-0 grid place-items-center text-center text-white px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Pollo horneado con sabor & calidad
          </h1>
          <p className="mt-3 text-lg md:text-xl opacity-95">
            A domicilio desde Ensanche La Fe. Pide por WhatsApp y te llega encendido.
          </p>

          <div className="mt-6 flex justify-center">
            <a
              href="#menu"
              className="rounded-full border border-white/80 px-6 py-3 font-semibold hover:bg-white hover:text-black transition-colors"
            >
              Ver menú
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
