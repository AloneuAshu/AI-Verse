import React, { useState, useEffect } from 'react';

const AITerminal = ({ activeSection }) => {
    const [logs, setLogs] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    // Initial System Boot Sequence
    useEffect(() => {
        const bootMessages = [
            "Initializing Neural Interface...",
            "Accessing Antharloka Database...",
            "Loading AI Models: ChatGPT, Midjourney, Runway...",
            "Synthesizing Voice Parameters...",
            "Optimizing 3D Assets for Real-time Render...",
            "Connection Established: User Detected.",
            "System Status: ONLINE",
            "Waiting for navigational input..."
        ];

        let currentIndex = 0;
        const addBootLog = () => {
            if (currentIndex < bootMessages.length) {
                const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false });
                setLogs(prev => [...prev, `[${timestamp}] > ${bootMessages[currentIndex]}`]);
                currentIndex++;
                setTimeout(addBootLog, Math.random() * 800 + 200);
            }
        };
        addBootLog();
    }, []);

    // Active Section Tracking Log
    useEffect(() => {
        if (activeSection) {
            const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false });

            // Context-aware messages based on section
            let message = `Scanning Sector: ${activeSection.toUpperCase()}`;
            if (activeSection === 'home') message = "Initializing Main Hub: HERO_MODULE";
            if (activeSection === 'chapter3') message = "Loading Cinematic Sequence: CHAPTER_III";
            if (activeSection === 'tech') message = "Analyzing Neural Network Architecture...";
            if (activeSection === 'gallery') message = "Retrieving Visual Archives (Secure Access)...";
            if (activeSection === 'pricing') message = "Calculating Commercial Parameters...";
            if (activeSection === 'contact') message = "Opening Secure Communication Channels...";

            setLogs(prev => [...prev, `[${timestamp}] > ${message}`]);
        }
    }, [activeSection]);

    // Auto-scroll to bottom
    useEffect(() => {
        const terminal = document.getElementById('terminal-content');
        if (terminal) {
            terminal.scrollTop = terminal.scrollHeight;
        }
    }, [logs, isOpen]);

    if (!isOpen) {
        return (
            <>
                <style>{`
                    @media (max-width: 768px) {
                        .ai-terminal-toggle { display: none !important; }
                    }
                `}</style>
                <button
                    className="ai-terminal-toggle"
                    onClick={() => setIsOpen(true)}
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        background: 'rgba(0, 0, 0, 0.9)',
                        border: '1px solid var(--cyan)',
                        color: 'var(--cyan)',
                        padding: '10px 15px',
                        fontFamily: 'monospace',
                        fontSize: '12px',
                        zIndex: 1000,
                        cursor: 'pointer',
                        borderRadius: '5px',
                        boxShadow: '0 0 15px rgba(0, 240, 255, 0.2)'
                    }}
                >
                    TERMINAL_
                </button>
            </>
        );
    }

    return (
        <div style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '300px',
            background: 'rgba(5, 5, 10, 0.95)',
            border: '1px solid var(--cyan)',
            borderRadius: '5px',
            fontFamily: "'Courier New', monospace",
            fontSize: '11px',
            zIndex: 1000,
            overflow: 'hidden',
            boxShadow: '0 0 20px rgba(0, 240, 255, 0.15)'
        }}>
            {/* Header */}
            <div style={{
                background: 'rgba(0, 240, 255, 0.1)',
                padding: '5px 10px',
                borderBottom: '1px solid rgba(0, 240, 255, 0.3)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: 'var(--cyan)'
            }}>
                <span style={{ fontWeight: 'bold' }}>AI_VERSE_KERNEL // v2.6</span>
                <button
                    onClick={() => setIsOpen(false)}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--cyan)',
                        cursor: 'pointer',
                        fontSize: '14px'
                    }}
                >
                    ×
                </button>
            </div>

            {/* Content */}
            <div
                id="terminal-content"
                style={{
                    height: '150px',
                    overflowY: 'auto',
                    padding: '10px',
                    color: '#00f0ff',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                }}
            >
                {logs.map((log, index) => (
                    <div key={index} style={{ opacity: 0.8 }}>
                        {log}
                    </div>
                ))}
                <div style={{
                    width: '8px',
                    height: '14px',
                    background: 'var(--cyan)',
                    animation: 'blink 1s step-end infinite'
                }}></div>
            </div>
            <style>{`
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
            `}</style>
        </div>
    );
};

export default AITerminal;
