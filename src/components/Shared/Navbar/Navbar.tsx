"use client"
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Define the structure for a navigation item
interface NavItem {
  name: string;
  href: string;
  hasDropdown: boolean;
  dropdownItems?: { name: string; href: string }[];
}

const LOGO = "https://gsmfixtraining.com/wp-content/uploads/2025/01/cropped-cropped-gsm-2.png";

const Navbar: React.FC = () => {
  // Define all navigation items, including custom dropdown content for ABOUT
  const navItems: NavItem[] = [
    { name: "home", href: "/", hasDropdown: false },
    {
      name: "ABOUT",
      href: "/about",
      hasDropdown: true,
      dropdownItems: [
        { name: "Story", href: "/about/story" },
        { name: "Awards", href: "/about/awards" },
        { name: "Mission & Vision", href: "/about/mission-vision" },
        { name: "Reviews", href: "/about/reviews" },
      ],
    },
    { 
      name: "COURSE", 
      href: "/course", 
      hasDropdown: true,
      dropdownItems: [
        { name: "Course Catalog", href: "/course/catalog" },
        { name: "Course Details", href: "/course/details" },
        { name: "Course Schedule", href: "/course/schedule" },
      ]
    },
    { 
      name: "EVENTS", 
      href: "/events", 
      hasDropdown: true,
      dropdownItems: [
        { name: "Upcoming Events", href: "/events/upcoming" },
        { name: "Past Events", href: "/events/past" },
        { name: "Event Calendar", href: "/events/calendar" },
      ]
    },
    { 
      name: "SHOP", 
      href: "/shop", 
      hasDropdown: true,
      dropdownItems: [
        { name: "Products", href: "/shop/products" },
        { name: "Categories", href: "/shop/categories" },
        { name: "Cart", href: "/shop/cart" },
      ]
    },
    { 
      name: "RESOURCES", 
      href: "/resources", 
      hasDropdown: true,
      dropdownItems: [
        { name: "Downloads", href: "/resources/downloads" },
        { name: "Articles", href: "/resources/articles" },
        { name: "Guides", href: "/resources/guides" },
      ]
    },
    { 
      name: "CLUB", 
      href: "/club", 
      hasDropdown: true,
      dropdownItems: [
        { name: "Membership", href: "/club/membership" },
        { name: "Benefits", href: "/club/benefits" },
        { name: "Community", href: "/club/community" },
      ]
    },
    { name: "LOG IN", href: "/login", hasDropdown: false },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
        setOpenMobileDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setOpenMobileDropdown(null);
    }
  };

  const toggleMobileDropdown = (itemName: string) => {
    setOpenMobileDropdown(openMobileDropdown === itemName ? null : itemName);
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  return (
    <>
      {/* Mobile Header with Logo and Menu Button */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50 flex items-center justify-between px-4">
        {/* Logo in Mobile Header */}
        <div className="flex items-center">
          <div className="text-xl font-bold text-gray-900">
            <Image src={LOGO} alt="gsm-fix" width={96} height={32} />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-md text-gray-700 hover:text-pink-600 hover:bg-gray-100 transition duration-300"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => {
            setIsMobileMenuOpen(false);
            setOpenMobileDropdown(null);
          }}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="h-16 border-b border-gray-200 flex items-center justify-between px-4">
          <div className="text-xl font-bold text-gray-900">
            <Image src={LOGO} alt="gsm-fix" width={96} height={32} />
          </div>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              setOpenMobileDropdown(null);
            }}
            className="p-2 rounded-md text-gray-700 hover:text-pink-600 hover:bg-gray-100 transition duration-300"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Links with Scroll */}
        <div className="h-[calc(100vh-4rem)] overflow-y-auto">
          <ul className="py-4 px-4 space-y-0">
            {navItems.map((item) => (
              <li key={item.name} className="border-b border-gray-100 last:border-b-0">
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => toggleMobileDropdown(item.name)}
                      className="flex items-center justify-between w-full py-4 text-sm uppercase text-gray-700 hover:text-pink-600 transition duration-300"
                    >
                      <span>{item.name}</span>
                      <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${
                          openMobileDropdown === item.name ? 'rotate-180' : ''
                        }`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Mobile Dropdown Items */}
                    {openMobileDropdown === item.name && item.dropdownItems && (
                      <div className="pb-4 pl-4 space-y-3 animate-slideDown">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block py-2 text-sm text-gray-600 hover:text-pink-600 transition duration-150"
                            onClick={handleMobileLinkClick}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`block py-4 text-sm uppercase text-gray-700 hover:text-pink-600 transition duration-300 ${
                      item.name === "LOG IN" ? 'font-semibold text-pink-600' : ''
                    }`}
                    onClick={handleMobileLinkClick}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Additional Links or CTA */}
          <div className="px-4 py-6 border-t border-gray-200">
            <Link
              href="/signup"
              className="block w-full px-4 py-3 text-center bg-gradient-to-r from-pink-500 to-pink-600 text-white text-sm uppercase font-medium rounded-lg hover:from-pink-600 hover:to-pink-700 transition-all duration-300 shadow-md"
              onClick={handleMobileLinkClick}
            >
              SIGN UP
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer for mobile header */}
      <div className="lg:hidden h-16" />

      {/* Desktop Navigation - Original Design */}
      <nav className="hidden lg:flex justify-center gap-10 items-center py-4 px-12 border-b border-gray-200 bg-white font-serif">
        {/* 🧭 Logo Section */}
        <div className="flex flex-col leading-none">
          <div className="text-xl font-bold text-gray-900">
            <Image src={LOGO} alt="gsm-fix" width={96} height={32} />
          </div>
        </div>

        {/* 🔗 Navigation Links Section */}
        <ul className="flex justify-center items-center space-x-8">
          {navItems.map((item) => (
            // Parent List Item (Relative position for dropdown)
            <li key={item.name} className="relative group py-2">
              {/* Main Nav Link */}
              <Link
                href={item.href}
                className="flex items-center text-sm uppercase text-gray-700 hover:text-pink-600 transition duration-300 cursor-pointer"
              >
                {item.name}
                {item.hasDropdown && (
                  <span className="ml-1 text-xs leading-none">▼</span> // Dropdown arrow
                )}
              </Link>

              {item.hasDropdown && (
                <div className="absolute top-full left-0 mt-2 min-w-[160px] bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-10">
                  {/* Check if item has specific dropdown items, otherwise use a generic list */}
                  {(
                    item.dropdownItems || [
                      { name: "Default Item 1", href: "#" },
                      { name: "Default Item 2", href: "#" },
                    ]
                  ).map((dropdownItem) => (
                    <Link
                      key={dropdownItem.name}
                      href={dropdownItem.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap uppercase"
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Add CSS for slide down animation */}
      <style jsx global>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;