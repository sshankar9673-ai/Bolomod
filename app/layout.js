export const metadata = {
  title: 'BALAMOD TSR STORE',
  description: 'Key Store & Generator',
}

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#0f172a' }}>
        {children}
      </body>
    </html>
  )
}

