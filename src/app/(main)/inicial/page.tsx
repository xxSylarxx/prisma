import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nivel Inicial | Colegio Santo Tom\u00E1s de Aquino",
  description: "Educaci\u00F3n inicial de 3, 4 y 5 a\u00F1os en un entorno seguro y estimulante.",
};

export default function InicialPage() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <span className="px-4 py-1.5 rounded-full bg-amber-50 text-amber-700 text-xs font-bold border border-amber-200">
          Nivel Inicial (3, 4 y 5 a\u00F1os)
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Primeros pasos hacia un futuro brillante
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Desarrollo psicomotriz, estimulaci\u00F3n temprana, iniciaci\u00F3n al ingl\u00E9s y afecto dominico.
        </p>
      </div>
    </section>
  );
}
