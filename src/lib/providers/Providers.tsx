import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "./ThemeProvider";
import { LenisScrollProvider } from "./LenisScrollProvider";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/Footer";
import { AuthProvider } from "./AuthProvider";
import { Toaster } from "sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <LenisScrollProvider />
        <NextTopLoader />
        <Toaster position="top-center" expand={true} richColors />
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
    </AuthProvider>
  );
}
