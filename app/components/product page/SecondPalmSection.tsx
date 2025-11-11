"use client";

import Image from "next/image";

export default function SecondPalmSection() {
    return (
        <section className=" md:mx-0 mx-4 mb-8">
            <div className="rounded-2xl container border border-[#D0D0D0]">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 md:py-20 md:px-9 px-4 py-5 ">
                    {/* Left Text Section */}
                    <div className="flex-1">
                        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
                            Your Palm. <span className="text-blue-600">Your<br className="hidden md:block" /> Ecosystem</span>
                        </h2>

                        <p className="text-gray-600 mt-6 leading-relaxed max-w-md">
                            PalmPe connects all your daily financial services recharges, insurance, travel, and shopping into one connected system.
                            It’s not just payments; it’s a living ecosystem built around your palm.
                        </p>
<p
                            className="mt-6"
                        >
                            <span className="text-[#0070F3] font-medium">
                        • Recharge, Pay, Earn,</span> and Grow all through one identity.</p>
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                        <Image
                            src="/images/secondpalm.png"
                            alt="PalmPe Device"
                            width={600}
                            height={400}

                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
