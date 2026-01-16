import React from 'react';
import { Clock, Check, Zap, Film, Star } from 'lucide-react';

const Pricing = () => {
    const packages = [
        {
            name: 'TEASER',
            duration: '15 Seconds',
            price: '$499',
            icon: <Zap size={32} />,
            features: [
                '4K AI Video Generation',
                'Basic Sound Design',
                '1 Revision',
                'Social Media License',
                '7 Day Turnaround'
            ],
            recommended: false
        },
        {
            name: 'TRAILER',
            duration: '30 Seconds',
            price: '$899',
            icon: <Film size={32} />,
            features: [
                '4K AI Video Generation',
                'Premium Sound Design & SFX',
                'Voiceover Included',
                '2 Revisions',
                'Commercial License',
                '14 Day Turnaround'
            ],
            recommended: true
        },
        {
            name: 'CINEMATIC',
            duration: '60 Seconds',
            price: '$1,499',
            icon: <Star size={32} />,
            features: [
                'Full Cinematic Storytelling',
                'Custom Original Score',
                'Professional Voice Acting',
                'Unlimited Revisions',
                'Global Broadcast License',
                '30 Day Turnaround'
            ],
            recommended: false
        }
    ];

    return (
        <section id="pricing" style={{ padding: '8rem 0', position: 'relative' }}>
            {/* Background Gradient */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at center, rgba(0, 240, 255, 0.03) 0%, transparent 70%)',
                pointerEvents: 'none'
            }} />

            <div className="container">
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <div style={{
                        display: 'inline-block',
                        padding: '0.5rem 1.5rem',
                        border: '1px solid var(--cyan)',
                        marginBottom: '1.5rem',
                        fontSize: '0.75rem',
                        letterSpacing: '0.2em',
                        color: 'var(--cyan)'
                    }}>
                        COMMERCIAL SERVICES
                    </div>

                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                        fontFamily: 'Orbitron, sans-serif',
                        fontWeight: '900',
                        marginBottom: '1.5rem',
                        color: 'var(--text-white)',
                    }}>
                        STUDIO <span style={{ color: 'var(--cyan)', textShadow: '0 0 30px var(--cyan-glow)' }}>PRICING</span>
                    </h2>
                    <p style={{
                        fontSize: '1.125rem',
                        color: 'var(--text-gray)',
                        maxWidth: '700px',
                        margin: '0 auto'
                    }}>
                        Bring your vision to life with our high-end AI video production packages
                    </p>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-3">
                    {packages.map((pkg) => (
                        <div
                            key={pkg.name}
                            className="card"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'relative',
                                borderColor: pkg.recommended ? 'var(--cyan)' : 'rgba(0, 240, 255, 0.2)',
                                zIndex: pkg.recommended ? 2 : 1,
                                boxShadow: pkg.recommended ? '0 0 30px rgba(0, 240, 255, 0.1)' : 'none',
                                paddingTop: pkg.recommended ? '0' : '2rem'
                            }}
                        >
                            {pkg.recommended && (
                                <div style={{
                                    background: 'var(--cyan)',
                                    color: '#000',
                                    padding: '0.5rem 1rem',
                                    fontSize: '0.75rem',
                                    fontWeight: '700',
                                    letterSpacing: '0.1em',
                                    fontFamily: 'Orbitron, sans-serif',
                                    textAlign: 'center',
                                    marginBottom: '2rem',
                                    width: 'calc(100% + 4rem)',
                                    marginLeft: '-2rem'
                                }}>
                                    RECOMMENDED
                                </div>
                            )}

                            {/* Header */}
                            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                                <div style={{
                                    color: 'var(--cyan)',
                                    marginBottom: '1rem',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    {pkg.icon}
                                </div>
                                <h3 style={{
                                    fontSize: '1.5rem',
                                    fontFamily: 'Orbitron, sans-serif',
                                    marginBottom: '0.5rem',
                                    color: 'var(--text-white)'
                                }}>
                                    {pkg.name}
                                </h3>
                                <div style={{
                                    fontSize: '0.875rem',
                                    color: 'var(--text-gray)',
                                    marginBottom: '1.5rem',
                                    letterSpacing: '0.1em'
                                }}>
                                    <Clock size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'text-bottom' }} />
                                    {pkg.duration}
                                </div>
                                <div style={{
                                    fontSize: '3rem',
                                    fontWeight: '700',
                                    color: 'var(--cyan)',
                                    fontFamily: 'Orbitron, sans-serif'
                                }}>
                                    {pkg.price}
                                </div>
                            </div>

                            {/* Features */}
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: '0 0 2rem 0',
                                flex: 1
                            }}>
                                {pkg.features.map((feature, i) => (
                                    <li key={i} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        padding: '0.75rem 0',
                                        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                                        color: 'var(--text-gray)',
                                        fontSize: '0.9rem'
                                    }}>
                                        <Check size={16} color="var(--cyan)" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <a href="#contact" className="btn" style={{
                                width: '100%',
                                textAlign: 'center',
                                background: pkg.recommended ? 'rgba(0, 240, 255, 0.1)' : 'transparent'
                            }}>
                                GET STARTED
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
