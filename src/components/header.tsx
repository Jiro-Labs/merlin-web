import { ChevronRight } from "lucide-react";
import Image from "next/image";
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
    return (
        <header className="bg-white/10 backdrop-blur-lg shadow-lg shadow-slate-900/5 fixed top-0 w-full z-50 text-white">
            <div className="m-5 flex items-center justify-between">
                <Image
                    className="h-full"
                    src="/logo.png"
                    alt="logo"
                    height={0}
                    width={180}
                />

                <div className="absolute left-1/2 transform -translate-x-1/2  flex-1 justify-center">
                    <NavigationMenu viewport={false}>
                        <NavigationMenuList>
                            {navigationItems.map((item) => (
                                <NavigationMenuLink
                                    key={item.title}
                                    href={item.href}
                                    className="hover:bg-transparent hover:text-white"
                                >
                                    {item.title}
                                </NavigationMenuLink>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <Button className="!px-5 !h-full flex items-center space-x-1 bg-violet-500 hover:bg-violet-700 rounded-full">
                    <p>GET STARTED</p>
                    <ChevronRight />
                </Button>
            </div>
        </header>
    );
};
