import Image from "next/image";
import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion";
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

const MobileNavigation = ({
    title,
    items,
}: {
    title: string;
    items: { title: string; href: string }[];
}) => {
    return (
        <AccordionItem value={title}>
            <AccordionTrigger>{title}</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
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
            </AccordionContent>
        </AccordionItem>
    );
};

export const Footer = () => {
    return (
        <footer className="relative text-white xl:h-[566px]">
            {/* Mobile Background (0-639px) */}
            <Image
                className="absolute inset-0 object-cover object-top transition-transform duration-1000 ease-out sm:hidden"
                src="/footer-mobile-background.svg"
                alt="Footer Background - Mobile"
                fill
                priority
                sizes="100vw"
                quality={95}
                style={{
                    objectFit: "cover",
                    objectPosition: "center top",
                }}
            />

            {/* Tablet Background (640px-1279px) */}
            <Image
                className="absolute inset-0 object-cover object-top transition-transform duration-1000 ease-out hidden sm:block xl:hidden"
                src="/footer-tablet-background.svg"
                alt="Footer Background - Tablet"
                fill
                priority
                sizes="100vw"
                quality={95}
                style={{
                    objectFit: "cover",
                    objectPosition: "center top",
                }}
            />

            {/* Desktop Background (1280px+) */}
            <Image
                className="absolute inset-0 object-cover object-top transition-transform duration-1000 ease-out hidden xl:block"
                src="/footer-background.svg"
                alt="Footer Background - Desktop"
                fill
                priority
                sizes="100vw"
                quality={95}
                style={{
                    objectFit: "cover",
                    objectPosition: "center top",
                }}
            />

            {/* Overlay for better content readability */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.5px]" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Add 5% margin from left and right on desktop */}
                <div className="xl:mx-[5%]">
                    {/* Main Footer Content */}
                    <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-0 py-12 sm:py-16">
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
                                    providing end-to-end solutions for the
                                    blockchain ecosystem.
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
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full block sm:hidden"
                            defaultValue="Menu"
                        >
                            <MobileNavigation title="Menu" items={menus.Menu} />
                            <MobileNavigation
                                title="Company"
                                items={menus.Company}
                            />
                        </Accordion>
                    </div>

                            {/* Mobile Navigation - Mobile Only */}
                            <Accordion
                                type="single"
                                collapsible
                                className="hidden"
                                defaultValue="Menu"
                            >
                                <MobileNavigation
                                    title="Menu"
                                    items={menus.Menu}
                                />
                                <MobileNavigation
                                    title="Company"
                                    items={menus.Company}
                                />
                            </Accordion>
                        </div>

                        {/* Mobile Social Links */}
                        <div className="hidden mt-8 pt-8">
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
                                    <Image
                                        src="/x.svg"
                                        alt=""
                                        height={24}
                                        width={24}
                                    />
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
                    <div className="border-t border-white/10 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-0 py-6">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                            <p>
                                Copyright © 2025 Merlin Labs. All rights
                                reserved ®
                            </p>
                            <Link
                                href="https://www.merlin-labs.co"
                                className="hover:text-white transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                www.Merlin-Labs.co
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
