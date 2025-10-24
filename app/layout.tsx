// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Al Grilled – Pollo Horneado a Domicilio",
  description:
    "Pollo horneado con sabor y calidad. Delivery desde Ensanche La Fe. Pide por WhatsApp al 809-603-9635.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-brand-blue text-white antialiased">
        {children}
      </body>
    </html>
  );
}
