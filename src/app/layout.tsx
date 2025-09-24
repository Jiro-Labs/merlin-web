import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { purista } from "@/lib/fonts";

export const metadata: Metadata = {
    title: "Merlin Labs",
    description: "Merlin Labs Landing Page",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${purista.variable} font-purista antialiased bg-black`}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
