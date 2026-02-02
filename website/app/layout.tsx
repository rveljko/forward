import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Forward',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <main>{children}</main>
      </body>
    </html>
  )
}
