"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation"; 
type Card = {
    id: number;
    title: string;
    image: string;
    bgColor: string;
    link: string; 
};

const cards: Card[] = [
    {
        id: 1,
        title: "Infrared sensors detect your unique vein pattern.",
        image: "/pixelcut-export 2.png",
        bgColor: "bg-[#0176ED]",
        link: "/palm/infrared",
    },
    {
        id: 2,
        title: "Your palm converts into an encrypted ID no raw biometrics stored.",
        image: "/Mask group (1).png",
        bgColor: "bg-[#01C29A]",
        link: "/palm/encrypted-id",
    },
    {
        id: 3,
        title: "Triple-Hash Consent confirms authenticity.",
        image: "/03 — Triple-Hash Consent 1.png",
        bgColor: "bg-[#1C1B1B]",
        link: "/palm/triple-hash",
    },
    {
        id: 4,
        title: "Transaction anchored securely on blockchain.",
        image: "/Step4BlockchainAnchor 1.png",
        bgColor: "bg-[#51A1F3]",
        link: "/palm/blockchain",
    },
    {
        id: 5,
        title: "Wave your palm. Done.",
        image: "/Step5RippleWaveYourPalm 1.png",
        bgColor: "bg-[#005846]",
        link: "/palm/wave",
    },
];

export default function PalmMarketplace() {
    const [active, setActive] = useState<number>(1);
    const router = useRouter();

    return (
        <section className="w-full flex flex-col items-center justify-center md:py-16 py-10 px-4 bg-[#F9FAFC] overflow-hidden">
            {/* Header */}
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0070F3]">
                    Wave. Verify. <span className="text-black">Done</span>
                </h2>
                <p className="mt-3 max-w-[480px] mx-auto text-gray-600">
                    From biometric capture to blockchain audit — all in seconds, without
                    storing any personal data.
                </p>
            </div>

            {/* Cards Row */}
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 w-full max-w-7xl md:h-[570px] ">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        onMouseEnter={() => setActive(card.id)}
                        onMouseLeave={() => setActive(1)}
                        onClick={() => router.push(card.link)} // ✅ navigate to page
                        className={`relative overflow-hidden rounded-2xl flex flex-col justify-between p-3 md:gap-0 gap-10 text-left text-white transition-all duration-500 ease-in-out cursor-pointer
                            ${card.bgColor}
                            ${active === card.id ? "md:w-[30%] w-full" : "md:w-[20%] w-full"}
                        `}
                    >
                        {/* Number + Title */}
                        <div className="flex flex-col items-start text-left transition-all duration-500">
                            <span
                                className={`text-7xl font-bold mb-2 transition-transform duration-500 ${
                                    active === card.id ? "opacity-50 scale-110" : "opacity-50 scale-100"
                                }`}
                            >
                                {card.id < 10 ? `0${card.id}` : card.id}
                            </span>
                            <h3 className="text-lg md:text-xl font-medium leading-snug">
                                {card.title}
                            </h3>
                        </div>

                        {/* Image */}
                        <div className="relative w-full flex justify-center mt-auto">
                            <Image
                                src={card.image}
                                alt={card.title}
                                width={338}
                                height={450}
                                className={`object-cover transition-transform duration-500 ${
                                    active === card.id ? "scale-110" : "scale-100"
                                }`}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
