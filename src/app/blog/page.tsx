import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Blog() {
    return (
        <div className="mx-auto max-w-7xl space-y-20 text-white pt-14 sm:pt-16 md:pt-18 lg:pt-20 pb-8">
            <div className="mx-10 grid grid-cols-2 gap-20">
                <div>
                    <p className="my-8 text-4xl font-bold">LATEST BLOGS</p>
                    <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English.
                    </p>
                    <div className="my-4 space-x-4">
                        <Button
                            className="rounded-2xl border-1 border-white"
                            variant="ghost"
                        >
                            READ
                        </Button>
                        <Button
                            className="rounded-2xl border-1 border-white"
                            variant="ghost"
                        >
                            TRENDING
                        </Button>
                    </div>
                </div>
                <div className="relative w-full h-full">
                    <Image
                        className="object-contain"
                        fill
                        src="/blog-placeholder.jpg"
                        alt="placeholder"
                    />
                </div>
            </div>
            <div className="mx-10">
                <p className="text-4xl font-bold mb-8">OUR CATEGORY</p>
                <Carousel
                    opts={{ loop: true }}
                    className="bg-transparent lg:-ml-2"
                >
                    <CarouselContent className="-ml-2 sm:-ml-3 md:-ml-4">
                        {Array(10)
                            .fill(0)
                            .map(() => (
                                <CarouselItem className="pl-4 sm:pl-5 md:pl-6 basis-4/5 sm:basis-1/2 lg:basis-1/3">
                                    <div className="w-full aspect-[5/3] relative ">
                                        <Image
                                            className="object-cover"
                                            fill
                                            src="/blog-placeholder.jpg"
                                            alt="placeholder"
                                        />
                                    </div>
                                    <p className="my-6 font-bold">TITLE HERE</p>
                                    <Button
                                        className="rounded-2xl border-1 border-white"
                                        variant="ghost"
                                    >
                                        READ
                                    </Button>
                                </CarouselItem>
                            ))}
                    </CarouselContent>
                </Carousel>
            </div>
            <div className="mx-10">
                <p className="text-4xl font-bold mb-8">OUR CATEGORY</p>
                <Carousel
                    opts={{ loop: true }}
                    className="bg-transparent lg:-ml-2"
                >
                    <CarouselContent className="-ml-2 sm:-ml-3 md:-ml-4">
                        {Array(10)
                            .fill(0)
                            .map(() => (
                                <CarouselItem className="pl-4 sm:pl-5 md:pl-6 basis-4/5 sm:basis-1/2 lg:basis-1/3">
                                    <div className="w-full aspect-[5/3] relative ">
                                        <Image
                                            className="object-cover"
                                            fill
                                            src="/blog-placeholder.jpg"
                                            alt="placeholder"
                                        />
                                    </div>
                                    <p className="my-6 font-bold">TITLE HERE</p>
                                    <Button
                                        className="rounded-2xl border-1 border-white"
                                        variant="ghost"
                                    >
                                        READ
                                    </Button>
                                </CarouselItem>
                            ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    );
}
