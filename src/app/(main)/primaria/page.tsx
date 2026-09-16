import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nivel Primaria | Colegio Santo Tom\u00E1s de Aquino",
  description: "Propuesta educativa del nivel primaria con metodolog\u00EDas activas, rob\u00F3tica e ingl\u00E9s.",
};

export default function PrimariaPage() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <span className="px-4 py-1.5 rounded-full bg-blue-50 text-[#0d59b2] text-xs font-bold border border-blue-200">
          Nivel Primaria (1\u00B0 a 6\u00B0 Grado)
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Aprender con alegr\u00EDa, crecer con valores
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Educaci\u00F3n integral basada en el carisma dominico, rob\u00F3tica educativa, ingl\u00E9s intensivo y formaci\u00F3n espiritual.
        </p>
      </div>
    </section>
  );
}
