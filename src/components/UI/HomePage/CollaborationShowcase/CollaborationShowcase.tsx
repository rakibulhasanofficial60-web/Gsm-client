"use client";

import { Download, MessageSquare, Smartphone } from 'lucide-react';
import { useState } from 'react';

const CollaborationShowcase = () => {
    // লোগোগুলোর জন্য একটি প্লেসহোল্ডার অ্যারে
    const brandLogos = [
        { id: 1, name: 'Logo 1', src: '/images/logo-soil.png' },
        { id: 2, name: 'Logo 2', src: '/images/logo-2.png' },
        { id: 3, name: 'Logo 3', src: '/images/logo-3.png' },
        { id: 4, name: 'Logo 4', src: '/images/logo-wholesale.png' },
        { id: 5, name: 'Logo 5', src: '/images/logo-university.png' },
        { id: 6, name: 'Logo 6', src: '/images/logo-amar.png' },
        { id: 7, name: 'Logo 7', src: '/images/logo-daraja.png' },
        { id: 8, name: 'Logo 8', src: '/images/logo-jamuna.png' },
        { id: 9, name: 'Logo 9', src: '/images/logo-sira.png' },
        { id: 10, name: 'Logo 10', src: '/images/logo-doctor.png' },
    ];

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setIsSubmitting(true);
        
        console.log("Subscribed with:", { name, email });
        
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            alert('Successfully subscribed!');
            setName('');
            setEmail('');
        }, 1000);
    };

    return (
        <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">

            {/* 1. Header Section: Partnering with excellence */}
            <div className="text-center mb-4">
                <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2">
                    Partnering with excellence
                </h2>
                <p className="text-xl text-gray-400">
                    Showcasing our collaborations with leading brand
                </p>
            </div>


            {/* 2. Logos Grid/Strip */}
            <div className="flex justify-center items-center overflow-x-auto mx-auto max-w-[1000px]">
                <div className="flex space-x-1 md:space-x-2 lg:space-x-3 py-4">
                    {brandLogos.map((logo) => (
                        <div
                            key={logo.id}
                            className="shrink-0 w-[80px] h-[40px] flex items-center justify-center 
                         bg-white border border-gray-700 p-2 rounded-sm"
                        >
                            <div className="text-sm font-medium text-black text-center">
                                {logo.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 3. Footer/CTA Section: STAY AHEAD OF THE GAME */}
            <div className="bg-black text-white">

                {/* 1. Collaboration Showcase Section (First Image) */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-900">

                </section>

                {/* 2. CTA & Subscription Form Section (Second Image) */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">

                    {/* Main CTA */}
                    <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                        STAY AHEAD OF THE GAME
                    </h3>
                    <p className="text-xl text-red-600 font-semibold mt-2 mb-8">
                        Sign up to Get Coach Kanchon's Wisdom of the Week
                    </p>

                    {/* Subscription Form */}
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                        <input
                            type="text"
                            placeholder="NAME"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-4 bg-black border border-white text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-600"
                            required
                        />
                        <input
                            type="email"
                            placeholder="EMAIL"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-4 bg-black border border-white text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-600"
                            required
                        />
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-3 text-lg font-bold text-white bg-red-600 border-2 border-red-600 shadow-lg hover:bg-red-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            style={{
                                boxShadow: '0 4px 6px -1px rgba(220, 38, 38, 0.4), 0 2px 4px -2px rgba(220, 38, 38, 0.4)'
                            }}
                        >
                            {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
                        </button>
                    </form>

                    {/* Download Button */}
                    <div className="mt-10 max-w-sm mx-auto">
                        <a
                            href="#"
                            className="flex items-center justify-center w-full py-4 bg-red-600 text-white font-bold text-xl transition duration-300 hover:bg-red-700"
                        >
                            <Download className="w-6 h-6 mr-3" />
                            <div className="text-left leading-tight">
                                <span className="block uppercase">DOWNLOAD</span>
                                <span className="block text-sm font-normal">coach kanchon corporate profile</span>
                            </div>
                        </a>
                    </div>
                </section>

                {/* 3. Footer/Support Section */}
                <footer className="py-10 px-4 sm:px-6 lg:px-8 text-center mt-10">

                    {/* Support Icons & Info */}
                    <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8 mb-8">

                        {/* Green Phone Icon (Smartphone/Calling) */}
                        <a href="tel:+8809609400400" className="bg-green-500 p-2 rounded-full hover:opacity-80 transition duration-150">
                            <Smartphone className="w-7 h-7 text-white" />
                        </a>

                        {/* Blue Messenger Icon (MessageSquare) */}
                        <a href="#" className="bg-blue-600 p-2 rounded-full hover:opacity-80 transition duration-150">
                            <MessageSquare className="w-7 h-7 text-white" />
                        </a>

                        {/* Green WhatsApp Icon */}
                        <a href="https://wa.me/8809609400400" className="bg-green-500 p-2 rounded-full hover:opacity-80 transition duration-150">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-whatsapp">
                                <path d="M12 2a10 10 0 0 0-7.8 16.3l-1.3 4.7 4.9-1.3A10 10 0 1 0 12 2zM10.5 17.5l-1-1 7-7 1 1-7 7zM15 11.5l-4-4 1-1 4 4-1 1z" />
                            </svg>
                        </a>

                        {/* Red Support Headset & Info */}
                        <div className="flex items-center space-x-3 text-left">
                            <div className="relative p-2 bg-red-600 rounded-full">
                                {/* Headset Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headphones text-white">
                                    <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
                                </svg>
                                {/* Support 24/7 Text */}
                                <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-sm font-bold text-red-600 bg-black px-2 py-1 rounded-full whitespace-nowrap">
                                    SUPPORT 24/7
                                </span>
                            </div>
                            <div className="ml-4">
                                <p className="text-xl font-bold text-red-600">+09609 400 400</p>
                                <p className="text-sm text-red-600 italic">coachkanchonacademy@gmail.com</p>
                            </div>
                        </div>

                    </div>

                    {/* Policy Links */}
                    <div className="text-sm text-white mt-10 flex flex-wrap justify-center gap-4">
                        <a href="#" className="text-red-600 hover:underline">PRIVACY POLICY</a>
                        <span className="text-gray-600">|</span>
                        <a href="#" className="text-red-600 hover:underline">TERMS OF SERVICE</a>
                        <span className="text-gray-600">|</span>
                        <a href="#" className="text-red-600 hover:underline">REFUND POLICY</a>
                    </div>
                </footer>

            </div>

        </div>
    );
};

export default CollaborationShowcase;