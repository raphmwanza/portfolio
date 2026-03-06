import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 20,
          background: '#151515', // Matte black
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '20%', 
          position: 'relative',
        }}
      >
        {/* S with stroke simulation using text-shadow */}
        <div
            style={{
                position: 'absolute',
                fontFamily: 'sans-serif',
                fontWeight: 900,
                color: 'black',
                textShadow: '0 0 2px #FF0000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            S
        </div>
        
        {/* Lightning bolt */}
        <svg
          width="24"
          height="24"
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
    ),
    {
      ...size,
    }
  );
}
