// app/page.tsx
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import MenuGrid from "./Components/MenuGrid";
import Benefits from "./Components/Benefits";
import Testimonials from "./Components/Testimonials";
import ContactBlock from "./Components/ContactBlock";


export default function HomePage() {
  return (
    <main>
      <Nav />
      <Hero />

      {/* ==== MENÚ ==== */}
      <section id="menu" className="bg-white text-slate-900 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold mb-8">Menú destacado</h2>
          <MenuGrid />
        </div>
      </section>

      {/* ==== BENEFICIOS ==== */}
      <section id="beneficios" className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold mb-8">¿Por qué elegirnos?</h2>
          <Benefits />
        </div>
      </section>

      {/* ==== TESTIMONIOS ==== */}
      <section id="testimonios" className="bg-white text-slate-900 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold mb-8">Lo que dice la gente</h2>
          <Testimonials />
        </div>
      </section>

      {/* ==== CONTACTO ==== */}
      <section id="contacto" className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold mb-6">Ubicación y contacto</h2>
          <ContactBlock />
        </div>
      </section>

      <footer className="border-t border-white/15 py-8 text-center text-sm opacity-80">
        © {new Date().getFullYear()} Al Grilled – Santo Domingo, RD
      </footer>
    </main>
  );
}
