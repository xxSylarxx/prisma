import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admisi\u00F3n 2026 | Colegio Santo Tom\u00E1s de Aquino",
  description: "Proceso de admisi\u00F3n 2026 abierto para niveles Inicial, Primaria y Secundaria.",
};

export default function AdmisionPage() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-200 p-8 sm:p-12 text-center space-y-6">
        <span className="px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
          Vacantes Limitadas 2026
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Proceso de Admisi\u00F3n 2026
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Asegura la vacante de tu hijo en una instituci\u00F3n con m\u00E1s de 100 a\u00F1os de excelencia acad\u00E9mica y valores cat\u00F3licos.
        </p>
        <div className="pt-4">
          <a
            href="https://wa.me/51987118509?text=Hola%2C%20deseo%20postular%20al%20proceso%20de%20Admisi%C3%B3n%202026"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-full bg-[#0d59b2] hover:bg-[#094182] text-white font-black text-sm tracking-wide shadow-xl transition-all hover:scale-105 active:scale-95"
          >
            Solicitar Informaci\u00F3n de Admisi\u00F3n
          </a>
        </div>
      </div>
    </section>
  );
}
