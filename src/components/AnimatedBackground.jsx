import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let alpha = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = `rgba(5, 5, 5, ${alpha})`;
      ctx.font = '40px Great Vibes';
      ctx.textAlign = 'center';
      ctx.fillText('Σας ευχαριστώ', canvas.width / 2, canvas.height / 2);

      alpha += 0.01;
      if (alpha < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      height={'70px'}
      style={{ width: '100%', height: '100%', marginTop: '30px' }}
    ></canvas>
  );
};

export default AnimatedBackground;
