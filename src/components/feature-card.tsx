import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";

export const FeatureCardTitle = ({ children }: PropsWithChildren) => {
    return <p className="mb-5 text-lg font-bold">{children}</p>;
};

interface Props {
    src: string;
    alt: string;
    className?: string;
}

export const FeatureCard = ({
    src,
    alt,
    className,
    children,
}: PropsWithChildren<Props>) => {
    return (
        <Card
            className={cn(
                "w-xs bg-zinc-900 border-none text-white transition-all duration-300 ease-out cursor-pointer",
                "hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/20",
                "hover:bg-zinc-800 hover:scale-[1.02]",
                className,
            )}
        >
            <CardTitle className="ml-5 mr-0 w-fit p-3 bg-linear-to-t from-violet-900 to-violet-600 transition-all duration-300">
                <div className="relative size-8">
                    <Image
                        className="object-contain"
                        src={src}
                        alt={alt}
                        fill
                    />
                </div>
            </CardTitle>
            <CardContent>{children}</CardContent>
            <CardFooter className="mt-10 flex gap-5 justify-start items-center transition-all duration-300">
                <p className="hidden font-bold text-lg">Know More</p>
                <ArrowUpRight className=" hidden text-violet-400 transition-all duration-300 group-hover:text-violet-300" />
            </CardFooter>
        </Card>
    );
};
