import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const menus = {
    Menu: [
        {
            title: "Home",
            href: "#",
        },
        {
            title: "Pricing",
            href: "#",
        },
        {
            title: "Case studies",
            href: "#",
        },
    ],
    Company: [
        {
            title: "About",
            href: "#",
        },
        {
            title: "Contact us",
            href: "#",
        },
        {
            title: "Careers",
            href: "#",
        },
        {
            title: "Help Center",
            href: "#",
        },
        {
            title: "Support",
            href: "#",
        },
        {
            title: "Legal",
            href: "#",
        },
    ],
};

const Navigation = ({
    title,
    items,
}: {
    title: string;
    items: { title: string; href: string }[];
}) => {
    return (
        <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <ul className="space-y-3">
                {items.map((item) => (
                    <li key={item.title}>
                        <Link 
                            href={item.href}
                            className="text-gray-400 hover:text-white transition-colors duration-200"
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export const Footer = () => {
    return (
        <footer className="bg-black/20 backdrop-blur-sm text-white border-t border-white/10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="py-12 lg:py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                        {/* Newsletter Section */}
                        <div className="lg:col-span-5 space-y-6">
                            <div>
                                <Image 
                                    src="/logo.png" 
                                    alt="Merlin Labs logo" 
                                    height={40} 
                                    width={160}
                                    className="h-10 w-auto"
                                />
                            </div>
                            <p className="text-gray-400 text-base leading-relaxed max-w-md">
                                Merlin Labs is a full-stack Web3 growth labs providing
                                end-to-end solutions for blockchain innovation.
                            </p>
                            <div className="space-y-4">
                                <h4 className="text-white font-semibold">Stay Updated</h4>
                                <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                                    <Input
                                        className="flex-1 rounded-full bg-white text-black placeholder:text-gray-500 border-0 focus:ring-2 focus:ring-violet-500"
                                        type="email"
                                        placeholder="Enter your email"
                                    />
                                    <Button className="px-6 py-2 bg-violet-500 hover:bg-violet-600 rounded-full transition-colors duration-200 whitespace-nowrap">
                                        SUBSCRIBE
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Sections */}
                        <div className="lg:col-span-7">
                            <div className="grid grid-cols-2 md:grid-cols-2 gap-8 lg:gap-12">
                                <Navigation title="Menu" items={menus.Menu} />
                                <Navigation title="Company" items={menus.Company} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Media Section */}
                <div className="py-6 border-t border-gray-800">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                        <div className="flex items-center space-x-6">
                            <span className="text-gray-400 text-sm">Follow us:</span>
                            <div className="flex space-x-4">
                                <a 
                                    href="#" 
                                    className="text-gray-400 hover:text-white transition-colors duration-200"
                                    aria-label="Facebook"
                                >
                                    <Image
                                        src="/facebook.svg"
                                        alt="Facebook"
                                        height={24}
                                        width={24}
                                        className="h-6 w-6"
                                    />
                                </a>
                                <a 
                                    href="#" 
                                    className="text-gray-400 hover:text-white transition-colors duration-200"
                                    aria-label="X (Twitter)"
                                >
                                    <Image
                                        src="/x.svg"
                                        alt="X (Twitter)"
                                        height={24}
                                        width={24}
                                        className="h-6 w-6"
                                    />
                                </a>
                                <a 
                                    href="#" 
                                    className="text-gray-400 hover:text-white transition-colors duration-200"
                                    aria-label="LinkedIn"
                                >
                                    <Image
                                        src="/linkedin.svg"
                                        alt="LinkedIn"
                                        height={24}
                                        width={24}
                                        className="h-6 w-6"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="py-6 border-t border-gray-800">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                        <p>Copyright © 2025 Merlin Labs. All rights reserved ®</p>
                        <p className="hover:text-white transition-colors duration-200">
                            <a href="https://www.merlinlabs.co" target="_blank" rel="noopener noreferrer">
                                www.MerlinLabs.co
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
