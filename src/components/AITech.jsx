import React from 'react';

const AITech = () => {
    const technologies = [
        {
            name: 'ChatGPT',
            logo: '/src/assets/chatgpt-logo.svg',
            role: 'Story Architect',
            description: 'Engineered the complete narrative framework, dialogue systems, and character development for our mythological epic.'
        },
        {
            name: 'Grok',
            logo: '/src/assets/grok-logo.svg',
            role: 'Concept Engine',
            description: 'Expanded futuristic concepts and world-building elements, enhancing the depth of Antharloka and cosmic lore.'
        },
        {
            name: 'Eleven Labs',
            logo: '/src/assets/elevenlabs-logo.svg',
            role: 'Voice Synthesis',
            description: 'Created all character voices with emotional depth, bringing gods and legends to life through AI narration.'
        },
        {
            name: 'OpenArt',
            logo: '/src/assets/open-Art.svg',
            role: 'Visual Designer',
            description: 'Generated concept art, environment designs, and visual mood boards for the cinematic universe.'
        },
        {
            name: 'Suno AI',
            logo: '/src/assets/suno-logo.svg',
            role: 'Sonic Architect',
            description: 'Composed original cinematic scores and ambient soundscapes that define the epic atmosphere.'
        },
        {
            name: 'Leonardo AI',
            logo: '/src/assets/leonardo ai.svg',
            role: 'Asset Generator',
            description: 'Designed characters, props, and sci-fi visual assets with high-fidelity imagery for production.'
        },
        {
            name: 'Filmora',
            logo: '/src/assets/filmora-logo.svg',
            role: 'Cinematic Editor',
            description: 'Advanced video editing and post-production, bringing together all elements into polished cinematic masterpieces.'
        }
    ];

    return (
        <section id="tech" style={{ padding: '8rem 0', background: 'rgba(0, 240, 255, 0.02)' }}>
            <div className="container">
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                        fontFamily: 'Orbitron, sans-serif',
                        fontWeight: '900',
                        marginBottom: '1.5rem',
                        color: 'var(--cyan)',
                        textShadow: '0 0 30px var(--cyan-glow)'
                    }}>
                        AI TECHNOLOGY STACK
                    </h2>
                    <p style={{
                        fontSize: '1.125rem',
                        color: 'var(--text-gray)',
                        maxWidth: '700px',
                        margin: '0 auto'
                    }}>
                        Seven neural systems working in harmony to create cinematic excellence
                    </p>
                </div>

                {/* Tech Grid */}
                <div className="grid grid-3">
                    {technologies.map((tech, index) => (
                        <div
                            key={tech.name}
                            className="card"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%'
                            }}
                        >
                            {/* Logo */}
                            <div style={{
                                marginBottom: '1.5rem',
                                height: '60px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start'
                            }}>
                                <img
                                    src={tech.logo}
                                    alt={`${tech.name} logo`}
                                    style={{
                                        height: '60px',
                                        width: '60px',
                                        objectFit: 'contain',
                                        filter: 'brightness(0) invert(1)',
                                        opacity: '0.9'
                                    }}
                                />
                            </div>

                            {/* Name */}
                            <h3 style={{
                                fontSize: '1.5rem',
                                fontFamily: 'Orbitron, sans-serif',
                                marginBottom: '0.5rem',
                                color: 'var(--text-white)'
                            }}>
                                {tech.name}
                            </h3>

                            {/* Role */}
                            <div style={{
                                display: 'inline-block',
                                padding: '0.25rem 0.75rem',
                                border: '1px solid var(--cyan)',
                                fontSize: '0.75rem',
                                letterSpacing: '0.1em',
                                color: 'var(--cyan)',
                                marginBottom: '1.5rem',
                                width: 'fit-content'
                            }}>
                                {tech.role}
                            </div>

                            {/* Description */}
                            <p style={{
                                fontSize: '1rem',
                                color: 'var(--text-gray)',
                                lineHeight: '1.7',
                                flex: 1
                            }}>
                                {tech.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div style={{
                    textAlign: 'center',
                    marginTop: '5rem',
                    padding: '3rem',
                    border: '2px solid var(--cyan)',
                    background: 'rgba(0, 240, 255, 0.05)'
                }}>
                    <h3 style={{
                        fontSize: '1.75rem',
                        fontFamily: 'Orbitron, sans-serif',
                        color: 'var(--cyan)',
                        marginBottom: '1rem'
                    }}>
                        POWERED BY ARTIFICIAL INTELLIGENCE
                    </h3>
                    <p style={{
                        fontSize: '1.125rem',
                        color: 'var(--text-gray)',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        Every frame, every voice, every sound - engineered by the future of creative technology
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AITech;
