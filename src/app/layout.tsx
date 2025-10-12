import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { beVietnamPro } from "@/lib/fonts";

export const metadata: Metadata = {
    title: "Merlin Labs",
    description: "Merlin Labs",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.png" sizes="any" />
            </head>
            <body
                className={` ${beVietnamPro.variable} font-be-vietnam-pro antialiased bg-black`}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
