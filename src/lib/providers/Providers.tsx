import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "./ThemeProvider";
import { LenisScrollProvider } from "./LenisScrollProvider";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/Footer";
import { AuthProvider } from "./AuthProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <LenisScrollProvider />
        <NextTopLoader />
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
    </AuthProvider>
  );
}
