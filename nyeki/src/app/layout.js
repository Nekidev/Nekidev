import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Nyeki.py",
    description: "Hi! I'm Nyeki, a hobbyist web developer from Argentina. Here are some projects where you can find me!",
    themeColor: "#AEC6CF"
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
