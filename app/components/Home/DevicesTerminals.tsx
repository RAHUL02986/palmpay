"use client";

import { useState } from "react";

export default function DevicesTerminals() {
    const [query, setQuery] = useState("");
    const [location, setLocation] = useState("India");
    const [loading, setLoading] = useState(false);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;
        setLoading(true);
        // Simulate API delay for UX feedback
        setTimeout(() => {
            setLocation(query.trim());
            setLoading(false);
        }, 800);
    };

    return (
        <section className="w-full md:py-20 py-10 bg-white px-4">
            <div className="container">
                <div className="  text-center md:mb-20 mb-10 space-y-5">
                    <h2>
                        Find Palm Pe <span className="text-[#0070F3]">Devices Near You.</span>
                    </h2>
                    <p className="max-w-[710px] mx-auto">
                        Locate PalmPe-enabled terminals, kiosks, and partners across India.
                        From metros to Kiranas — your palm now works everywhere.
                    </p>
                </div>
                {/* Search Bar */}
                <form
                    onSubmit={handleSearch}
                    className="max-w-2xl md:mb-11 mb-5 relative flex items-start"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-4.35-4.35M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"
                        />
                    </svg>

                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Enter address or location"
                        className="w-full border-b border-[#1717171A] py-3 px-12 text-[#17171780] focus:outline-none"
                    />

                </form>
                <div className="relative w-full md:h-[670px] h-[350px] bg-gray-100 rounded-3xl shadow overflow-hidden">
                    <iframe
                        key={location} // ensures re-render when location changes
                        src={`https://www.google.com/maps?q=${encodeURIComponent(
                            location
                        )}&output=embed`}
                        width="100%"
                        height="100%"
                        className="absolute inset-0 w-full h-full rounded-3xl"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                    {/* Floating Label */}
                    <div className="absolute bottom-5 left-5 bg-white/90 text-sm text-gray-700 rounded-lg px-4 py-2 shadow">
                        {loading
                            ? "Searching location..."
                            : `Showing results near "${location}"`}
                    </div>
                </div>
            </div>
        </section>
    );
}

