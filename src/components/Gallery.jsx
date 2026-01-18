import React from 'react';
import { Film, Image, Palette, Sparkles, Camera, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

const Gallery = () => {
    const galleryItems = [
        {
            id: 1,
            title: 'Final Trailer',
            category: 'Video',
            icon: <Film size={32} />,
            image: 'https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?auto=format&fit=crop&w=800&q=80',
            description: 'Epic cinematic trailer showcasing the full scope of Chapter III',
            link: '#chapter3'
        },
        {
            id: 2,
            title: 'Character Design',
            category: 'Concept Art',
            icon: <Palette size={32} />,
            image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=800&q=80',
            description: 'AI-generated character designs for gods and mythological beings',
            link: '#'
        },
        {
            id: 3,
            title: 'Environment Art',
            category: 'Concept Art',
            icon: <Layers size={32} />,
            image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80',
            description: 'Antharloka realm and cosmic landscapes visualization',
            link: '#'
        },
        {
            id: 4,
            title: 'Visual Effects',
            category: 'Production',
            icon: <Sparkles size={32} />,
            image: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?auto=format&fit=crop&w=800&q=80',
            description: 'AI-powered VFX and cinematic effects breakdown',
            link: '#'
        },
        {
            id: 5,
            title: 'Behind The Scenes',
            category: 'Production',
            icon: <Camera size={32} />,
            image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
            description: 'AI production process and creative workflow insights',
            link: '#'
        },
        {
            id: 6,
            title: 'Storyboards',
            category: 'Pre-Production',
            icon: <Image size={32} />,
            image: 'https://images.unsplash.com/photo-1615184697985-c9bde1b07da7?auto=format&fit=crop&w=800&q=80',
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
                            <TiltCard
                                className="card"
                                style={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    cursor: 'pointer',
                                    overflow: 'hidden',
                                    padding: 0 // Reset padding for image
                                }}
                            >
                                {/* Image Area */}
                                <div style={{
                                    height: '250px',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    background: 'var(--bg-black)'
                                }}>
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'rgba(0, 240, 255, 0.1)',
                                        zIndex: 1
                                    }} />
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentElement.style.backgroundImage = 'radial-gradient(circle at center, rgba(0, 240, 255, 0.2), #000)';
                                        }}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.5s ease'
                                        }}
                                        className="gallery-image"
                                    />

                                    {/* Overlay Icon */}
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '1rem',
                                        right: '1rem',
                                        background: 'rgba(0,0,0,0.7)',
                                        padding: '0.5rem',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '1px solid var(--cyan)',
                                        color: 'var(--cyan)',
                                        zIndex: 2,
                                        backdropFilter: 'blur(5px)'
                                    }}>
                                        {item.icon}
                                    </div>

                                    {/* Category Badge */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '1rem',
                                        left: '1rem',
                                        padding: '0.25rem 0.75rem',
                                        background: 'rgba(0, 240, 255, 0.1)',
                                        border: '1px solid var(--cyan)',
                                        fontSize: '0.75rem',
                                        letterSpacing: '0.1em',
                                        color: 'var(--cyan)',
                                        zIndex: 2,
                                        backdropFilter: 'blur(5px)'
                                    }}>
                                        {item.category}
                                    </div>
                                </div>

                                <div style={{ padding: '2rem' }}>
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        fontFamily: 'Orbitron, sans-serif',
                                        marginBottom: '1rem',
                                        color: 'var(--text-white)'
                                    }}>
                                        {item.title}
                                    </h3>

                                    <p style={{
                                        fontSize: '1rem',
                                        color: 'var(--text-gray)',
                                        lineHeight: '1.6',
                                        marginBottom: 0
                                    }}>
                                        {item.description}
                                    </p>
                                </div>
                            </TiltCard>
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
