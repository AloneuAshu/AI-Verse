import React from 'react';
import { Film, Image, Palette, Sparkles, Camera, Layers } from 'lucide-react';

const Gallery = () => {
    const galleryItems = [
        {
            id: 1,
            title: 'Final Trailer',
            category: 'Video',
            icon: <Film size={32} />,
            description: 'Epic cinematic trailer showcasing the full scope of Chapter III',
            link: '#chapter3',
            videoUrl: 'https://www.youtube.com/watch?v=A651D8NCcmw'
        },
        {
            id: 2,
            title: 'Character Design',
            category: 'Concept Art',
            icon: <Palette size={32} />,
            description: 'AI-generated character designs for gods and mythological beings',
            link: '#'
        },
        {
            id: 3,
            title: 'Environment Art',
            category: 'Concept Art',
            icon: <Layers size={32} />,
            description: 'Antharloka realm and cosmic landscapes visualization',
            link: '#'
        },
        {
            id: 4,
            title: 'Visual Effects',
            category: 'Production',
            icon: <Sparkles size={32} />,
            description: 'AI-powered VFX and cinematic effects breakdown',
            link: '#'
        },
        {
            id: 5,
            title: 'Behind The Scenes',
            category: 'Production',
            icon: <Camera size={32} />,
            description: 'AI production process and creative workflow insights',
            link: '#'
        },
        {
            id: 6,
            title: 'Storyboards',
            category: 'Pre-Production',
            icon: <Image size={32} />,
            description: 'AI-generated storyboards and scene compositions',
            link: '#'
        }
    ];

    return (
        <section id="gallery" style={{ padding: '8rem 0' }}>
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
                        PRODUCTION GALLERY
                    </h2>
                    <p style={{
                        fontSize: '1.125rem',
                        color: 'var(--text-gray)',
                        maxWidth: '700px',
                        margin: '0 auto'
                    }}>
                        Explore the creative journey behind Chapter III
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-3">
                    {galleryItems.map((item) => (
                        <a
                            key={item.id}
                            href={item.link}
                            style={{ textDecoration: 'none' }}
                        >
                            <div
                                className="card"
                                style={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {/* Icon Area */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '200px',
                                    background: 'rgba(0, 240, 255, 0.05)',
                                    marginBottom: '1.5rem',
                                    color: 'var(--cyan)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    {/* Background Pattern */}
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        backgroundImage: 'linear-gradient(45deg, rgba(0, 240, 255, 0.1) 25%, transparent 25%, transparent 75%, rgba(0, 240, 255, 0.1) 75%, rgba(0, 240, 255, 0.1)), linear-gradient(45deg, rgba(0, 240, 255, 0.1) 25%, transparent 25%, transparent 75%, rgba(0, 240, 255, 0.1) 75%, rgba(0, 240, 255, 0.1))',
                                        backgroundSize: '20px 20px',
                                        backgroundPosition: '0 0, 10px 10px',
                                        opacity: 0.3
                                    }} />

                                    {/* Icon */}
                                    <div style={{ position: 'relative', zIndex: 1 }}>
                                        {item.icon}
                                    </div>
                                </div>

                                {/* Category Badge */}
                                <div style={{
                                    display: 'inline-block',
                                    padding: '0.25rem 0.75rem',
                                    border: '1px solid var(--cyan)',
                                    fontSize: '0.75rem',
                                    letterSpacing: '0.1em',
                                    color: 'var(--cyan)',
                                    marginBottom: '1rem',
                                    width: 'fit-content'
                                }}>
                                    {item.category}
                                </div>

                                {/* Title */}
                                <h3 style={{
                                    fontSize: '1.5rem',
                                    fontFamily: 'Orbitron, sans-serif',
                                    marginBottom: '1rem',
                                    color: 'var(--text-white)'
                                }}>
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p style={{
                                    fontSize: '1rem',
                                    color: 'var(--text-gray)',
                                    lineHeight: '1.6',
                                    flex: 1
                                }}>
                                    {item.description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Bottom Note */}
                <div style={{
                    textAlign: 'center',
                    marginTop: '4rem',
                    padding: '2rem',
                    border: '1px solid rgba(0, 240, 255, 0.2)',
                    background: 'rgba(0, 240, 255, 0.02)'
                }}>
                    <p style={{
                        fontSize: '1rem',
                        color: 'var(--text-gray)'
                    }}>
                        More content coming soon as we continue production on Chapter III
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
