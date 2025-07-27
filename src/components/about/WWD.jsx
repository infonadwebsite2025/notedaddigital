import React, { useState } from 'react';
import { Palette, Code, PenTool, TrendingUp, Coffee, Trello } from 'lucide-react';
import Navbar from '../home/Navbar';
import Footer from '../footer/Footer';


const ServicesComponent = () => {
    const [hoveredService, setHoveredService] = useState(null);

    const services = [
        {
            id: 'branding',
            title: 'Branding',
            icon: <Palette className="w-8 h-8" />,
            color: '#f59e0b'
        },
        {
            id: 'web-dev',
            title: 'Web Development',
            icon: <Code className="w-8 h-8" />,
            color: '#8b5cf6'
        },
        {
            id: 'content',
            title: 'Content Creation',
            icon: <PenTool className="w-8 h-8" />,
            color: '#f59e0b'
        },
        {
            id: 'strategy',
            title: 'Digital Strategy',
            icon: <TrendingUp className="w-8 h-8" />,
            color: '#8b5cf6'
        }
    ];

    return (
        <div className='relative'>
            {/* Navbar Fixed at Top */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
                <Navbar />
            </div>
            <div className="max-w-4xl mx-auto p-8 font-sans mt-20">
                {/* Main Title */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
                        <span
                            className="bg-gradient-to-r from-yellow-500 to-purple-500 bg-clip-text text-transparent animate-pulse"
                            style={{
                                background: 'linear-gradient(45deg, #f59e0b, #8b5cf6)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}
                        >
                            What We Do
                        </span>
                    </h1>
                    <div className="text-lg font-medium text-gray-600 relative">
                        <span className="relative z-10">(Besides Keeping Things Cool)</span>
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-yellow-500 to-purple-500 rounded-full opacity-70"></div>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className="relative group cursor-pointer"
                            onMouseEnter={() => setHoveredService(service.id)}
                            onMouseLeave={() => setHoveredService(null)}
                        >
                            <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-500 hover:scale-110 hover:shadow-2xl border border-gray-100 overflow-hidden">
                                <div
                                    className="flex flex-col items-center text-center transition-all duration-500"
                                    style={{
                                        color: hoveredService === service.id ? service.color : '#374151'
                                    }}
                                >
                                    {/* Icon with special effects */}
                                    <div className="mb-3 relative">
                                        {/* Main icon with flip effect for branding and web dev */}
                                        <div
                                            className={`transform transition-all duration-700 ${service.id === 'branding' || service.id === 'web-dev'
                                                    ? 'group-hover:rotate-y-180'
                                                    : service.id === 'content'
                                                        ? 'group-hover:rotate-180 group-hover:scale-125'
                                                        : 'group-hover:scale-125 group-hover:rotate-12'
                                                }`}
                                            style={{
                                                transformStyle: 'preserve-3d',
                                                perspective: '1000px'
                                            }}
                                        >
                                            {service.icon}
                                        </div>

                                        {/* Special effects overlay */}
                                        {service.id === 'branding' && (
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                <div className="absolute -top-1 -left-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                                                <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse"></div>
                                                <div className="absolute top-0 right-0 w-1 h-1 bg-yellow-300 rounded-full animate-bounce"></div>
                                            </div>
                                        )}

                                        {service.id === 'web-dev' && (
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                <div className="absolute -top-2 left-1/2 w-8 h-0.5 bg-purple-400 transform -translate-x-1/2 animate-pulse"></div>
                                                <div className="absolute -bottom-2 left-1/2 w-6 h-0.5 bg-purple-500 transform -translate-x-1/2 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                                                <div className="absolute top-1/2 -left-2 w-0.5 h-6 bg-purple-400 transform -translate-y-1/2 animate-pulse" style={{ animationDelay: '0.25s' }}></div>
                                                <div className="absolute top-1/2 -right-2 w-0.5 h-4 bg-purple-500 transform -translate-y-1/2 animate-pulse" style={{ animationDelay: '0.75s' }}></div>
                                            </div>
                                        )}

                                        {service.id === 'content' && (
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                <div className="absolute -top-1 left-0 w-3 h-0.5 bg-yellow-400 animate-pulse"></div>
                                                <div className="absolute top-1 left-1 w-2 h-0.5 bg-yellow-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                                <div className="absolute top-3 left-0 w-4 h-0.5 bg-yellow-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                                            </div>
                                        )}

                                        {service.id === 'strategy' && (
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                <div className="absolute -top-2 -left-2 w-3 h-3 border-2 border-purple-400 rounded-full animate-spin"></div>
                                                <div className="absolute -bottom-2 -right-2 w-2 h-2 border-2 border-purple-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDelay: '0.5s' }}></div>
                                            </div>
                                        )}
                                    </div>

                                    <h3 className="text-sm font-semibold transform transition-all duration-300 group-hover:scale-110">{service.title}</h3>
                                </div>

                                {/* Animated border with pulse effect */}
                                <div
                                    className="absolute inset-0 rounded-xl border-2 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:animate-pulse"
                                    style={{
                                        borderColor: service.color,
                                        boxShadow: `0 0 30px ${service.color}50`
                                    }}
                                ></div>

                                {/* Background glow effect */}
                                <div
                                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                                    style={{
                                        background: `radial-gradient(circle at center, ${service.color}40, transparent 70%)`
                                    }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main Description */}
                <div className="text-center mb-12">
                    <div className="max-w-3xl mx-auto">
                        <p className="text-xl leading-relaxed text-gray-700 mb-6">
                            Whether it's <span className="font-semibold text-yellow-500 hover:text-yellow-600 transition-colors cursor-pointer">branding</span>,
                            <span className="font-semibold text-purple-500 hover:text-purple-600 transition-colors cursor-pointer mx-2">web development</span>,
                            <span className="font-semibold text-yellow-500 hover:text-yellow-600 transition-colors cursor-pointer">content creation</span>, or
                            <span className="font-semibold text-purple-500 hover:text-purple-600 transition-colors cursor-pointer mx-2">digital strategy</span>
                            — we build experiences that <span className="font-bold text-gray-800 relative group cursor-pointer">
                                click
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                            </span> with humans and <span className="font-bold text-gray-800 relative group cursor-pointer">
                                rank
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                            </span> with Google.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-3 text-lg text-gray-600">
                            <span className="font-medium text-gray-700">Our work is part</span>

                            {/* Strategy Badge */}
                            <div className="group relative">
                                <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-100 via-yellow-200 to-amber-100 transform hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl border border-yellow-300">
                                    <div className="relative">
                                        <TrendingUp className="w-5 h-5 text-yellow-600 transform group-hover:rotate-12 transition-transform duration-300" />
                                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                    <span className="font-bold text-yellow-700 group-hover:text-yellow-800 transition-colors">strategy</span>
                                </div>
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-amber-400 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></div>
                            </div>

                            <span className="font-medium text-gray-700">, part</span>

                            {/* Art Badge */}
                            <div className="group relative">
                                <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 via-violet-200 to-purple-100 transform hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl border border-purple-300">
                                    <div className="relative">
                                        <Palette className="w-5 h-5 text-purple-600 transform group-hover:rotate-180 transition-transform duration-500" />
                                        <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <div className="absolute -bottom-1 -right-1 w-1 h-1 bg-violet-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                    <span className="font-bold text-purple-700 group-hover:text-purple-800 transition-colors">art</span>
                                </div>
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-violet-400 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></div>
                            </div>

                            <span className="font-medium text-gray-700">, and all</span>

                            {/* Heart Badge with Enhanced Effects */}
                            <div className="group relative">
                                <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-100 via-pink-200 to-red-100 transform hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl border border-rose-300">
                                    <div className="relative">
                                        {/* Animated beating heart */}
                                        <div className="relative transform group-hover:scale-125 transition-transform duration-300">
                                            <span className="text-red-500 text-xl animate-pulse group-hover:animate-bounce">💖</span>
                                            {/* Heart particles */}
                                            <div className="absolute -top-2 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                <span className="text-pink-400 text-xs animate-bounce" style={{ animationDelay: '0.1s' }}>💕</span>
                                            </div>
                                            <div className="absolute -bottom-1 -left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                <span className="text-red-400 text-xs animate-bounce" style={{ animationDelay: '0.3s' }}>❤️</span>
                                            </div>
                                            <div className="absolute top-0 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                <span className="text-rose-400 text-xs animate-bounce" style={{ animationDelay: '0.5s' }}>💗</span>
                                            </div>
                                        </div>

                                        {/* Heartbeat pulse rings */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                                            <div className="absolute inset-0 border-2 border-red-300 rounded-full animate-ping"></div>
                                            <div className="absolute inset-1 border border-pink-300 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
                                        </div>
                                    </div>
                                    <span className="font-bold text-red-700 group-hover:text-red-800 transition-colors">heart</span>
                                </div>

                                {/* Enhanced glow effect */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-400 via-pink-400 to-rose-400 opacity-0 group-hover:opacity-25 blur-lg transition-opacity duration-300"></div>

                                {/* Floating heart particles */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <div className="absolute -top-4 left-2 animate-bounce" style={{ animationDelay: '0s', animationDuration: '2s' }}>
                                        <span className="text-pink-300 text-xs">✨</span>
                                    </div>
                                    <div className="absolute -top-3 right-3 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}>
                                        <span className="text-red-300 text-xs">✨</span>
                                    </div>
                                    <div className="absolute -bottom-4 left-4 animate-bounce" style={{ animationDelay: '1s', animationDuration: '2.2s' }}>
                                        <span className="text-rose-300 text-xs">✨</span>
                                    </div>
                                    <div className="absolute -bottom-3 right-1 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '1.8s' }}>
                                        <span className="text-pink-300 text-xs">✨</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quote Section */}
                <div className="relative max-w-2xl mx-auto">
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-500">
                        {/* Decorative quote marks */}
                        <div className="absolute top-4 left-4 text-6xl text-gray-300 font-serif">"</div>
                        <div className="absolute bottom-4 right-4 text-6xl text-gray-300 font-serif transform rotate-180">"</div>

                        {/* Quote content */}
                        <div className="relative z-10 pt-8">
                            <p className="text-xl italic text-gray-700 mb-6 leading-relaxed">
                                If you think creatives can't be organized, come meet our{' '}
                                <span className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors cursor-pointer">
                                    <Trello className="w-5 h-5" />
                                    <span className="font-semibold">Trello board</span>
                                </span>.
                            </p>

                            <div className="flex items-center justify-between text-gray-600">
                                <p className="text-sm">
                                    — Someone from the team, probably while juggling a campaign and{' '}
                                    <span className="inline-flex items-center space-x-1 text-amber-600">
                                        <Coffee className="w-4 h-4" />
                                        <span>coffee</span>
                                    </span>.
                                </p>
                            </div>
                        </div>

                        {/* Animated background elements */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-yellow-200 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-200 to-transparent rounded-full transform -translate-x-12 translate-y-12"></div>
                        </div>
                    </div>
                </div>

                {/* Floating elements animation */}
                <div className="fixed inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
                    <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
                    <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-bounce opacity-60" style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
                    <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-purple-500 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s', animationDuration: '4.5s' }}></div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ServicesComponent;