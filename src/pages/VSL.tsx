
import { useEffect } from 'react';

const VSL = () => {
  useEffect(() => {
    // Create and append the Vturb player script
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/adf51499-85b4-4638-81dd-a9107287a7d1/players/68646506c53f6b4dad5f83eb/v4/player.js";
    script.async = true;
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
        <vturb-smartplayer 
          id="vid-68646506c53f6b4dad5f83eb" 
          style={{ display: 'block', margin: '0 auto', width: '100%' }}
        />
      </div>
    </div>
  );
};

export default VSL;
