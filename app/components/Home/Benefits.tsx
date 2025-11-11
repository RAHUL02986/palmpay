// components/Benefits.tsx
'use client'
import { Button } from "../ui/button";
import Image from "next/image";
import ScrollAnimationWrapper from "../ui/ScrollAnimationWrapper";
import { Check } from "lucide-react"

export default function Benefits() {
    const One_Palm = [
        {
            title: "Register once",
            description: "Your palm becomes your digital key — no cards, no OTPs, no forms."
        },
        {
            title: "Accepted everywhere.",
            description: "Wave your palm to pay, travel, or unlock access — wherever PalmPe devices exist."
        },
        {
            title: "Built for trust.",
            description: "Zero raw biometric storage. Each wave is encrypted and blockchain-verified."
        }
    ]
    const Benefit_2 = [
        {
            title: "Works seamlessly on UPI rails RBI/NPCI compliant.",
        },
        {
            title: "No phone required — just your palm.",
        },
        {
            title: "Triple-Hash Consent Palm + Merchant + Amount.",
        },
        {
            title: "Blockchain Audit: Immutable, transparent, privacy-first.",
        }
    ]
    const Reimagined = [
        {
            title: "Instant (<300 ms) verification.",
        },
        {
            title: "Works offline with secure sync.",
        },
        {
            title: "On-device encryption — no raw biometrics stored.",
        },
        {
            title: "RBI/UPI-compliant tokenization",
        }
    ]
    return (
        <section className="overflow-hidden max-w-[100vw] w-full md:px-5 px-3">

            {/* Benefit 1 - Animate entire block */}
            <ScrollAnimationWrapper direction="left" delay={0.2} className="  sm:py-20 py-10 sm:px-0 px-4">

                <div className="rounded-3xl flex flex-col-reverse md:flex-row justify-between items-center gap-6 mx-auto max-w-[1320px]">
                    <div className="w-full">
                        <h3 className="md:text-[50px] mb-6 md:max-w-[490px]"><span className="text-[#0070F3]">One Palm</span>. Unlimited Possibilities.</h3>
                        <p className=" sm:mb-8 mb-4 md:max-w-[490px]">Register once. Live everywhere.
                            From metros to offices, campuses to stores — your palm becomes your passport for payments, entry, and identity verification.
                        </p>
                        {One_Palm.map((item, index) => (
                            <div key={index} className="flex items-start gap-2 mb-5 md:max-w-[490px]">
                                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#0070F3]">
                                    <Check className="h-4 w-4 text-white" />
                                </div>
                                <div>
                                    <p className="font-semibold">{item.title}</p>
                                    <p className="text-sm leading-snug">{item.description}</p>
                                </div>
                            </div>
                        ))}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:mt-12 mt-5">
                            <Button size="lg">
                                Explore How It Works  →
                            </Button>
                            <Button variant="outline" size="lg">
                                Find PalmPe Locations  →
                            </Button>
                        </div>
                    </div>
                    <div className="w-full md:w-full md:flex justify-end">
                        <Image
                            src="/Group 1000005292.png"
                            alt="Privacy-first"
                            height={607}
                            width={700}
                            className="object-cover group-hover:scale-110 transition-transform duration-300 w-fluid h-auto"
                        />
                    </div>
                </div>

            </ScrollAnimationWrapper>

            {/* Benefit 2 - Animate entire block */}
            <ScrollAnimationWrapper direction="right" delay={0.3} className="bg-[#FEFEFE] sm:py-20 py-10 sm:px-0 px-4">
                <div className="rounded-3xl flex flex-col-reverse md:flex-row justify-between items-center gap-6 mx-auto max-w-[1320px]">
                    
                    <div className="w-full md:max-w-[565px]">
                        <h3 className="md:text-[50px]  mb-6">The <span className="text-[#0070F3]">future of payments</span> built around your palm.</h3>
                        <p className="sm:mb-8 mb-4">PalmPe isn’t just a payment method. It’s a full-stack biometric UPI ecosystem connecting devices, merchants, and blockchain verification into one unified layer.</p>
                        {Benefit_2.map((item, index) => (
                            <div key={index} className="flex items-start gap-2 mb-5 md:max-w-[490px]">
                                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#0070F3]">
                                    <Check className="h-4 w-4 text-white" />
                                </div>
                                <div>
                                    <p className="font-semibold">{item.title}</p>
                                </div>
                            </div>
                        ))}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:mt-12 mt-5">
                            <Button size="lg">
                                Explore the Ecosystem →
                            </Button>
                        </div>
                    </div>
                    <div className="w-full md:w-full md:flex justify-end">
                        <Image
                            src="/Group 1000005220.png"
                            alt="Phone-free convenience"
                            height={312}
                            width={611}
                            className="object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper direction="left" delay={0.2} className="bg-[#FAFDFF]  sm:py-20 py-10 sm:px-0 px-4">

                <div className="rounded-3xl flex flex-col-reverse md:flex-row justify-between items-center gap-6 mx-auto max-w-[1320px]">
                    <div className="w-full md:max-w-[543px]">
                        <h3 className="md:text-[50px] mb-6 "><span className="text-[#0070F3]">UPI, Reimagined</span> for the Next Billion.</h3>
                        <p className="sm:mb-8 mb-4">What smartphones did for wallets, PalmPe will do for payments. We merge human identity with digital consent — faster, safer, and simpler for all.
                        </p>
                        {Reimagined.map((item, index) => (
                            <div key={index} className="flex items-start gap-2 mb-5 md:max-w-[490px]">
                                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#0070F3]">
                                    <Check className="h-4 w-4 text-white" />
                                </div>
                                <div>
                                    <p className="font-semibold">{item.title}</p>
                                </div>
                            </div>
                        ))}
                        <p className="sm:mb-8 mb-4 md:max-w-[490px]">
                            Wave your palm. Confirm in seconds.
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:mt-12 mt-5">
                            <Button size="lg">
                                Learn More  →
                            </Button>
                        </div>
                    </div>
                    <div className="w-full md:w-full md:flex justify-center">
                        <Image
                            src="/Group 1000005304.png"
                            alt="Privacy-first"
                            height={318}
                            width={452}
                            className="object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                </div>

            </ScrollAnimationWrapper>

        </section>
    );
}