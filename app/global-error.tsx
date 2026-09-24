'use client'

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#101110', color: '#f3f2ed', fontFamily: 'Arial, Helvetica, sans-serif' }}>
        <main style={{ minHeight: '100vh', display: 'grid', placeContent: 'center', gap: '1rem', padding: '2rem' }}>
          <p style={{ color: '#fcf75e', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Vexel Labs / System error</p>
          <h1 style={{ maxWidth: '10ch', margin: 0, fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 500, letterSpacing: '-0.08em', lineHeight: 0.95 }}>This view needs another pass.</h1>
          <p style={{ maxWidth: '30rem', color: '#a7aaa1', lineHeight: 1.6 }}>Try the request again, or return to the homepage.</p>
          <button type="button" onClick={() => reset()} style={{ width: 'fit-content', padding: '0.8rem 1rem', border: 0, background: '#fcf75e', color: '#101110', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Try again</button>
        </main>
      </body>
    </html>
  )
}
