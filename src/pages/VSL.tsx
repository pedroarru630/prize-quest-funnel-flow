
import { useEffect } from 'react';

const VSL = () => {
  useEffect(() => {
    // Create and append the Vturb player script
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/adf51499-85b4-4638-81dd-a9107287a7d1/players/68646506c53f6b4dad5f83eb/v4/player.js";
    script.async = true;
    script.type = "text/javascript";
    document.head.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        {/* Video container with proper constraints */}
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
            <vturb-smartplayer 
              id="vid-68646506c53f6b4dad5f83eb" 
              style={{ 
                display: 'block', 
                width: '100%', 
                height: '100%',
                maxWidth: '100%',
                maxHeight: '100%'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VSL;
