import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nivel Secundaria | Colegio Santo Tom\u00E1s de Aquino",
  description: "Formaci\u00F3n preuniversitaria y liderazgo cristiano con certificaci\u00F3n Cambridge.",
};

export default function SecundariaPage() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <span className="px-4 py-1.5 rounded-full bg-blue-50 text-[#0d59b2] text-xs font-bold border border-blue-200">
          Nivel Secundaria (1\u00B0 a 5\u00B0 de Secundaria)
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Liderazgo, Ciencia y Preparaci\u00F3n Preuniversitaria
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Convenios universitarios, certificaci\u00F3n internacional de ingl\u00E9s, laboratorios modernos y orientaci\u00F3n vocacional.
        </p>
      </div>
    </section>
  );
}
