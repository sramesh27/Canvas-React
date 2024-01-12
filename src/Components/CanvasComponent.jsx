import React, { useEffect, useRef } from 'react';

const CanvasComponent = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctxRef.current = ctx;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseActions = (event) => {
      const mouse = {
        x: event.clientX,
        y: event.clientY,
      };

      drawCircle(mouse);
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('click', handleMouseActions);
    canvas.addEventListener('mousemove', handleMouseActions);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('click', handleMouseActions);
      canvas.removeEventListener('mousemove', handleMouseActions);
    };
  }, []);

  const drawCircle = (mouse) => {
    const ctx = ctxRef.current;
    if (ctx) {
      ctx.fillStyle = 'blue';
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 10, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  return <canvas ref={canvasRef} id="canvas1"></canvas>;
};

export default CanvasComponent;
