import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Film, Cpu, Telescope, Rocket, Satellite } from 'lucide-react';

const SideNav = () => {
    const [activeSection, setActiveSection] = useState('home');

    const navItems = [
        { id: 'home', icon: <Home size={22} />, label: 'Gateway', color: 'cyan' },
        { id: 'chapter3', icon: <Film size={22} />, label: 'Chapter 3', color: 'purple' },
        { id: 'pipeline', icon: <Cpu size={22} />, label: 'AI Pipeline', color: 'green' },
        { id: 'vision', icon: <Telescope size={22} />, label: 'Vision', color: 'cyan' },
        { id: 'future', icon: <Rocket size={22} />, label: 'Future', color: 'purple' },
        { id: 'contact', icon: <Satellite size={22} />, label: 'Contact', color: 'green' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            sections.forEach((section, index) => {
                if (section) {
                    const { offsetTop, offsetHeight } = section;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(navItems[index].id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getGlowColor = (color) => {
        const colors = {
            cyan: 'shadow-[0_0_30px_rgba(0,242,255,0.4)]',
            purple: 'shadow-[0_0_30px_rgba(168,85,247,0.4)]',
            green: 'shadow-[0_0_30px_rgba(0,255,136,0.4)]'
        };
        return colors[color] || colors.cyan;
    };

    const getBorderColor = (color) => {
        const colors = {
            cyan: 'border-cyan-400 text-cyan-400',
            purple: 'border-purple-400 text-purple-400',
            green: 'border-green-400 text-green-400'
        };
        return colors[color] || colors.cyan;
    };

    return (
        <nav className="fixed left-10 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
            {/* Connecting Line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

            <div className="flex flex-col gap-6">
                {navItems.map((item, index) => {
                    const isActive = activeSection === item.id;

                    return (
                        <motion.a
                            key={item.id}
                            href={`#${item.id}`}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
                            className="group relative flex items-center gap-6 transition-all"
                        >
                            {/* Icon Container */}
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className={`relative w-14 h-14 flex items-center justify-center border-2 transition-all duration-300 ${isActive
                                        ? `${getBorderColor(item.color)} bg-black/80 backdrop-blur-md ${getGlowColor(item.color)}`
                                        : 'border-white/10 text-white/30 hover:border-white/30 hover:text-white/60 bg-black/40 backdrop-blur-sm'
                                    }`}
                            >
                                {/* Inner Glow */}
                                {isActive && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className={`absolute inset-0 bg-gradient-to-br ${item.color === 'cyan' ? 'from-cyan-400/10' :
                                                item.color === 'purple' ? 'from-purple-400/10' :
                                                    'from-green-400/10'
                                            } to-transparent`}
                                    />
                                )}

                                {/* Icon */}
                                <div className="relative z-10">
                                    {item.icon}
                                </div>

                                {/* Corner Accents */}
                                {isActive && (
                                    <>
                                        <div className={`absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 ${getBorderColor(item.color)}`} />
                                        <div className={`absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 ${getBorderColor(item.color)}`} />
                                        <div className={`absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 ${getBorderColor(item.color)}`} />
                                        <div className={`absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 ${getBorderColor(item.color)}`} />
                                    </>
                                )}
                            </motion.div>

                            {/* Label Panel */}
                            <AnimatePresence>
                                {isActive && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -10, width: 0 }}
                                        animate={{ opacity: 1, x: 0, width: 'auto' }}
                                        exit={{ opacity: 0, x: -10, width: 0 }}
                                        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                                        className={`absolute left-16 px-4 py-2 bg-black/90 backdrop-blur-md border ${getBorderColor(item.color)} whitespace-nowrap`}
                                    >
                                        <span className="font-heading text-xs tracking-[0.2em] uppercase">
                                            {item.label}
                                        </span>

                                        {/* Arrow */}
                                        <div className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 rotate-45 bg-black border-l border-b ${getBorderColor(item.color)}`} />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Hover Label */}
                            {!isActive && (
                                <span className="absolute left-16 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-heading text-xs tracking-wider text-white/60 pointer-events-none">
                                    {item.label}
                                </span>
                            )}
                        </motion.a>
                    );
                })}
            </div>

            {/* Mission Progress Indicator */}
            <div className="absolute -bottom-16 left-0 right-0 flex flex-col items-center gap-2">
                <div className="text-[10px] font-heading tracking-widest text-white/30">
                    MISSION
                </div>
                <div className="text-xs font-heading tracking-wider text-cyan-400">
                    {navItems.findIndex(item => item.id === activeSection) + 1} / {navItems.length}
                </div>
            </div>
        </nav>
    );
};

export default SideNav;
