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
            className={cn("w-xs bg-zinc-900 border-none text-white", className)}
        >
            <CardTitle className="mx-auto md:ml-5 md:mr-0 w-fit p-3 bg-linear-to-t from-violet-900 to-violet-600">
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
            <CardFooter className="mt-10 flex gap-5 justify-center md:justify-start items-center">
                <p className="font-bold text-lg">Know More</p>
                <ArrowUpRight className="text-violet-400" />
            </CardFooter>
        </Card>
    );
};
