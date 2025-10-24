// lib/utils.ts
export const wppLink = (text?: string) => {
  const phone = process.env.NEXT_PUBLIC_WPP_PHONE ?? "18096039635";
  const msg = encodeURIComponent(
    text ?? "¡Hola Al Grilled! Quiero hacer un pedido."
  );
  return `https://wa.me/${phone}?text=${msg}`;
};
