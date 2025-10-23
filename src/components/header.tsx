"use client";

import { ChevronRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const navigationItems = [
    { title: "HOME", href: "/" },
    { title: "ABOUT", href: "/about" },
    { title: "CONTACT", href: "/contact" },
    { title: "BLOG", href: "/blog" },
] as const;

export const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => setIsMobileMenuOpen((s) => !s);
    const handleNavClick = () => setIsMobileMenuOpen(false);

    return (
        <header
            className={`
                fixed top-0 w-full z-50 transition-all duration-300 ease-in-out
                md:text-white text-black
                ${
                    isScrolled
                        ? "md:bg-transparent md:backdrop-blur-xl md:shadow-2xl md:shadow-black/20 bg-white/95 backdrop-blur-sm shadow-lg"
                        : "md:bg-transparent md:backdrop-blur-lg md:shadow-lg md:shadow-slate-900/5 bg-white/90 backdrop-blur-sm shadow-md"
                }
            `}
        >
            <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14 sm:h-16 md:h-16 lg:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 z-50">
                        {/* Mobile Logo: hide when mobile menu is open to avoid duplicate */}
                        {!isMobileMenuOpen && (
                            <Link href="/">
                                <Image
                                    className="h-7 w-auto sm:h-8 md:hidden transition-all duration-300"
                                    src="/logo-mobile.svg"
                                    alt="Merlin Labs - Web3 Solutions"
                                    height={32}
                                    width={146}
                                    priority
                                />
                            </Link>
                        )}

                        {/* Desktop & Tablet Logo (768px+) */}
                        <Link href="/">
                            <Image
                                className="hidden md:block h-10 w-auto lg:h-12 transition-all duration-300"
                                src="/logo.png"
                                alt="Merlin Labs - Web3 Solutions"
                                height={48}
                                width={168}
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation (md and up) */}
                    <nav className="hidden md:flex items-center space-x-6">
                        {navigationItems.slice(0, 4).map((item) => (
                            <a
                                key={item.title}
                                href={item.href}
                                onClick={handleNavClick}
                                className="
                                relative px-3 py-2 text-sm font-medium rounded-md
                                transition-all duration-200 ease-in-out
                                hover:bg-white/10 hover:text-white
                                focus:outline-none focus:ring-2 focus:ring-violet-500/50
                                "
                            >
                                {item.title}
                            </a>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <Button
                            className="
                            px-6 py-2.5 bg-gradient-to-r from-violet-500 to-purple-600
                            hover:from-violet-600 hover:to-purple-700 
                            rounded-full transition-all duration-300 ease-in-out
                            transform hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25
                            focus:outline-none focus:ring-2 focus:ring-violet-500/50
                            text-sm font-medium
                            "
                        >
                            <span>GET STARTED</span>
                            <ChevronRight size={16} className="ml-1" />
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="sm"
                        className="md:hidden"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <div className="relative w-6 h-6">
                            <Menu
                                size={24}
                                className={`
                                    absolute inset-0 transition-all duration-200 transform
                                    ${isMobileMenuOpen ? "opacity-0 scale-75 -rotate-12" : "opacity-100 scale-100 rotate-0"}
                                `}
                            />
                            <X
                                size={24}
                                className={`
                                    absolute inset-0 transition-all duration-200 transform
                                    ${isMobileMenuOpen ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 rotate-12"}
                                `}
                            />
                        </div>
                    </Button>
                </div>
            </div>

            {/* Mobile menu overlay (md:hidden) */}
            <div
                className={`
                    fixed inset-0 z-40 md:hidden
                    transition-all duration-300 ease-in-out
                    ${isMobileMenuOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}
                `}
                aria-hidden={!isMobileMenuOpen}
            >
                {/* Backdrop (now a real button for accessibility) */}
                <button
                    type="button"
                    className={`
                        absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300
                        ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}
                    `}
                    onClick={toggleMobileMenu}
                    aria-label="Close mobile menu"
                    tabIndex={isMobileMenuOpen ? 0 : -1}
                />

                {/* Panel */}
                <nav
                    className={`
                        absolute top-0 left-0 right-0 bg-black/95 text-white
                        min-h-[calc(100vh-3.5rem)] sm:min-h-[calc(100vh-4rem)]
                        px-4 pt-6 pb-8 overflow-y-auto
                        transform transition-transform duration-300
                        ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-6"}
                    `}
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="flex items-center justify-between mb-4">
                        {/* Keep the panel logo */}
                        <Image
                            src="/logo-mobile.svg"
                            alt="logo"
                            width={140}
                            height={28}
                            className="h-7 w-auto"
                        />
                        <Button
                            variant="ghost"
                            onClick={toggleMobileMenu}
                            aria-label="Close menu"
                        >
                            <X size={20} />
                        </Button>
                    </div>

                    <div className="space-y-1">
                        {navigationItems.map((item, index) => (
                            <a
                                key={item.title}
                                href={item.href}
                                onClick={handleNavClick}
                                className={`
                                  block px-3 py-3 text-base font-medium rounded-lg text-white
                                  transition-all duration-200 ease-in-out
                                  hover:bg-gradient-to-r hover:from-violet-500/20 hover:to-purple-500/20
                                  focus:outline-none focus:ring-2 focus:ring-violet-500/50
                                  transform active:scale-95
                                `}
                                style={{ transitionDelay: `${index * 50}ms` }}
                            >
                                <div className="flex items-center justify-between">
                                    <span>{item.title}</span>
                                    <ChevronRight
                                        size={16}
                                        className="text-white opacity-70"
                                    />
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="pt-6 mt-6 border-t border-white/10">
                        <Button
                            className="
                                w-full px-4 py-3 bg-gradient-to-r from-violet-500 to-purple-600
                                hover:from-violet-600 hover:to-purple-700 
                                rounded-lg transition-all duration-300 ease-in-out
                                transform hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-500/25
                                active:scale-95
                                focus:outline-none focus:ring-2 focus:ring-violet-500/50
                                text-sm font-semibold
                              "
                            onClick={handleNavClick}
                        >
                            <span>GET STARTED</span>
                            <ChevronRight size={16} className="ml-2" />
                        </Button>

                        <div className="mt-4 text-center">
                            <p className="text-gray-400 text-xs">
                                Ready to transform your vision?
                            </p>
                            <p className="text-violet-300 text-xs font-medium mt-1">
                                Let's innovate together
                            </p>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
