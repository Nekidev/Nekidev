"use client";

import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className="flex flex-col gap-24 py-24">
            <div className="font-black flex flex-col justify-center uppercase">
                <h1 className={styles.heroH1}>Nekidev</h1>
                <span className={styles.heroSubtitle}>
                    Fullstack devloper - hobbyist
                </span>
                <div className="flex flex-row items-center gap-8 mt-8">
                    <ProjectsButton />
                    <button className="text-white flex flex-row items-center justify-center gap-2 font-semibold text-xl flex-1 sm:flex-none px-8 sm:px-0">
                        GitHub
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-stretch gap-8 relative">
                <div className="group relative before:absolute before:-top-2 before:-left-2 before:w-4 before:h-4 before:bg-black before:rotate-45 after:absolute after:-bottom-2 after:-right-2 after:w-4 after:h-4 after:bg-black after:rotate-45">
                    <img
                        src="https://avatars.githubusercontent.com/u/84998222?v=4"
                        className="w-full md:w-60 md:h-60"
                    />
                    <div className="absolute bottom-5 left-5 right-5 drop-shadow-lg bg-white transition-all translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 cursor-pointer">
                        <Link
                            className="p-2.5 flex flex-row items-center gap-2.5"
                            href="https://www.pixiv.net/en/users/72632424"
                            target="_blank"
                        >
                            <img
                                className="object-fit rounded-full h-6 w-6"
                                src="avatar-author-avatar.jpg"
                            />
                            <div className="text-black text-sm leading-none font-medium">
                                Image by つちのこ
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="flex-1 grow flex flex-col justify-between items-start">
                    <div>
                        <h2 className="font-bold text-4xl -mt-40 pt-40" id="about-me">About me</h2>
                        <p className="mt-4">
                            Hi! I'm <b className="text-green-400">Neki</b>, a
                            self-taught web developer. I've been writing code
                            since 2017, when a friend recommended me to give it
                            a try. I love{" "}
                            <i className="text-cyan-400 font-mono">
                                watching anime
                            </i>{" "}
                            and{" "}
                            <i className="text-cyan-400 font-mono">
                                writing code
                            </i>{" "}
                            in my free time.
                        </p>
                    </div>
                    <img
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=Nekidev&layout=compact&hide_title=true&bg_color=171717&text_color=ffffff&hide_border=true"
                        className="h-28 mt-8 md:mt-0"
                    />
                </div>
            </div>
            <div>
                <h2 className="font-bold text-4xl -mt-40 pt-40" id="projects">Projects</h2>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 relative">
                    <Project
                        imageUrl="https://cdn.nekosapi.com/uploads/images/QHDPBGEQI5ECHMY6DQPA4LQBPA.webp"
                        title="Nekos API"
                        subtitle="The open-source anime images API."
                        tag="API"
                        link="https://nekosapi.com/"
                    />
                    <Project
                        imageUrl="https://repository-images.githubusercontent.com/539589054/f34b3e84-9bd7-4837-92f8-0fa8c1953f4b"
                        title="AnimeAPI"
                        subtitle="A collection of anime-related API wrappers."
                        tag="Python Library"
                        link="https://anime-api.nekidev.com/"
                    />
                    <Project
                        imageUrl="https://replit.com/cdn-cgi/image/width=1920,quality=80,format=auto/https://storage.googleapis.com/replit/images/1635116223746_d7236e7c5283a299e2277471d0aff7e5.png"
                        title="Shiroi Kagi"
                        subtitle="A web-based videogame to click keys at the rythm of the song."
                        tag="Videogame"
                        link="https://replit.com/@Rafabradley/Shiroi-Kagi-Rythm-of-Music"
                    />
                </div>
            </div>
            <div>
                <h2 className="font-bold text-4xl -mt-40 pt-40">Socials</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-8" id="socials">
                    <Social
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 496 512"
                                stroke="currentColor"
                                fill="currentColor"
                                className="h-10 w-10"
                            >
                                <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"></path>
                            </svg>
                        }
                        username="Rafabradleyrb"
                        name="Spotify"
                        color="#1dd65f"
                        link="https://open.spotify.com/user/rafabradleyrb"
                    />
                    <Social
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 512"
                                stroke="currentColor"
                                fill="currentColor"
                                className="h-10 w-10"
                            >
                                <path d="M524.531 69.836a1.5 1.5 0 00-.764-.7A485.065 485.065 0 00404.081 32.03a1.816 1.816 0 00-1.923.91 337.461 337.461 0 00-14.9 30.6 447.848 447.848 0 00-134.426 0 309.541 309.541 0 00-15.135-30.6 1.89 1.89 0 00-1.924-.91 483.689 483.689 0 00-119.688 37.107 1.712 1.712 0 00-.788.676C39.068 183.651 18.186 294.69 28.43 404.354a2.016 2.016 0 00.765 1.375 487.666 487.666 0 00146.825 74.189 1.9 1.9 0 002.063-.676A348.2 348.2 0 00208.12 430.4a1.86 1.86 0 00-1.019-2.588 321.173 321.173 0 01-45.868-21.853 1.885 1.885 0 01-.185-3.126 251.047 251.047 0 009.109-7.137 1.819 1.819 0 011.9-.256c96.229 43.917 200.41 43.917 295.5 0a1.812 1.812 0 011.924.233 234.533 234.533 0 009.132 7.16 1.884 1.884 0 01-.162 3.126 301.407 301.407 0 01-45.89 21.83 1.875 1.875 0 00-1 2.611 391.055 391.055 0 0030.014 48.815 1.864 1.864 0 002.063.7A486.048 486.048 0 00610.7 405.729a1.882 1.882 0 00.765-1.352c12.264-126.783-20.532-236.912-86.934-334.541zM222.491 337.58c-28.972 0-52.844-26.587-52.844-59.239s23.409-59.241 52.844-59.241c29.665 0 53.306 26.82 52.843 59.239 0 32.654-23.41 59.241-52.843 59.241zm195.38 0c-28.971 0-52.843-26.587-52.843-59.239s23.409-59.241 52.843-59.241c29.667 0 53.307 26.82 52.844 59.239 0 32.654-23.177 59.241-52.844 59.241z"></path>
                            </svg>
                        }
                        username="Neki#1587"
                        name="Discord"
                        color="#5865F2"
                        link="https://discord.com/users/777338793803513886"
                    />
                    <Social
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                stroke="currentColor"
                                fill="currentColor"
                                className="h-10 w-10"
                            >
                                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                            </svg>
                        }
                        username="Nekidev"
                        name="Twitter"
                        color="#1c9cea"
                        link="https://twitter.com/Nekidev"
                    />
                    <Social
                        icon={
                            <div className="relative h-10 w-10 flex flex-col items-center justify-center">
                                <div className="bg-white h-8 w-8 rounded-full absolute m-auto"></div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    stroke="currentColor"
                                    fill="currentColor"
                                    className="h-10 w-10 z-10"
                                >
                                    <path d="M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z"></path>
                                </svg>
                            </div>
                        }
                        username="Nekogi1"
                        name="Reddit"
                        color="#ff4500"
                        link="https://reddit.com/u/Nekogi1"
                    />
                    <Social
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 496 512"
                                stroke="currentColor"
                                fill="currentColor"
                                className="h-10 w-10"
                            >
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                            </svg>
                        }
                        username="Nekidev"
                        name="GitHub"
                        link="https://github.com/Nekidev"
                    />
                    <Social
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                stroke="currentColor"
                                fill="currentColor"
                                className="h-10 w-10"
                            >
                                <path d="M7 5.5A1.5 1.5 0 018.5 4h7A1.5 1.5 0 0117 5.5V12H8.5A1.5 1.5 0 017 10.5v-5zM17 12h8.5a1.5 1.5 0 011.5 1.5v5a1.5 1.5 0 01-1.5 1.5H17v-8zM7 21.5A1.5 1.5 0 018.5 20H17v6.5a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 017 26.5v-5z"></path>
                            </svg>
                        }
                        username="Rafabradleyrb"
                        name="Replit"
                        color="#F26207"
                        link="https://replit.com/@Rafabradley"
                    />
                </div>
            </div>
            <div>
                <p className="font-medium text-neutral-400">Made with <span className="text-red-400">❤</span> by Nekidev from <span className="text-cyan-400">Argentina</span>. Licensed under the MIT License. The source code can be found <Link href="https://github.com/Nekidev/Nekidev" className="underline">here</Link>.</p>
            </div>
        </main>
    );
}

