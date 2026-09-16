import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros | Colegio Santo Tom\u00E1s de Aquino",
  description: "Misi\u00F3n, visi\u00F3n e historia de la Orden de Predicadores (Padres Dominicos) en el Per\u00FA.",
};

export default function NosotrosPage() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <span className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200">
          Colegio Santo Tom\u00E1s de Aquino - Padres Dominicos
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Nuestra Historia y Misi\u00F3n
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          M\u00E1s de un siglo dedicados a la educaci\u00F3n con carisma dominico en el coraz\u00F3n de Lima.
        </p>
      </div>
    </section>
  );
}
