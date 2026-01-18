import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const cursorRef = useRef(null);
    const dotRef = useRef(null);

    useEffect(() => {
        const onMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const onMouseDown = () => {
            if (cursorRef.current) cursorRef.current.style.transform = 'translate(-50%, -50%) scale(0.8)';
        };

        const onMouseUp = () => {
            if (cursorRef.current) cursorRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
        };

        // Track hovering over clickable elements
        const handleLinkHoverEvents = () => {
            document.querySelectorAll('a, button, .clickable').forEach(el => {
                el.addEventListener('mouseenter', () => setIsHovering(true));
                el.addEventListener('mouseleave', () => setIsHovering(false));
            });
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);

        handleLinkHoverEvents();

        // Re-attach listeners if DOM changes (simple observation)
        const observer = new MutationObserver(handleLinkHoverEvents);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <style>{`
                body { cursor: none; }
                a, button { cursor: none; }
            `}</style>

            {/* Outer Ring */}
            <div
                ref={cursorRef}
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: isHovering ? '50px' : '30px',
                    height: isHovering ? '50px' : '30px',
                    border: '1px solid var(--cyan)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 9999,
                    transition: 'width 0.2s, height 0.2s, background-color 0.2s',
                    backgroundColor: isHovering ? 'rgba(0, 240, 255, 0.1)' : 'transparent',
                    boxShadow: isHovering ? '0 0 15px var(--cyan-glow)' : 'none',
                    mixBlendMode: 'difference'
                }}
                className="custom-cursor-ring"
            />

            {/* Inner Dot */}
            <div
                ref={dotRef}
                style={{
                    position: 'fixed',
                    left: position.x,
                    top: position.y,
                    width: '6px',
                    height: '6px',
                    backgroundColor: 'var(--cyan)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 9999,
                    mixBlendMode: 'difference'
                }}
            />

            {/* Trailing Logic would typically involve requestAnimationFrame for smoothness, 
                but CSS transition on the ring gives a "magnetic" lag effect naturally. 
                We use direct coordinates for the dot for responsiveness 
                and update the ring via ref/style in a real loop for better performance 
                if we wanted complex physics. For now, React state is "okay" but 
                direct DOM manipulation is smoother for cursors. 
            */}
            <CursorUpdater cursorRef={cursorRef} position={position} />
        </>
    );
};

// Helper to smooth out the ring movement separately from the dot
const CursorUpdater = ({ cursorRef, position }) => {
    useEffect(() => {
        if (cursorRef.current) {
            cursorRef.current.style.left = `${position.x}px`;
            cursorRef.current.style.top = `${position.y}px`;
        }
    }, [position, cursorRef]);
    return null;
}

export default CustomCursor;