function ProjectsButton() {
    return (
        <a href="#projects" className="px-8 py-2 font-extrabold text-black bg-white text-xl uppercase relative before:absolute before:-top-2 before:-left-2 before:w-4 before:h-4 before:bg-black before:rotate-45 after:absolute after:-bottom-2 after:-right-2 after:w-4 after:h-4 after:bg-black after:rotate-45 overflow-hidden hover:bg-gradient-to-br hover:from-green-400 hover:to-cyan-400 flex-1 sm:flex-none text-center">
            Projects
        </a>
    );
}

function Project({ imageUrl, title, subtitle, tag, link }) {
    return (
        <Link
            className="group relative w-full h-60 md:h-40 bg-cover bg-center bg-neutral-900 overflow-hidden before:absolute before:-top-2 before:-left-2 before:w-4 before:h-4 before:bg-black before:rotate-45 after:absolute after:-bottom-2 after:-right-2 after:w-4 after:h-4 after:bg-black after:rotate-45"
            style={{
                backgroundImage: `url('${imageUrl}')`,
            }}
            href={link}
            target="_blank"
        >
            <div className="absolute top-4 left-4 right-4 flex flex-row items-center justify-between transition-all -translate-y-10 group-hover:translate-y-0">
                <span className="bg-white text-sm text-black font-bold p-1 leading-none">
                    {tag}
                </span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                </svg>
            </div>
            <div className="h-full w-full flex flex-col justify-end">
                <div className="p-4 bg-neutral-900">
                    <div className="font-bold text-white text-xl">{title}</div>
                    <p className="text-neutral-400 text-sm font-medium -mb-1 md:-mb-12 pb-1 md:opacity-0 group-hover:-mb-1 group-hover:opacity-100 transition-all line-clamp-2">
                        {subtitle}
                    </p>
                </div>
            </div>
        </Link>
    );
}

