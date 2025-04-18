import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React
import { Toaster } from 'sonner'
import { Outfit } from 'next/font/google'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
})


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Manan Shah - Computer Science Student & Developer",
  description:
    "Computer Science student at University of Texas at Arlington specializing in C++, distributed systems, and cybersecurity",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen font-sans antialiased", inter.className, outfit.variable)}>

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Toaster richColors />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'