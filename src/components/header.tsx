"use client";

import { ChevronRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
    NavigationMenu,
    NavigationMenuLink,
    NavigationMenuList,
} from "./ui/navigation-menu";

const navigationItems = [
    {
        title: "HOME",
        href: "#home",
    },
    {
        title: "ABOUT",
        href: "#about",
    },
    {
        title: "RESOURCES",
        href: "#resources",
    },
    {
        title: "CONTACT",
        href: "#contact",
    },
    {
        title: "LOGIN",
        href: "#login",
    },
] as const;

export const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Handle mobile menu close on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNavClick = () => {
        setIsMobileMenuOpen(false);
    };

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
                <div className="flex items-center justify-between h-14 sm:h-16 md:h-18 lg:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 z-50">
                        {/* Mobile Logo (0-767px) */}
                        <Image
                            className="h-7 w-auto sm:h-8 md:hidden transition-all duration-300"
                            src="/logo-mobile.svg"
                            alt="Merlin Labs - Web3 Solutions"
                            height={32}
                            width={146}
                            priority
                        />
                        
                        {/* Desktop & Tablet Logo (768px+) */}
                        <Image
                            className="hidden md:block h-10 w-auto lg:h-12 transition-all duration-300"
                            src="/logo.png"
                            alt="Merlin Labs - Web3 Solutions"
                            height={48}
                            width={168}
                            priority
                        />
                    </div>

                    {/* Desktop Navigation - Show on tablet and up */}
                    <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
                        <NavigationMenu viewport={false}>
                            <NavigationMenuList className="flex items-center space-x-1">
                                {navigationItems.map((item) => (
                                    <NavigationMenuLink
                                        key={item.title}
                                        href={item.href}
                                        className="
                                            relative px-4 py-2 text-sm font-medium rounded-lg
                                            transition-all duration-200 ease-in-out
                                            hover:bg-white/10 hover:text-white
                                            focus:outline-none focus:ring-2 focus:ring-violet-500/50
                                            group
                                        "
                                    >
                                        {item.title}
                                        <span
                                            className="
                                            absolute bottom-0 left-1/2 w-0 h-0.5 bg-violet-500
                                            transition-all duration-200 ease-in-out
                                            group-hover:w-full group-hover:left-0
                                        "
                                        />
                                    </NavigationMenuLink>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </nav>

                    {/* Tablet Navigation - Show only on tablet */}
                    <nav className="hidden md:flex lg:hidden flex-1 justify-center">
                        <div className="flex items-center space-x-6">
                            {navigationItems.slice(0, 4).map((item) => (
                                <a
                                    key={item.title}
                                    href={item.href}
                                    className="
                                        text-sm font-medium transition-colors duration-200 text-white
                                        hover:text-violet-300 focus:outline-none focus:text-violet-300
                                    "
                                >
                                    {item.title}
                                </a>
                            ))}
                        </div>
                    </nav>

                    {/* Desktop & Tablet CTA Button */}
                    <div className="hidden md:flex items-center space-x-4">
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
                        className={`
                            md:hidden p-2 rounded-lg transition-all duration-200
                            hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500/50
                            ${isMobileMenuOpen ? "bg-gray-100" : ""}
                        `}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <div className="relative w-6 h-6">
                            <Menu
                                size={24}
                                className={`
                                    absolute inset-1 transition-all duration-300 transform text-black
                                    ${
                                        isMobileMenuOpen
                                            ? "rotate-180 opacity-0 scale-0"
                                            : "rotate-0 opacity-100 scale-100"
                                    }
                                `}
                            />
                            <X
                                size={24}
                                className={`
                                    absolute inset-1 transition-all duration-300 transform text-black
                                    ${
                                        isMobileMenuOpen
                                            ? "rotate-0 opacity-100 scale-100"
                                            : "rotate-180 opacity-0 scale-0"
                                    }
                                `}
                            />
                        </div>
                    </Button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`
                md:hidden fixed inset-0 top-14 sm:top-16 z-40 transition-all duration-300 ease-in-out
                ${
                    isMobileMenuOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                }
            `}
            >
                {/* Mobile Navigation Panel */}
                <nav
                    className={`
                    relative bg-black/95 backdrop-blur-xl border-t border-white/10
                    shadow-2xl shadow-black/50 transition-all duration-300 ease-in-out
                    min-h-[calc(100vh-3.5rem)] sm:min-h-[calc(100vh-4rem)]
                    ${
                        isMobileMenuOpen
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-4 opacity-0"
                    }
                `}
                >
                    <div className="px-4 py-6 space-y-1 max-h-[calc(100vh-3.5rem)] sm:max-h-[calc(100vh-4rem)] overflow-y-auto">
                        {navigationItems.map((item, index) => (
                            <a
                                key={item.title}
                                href={item.href}
                                className={`
                                    block px-3 py-3 text-base font-medium rounded-lg text-white
                                    transition-all duration-200 ease-in-out
                                    hover:bg-gradient-to-r hover:from-violet-500/20 hover:to-purple-500/20
                                    hover:text-white hover:shadow-lg hover:shadow-violet-500/10
                                    focus:outline-none focus:ring-2 focus:ring-violet-500/50
                                    border border-transparent hover:border-violet-500/30
                                    transform hover:translate-x-1 active:scale-95
                                    ${
                                        isMobileMenuOpen
                                            ? `animate-fade-in-up`
                                            : ""
                                    }
                                `}
                                style={{
                                    animationDelay: `${index * 80}ms`,
                                }}
                                onClick={handleNavClick}
                            >
                                <div className="flex items-center justify-between">
                                    <span>{item.title}</span>
                                    <ChevronRight
                                        size={16}
                                        className="opacity-0 transition-opacity duration-200 group-hover:opacity-100 text-white"
                                    />
                                </div>
                            </a>
                        ))}

                        {/* Mobile CTA Section */}
                        <div
                            className={`
                            pt-4 mt-4 border-t border-white/10
                            ${isMobileMenuOpen ? "animate-fade-in-up" : ""}
                        `}
                            style={{
                                animationDelay: "400ms",
                            }}
                        >
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
                            >
                                <span>GET STARTED</span>
                                <ChevronRight size={16} className="ml-2" />
                            </Button>

                            {/* Contact Info */}
                            <div className="mt-4 text-center">
                                <p className="text-gray-400 text-xs">
                                    Ready to transform your vision?
                                </p>
                                <p className="text-violet-300 text-xs font-medium mt-1">
                                    Let's innovate together
                                </p>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};
