"use client";

import { ChevronRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import {
    NavigationMenu,
    NavigationMenuLink,
    NavigationMenuList,
} from "./ui/navigation-menu";

const navigationItems = [
    {
        title: "HOME",
        href: "#",
    },
    {
        title: "ABOUT",
        href: "#",
    },
    {
        title: "RESOURCES",
        href: "#",
    },
    {
        title: "CONTACT",
        href: "#",
    },
    {
        title: "LOGIN",
        href: "#",
    },
];

export const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="bg-transparent backdrop-blur-sm fixed top-0 w-full z-50 text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Image
                            className="h-8 w-auto sm:h-10 lg:h-12"
                            src="/logo.png"
                            alt="Merlin Labs logo"
                            height={48}
                            width={180}
                            priority
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:block">
                        <NavigationMenu viewport={false}>
                            <NavigationMenuList className="flex space-x-8">
                                {navigationItems.map((item) => (
                                    <NavigationMenuLink
                                        key={item.title}
                                        href={item.href}
                                        className="text-white hover:text-violet-300 transition-colors duration-200 font-medium"
                                    >
                                        {item.title}
                                    </NavigationMenuLink>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* Desktop CTA Button */}
                    <div className="hidden xl:block">
                        <Button className="px-4 py-2 lg:px-6 lg:py-3 flex items-center space-x-2 bg-violet-500 hover:bg-violet-700 rounded-full transition-colors duration-200">
                            <span className="text-sm lg:text-base font-medium">GET STARTED</span>
                            <ChevronRight className="h-4 w-4 lg:h-5 lg:w-5" />
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="xl:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-violet-300 hover:bg-white/10 transition-colors duration-200"
                            aria-expanded="false"
                            aria-label="Toggle navigation menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-black/30 backdrop-blur-sm border-t border-white/10">
                        {navigationItems.map((item) => (
                            <a
                                key={item.title}
                                href={item.href}
                                className="block px-3 py-2 text-white hover:text-violet-300 hover:bg-white/10 rounded-md font-medium transition-colors duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.title}
                            </a>
                        ))}
                        {/* Mobile CTA Button */}
                        <div className="pt-4 pb-2">
                            <Button className="w-full px-4 py-3 flex items-center justify-center space-x-2 bg-violet-500 hover:bg-violet-700 rounded-full transition-colors duration-200">
                                <span className="font-medium">GET STARTED</span>
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};
