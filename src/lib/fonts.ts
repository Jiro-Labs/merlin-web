import localFont from "next/font/local";

export const purista = localFont({
    src: [
        {
            path: "../../public/fonts/purista/PuristaTRIAL-Medium.woff2",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-purista",
    display: "swap",
});
