import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SRNR Dashboard ',
  description: 'SRNR HR PORTAL',
  generator: 'Next.js',
  icons: [
    { rel: 'icon', url: '/srnr_logo.jpeg', type: 'image/jpeg' }
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
