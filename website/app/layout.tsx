import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

export const metadata: Metadata = {
  title: 'Forward',
  description: '',
}

const inter = localFont({
  src: [
    {
      path: '../public/fonts/inter-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/inter-medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/inter-semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  )
}
