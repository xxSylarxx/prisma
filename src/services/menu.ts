import "server-only";

export interface Menu {
  id: number;
  nombre: string;
  padre_id: number | null;
  ruta: string | null;
  orden: number;
  tipo: string;
  pagina_id: number | null;
  posicion: string | null;
}

export async function obtenerMenus(): Promise<Menu[]> {
  const baseUrl = process.env.API_BASE_URL;

  if (!baseUrl) {
    throw new Error("Falta configurar API_BASE_URL en .env.local");
  }

  const response = await fetch(`${baseUrl.replace(/\/$/, "")}/menus`, {
    headers: { Accept: "application/json" },
    cache: "no-store",
    signal: AbortSignal.timeout(10000),
  });

  if (!response.ok) {
    throw new Error(`Error al consultar menus: ${response.status}`);
  }

  const resultado: { data: Menu[] } = await response.json();
  return resultado.data;
}
