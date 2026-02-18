import Header from '@/components/header'
import LayoutPattern from '@/components/layout-pattern'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Turn issues into finished projects fast | Forward',
    template: '%s | Forward',
  },
  description:
    "Keep your team's work in one spot. No more digging through chats or docs, everything lives here, clear and simple",
  icons: [
    { rel: 'icon', type: 'image/svg+xml', url: '/favicon.svg', sizes: 'any' },
    { rel: 'icon', type: 'image/x-icon', url: '/favicon.ico', sizes: '48x48' },
  ],
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
      <body
        className={`${inter.className} antialiased max-md:has-[header[data-is-hamburger-menu-open='true']]:overflow-hidden`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <LayoutPattern>{children}</LayoutPattern>
        </div>
      </body>
    </html>
  )
}
