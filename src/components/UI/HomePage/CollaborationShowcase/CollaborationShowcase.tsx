"use client";

import { Download, MessageSquare, Smartphone } from 'lucide-react';
import { useState } from 'react';
import Image from "next/image";
import concern from '../../../../assets/our-concern.png';

const CollaborationShowcase = () => {

    const paymentIcons = [
        'Visa', 'American Express', 'Mastercard', 'Pubali Bank', 'Dutch Bangla Bank (DBBL Nexus)',
        'UCB (United Commercial Bank)', 'AB Bank', 'Rupali Bank', 'Bank Asia', 'Fast Cash',
        'City Bank', 'MTB (Mutual Trust Bank)', 'A' /* Placeholder for Aktel/Airtel/etc. if logo is A-like */,
        'Grameenphone (GPay/EasyPay)', 'Robi Cash', 'iPay', 't-cash', 'Nagad', 'bKash', 'Rocket',
        'UPay', 'SureCash', 'Jana Gana Manana (JGM/Placeholder)', 'SSLCommerz Verified'
    ];

    const socialLinks = [
        { icon: 'Facebook', url: '#', className: 'hover:text-blue-600' },
        { icon: 'Twitter', url: '#', className: 'hover:text-sky-400' },
        { icon: 'Instagram', url: '#', className: 'hover:text-pink-500' },
        { icon: 'LinkedIn', url: '#', className: 'hover:text-blue-700' },
    ];

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

                {/* 2. CTA & Subscription Form Section (Second Image) */}
                <section className="my-8 px-4 sm:px-6 lg:px-8 text-center">

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

                <div>
                    <Image
                        src={concern}
                        alt="Our Concern"
                        width={800}
                        height={600}
                        className="mx-auto"
                    />
                </div>

                {/* footer sectiob  */}
                <div>
                    <div className="bg-black text-white px-4 py-8 md:py-12 flex flex-col items-center font-sans">

                        {/* 1. Social Media Icons */}
                        <div className="flex space-x-6 text-4xl mb-8">
                            {/*
          NOTE: You would typically use an icon library like 'react-icons' 
          or custom SVG/font icons here. 
          For a quick visual match, I'll use placeholders that resemble the look.
        */}
                            {socialLinks.map((item, index) => (
                                <a key={index} href={item.url} className={`text-gray-400 ${item.className}`}>
                                    {/* Using a placeholder character/symbol that is close to the visual style */}
                                    <span className="font-extrabold text-white text-5xl">
                                        {item.icon === 'Facebook' && 'f'}
                                        {item.icon === 'Twitter' && 't'}
                                        {item.icon === 'Instagram' && 'O'}
                                        {item.icon === 'LinkedIn' && 'in'}
                                    </span>
                                </a>
                            ))}
                        </div>

                        <hr className="w-full border-t border-gray-800 my-4" /> {/* Visual separator */}

                        {/* 2. Payment Gateway Section */}
                        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mb-8">
                            <p className="text-sm font-semibold mr-4 whitespace-nowrap mb-4 md:mb-0">
                                Pay With
                            </p>

                            {/* Payment Icons List */}
                            <div className="flex flex-wrap justify-center gap-2">
                                {paymentIcons.map((iconName, index) => (
                                    <div
                                        key={index}
                                        className="w-12 h-8 bg-white border border-gray-300 rounded-sm flex items-center justify-center p-0.5"
                                        title={iconName}
                                    >
                                        {/* In a real scenario, this would be an <img> tag pointing to the icon's source:
                <img src={`/images/${iconName.toLowerCase().replace(/\s/g, '-')}.png`} alt={iconName} className="max-w-full max-h-full" />
                
                For this code, we'll use a blank white box with a light shadow 
                to visually match the *container* of the icons.
              */}
                                        <div className="w-full h-full bg-contain bg-center bg-no-repeat opacity-0">
                                            {/* Visual placeholder for image content */}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Verified by SSI Commerz Logo (right side) */}
                            <div className="flex items-center ml-4 mt-4 md:mt-0">
                                <p className="text-sm font-semibold mr-2 whitespace-nowrap">
                                    Verified by
                                </p>
                                {/* Placeholder for SSL Commerz logo container */}
                                <div className="h-8 bg-blue-800 flex items-center justify-center px-2 py-1 rounded-sm shadow-lg border border-blue-600">
                                    {/* Actual SSL Commerz logo image would go here */}
                                    <span className="text-white text-xs font-bold whitespace-nowrap">
                                        SSLCommerz
                                    </span>
                                </div>
                            </div>
                        </div>

                        <hr className="w-full border-t border-gray-800 my-4" /> {/* Visual separator */}

                        {/* 3. Footer Text (Address, Copyright, Design) */}
                        <div className="text-center mt-4">
                            {/* Address */}
                            <p className="text-base tracking-widest **BARIDHARA, DHAKA-1212, BANGLADESH**">
                                BARIDHARA, DHAKA-1212, BANGLADESH
                            </p>

                            {/* Copyright */}
                            <p className="text-sm my-2">
                                &copy; COACH KANCHON - ALL RIGHTS RESERVED
                            </p>

                            {/* Design/Managed */}
                            <p className="text-xs **text-red-600** tracking-widest">
                                DESIGN AND MANAGED BY: GUERRILLA DIGITAL
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollaborationShowcase;