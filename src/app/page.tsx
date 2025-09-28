"use server";

import { AboutUs } from "@/components/about-us";
import { EventCard, EventCarousel } from "@/components/event-carousel";
import { Hero } from "@/components/hero";
import { OurServices } from "@/components/our-services";
import { Partners } from "@/components/partners";
import { WhyChooseUs } from "@/components/why-choose-us";

export default async function Home() {
    return (
        <div className="pt-14 sm:pt-16 md:pt-18 lg:pt-20">
            {/* Hero Section */}
            <Hero />

            {/* Partners Section */}
            <Partners speed={1} />

            <AboutUs 
                eventCarouselSpeed={2}
                eventCarouselChildren={
                    <>
                        <EventCard src="/event/1.svg" alt="" />
                        <EventCard src="/event/2.svg" alt="" />
                        <EventCard src="/event/3.svg" alt="" />
                        <EventCard src="/event/4.svg" alt="" />
                        <EventCard src="/event/5.svg" alt="" />
                        <EventCard src="/event/6.svg" alt="" />
                    </>
                }
            />

            <OurServices />

            <WhyChooseUs />
        </div>
    );
}
