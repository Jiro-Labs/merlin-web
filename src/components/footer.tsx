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
        <div>
            <h3 className="text-lg font-bold mb-6">{title}</h3>
            <ul className="space-y-3">
                {items.map((item) => (
                    <li key={item.title}>
                        <Link
                            href={item.href}
                            className="text-gray-400 hover:text-white transition-colors text-sm"
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
        <footer className="text-white bg-black">
            <div className="max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="px-4 sm:px-6 md:px-8 lg:px-10 py-12 sm:py-16">
                    <div className="flex flex-col md:flex-row justify-between gap-8 lg:gap-12">
                        {/* Company Info & Newsletter */}
                        <div className="lg:col-span-1 space-y-6">
                            <Image
                                src="/logo.png"
                                alt="Merlin Labs - Web3 Solutions"
                                height={40}
                                width={160}
                                className="h-8 w-auto"
                            />
                            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                                Merlin Labs is a full-stack Web3 growth labs
                                providing end-to-end solutions for the blockchain
                                ecosystem.
                            </p>

                            {/* Newsletter Signup */}
                            <div className="space-y-3">
                                <h3 className="text-white font-medium text-sm">
                                    Stay Updated
                                </h3>
                                <div className="flex flex-col gap-3">
                                    <Input
                                        className="w-full rounded-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:ring-violet-500/50"
                                        type="email"
                                        placeholder="Your Email"
                                    />
                                    <Button className="w-full px-6 py-2 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 rounded-full transition-all duration-300 transform hover:scale-105 text-sm font-medium">
                                        SUBSCRIBE
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden sm:grid grid-cols-2 gap-64">
                            <Navigation title="Menu" items={menus.Menu} />
                            <Navigation title="Company" items={menus.Company} />
                        </div>
                    </div>

                    {/* Mobile Social Links */}
                    <div className="mt-8 pt-8">
                        <div className="flex justify-end space-x-6">
                            <Link
                                href="#"
                                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                                aria-label="Follow us on Facebook"
                            >
                                <Image
                                    src="/facebook.svg"
                                    alt=""
                                    height={24}
                                    width={24}
                                />
                            </Link>
                            <Link
                                href="#"
                                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                                aria-label="Follow us on X (Twitter)"
                            >
                                <Image src="/x.svg" alt="" height={24} width={24} />
                            </Link>
                            <Link
                                href="#"
                                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                                aria-label="Connect on LinkedIn"
                            >
                                <Image
                                    src="/linkedin.svg"
                                    alt=""
                                    height={24}
                                    width={24}
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-white/10 px-4 sm:px-6 md:px-8 lg:px-10 py-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                        <p>Copyright © 2025 MerlinLabs. All rights reserved ®</p>
                        <Link
                            href="https://www.MerlinLabs.co"
                            className="hover:text-white transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            www.MerlinLabs.co
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
