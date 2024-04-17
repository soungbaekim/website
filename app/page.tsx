'use client';

import Resume from '@/components/Resume';
import ScrollToTop from '@/components/ScrollToTop';
import { Tip } from '@/components/Tip';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
    const scroll = useScroll();

    return (
        <main className="flex min-h-screen flex-col items-center">
            <div className="absolute flex top-0 right-0 m-10">
                <Link href="/blog">
                    <h1 className="text-gray-500 hover:text-gray-300">BLOG</h1>
                </Link>
                <div className="m-3" />
                <a
                    href="https://docs.google.com/document/d/1admEVvoNMtzL76vaUAlTeFKqnxXr1gBt/edit?usp=sharing&ouid=101018202579593473515&rtpof=true&sd=true"
                    target="_blank"
                >
                    <h1 className="text-gray-500 hover:text-gray-300">
                        RESUME
                    </h1>
                </a>
            </div>
            <div className="flex min-h-screen flex-col justify-center items-center">
                <Image
                    className="m-7 rounded-full"
                    src={'/profile.jpeg'}
                    width={100}
                    height={100}
                    alt="profile"
                />
                <h1 className="text-6xl">
                    <a className="text-gray-700">(</a>Soung Bae
                    <a className="text-gray-700">)</a> Kim
                </h1>
                <p className="m-10 text-2xl italic">
                    i enjoy learning, building, and teaching
                </p>
                <div className="flex flex-row w-full justify-between items-center">
                    {TABS.map((tab, i) => (
                        <Tab key={i} title={tab.title} url={tab.url} />
                    ))}
                </div>
                {scroll.scroll < 100 ? (
                    <div className="absolute bottom-0 m-20">
                        <Scroll size={30} color="gray" />
                    </div>
                ) : null}
            </div>
            <div
                id="about"
                className="flex min-h-screen flex-col justify-start items-center"
            >
                <h1 className="text-4xl m-10">ABOUT ME</h1>
            </div>
            <div
                id="experience"
                className="flex min-h-screen flex-col justify-center items-center"
            >
                <h1>EXPERIENCE</h1>
            </div>
            <div
                id="projects"
                className="flex min-h-screen flex-col justify-center items-center"
            >
                <h1>PROJECTS</h1>
            </div>
            <div
                id="awards"
                className="flex min-h-screen flex-col justify-center items-center"
            >
                <h1>AWARDS</h1>
            </div>
            <div
                id="contact"
                className="flex min-h-screen flex-col justify-center items-center"
            >
                <h1>CONTACT</h1>
            </div>
            <div>
                <h1>Footer</h1>
            </div>
            {scroll.scroll > 500 ? <ScrollToTop /> : null}
        </main>
    );
}

const TABS: { title: string; url: string }[] = [
    {
        title: 'ABOUT',
        url: '/#about',
    },
    {
        title: 'EXPERIENCE',
        url: '/#experience',
    },
    {
        title: 'PROJECTS',
        url: '/#projects',
    },
    {
        title: 'AWARDS',
        url: '/#awards',
    },
    {
        title: 'CONTACT',
        url: '/#contact',
    },
];

function Tab({ title, url }: { title: string; url: string }) {
    return (
        <Link href={url}>
            <p className="text-gray-500 hover:text-gray-300">{title}</p>
        </Link>
    );
}

function Scroll({ size, color }: { size: number; color: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={size}
            width={size}
            viewBox="0 -960 960 960"
            fill={color}
        >
            <path d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z" />
        </svg>
    );
}

function useScroll() {
    type Scroll = { scroll: number; height: number; offset: number };

    const [scroll, setScroll] = useState<Scroll>({
        scroll: -1,
        offset: -1,
        height: 0,
    });

    useEffect(() => {
        function onScroll(e: any) {
            const scroll = e.currentTarget.scrollY;
            const offset = e.currentTarget.innerHeight;
            const height = document.body.scrollHeight;

            setScroll({
                height,
                scroll,
                offset,
            });
        }

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return scroll;
}
