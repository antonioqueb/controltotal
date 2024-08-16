import type { Metadata } from "next";
import { Rubik as FontSans } from "next/font/google"
import "./globals.css";

import { ThemeProvider } from "@/app/shared-ui/theme-provider"
import SessionWrapper from "@/app/shared-ui/SessionWrapper";


import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "GestPro - Soluciones Cloud",
  description: "GestPro ofrece soluciones empresariales en la nube a medida para optimizar y transformar los procesos de negocio. Nuestros servicios se adaptan a las necesidades específicas de cada empresa, proporcionando herramientas avanzadas de gestión, colaboración y análisis de datos, todo respaldado por la seguridad y escalabilidad de la infraestructura en la nube. Permitimos a las organizaciones acelerar su crecimiento y mejorar su eficiencia operativa, todo accesible de manera remota y segura."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
    </SessionWrapper>
  )
}
