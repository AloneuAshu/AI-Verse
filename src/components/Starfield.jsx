import React, { useEffect, useRef } from 'react';

const Starfield = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Create stars
        const stars = Array.from({ length: 200 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2,
            speed: Math.random() * 0.5 + 0.1,
            opacity: Math.random()
        }));

        // Golden falling meteors
        let meteors = [];

        // Animation loop
        const animate = () => {
            // Use slightly darker overlay for better trails
            ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Rare chance to spawn a golden meteor (about every 3-5 seconds on average)
            if (Math.random() < 0.005 && meteors.length < 3) {
                meteors.push({
                    x: Math.random() * canvas.width,
                    y: -100,
                    size: Math.random() * 2 + 1.5,
                    speedY: Math.random() * 4 + 3,
                    speedX: (Math.random() - 0.5) * 2,
                    length: Math.random() * 100 + 50,
                    opacity: 1
                });
            }

            // Draw Stars
            stars.forEach(star => {
                star.y += star.speed;
                if (star.y > canvas.height) {
                    star.y = 0;
                    star.x = Math.random() * canvas.width;
                }
                star.opacity += (Math.random() - 0.5) * 0.1;
                star.opacity = Math.max(0.1, Math.min(0.8, star.opacity));

                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();
            });

            // Draw Golden Meteors
            meteors = meteors.filter(m => {
                m.x += m.speedX;
                m.y += m.speedY;

                // Draw trailing line
                const gradient = ctx.createLinearGradient(m.x, m.y, m.x - m.speedX * 20, m.y - m.speedY * 20);
                gradient.addColorStop(0, '#FFD700'); // Gold
                gradient.addColorStop(1, 'transparent');

                ctx.strokeStyle = gradient;
                ctx.lineWidth = m.size;
                ctx.lineCap = 'round';
                ctx.beginPath();
                ctx.moveTo(m.x, m.y);
                ctx.lineTo(m.x - m.speedX * 15, m.y - m.speedY * 15);
                ctx.stroke();

                // Draw Head Glow
                ctx.shadowBlur = 15;
                ctx.shadowColor = '#FFD700';
                ctx.fillStyle = '#FFF8DC'; // Cornsilk (bright head)
                ctx.beginPath();
                ctx.arc(m.x, m.y, m.size * 0.8, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0; // Reset shadow for other items

                return m.y < canvas.height + 100 && m.x > -100 && m.x < canvas.width + 100;
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="starfield"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none'
            }}
        />
    );
};

export default Starfield;
