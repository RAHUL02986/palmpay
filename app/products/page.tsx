import dynamic from 'next/dynamic';
import PalmpeHero from '../components/product page/PalmpeHero';

const FirstPalmSection = dynamic(() => import('../components/product page/FirstPalmSection'), { ssr: true });
const SecondPalmSection = dynamic(() => import('../components/product page/SecondPalmSection'), { ssr: true });
const ThirdPalmSection = dynamic(() => import('../components/product page/ThirdPalmSection'), { ssr: true });
const DevicesTerminals = dynamic(() => import('../components/Home/DevicesTerminals'), { ssr: true });
const AdvantageSection = dynamic(() => import('../components/product page/AdvantageSection'), { ssr: true });
const ScalableSection = dynamic(() => import('../components/product page/ScalableSection'), { ssr: true });
const PalmPeSlider = dynamic(() => import('../components/product page/PalmPeSlider'), { ssr: true });
import ScrollAnimationWrapper from "../components/ui/ScrollAnimationWrapper";
export default function Home() {
  return (
    <>
      <main id="main-content" className="max-w-[100vw] overflow-x-hidden will-change-auto">
        <PalmpeHero />
        <ScrollAnimationWrapper direction="left" delay={0.2}>
          <FirstPalmSection />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper direction="left" delay={0.2}>
          <SecondPalmSection />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper direction="left" delay={0.2}>
          <ThirdPalmSection />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper direction="left" delay={0.2}>
          <AdvantageSection />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper direction="left" delay={0.2}>
          <ScalableSection />
        </ScrollAnimationWrapper>
         <ScrollAnimationWrapper direction="left" delay={0.2}>
          <PalmPeSlider />
        </ScrollAnimationWrapper>


        <ScrollAnimationWrapper direction="fade" delay={0.1}>
          <DevicesTerminals />
        </ScrollAnimationWrapper>
      </main>
    </>
  );
}