import React, { useEffect, useRef } from 'react';

export default function MatrixGridCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse state with smooth dampening
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 180,
      active: false,
    };

    // Perspective tilt offset
    let tiltX = 0;
    let tiltY = 0;

    const handleResize = () => {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouse.targetX = e.touches[0].clientX;
        mouse.targetY = e.touches[0].clientY;
        mouse.active = true;
      }
    };

    const handleMouseLeave = () => {
      mouse.targetX = width / 2;
      mouse.targetY = height / 2;
      mouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    // Grid configuration
    const spacing = 36; // Distance between matrix dots
    let time = 0;

    const render = () => {
      time += 0.02;

      // Smooth lerp mouse position
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Perspective tilt dampening
      const targetTiltX = ((mouse.x - width / 2) / width) * 20;
      const targetTiltY = ((mouse.y - height / 2) / height) * 20;
      tiltX += (targetTiltX - tiltX) * 0.05;
      tiltY += (targetTiltY - tiltY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Subtle cyber grid lines along primary axes
      const cols = Math.ceil(width / spacing) + 2;
      const rows = Math.ceil(height / spacing) + 2;

      const startCol = -1;
      const startRow = -1;

      // Draw dots
      for (let i = startCol; i < cols; i++) {
        for (let j = startRow; j < rows; j++) {
          const baseX = i * spacing + tiltX * (j / rows - 0.5) * 1.5;
          const baseY = j * spacing + tiltY * (i / cols - 0.5) * 1.5;

          // Distance to mouse cursor
          const dx = mouse.x - baseX;
          const dy = mouse.y - baseY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Subtle ambient wave ripple
          const wave = Math.sin(time + (i * 0.2) + (j * 0.2)) * 1.5;

          // Mouse proximity ripple effect
          let rippleOffset = 0;
          let glowFactor = 0;

          if (dist < mouse.radius) {
            const proximity = 1 - dist / mouse.radius;
            // Push dot outward slightly like a shockwave/ripple
            rippleOffset = Math.sin(proximity * Math.PI) * 12;
            glowFactor = Math.pow(proximity, 1.8);
          }

          const angle = Math.atan2(dy, dx);
          const drawX = baseX - Math.cos(angle) * rippleOffset;
          const drawY = baseY - Math.sin(angle) * rippleOffset + wave;

          // Base dot styling - cyber emerald & lime accents
          let baseRadius = 1.3;
          let alpha = 0.18;
          let dotColor = 'rgba(16, 185, 129, '; // emerald #10b981

          // Subtle coordinate pulse
          if ((i + j) % 6 === 0) {
            alpha = 0.24 + Math.sin(time * 1.5 + i) * 0.08;
          }

          if (glowFactor > 0) {
            baseRadius += glowFactor * 3.2;
            alpha = Math.min(0.95, alpha + glowFactor * 0.85);

            // Close proximity dots shift toward vivid neon lime (#bef264)
            if (glowFactor > 0.45) {
              dotColor = 'rgba(190, 242, 100, ';
            }

            // Draw soft glow aura for excited dots
            ctx.beginPath();
            ctx.arc(drawX, drawY, baseRadius * 2.8, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(16, 185, 129, ${glowFactor * 0.22})`;
            ctx.fill();
          }

          ctx.beginPath();
          ctx.arc(drawX, drawY, Math.max(0.8, baseRadius), 0, Math.PI * 2);
          ctx.fillStyle = `${dotColor}${alpha.toFixed(3)})`;
          ctx.fill();

          // Occasionally draw a micro crosshair target for cyber aesthetic on highlighted grid points
          if ((i % 5 === 0 && j % 5 === 0) && glowFactor > 0.3) {
            ctx.strokeStyle = `rgba(163, 230, 53, ${glowFactor * 0.4})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(drawX - 5, drawY);
            ctx.lineTo(drawX + 5, drawY);
            ctx.moveTo(drawX, drawY - 5);
            ctx.lineTo(drawX, drawY + 5);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
}

