import Image from "next/image";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";

const menus = {
    ["Menu"]: [
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
    ["Company"]: [
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
            <p className="font-bold mb-4">{title}</p>
            {items.map((item) => (
                <li key={item.href}>
                    <Link href={item.href}>{item.title}</Link>
                </li>
            ))}
        </div>
    );
};

export const Footer = () => {
    return (
        <footer className="text-white">
            <div className="flex gap-50 px-10">
                <div className="max-w-lg space-y-5">
                    <Image src="/logo.png" alt="logo" height={10} width={180} />
                    <p className="text-gray-500">
                        Merlin Labs is a full-stack Web3 growth labs providing
                        end-to-end solution
                    </p>
                    <Input
                        className="rounded-full bg-white text-black"
                        type="email"
                        placeholder="Your Email"
                    />
                    <Button className="!p-5 bg-violet-500 hover:bg-violet-700 rounded-full">
                        SUBSCRIBE
                    </Button>
                </div>
                <Navigation title="Menu" items={menus["Menu"]} />
                <Navigation title="Company" items={menus["Company"]} />
            </div>
            <div className="m-10 flex">
                <div className="w-full flex-1" />
                <div className="flex gap-5">
                    <Image
                        className="h-full"
                        src="/facebook.svg"
                        alt="logo"
                        height={0}
                        width={40}
                    />
                    <Image
                        className="h-full"
                        src="/x.svg"
                        alt="logo"
                        height={0}
                        width={40}
                    />
                    <Image
                        className="h-full"
                        src="/linkedin.svg"
                        alt="logo"
                        height={0}
                        width={40}
                    />
                </div>
            </div>
            <div className="border-t px-10 py-5 flex justify-between">
                <p>Copyright © 2025 MerlinLabs. All rights reserved ®</p>
                <p>www.MerlinLabs.co</p>
            </div>
        </footer>
    );
};
