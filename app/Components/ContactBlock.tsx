// app/Components/ContactBlock.tsx
import Link from "next/link";

// --- Iconos en SVG (ligeros, sin dependencias) ---
const IconWhatsApp = () => (
  <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current" aria-hidden>
    <path d="M19.11 17.34c-.28-.14-1.64-.8-1.89-.89-.25-.09-.43-.14-.62.14-.18.27-.71.88-.87 1.06-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.62-1.49-.85-2.04-.22-.53-.45-.46-.62-.47l-.53-.01c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27s.98 2.63 1.12 2.81c.14.18 1.93 2.94 4.67 4.12.65.28 1.16.45 1.56.57.65.21 1.24.18 1.7.11.52-.08 1.64-.67 1.87-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.52-.32z"/><path d="M27.26 4.74A12.9 12.9 0 0 0 16.01 1C8.74 1 2.85 6.88 2.85 14.16c0 2.49.66 4.9 1.92 7.04L3 31l9.99-1.76a12.9 12.9 0 0 0 6.99 2.04c7.27 0 13.16-5.88 13.16-13.16 0-3.52-1.37-6.83-3.88-9.34zm-11.25 22.1c-2.28 0-4.5-.63-6.44-1.82l-.46-.28-5.9.99.99-5.76-.3-.47A11.17 11.17 0 0 1 4.48 14.2c0-6.18 5.03-11.21 11.21-11.21 6.18 0 11.21 5.03 11.21 11.21 0 6.18-5.03 11.21-11.21 11.21z"/>
  </svg>
);

const IconMapPin = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
    <path d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 12 6 12s6-6.75 6-12c0-3.314-2.686-6-6-6zm0 8.5A2.5 2.5 0 1 1 12 5.5a2.5 2.5 0 0 1 0 5z"/>
  </svg>
);

// Marcas (simplificadas)
const IconInstagram = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
  </svg>
);

const IconPedidosYa = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
    <path d="M3 5h18l-1.2 4.5H9.8L9 12h8.8L16.6 19H6.4L7.2 15H4.5L3 5z"/>
  </svg>
);

const IconUberEats = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
    <path d="M4 7h16v2H4V7zm0 4h10v2H4v-2zm0 4h14v2H4v-2z"/>
  </svg>
);

export default function ContactBlock() {
  return (
    <section id="contacto" className="bg-black text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* ---- Columna Izquierda ---- */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ubicación y contacto</h2>

          <h3 className="text-xl font-semibold mb-3">Encuéntranos</h3>
          <p className="text-gray-300 leading-relaxed mb-3">
            Calle Rafael Antonio Pichardo #4, Ensanche La Fe (antes del Santo Socorro), Santo Domingo.
          </p>

          <p className="text-gray-400 mb-2">
            <strong>Horario:</strong> Lun–Dom 12:00 p. m. – 10:00 p. m.
          </p>
          <p className="text-gray-400 mb-2">
            <strong>Tel:</strong>{" "}
            <a href="tel:8096039635" className="text-orange-400 hover:underline">809-603-9635</a>
          </p>
          <p className="text-gray-400 mb-6">
            <strong>Delivery:</strong> La Fe, Naco, Piantini, SD Centro.
          </p>

          {/* ---- Botones con íconos ---- */}
          <div className="flex flex-wrap gap-3">
            {/* WhatsApp */}
            <a
              href="https://wa.me/18096039635?text=Hola%20quiero%20hacer%20un%20pedido%20de%20pollo%20horneado%20🔥"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-3 rounded-full transition"
            >
              <IconWhatsApp />
              Pedir por WhatsApp
            </a>

            {/* Google Maps */}
            <a
              href="https://maps.app.goo.gl/iNrbgmEx8N5oXxmF7?g_st=ic"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/70 hover:bg-white hover:text-black font-semibold px-5 py-3 rounded-full transition"
            >
              <IconMapPin />
              Abrir en Maps
            </a>

            {/* Instagram */}
            <Link
              href="https://www.instagram.com/Algrilled_rd"
              target="_blank"
              className="inline-flex items-center gap-2 border border-white/70 hover:bg-pink-500 hover:border-pink-500 hover:text-white font-semibold px-5 py-3 rounded-full transition"
            >
              <IconInstagram />
              Instagram
            </Link>

            {/* PedidosYa */}
            <a
              href="https://www.pedidosya.com.do/restaurantes/santo-domingo-d-n/algrilledrd-c72ee1bf-647f-46d5-9f88-ffd3ee50c237-menu"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#E51E2A] hover:bg-[#c81a24] text-white font-semibold px-5 py-3 rounded-full transition"
            >
              <IconPedidosYa />
              Pedir en PedidosYa
            </a>

            {/* Uber Eats */}
            <a
              href="https://www.ubereats.com/store/al-grilled-santo-domingo/_KYRaQR1WeqW4TDDzTvl2A?diningMode=DELIVERY"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#06C167] hover:bg-[#05a05a] text-white font-semibold px-5 py-3 rounded-full transition"
            >
              <IconUberEats />
              Pedir en Uber Eats
            </a>
          </div>

          {/* Código de descuento */}
          <p className="mt-4 text-sm text-gray-400">
            💸 Usa mi código <strong>eats-9962g1</strong> en Uber Eats y obtén descuento en tu primer pedido.
          </p>
        </div>

        {/* ---- Columna Derecha (Mapa) ---- */}
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3762.234943821964!2d-69.92200590428432!3d18.502058131107926!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf8a118c3b6b8b%3A0x123456789abcdef!2sAl%20Grilled!5e0!3m2!1ses-419!2sdo!4v1730143100000!5m2!1ses-419!2sdo"
            width="100%" height="350"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <p className="text-center text-gray-500 mt-12 text-sm">
        © {new Date().getFullYear()} <strong>Al Grilled</strong> — Santo Domingo, RD
      </p>
    </section>
  );
}
