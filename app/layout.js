import './globals.css'

export const metadata = {
  title: 'Altair Hospital - Pelayanan Kesehatan Terpercaya',
  description: 'Altair Hospital menyediakan pelayanan kesehatan berkualitas.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}