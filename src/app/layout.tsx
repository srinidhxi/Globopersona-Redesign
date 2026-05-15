import type { Metadata } from "next"
import "./globals.css"

import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
})

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

      <body className={inter.className}>

        <ThemeProvider>

          {children}

        </ThemeProvider>

      </body>

    </html>
  )
}