function Social({ icon, username, name, color, link }) {
    return (
        <Link
            href={link}
            target="_blank"
            className="group flex flex-col items-center justify-center gap-2 px-4 py-6 bg-neutral-900 overflow-hidden before:absolute before:z-10 before:-top-2 before:-left-2 before:w-4 before:h-4 before:bg-black before:rotate-45 after:absolute after:-bottom-2 after:-right-2 after:w-4 after:h-4 after:bg-black after:rotate-45 relative"
            style={{
                color: color ? color : "white",
            }}
        >
            {icon}
            <div className="text-center">
                <div className="font-bold text-white">{username}</div>
                <div className="font-medium text-sm text-neutral-400">
                    {name}
                </div>
            </div>
            <div
                className="absolute top-0 bottom-0 left-0 right-0 border-2 opacity-0 group-hover:opacity-100 transition"
                style={{
                    borderColor: color,
                }}
            >
                <div
                    className="absolute z-10 -top-2 -left-2 w-4 h-4 bg-black rotate-45 border-r-[3px]"
                    style={{
                        borderColor: color,
                    }}
                ></div>
                <div
                    className="absolute z-10 -bottom-2 -right-2 w-4 h-4 bg-black rotate-45 border-l-[3px]"
                    style={{
                        borderColor: color,
                    }}
                ></div>
            </div>
        </Link>
    );
}
