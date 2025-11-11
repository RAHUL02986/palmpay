"use client";
import Image from "next/image";
import { useState } from "react";

export default function DeservesAReward() {

    return (
        <section className="w-full md:py-20 py-10 bg-white px-4">
            <div className="container">
                <div className="text-center md:mb-20 mb-10 space-y-5">
                    <h2>
                        Every Payment <span className="text-[#0070F3]"> Deserves a Reward</span>
                    </h2>
                    <p className="max-w-[573px] mx-auto">
                        Earn PalmPoints™ every time you pay, register, or refer.
                        Redeem them for cashback, partner offers, and milestone PalmMiles
                    </p>
                </div>
                {/* Search Bar */}
                <div className="relative w-full md:h-[670px] h-[350px] bg-gray-100 rounded-3xl shadow overflow-hidden">
                    <Image
                        src="/images/Revardes.png"
                        alt="DeservesAReward"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}

