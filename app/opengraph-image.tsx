import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Raph Mwanza Portfolio';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Image generation
export default function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: '#151515', // Matte black
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Logo Container */}
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 40,
                position: 'relative',
                width: 200,
                height: 200,
            }}
        >
            {/* S with stroke simulation */}
            <div
                style={{
                    fontSize: 180,
                    fontWeight: 900,
                    color: 'black',
                    textShadow: '-4px -4px 0 #FF0000, 4px -4px 0 #FF0000, -4px 4px 0 #FF0000, 4px 4px 0 #FF0000',
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                S
            </div>
            
            {/* Lightning bolt */}
            <svg
              width="160"
              height="160"
              viewBox="0 0 24 24"
              fill="#22d3ee" // Cyan-400
              style={{
                position: 'absolute',
                zIndex: 10,
                opacity: 0.9,
              }}
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
        </div>

        <div style={{ fontSize: 60, fontWeight: 'bold', marginBottom: 20 }}>
            Raph Mwanza
        </div>
        <div style={{ fontSize: 30, color: '#006994' }}>
            Full Stack Engineer
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
