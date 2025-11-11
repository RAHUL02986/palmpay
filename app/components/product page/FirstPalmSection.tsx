"use client";

import Image from "next/image";

export default function FirstPalmSection() {
    return (
        <section className=" md:mx-0 mx-4 mb-8">
            <div className="rounded-2xl container border border-[#D0D0D0]">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 md:py-20 md:px-9 px-4 py-5 ">
                    <div className="flex-1 max-w-[554px]">
                        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
                            <span className="text-blue-600">One Palm.</span> Endless <br />
                            Ways to Pay
                        </h2>

                        <p className="mt-6">
                            PalmPe unifies every payment mode — UPI, QR, NFC, card, and palm scan into one seamless experience.
                            Whether you’re paying in a Kirana store, metro gate, or a mall checkout, your palm is enough.
                            No phone. No card. No PIN. Just pay with a wave.
                        </p>

                        <p
                            className="mt-6"
                        >
                            <span className="text-[#0070F3] font-medium">• Unified multi-rail payments</span>  online, offline, everywhere.
                        </p>
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                        <Image
                            src="/images/palmpeimg.png"
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
