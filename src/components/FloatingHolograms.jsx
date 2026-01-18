import React, { useEffect, useRef } from 'react';

const FloatingHolograms = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // 3D Shape Definitions
        const createIcosahedron = () => {
            const t = (1.0 + Math.sqrt(5.0)) / 2.0;
            const size = 15;

            // 12 Vertices
            const vertices = [
                [-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0],
                [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t],
                [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1]
            ].map(v => ({ x: v[0] * size, y: v[1] * size, z: v[2] * size }));

            // 20 Faces (we only need edges for wireframe)
            // Simplified: Draw connections between close vertices
            return { vertices };
        };

        const shapes = [];
        const shapeCount = 4;

        for (let i = 0; i < shapeCount; i++) {
            shapes.push({
                ...createIcosahedron(),
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                z: Math.random() * 200 + 100, // Depth
                rotX: Math.random() * Math.PI,
                rotY: Math.random() * Math.PI,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                rotSpeedX: (Math.random() - 0.5) * 0.02,
                rotSpeedY: (Math.random() - 0.5) * 0.02,
                color: Math.random() > 0.5 ? '#00f0ff' : '#ffffff'
            });
        }

        const project = (x, y, z) => {
            const scale = 600 / (600 + z);
            return {
                x: x * scale + canvas.width / 2,
                y: y * scale + canvas.height / 2,
                scale: scale
            };
        };

        const rotate = (v, pitch, yaw) => {
            let x = v.x;
            let y = v.y;
            let z = v.z;

            // Rotate X
            let y1 = y * Math.cos(pitch) - z * Math.sin(pitch);
            let z1 = y * Math.sin(pitch) + z * Math.cos(pitch);

            // Rotate Y
            let x1 = x * Math.cos(yaw) - z1 * Math.sin(yaw);
            let z2 = x * Math.sin(yaw) + z1 * Math.cos(yaw);

            return { x: x1, y: y1, z: z2 };
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            shapes.forEach(shape => {
                shape.x += shape.speedX;
                shape.y += shape.speedY;
                shape.rotX += shape.rotSpeedX;
                shape.rotY += shape.rotSpeedY;

                // Bounce off edges (conceptually) or wrap
                if (shape.x < -canvas.width / 2) shape.x = canvas.width / 2;
                if (shape.x > canvas.width / 2) shape.x = -canvas.width / 2;
                if (shape.y < -canvas.height / 2) shape.y = canvas.height / 2;
                if (shape.y > canvas.height / 2) shape.y = -canvas.height / 2;

                const center2D = project(shape.x, shape.y, shape.z);

                // Draw Vertices and Edges
                ctx.strokeStyle = shape.color;
                ctx.lineWidth = 1;
                ctx.beginPath();

                const rotatedVertices = shape.vertices.map(v => rotate(v, shape.rotX, shape.rotY));

                // Draw connections
                for (let i = 0; i < rotatedVertices.length; i++) {
                    for (let j = i + 1; j < rotatedVertices.length; j++) {
                        // Simple distance check to draw edges for Icosahedron
                        const d = Math.pow(rotatedVertices[i].x - rotatedVertices[j].x, 2) +
                            Math.pow(rotatedVertices[i].y - rotatedVertices[j].y, 2) +
                            Math.pow(rotatedVertices[i].z - rotatedVertices[j].z, 2);

                        // Roughly edge length squared for size=15 is ~900-1100
                        if (d < 1200) {
                            const p1 = project(shape.x + rotatedVertices[i].x, shape.y + rotatedVertices[i].y, shape.z + rotatedVertices[i].z);
                            const p2 = project(shape.x + rotatedVertices[j].x, shape.y + rotatedVertices[j].y, shape.z + rotatedVertices[j].z);
                            ctx.moveTo(p1.x, p1.y);
                            ctx.lineTo(p2.x, p2.y);
                        }
                    }
                }
                ctx.stroke();

                // Glow
                ctx.shadowBlur = 10;
                ctx.shadowColor = shape.color;

                // Draw joints
                rotatedVertices.forEach(v => {
                    const p = project(shape.x + v.x, shape.y + v.y, shape.z + v.z);
                    ctx.fillStyle = shape.color;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
                    ctx.fill();
                });
                ctx.shadowBlur = 0;
            });

            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0, // Behind main content (z-index 1) but above starfield (-1)
                pointerEvents: 'none'
            }}
        />
    );
};

export default FloatingHolograms;
