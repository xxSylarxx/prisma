import { obtenerMenus } from "@/services/menu";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menus = await obtenerMenus();

  return (
    <div className="min-h-screen flex flex-col">
      <Header menus={menus} />
      <main className="flex-1 w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}
