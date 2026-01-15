import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '100px',
            position: 'relative'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '3rem',
                    alignItems: 'center'
                }}>
                    {/* Left Content */}
                    <div>
                        <div style={{
                            display: 'inline-block',
                            padding: '0.5rem 1.5rem',
                            border: '1px solid var(--cyan)',
                            marginBottom: '2rem',
                            fontSize: '0.75rem',
                            letterSpacing: '0.2em',
                            color: 'var(--cyan)'
                        }}>
                            NEXT-GENERATION CINEMA
                        </div>

                        <h1 style={{
                            fontSize: 'clamp(3rem, 10vw, 7rem)',
                            lineHeight: '1',
                            marginBottom: '2rem',
                            fontFamily: 'Orbitron, sans-serif',
                            fontWeight: '900'
                        }}>
                            AI VERSE
                            <br />
                            <span style={{
                                color: 'var(--cyan)',
                                textShadow: '0 0 30px var(--cyan-glow)'
                            }}>
                                STUDIOS
                            </span>
                        </h1>

                        <p style={{
                            fontSize: '1.5rem',
                            color: 'var(--text-gray)',
                            marginBottom: '1rem',
                            maxWidth: '600px',
                            lineHeight: '1.6'
                        }}>
                            Engineering legendary cinematic experiences where <span style={{ color: 'var(--cyan)' }}>ancient mythology</span> meets <span style={{ color: 'var(--cyan)' }}>artificial intelligence</span>.
                        </p>

                        <p style={{
                            fontSize: '1.125rem',
                            color: 'var(--text-gray)',
                            marginBottom: '3rem',
                            maxWidth: '600px'
                        }}>
                            From the realm of Antharloka to the rise of gods, we craft epic stories powered by cutting-edge AI technology.
                        </p>

                        <div style={{
                            display: 'flex',
                            gap: '1.5rem',
                            flexWrap: 'wrap'
                        }}>
                            <a href="#chapter3" className="btn" style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem'
                            }}>
                                <Play size={20} />
                                WATCH CHAPTER III
                            </a>
                            <a href="#gallery" className="btn">
                                EXPLORE GALLERY
                                <ArrowRight size={20} style={{ marginLeft: '0.75rem' }} />
                            </a>
                        </div>

                        {/* Stats */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '2rem',
                            marginTop: '4rem',
                            paddingTop: '3rem',
                            borderTop: '1px solid rgba(0, 240, 255, 0.2)'
                        }}>
                            <div>
                                <div style={{
                                    fontSize: '2.5rem',
                                    fontWeight: '700',
                                    color: 'var(--cyan)',
                                    fontFamily: 'Orbitron, sans-serif'
                                }}>
                                    100%
                                </div>
                                <div style={{
                                    fontSize: '0.875rem',
                                    color: 'var(--text-gray)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em'
                                }}>
                                    AI Generated
                                </div>
                            </div>
                            <div>
                                <div style={{
                                    fontSize: '2.5rem',
                                    fontWeight: '700',
                                    color: 'var(--cyan)',
                                    fontFamily: 'Orbitron, sans-serif'
                                }}>
                                    7
                                </div>
                                <div style={{
                                    fontSize: '0.875rem',
                                    color: 'var(--text-gray)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em'
                                }}>
                                    AI Systems
                                </div>
                            </div>
                            <div>
                                <div style={{
                                    fontSize: '2.5rem',
                                    fontWeight: '700',
                                    color: 'var(--cyan)',
                                    fontFamily: 'Orbitron, sans-serif'
                                }}>
                                    2026
                                </div>
                                <div style={{
                                    fontSize: '0.875rem',
                                    color: 'var(--text-gray)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em'
                                }}>
                                    Release Year
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
