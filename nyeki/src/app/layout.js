import "./globals.css";
import { Inter } from "next/font/google";
import { DISCORD_USER_ID } from "@/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Nyeki.py",
    description: "Hi! I'm Nyeki, a hobbyist web developer from Argentina. Here are some projects where you can find me!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href={`https://nekosapi.com/api/discord/avatar?user_id=${DISCORD_USER_ID}`}>
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
