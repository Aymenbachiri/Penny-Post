import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "./ThemeProvider";
import { LenisScrollProvider } from "./LenisScrollProvider";
import NextTopLoader from "nextjs-toploader";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LenisScrollProvider />
      <NextTopLoader />
      <Navbar />
      {children}
    </ThemeProvider>
  );
}
