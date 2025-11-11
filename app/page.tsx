import dynamic from 'next/dynamic';
import Hero from "./components/Home/Hero";
import Features from "./components/Home/Features";

const Benefits = dynamic(() => import('./components/Home/Benefits'), { ssr: true });
const POSDevicesSection = dynamic(() => import('./components/Home/POSDevicesSection'), { ssr: true });
const PalmMarketplace = dynamic(() => import('./components/Home/PalmMarketplace'), { ssr: true });
const DevicesAReward = dynamic(() => import('./components/Home/DeservesAReward'), { ssr: true });
const DevicesTerminals = dynamic(() => import('./components/Home/DevicesTerminals'), { ssr: true });
const Million = dynamic(() => import('./components/Home/Million'), { ssr: true });

import ScrollAnimationWrapper from "./components/ui/ScrollAnimationWrapper";
export default function Home() {
  return (
    <>
      <main id="main-content" className="max-w-[100vw] overflow-x-hidden will-change-auto">
        <Hero />
        <ScrollAnimationWrapper direction="up" delay={0.1}>
          <Features />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper direction="left" delay={0.2}>
          <Benefits />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper direction="right" delay={0.3}>
          <PalmMarketplace />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper direction="right" delay={0.3}>
          <POSDevicesSection />
        </ScrollAnimationWrapper>
         <ScrollAnimationWrapper direction="right" delay={0.3}>
          <Million />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper direction="fade" delay={0.1}>
          <DevicesAReward />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper direction="fade" delay={0.1}>
          <DevicesTerminals />
        </ScrollAnimationWrapper>
      </main>
    </>
  );
}