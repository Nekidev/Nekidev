"use client";

import Navbar from "./navbar";
import { Montserrat } from "next/font/google";
import "./globals.css";

export const metadata = {
    title: "Home / Nekidev",
    description: "",
};

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={montserrat.className}>
                <Navbar />
                <div className="flex flex-col items-center p-4">
                    <div className="w-full max-w-6xl">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
