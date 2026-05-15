import type { Metadata } from "next"
import "./globals.css"

import { ThemeProvider } from "@/components/ui/theme-provider"

export const metadata: Metadata = {
  title: "Globopersona",
  description: "AI Email Platform",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body>

        <ThemeProvider>

          {children}

        </ThemeProvider>

      </body>

    </html>
  )
}