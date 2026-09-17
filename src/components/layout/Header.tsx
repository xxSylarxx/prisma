"use client";

import { useState } from "react";
import Link from "next/link";
import type { Menu } from "@/services/menu";

interface HeaderProps {
  menus: Menu[];
}

function MenuLink({ menu, className, onClick }: { menu: Menu; className: string; onClick?: () => void }) {
  const ruta = menu.ruta;
  if (!ruta) return <span className={className}>{menu.nombre}</span>;
  if (/^https?:\/\//i.test(ruta)) {
    return <a href={ruta} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>{menu.nombre}</a>;
  }
  if (!ruta.startsWith("/") || ruta.startsWith("//")) return <span className={className}>{menu.nombre}</span>;
  return <Link href={ruta} className={className} onClick={onClick}>{menu.nombre}</Link>;
}
export default function Header({ menus }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const headerMenus = menus
    .filter((menu) => menu.posicion === "HEADER")
    .sort((a, b) => a.orden - b.orden || a.id - b.id);
  const roots = headerMenus.filter((menu) => menu.padre_id === null);
  const cubicol = roots.find((menu) => menu.nombre.toLowerCase() === "cubicol");
  const navigation = roots.filter((menu) => menu !== cubicol);
  const childrenOf = (id: number) => headerMenus.filter((menu) => menu.padre_id === id);
  const closeMenu = () => {
    setMobileMenuOpen(false);
    setOpenMenuId(null);
  };
  return (
    <header className="w-full sticky top-0 z-50 shadow-sm bg-white">
      {/* 1. TOP BAR AZUL INSTITUCIONAL */}
      <div className="w-full bg-[#0d59b2] text-white py-1.5 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-end gap-3 text-xs">
          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-6 h-6 rounded-full bg-white text-[#0d59b2] flex items-center justify-center hover:bg-slate-200 transition-colors shadow-sm"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689-.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-6 h-6 rounded-full bg-white text-[#0d59b2] flex items-center justify-center hover:bg-slate-200 transition-colors shadow-sm font-bold"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.688 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z"/>
            </svg>
          </a>

          {/* TikTok */}
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="w-6 h-6 rounded-full bg-white text-[#0d59b2] flex items-center justify-center hover:bg-slate-200 transition-colors shadow-sm"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.02 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* 2. BARRA PRINCIPAL BLANCA */}
      <div className="w-full bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
          
          {/* Logo y Nombre Institucional */}
          <Link href="/" className="flex items-center gap-3.5 group shrink-0">
            {/* Escudo STA */}
            <div className="relative w-12 h-14 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 64 74" className="w-full h-full drop-shadow-sm">
                {/* Contorno Escudo */}
                <path
                  d="M32 3 L58 13 L58 44 Q58 66 32 72 Q6 66 6 44 L6 13 Z"
                  fill="#ffffff"
                  stroke="#1e293b"
                  strokeWidth="3.5"
                />
                {/* Bandera del Perú en el tercio superior */}
                {/* Franja Roja Izquierda */}
                <path
                  d="M6 13 L23 18 L23 32 L6 27 Z"
                  fill="#dc2626"
                />
                {/* Franja Blanca Centro */}
                <path
                  d="M23 18 L41 18 L41 32 L23 32 Z"
                  fill="#ffffff"
                />
                {/* Franja Roja Derecha */}
                <path
                  d="M41 18 L58 13 L58 27 L41 32 Z"
                  fill="#dc2626"
                />
                {/* Línea divisoria inferior de la bandera */}
                <path
                  d="M6 27 L23 32 L41 32 L58 27"
                  fill="none"
                  stroke="#1e293b"
                  strokeWidth="2.5"
                />
                {/* Letras STA en el cuerpo */}
                <text
                  x="32"
                  y="56"
                  textAnchor="middle"
                  fontFamily="'Arial Black', 'Impact', sans-serif"
                  fontWeight="900"
                  fontSize="22"
                  fill="#1e293b"
                  letterSpacing="-1.5"
                >
                  STA
                </text>
              </svg>
            </div>

            {/* Textos Institucionales con Tildes Correctas */}
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-semibold text-slate-800 tracking-tight">
                Colegio
              </span>
              <span className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                Santo Tomás de Aquino
              </span>
              <span className="text-[11px] font-medium text-slate-500">
                Padres Dominicos
              </span>
            </div>
          </Link>

          {/* Menú de Navegación Escritorio */}
          <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-6 xl:gap-8 text-[15px] font-bold text-slate-900">
            {navigation.map((menu) => {
              const children = childrenOf(menu.id);
              if (children.length === 0) return <MenuLink key={menu.id} menu={menu} className="hover:text-[#0d59b2] transition-colors py-2" />;
              const isOpen = openMenuId === menu.id;
              return (
                <div key={menu.id} className="relative group" onMouseEnter={() => setOpenMenuId(menu.id)} onMouseLeave={() => setOpenMenuId(null)}
                  onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpenMenuId(null); }}
                  onKeyDown={(event) => { if (event.key === "Escape") setOpenMenuId(null); }}>
                  <button type="button" aria-expanded={isOpen} aria-controls={`desktop-menu-${menu.id}`}
                    onClick={() => setOpenMenuId(isOpen ? null : menu.id)}
                    className="flex items-center gap-1.5 hover:text-[#0d59b2] transition-colors py-2 focus:outline-none">
                    <span>{menu.nombre}</span>
                    <svg className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#0d59b2] transition-transform duration-200 group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div id={`desktop-menu-${menu.id}`} className={`absolute top-full left-0 ${children.some((child) => child.nombre.length > 25) ? "w-72" : "w-64"} bg-white rounded-xl shadow-xl border border-slate-100 py-2.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150`}>
                      {children.map((child) => <MenuLink key={child.id} menu={child} onClick={closeMenu} className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#0d59b2] font-semibold transition-colors" />)}
                    </div>
                  )}
                </div>
              );
            })}
            {cubicol && <MenuLink menu={cubicol} className="ml-2 px-6 py-2.5 rounded-full bg-[#0d59b2] hover:bg-[#0b488f] text-white font-extrabold text-sm tracking-wide lowercase shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center" />}
          </nav>

          {/* Botón Menú Móvil */}
          <div className="flex items-center gap-3 lg:hidden">
            {cubicol && <MenuLink menu={cubicol} className="px-4 py-1.5 rounded-full bg-[#0d59b2] text-white font-extrabold text-xs lowercase shadow-sm" />}


            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Abrir menú"
            >
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 py-4 space-y-3 shadow-xl">
          {navigation.map((menu, index) => {
            const children = childrenOf(menu.id);
            const isOpen = openMenuId === menu.id;
            if (children.length === 0) {
              return <MenuLink key={menu.id} menu={menu} onClick={closeMenu} className={`block py-2 text-slate-800 font-bold${index < navigation.length - 1 ? " border-b border-slate-100" : ""}`} />;
            }
            return (
              <div key={menu.id}>
                <button type="button" aria-expanded={isOpen} aria-controls={`mobile-menu-${menu.id}`}
                  onClick={() => setOpenMenuId(isOpen ? null : menu.id)}
                  className="w-full flex items-center justify-between py-2 text-slate-800 font-bold border-b border-slate-100">
                  <span>{menu.nombre}</span>
                  <span className="text-xs font-bold" aria-hidden="true">{isOpen ? "▲" : "▼"}</span>
                </button>
                {isOpen && (
                  <div id={`mobile-menu-${menu.id}`} className="pl-4 py-2 space-y-2 bg-slate-50 rounded-lg my-1">
                    {children.map((child) => <MenuLink key={child.id} menu={child} onClick={closeMenu} className="block text-sm text-slate-600 font-semibold py-1" />)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </header>
  );
}
