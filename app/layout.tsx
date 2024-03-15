import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "HDK's Creative Kaleidoscope: A Fusion of Art and Design",
  description: "Hello there! My name is Hardik Bhammar (HDK) and I'm currently a third-year student pursuing my Bachelor's degree in Electronics and communication engineering (ECE). I have a deep interest in programming and consider myself proficient in Data Structures and Algorithms.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
