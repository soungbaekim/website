import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center">
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
            </div>
        </main>
    );
}

const TABS: { title: string; url: string }[] = [
    {
        title: 'ABOUT',
        url: '/about',
    },
    {
        title: 'EXPERIENCE',
        url: '/experience',
    },
    {
        title: 'PROJECTS',
        url: '/projects',
    },
    {
        title: 'BLOG',
        url: '/blog',
    },
    {
        title: 'CONTACT',
        url: '/contact',
    },
];

function Tab({ title, url }: { title: string; url: string }) {
    return (
        <Link href={url}>
            <p className="text-gray-500 hover:text-gray-300">{title}</p>
        </Link>
    );
}
