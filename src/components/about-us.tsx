import Image from "next/image";

interface AboutUsProps {
    title?: string;
    subtitle?: string;
    description?: string;
}

export const AboutUs = ({
    title = "Company Profile",
    subtitle = "About Us",
    description = "Merlin Labs specializes in developing IT solutions and comprehensive digital marketing strategies specifically designed for the Web3 ecosystem."
}: AboutUsProps) => {
    return (
        <div className="px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 pb-6 sm:pb-8 lg:pb-10">
            {/* Add 5% margin from left and right */}
            <div className="mx-[5%]">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16 xl:gap-20">
                {/* About Us Image Section - Left side on desktop */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                    <div className="relative w-full max-w-md lg:max-w-full">
                        <Image
                            className="object-contain w-full h-auto"
                            src="/about-us.svg"
                            alt="About Merlin Labs - Company Overview"
                            width={600}
                            height={400}
                            priority
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
                        />
                    </div>
                </div>

                {/* Text Content Section - Right side on desktop */}
                <div className="w-full lg:w-1/2 text-white text-center lg:text-left lg:pt-8 xl:pt-12">
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold">{title}</p>
                    <p className="my-3 text-2xl sm:text-3xl lg:text-4xl font-bold">{subtitle}</p>
                    <p className="my-4 sm:my-5 text-sm sm:text-base lg:text-base text-gray-400 leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
            </div>
        </div>
    );
};