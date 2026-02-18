import React, { useEffect, useState, useRef } from 'react';
import logo from '../assets/AIVerseLogo.jpeg';

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
                
                @media (hover: none) and (pointer: coarse) {
                    body { cursor: auto; }
                    a, button { cursor: pointer; }
                    .custom-cursor-ring { display: none !important; }
                }
            `}</style>

            {/* Outer Ring */}
            <div
                ref={cursorRef}
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: isHovering ? '60px' : '40px',
                    height: isHovering ? '60px' : '40px',
                    border: '1px solid var(--cyan)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 9999,
                    transition: 'width 0.3s cubic-bezier(0.23, 1, 0.32, 1), height 0.3s cubic-bezier(0.23, 1, 0.32, 1), background-color 0.3s',
                    backgroundColor: isHovering ? 'rgba(0, 240, 255, 0.15)' : 'transparent',
                    boxShadow: isHovering ? '0 0 20px var(--cyan-glow)' : 'none',
                }}
                className="custom-cursor-ring"
            />

            {/* Logo Cursor */}
            <div
                style={{
                    position: 'fixed',
                    left: position.x,
                    top: position.y,
                    width: isHovering ? '30px' : '24px',
                    height: isHovering ? '30px' : '24px',
                    pointerEvents: 'none',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 10000,
                    transition: 'width 0.3s, height 0.3s',
                    filter: 'drop-shadow(0 0 5px var(--cyan-glow))'
                }}
            >
                <img
                    src={logo}
                    alt="Logo Cursor"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        border: '1px solid var(--cyan)'
                    }}
                />
            </div>
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
