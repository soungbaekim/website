import Image from 'next/image';

export default function ScrollToTop() {
    return (
        <button
            className="fixed bottom-7 right-7 bg-gray-900 p-2 shadow-xl rounded-full"
            onClick={() => window.scrollTo({ top: 0 })}
        >
            <Image width={30} height={30} src={'/less.svg'} alt="" priority />
        </button>
    );
}
