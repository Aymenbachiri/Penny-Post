import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "./ThemeProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Navbar />
      {children}
    </ThemeProvider>
  );
}
