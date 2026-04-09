import { useEffect, useRef } from 'react';

export default function NoiseOverlay() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = 256;
    canvas.height = 256;

    const imageData = ctx.createImageData(256, 256);
    const data = imageData.data;

    function generateNoise() {
      for (let i = 0; i < data.length; i += 4) {
        const v = Math.random() * 255;
        data[i] = v;
        data[i + 1] = v;
        data[i + 2] = v;
        data[i + 3] = 15;
      }
      ctx.putImageData(imageData, 0, 0);
    }

    generateNoise();
    const interval = setInterval(generateNoise, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-50 opacity-30"
      style={{ imageRendering: 'pixelated' }}
    />
  );
}