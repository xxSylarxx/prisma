"use client";

import Link from "next/link";

function CircleChevron() {
  return (
    <svg
      className="w-4 h-4 text-white/80 shrink-0 group-hover:text-white group-hover:scale-110 transition-all"
      viewBox="0 0 20 20"
      fill="none"
    >
      <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8.5 6.5L12 10L8.5 13.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#0d59b2] text-white pt-14 pb-14 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* GRID PRINCIPAL DE 4 COLUMNAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 items-start">
          
          {/* COLUMNA 1: LOGO, CONTACTO Y HORARIO */}
          <div className="space-y-4 text-sm">
            <Link href="/" className="inline-block mb-2">
              <img
                src="/images/logo-sta-footer.png"
                alt="Colegio Santo Tom\u00E1s de Aquino - Padres Dominicos"
                className="h-16 w-auto object-contain drop-shadow-sm"
              />
            </Link>

            {/* Dirección */}
            <div className="leading-relaxed text-white font-medium">
              <p>Calle Rinconada de Sto. Domingo 209</p>
              <p>Esquina con Alameda Chabuca Granda</p>
              <p>Cercado de Lima</p>
            </div>

            {/* Teléfonos */}
            <div className="pt-1">
              <p className="font-bold text-white tracking-wide text-base">
                987 118 509 / 987 028 075
              </p>
            </div>

            {/* Email */}
            <div>
              <a
                href="mailto:informes@stomasdominicos.edu.pe"
                className="text-white hover:underline font-medium break-all"
              >
                informes@stomasdominicos.edu.pe
              </a>
            </div>

            {/* Horario de Atención */}
            <div className="pt-2 leading-tight">
              <p className="font-bold text-white mb-1.5 text-base">Horario de atención</p>
              <p className="font-medium text-white/95">Lunes a Viernes</p>
              <p className="font-medium text-white/90 mb-1">08:00 am a 05:00 pm</p>
              <p className="font-medium text-white/95">S\u00E1bados</p>
              <p className="font-medium text-white/90">08:00 am a 01:00 pm</p>
            </div>
          </div>

          {/* COLUMNA 2: NOSOTROS */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Nosotros
            </h3>
            <ul className="space-y-2.5 text-sm sm:text-base font-semibold">
              <li>
                <Link href="/mision-vision" className="hover:underline flex items-center gap-2 text-white group">
                  <CircleChevron />
                  <span>Misión Visión</span>
                </Link>
              </li>
              <li>
                <Link href="/identidad-dominicana" className="hover:underline flex items-center gap-2 text-white group">
                  <CircleChevron />
                  <span>Identidad Dominicana</span>
                </Link>
              </li>
              <li>
                <Link href="/nuestra-historia" className="hover:underline flex items-center gap-2 text-white group">
                  <CircleChevron />
                  <span>Nuestra Historia</span>
                </Link>
              </li>
              <li>
                <Link href="/nuestro-patron" className="hover:underline flex items-center gap-2 text-white group">
                  <CircleChevron />
                  <span>Nuestro Patrón</span>
                </Link>
              </li>
              <li>
                <Link href="/directores" className="hover:underline flex items-center gap-2 text-white group">
                  <CircleChevron />
                  <span>Nuestros Directores</span>
                </Link>
              </li>
              <li>
                <Link href="/autoridades" className="hover:underline flex items-center gap-2 text-white group">
                  <CircleChevron />
                  <span>Nuestras Autoridades</span>
                </Link>
              </li>
              <li>
                <Link href="/simbolos" className="hover:underline flex items-center gap-2 text-white group">
                  <CircleChevron />
                  <span>Nuestros S\u00EDmbolos</span>
                </Link>
              </li>
              <li>
                <Link href="/egresados" className="hover:underline flex items-center gap-2 text-white group">
                  <CircleChevron />
                  <span>Nuestros Egresados</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3: PROPUESTA EDUCATIVA */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Propuesta Educativa
            </h3>
            <ul className="space-y-2.5 text-sm sm:text-base font-semibold">
              <li>
                <Link href="/propuesta-educativa" className="hover:underline flex items-center gap-2 text-white group">
                  <CircleChevron />
                  <span>Nuestra Propuesta</span>
                </Link>
              </li>
              <li>
                <Link href="/primaria" className="hover:underline flex items-center gap-2 text-white group">
                  <CircleChevron />
                  <span>Primaria</span>
                </Link>
              </li>
              <li>
                <Link href="/secundaria" className="hover:underline flex items-center gap-2 text-white group">
                  <CircleChevron />
                  <span>Secundaria</span>
                </Link>
              </li>
              <li>
                <Link href="/ingles-cambridge" className="hover:underline flex items-center gap-2 text-white group">
                  <CircleChevron />
                  <span>Inglés Certificación Cambridge</span>
                </Link>
              </li>
              <li>
                <Link href="/psicopedagogico" className="hover:underline flex items-center gap-2 text-white group">
                  <CircleChevron />
                  <span>Dpto. Psicopedagógico</span>
                </Link>
              </li>
              <li>
                <Link href="/pastoral" className="hover:underline flex items-center gap-2 text-white group">
                  <CircleChevron />
                  <span>Pastoral Aquinense</span>
                </Link>
              </li>
              <li>
                <Link href="/talleres" className="hover:underline flex items-center gap-2 text-white group">
                  <CircleChevron />
                  <span>Talleres Gratuitos</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMNA 4: INSIGNIA ORDEN DOMINICANA Y REDES */}
          <div className="flex flex-col items-center justify-start space-y-6 pt-2">
            {/* Insignia Orden Dominicana */}
            <div className="w-36 h-36 flex items-center justify-center">
              <img
                src="/images/orden-dominicana.png"
                alt="Orden Dominicana"
                className="w-full h-full object-contain drop-shadow-md"
              />
            </div>

            {/* Redes Sociales: Círculos blancos con ícono azul */}
            <div className="flex items-center gap-4">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white text-[#0d59b2] flex items-center justify-center hover:bg-slate-100 hover:scale-110 transition-all shadow-md"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white text-[#0d59b2] flex items-center justify-center hover:bg-slate-100 hover:scale-110 transition-all shadow-md"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 rounded-full bg-white text-[#0d59b2] flex items-center justify-center hover:bg-slate-100 hover:scale-110 transition-all shadow-md"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.5 2.78 1.19-.03 2.31-.69 2.87-1.74.32-.57.44-1.23.44-1.88.03-4.8.01-9.61.02-14.41z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* BOTÓN FLOTANTE DE WHATSAPP */}
      <a
        href="https://wa.me/51987118509?text=Hola%2C%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20Colegio%20Santo%20Tom%C3%A1s%20de%20Aquino"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.905.814 2.796.814 3.18 0 5.766-2.587 5.767-5.767 0-3.18-2.587-5.766-5.767-5.766zm3.385 8.167c-.145.408-.847.781-1.182.83-.335.049-.773.074-2.483-.635-2.073-.859-3.411-2.984-3.514-3.121-.102-.138-.839-1.116-.839-2.128 0-1.013.53-1.512.718-1.718.188-.205.41-.257.547-.257.137 0 .274.001.393.007.126.006.295-.048.461.352.172.417.587 1.432.639 1.535.051.103.086.223.017.36-.068.138-.103.223-.205.343-.103.12-.216.268-.309.36-.103.103-.21.214-.09.421.12.206.534.881 1.144 1.424.786.7 1.448.917 1.654 1.02.206.103.326.086.446-.051.12-.138.514-.6.651-.806.137-.205.274-.171.462-.103.188.068 1.199.565 1.404.668.206.103.343.154.394.24.051.086.051.498-.094.906z" />
        </svg>
      </a>
    </footer>
  );
}
