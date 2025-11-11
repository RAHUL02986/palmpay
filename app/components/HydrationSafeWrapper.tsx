"use client";

import React from "react";

export default function HydrationSafeWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Prevent hydration mismatch

  return <>{children}</>;
}
