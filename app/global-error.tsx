'use client'

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: '#080d16',
          color: '#f5f6f8',
          fontFamily: 'Arial, Helvetica, sans-serif',
        }}
      >
        <main
          style={{
            minHeight: '100vh',
            display: 'grid',
            placeContent: 'center',
            gap: '1rem',
            padding: '2rem',
          }}
        >
          <p
            style={{
              color: '#6f7c8e',
              fontSize: '0.68rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
            }}
          >
            VexelLabs / System error
          </p>
          <h1
            style={{
              maxWidth: '12ch',
              margin: 0,
              fontSize: 'clamp(2.8rem, 8vw, 6rem)',
              fontWeight: 500,
              letterSpacing: '-0.06em',
              lineHeight: 0.95,
            }}
          >
            This view needs another pass.
          </h1>
          <p style={{ maxWidth: '30rem', color: '#a4afbe', lineHeight: 1.6 }}>
            Try the request again, or return to the homepage.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            style={{
              width: 'fit-content',
              padding: '0.8rem 1.1rem',
              border: 0,
              borderRadius: '999px',
              background: '#477bff',
              color: '#fff',
              fontSize: '0.82rem',
              cursor: 'pointer',
            }}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  )
}
