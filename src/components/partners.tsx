import { PartnerCarousel, PartnerLogo } from "./partner-carousel";

// Partner data structure with optional className
interface PartnerData {
    id: string;
    name: string;
    src: string;
    alt: string;
    className?: string;
}

const partnersData: PartnerData[] = [
    {
        id: "dsg",
        name: "Dong Sai Gon",
        src: "/partner/dsg.svg",
        alt: "Dong Sai Gon",
    },
    {
        id: "bingx",
        name: "BingX",
        src: "/partner/bingx.png",
        alt: "BingX",
    },
    {
        id: "okx",
        name: "OKX",
        src: "/partner/okx.png",
        alt: "OKX",
    },
    {
        id: "starknet",
        name: "STARKNET",
        src: "/partner/starknet.svg",
        alt: "STARKNET",
    },
    {
        id: "sei",
        name: "sei",
        src: "/partner/sei.png",
        alt: "sei",
    },
    {
        id: "sui",
        name: "Sui",
        src: "/partner/sui.png",
        alt: "Sui",
    },
    {
        id: "anomaly",
        name: "ANOMALY",
        src: "/partner/anomaly.svg",
        alt: "ANOMALY",
    },
    {
        id: "oio-followin",
        name: "OIO Followin",
        src: "/partner/oio-followin.png",
        alt: "OIO Followin",
        className: "h-16",
    },
    {
        id: "dwf-labs",
        name: "DWF LABS",
        src: "/partner/dwf-labs.png",
        alt: "DWF LABS",
        className: "h-16",
    },
];

interface PartnersProps {
    title?: string;
    subtitle?: string;
    delay?: number;
    partners?: PartnerData[];
}

export const Partners = ({
    delay = 1000,
    partners = partnersData,
}: PartnersProps) => {
    return (
        <section className="py-2">
            {/* Partner Carousel */}
            <PartnerCarousel delay={delay}>
                {partners.map((partner) => (
                    <PartnerLogo
                        key={partner.id}
                        src={partner.src}
                        alt={partner.alt}
                        className={partner.className}
                    />
                ))}
            </PartnerCarousel>
        </section>
    );
};

// Export partners data for potential reuse
export { partnersData };

// Export individual partner type for type safety
export type Partner = PartnerData;
