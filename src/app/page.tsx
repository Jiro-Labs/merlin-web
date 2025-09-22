"use server";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { AboutUs } from "@/components/about-us";
import { EventCard, EventCarousel } from "@/components/event-carousel";
import { FeatureCard, FeatureCardTitle } from "@/components/feature-card";
import { Hero } from "@/components/hero";
import { OurServices } from "@/components/our-services";
import { Partners } from "@/components/partners";
import {
    Statistics,
    StatisticsDescription,
    StatisticsNumber,
} from "@/components/statistics";
import { Button } from "@/components/ui/button";
import { WhyChooseUs } from "@/components/why-choose-us";

export default async function Home() {
    return (
        <div className="pt-14 sm:pt-16 md:pt-18 lg:pt-20">
            {/* Hero Section */}
            <Hero />

            {/* Partners Section */}
            <Partners delay={1000} />

            <EventCarousel delay={2000}>
                <EventCard src="/event/1.jpg" alt="" />
                <EventCard src="/event/2.jpg" alt="" />
                <EventCard src="/event/3.jpg" alt="" />
                <EventCard src="/event/4.jpg" alt="" />
            </EventCarousel>

            <AboutUs />

           <OurServices />

            <WhyChooseUs />
        </div>
    );
}