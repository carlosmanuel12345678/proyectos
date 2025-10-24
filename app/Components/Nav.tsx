// app/Components/Nav.tsx
"use client";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/20">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo + nombre */}
        <Link href="#inicio" className="flex items-center gap-2">
          <div className="relative w-10 h-10">
            <Image
              src="/logo.png" // debe estar en /public/logo.png
              alt="Logo Al Grilled"
              fill
              className="object-contain rounded-full"
              sizes="40px"
            />
          </div>
          <span className="text-white font-bold text-lg leading-none">
            Al Grilled
          </span>
        </Link>

        {/* Menú de navegación */}
        <ul className="flex items-center gap-6 text-sm text-white font-medium">
          <li>
            <Link href="#menu" className="hover:text-orange-400 transition-colors">
              Menú
            </Link>
          </li>
          <li>
            <Link href="#beneficios" className="hover:text-orange-400 transition-colors">
              Beneficios
            </Link>
          </li>
          <li>
            <Link href="#testimonios" className="hover:text-orange-400 transition-colors">
              Opiniones
            </Link>
          </li>
          <li>
            <Link href="#contacto" className="hover:text-orange-400 transition-colors">
              Contacto
            </Link>
          </li>
          <li>
            <a
              href="https://wa.me/18096039635?text=Hola!%20Quiero%20hacer%20un%20pedido."
              target="_blank"
              className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-500 font-semibold transition-colors"
            >
              WhatsApp
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
