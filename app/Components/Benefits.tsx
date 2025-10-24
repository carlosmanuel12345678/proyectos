// app/Components/Benefits.tsx
import { benefits } from "../../lib/data";

export default function Benefits() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {benefits.map((b, i) => (
        <div
          key={i}
          className="rounded-2xl border border-white/20 bg-white/5 p-5"
        >
          <div className="text-3xl">{b.icon}</div>
          <h3 className="mt-2 text-lg font-semibold">{b.title}</h3>
          <p className="text-sm opacity-90">{b.text}</p>
        </div>
      ))}
    </div>
  );
}
