import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-screen">
      <head />
      <body className="bg-black">
        {children}
      </body>
    </html>
  )
}
