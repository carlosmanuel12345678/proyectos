// app/Components/MenuGrid.tsx
import Image from "next/image";
import { menuItems } from "../../lib/data";   // <-- OJO: menuItems, no products
import { wppLink } from "../../lib/utils";

export default function MenuGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {menuItems.map((p) => (
        <article
          key={p.id}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-md hover:shadow-lg transition-shadow"
        >
          {/* Imagen (opcional) */}
          {p.image ? (
            <div className="mb-4 w-full aspect-4/3 overflow-hidden rounded-xl bg-slate-100">

              <Image
                src={p.image}          // ejemplo: "/menu/pechuga.jpg"
                alt={p.name}
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          ) : null}

          <h3 className="text-xl font-bold text-slate-900">{p.name}</h3>
          {p.description && (   /* <-- description, no desc */
            <p className="mt-1 text-slate-600">{p.description}</p>
          )}
          {p.price && <p className="mt-2 font-semibold text-slate-900">{p.price}</p>}

          <div className="mt-4">
            <a
              href={wppLink(`Quiero ordenar: ${p.name}`)}
              target="_blank"
              className="inline-block rounded-full bg-green-600 px-4 py-2 font-semibold text-white hover:bg-green-500"
            >
              Pedir este
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
