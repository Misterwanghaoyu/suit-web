import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default async function AppLayout({ children }: AppLayoutProps) {

  return (
    <div>
        <NavbarWrapper />
        {children}
        <Footer />
    </div>
  );
}
