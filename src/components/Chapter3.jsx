import React from 'react';
import { Play, Calendar, Film } from 'lucide-react';

const Chapter3 = () => {
    return (
        <section id="chapter3" style={{
            padding: '8rem 0',
            position: 'relative'
        }}>
            <div className="container">
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '0.5rem 1.5rem',
                        border: '1px solid var(--cyan)',
                        marginBottom: '1.5rem',
                        fontSize: '0.75rem',
                        letterSpacing: '0.2em',
                        color: 'var(--cyan)'
                    }}>
                        <Calendar size={16} />
                        2026 RELEASE
                    </div>

                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                        fontFamily: 'Orbitron, sans-serif',
                        fontWeight: '900',
                        marginBottom: '1.5rem',
                        color: 'var(--cyan)',
                        textShadow: '0 0 30px var(--cyan-glow)'
                    }}>
                        CHAPTER III
                    </h2>

                    <p style={{
                        fontSize: '1.75rem',
                        fontStyle: 'italic',
                        color: 'var(--text-white)',
                        marginBottom: '1rem',
                        maxWidth: '900px',
                        margin: '0 auto 1rem'
                    }}>
                        "An ancient decision. A buried truth. A war that transcended gods and time itself."
                    </p>

                    <p style={{
                        fontSize: '1.125rem',
                        color: 'var(--text-gray)',
                        maxWidth: '800px',
                        margin: '0 auto'
                    }}>
                        From the unknown realm of Antharloka to the rise of Shiva and Vishnu, witness an epic AI-powered cinematic experience.
                    </p>
                </div>

                {/* Video Container */}
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto 5rem'
                }}>
                    <div className="card" style={{
                        padding: '0',
                        overflow: 'hidden',
                        position: 'relative'
                    }}>
                        {/* Video */}
                        <div style={{
                            position: 'relative',
                            paddingBottom: '56.25%',
                            height: 0,
                            background: '#000'
                        }}>
                            <iframe
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%'
                                }}
                                src="https://www.youtube.com/embed/A651D8NCcmw"
                                title="CHAPTER III – FINAL TRAILER"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>

                        {/* Video Info Bar */}
                        <div style={{
                            padding: '1.5rem 2rem',
                            background: 'rgba(0, 0, 0, 0.9)',
                            borderTop: '1px solid rgba(0, 240, 255, 0.2)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: '1rem'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <Film size={20} style={{ color: 'var(--cyan)' }} />
                                <span style={{
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    color: 'var(--text-white)'
                                }}>
                                    CHAPTER III – FINAL TRAILER
                                </span>
                            </div>
                            <div style={{
                                fontSize: '0.875rem',
                                color: 'var(--text-gray)'
                            }}>
                                WITNESS THE DAWN OF AI CINEMA
                            </div>
                        </div>
                    </div>
                </div>

                {/* Story Elements Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    marginTop: '4rem'
                }}>
                    <div className="card">
                        <h3 style={{
                            fontSize: '1.25rem',
                            color: 'var(--cyan)',
                            marginBottom: '1rem',
                            fontFamily: 'Orbitron, sans-serif'
                        }}>
                            THE REALM
                        </h3>
                        <p style={{ color: 'var(--text-gray)' }}>
                            Antharloka - an unknown realm where ancient powers clash and cosmic decisions shape the fate of existence.
                        </p>
                    </div>

                    <div className="card">
                        <h3 style={{
                            fontSize: '1.25rem',
                            color: 'var(--cyan)',
                            marginBottom: '1rem',
                            fontFamily: 'Orbitron, sans-serif'
                        }}>
                            THE GODS
                        </h3>
                        <p style={{ color: 'var(--text-gray)' }}>
                            Shiva and Vishnu rise in an epic saga of power, duty, and the eternal struggle between creation and destruction.
                        </p>
                    </div>

                    <div className="card">
                        <h3 style={{
                            fontSize: '1.25rem',
                            color: 'var(--cyan)',
                            marginBottom: '1rem',
                            fontFamily: 'Orbitron, sans-serif'
                        }}>
                            THE WAR
                        </h3>
                        <p style={{ color: 'var(--text-gray)' }}>
                            A conflict that transcends time itself, where every decision echoes through eternity and shapes the cosmos.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Chapter3;
