"use client";

export default function Navbar() {
    return (
        <div className="sticky top-0 left-0 right-0 flex flex-col items-center justify-center p-4 bg-black z-50">
            <div className="w-full max-w-6xl flex flex-row items-center relative">
                <div className="absolute left-0 top-0">
                    <Speaker />
                </div>
                <div className="py-1.5 flex flex-row items-center gap-8">
                    <div className="font-extrabold uppercase text-4xl ml-16 pl-3">
                        Nekidev
                    </div>
                    <a href="#about-me" className="hover:text-red-400 transition-colors font-medium hidden md:inline-block">About me</a>
                    <a href="#projects" className="hover:text-orange-400 transition-colors font-medium hidden md:inline-block">Projects</a>
                    <a href="#socials" className="hover:text-yellow-400 transition-colors font-medium hidden md:inline-block">Socials</a>
                </div>
                <div className="absolute right-0 top-0">
                    <Speaker />
                </div>
            </div>
        </div>
    );
}

function Speaker() {
    return (
        <div className="bg-white relative p-1.5 flex flex-col items-center gap-1.5">
            <div className="w-10 aspect-square bg-black rounded-full flex flex-col items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white"></div>
            </div>
            <div className="w-10 aspect-square bg-black rounded-full flex flex-col items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white"></div>
            </div>
        </div>
    );
}
