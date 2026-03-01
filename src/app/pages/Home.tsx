import { Hero } from '../components/Hero';
import { WasteLandscape } from '../components/WasteLandscape';
import { WhyNow } from '../components/WhyNow';
import { CoreValues } from '../components/CoreValues';
import { ScientificValidation } from '../components/ScientificValidation';
import { PrototypePreview } from '../components/PrototypePreview';
import { Team } from '../components/Team';
import { CallToAction } from '../components/CallToAction';

export function Home() {
  return (
    <>
      <Hero />
      <WasteLandscape />
      <WhyNow />
      <CoreValues />
      <ScientificValidation />
      <PrototypePreview />
      <Team />
      <CallToAction />
    </>
  );
}