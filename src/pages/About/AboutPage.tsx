import AboutHero from '../../modules/about/AboutHero/AboutHero';
import OurPurpose from '../../modules/about/OurPurpose/OurPurpose';
import HowItWorks from '../../modules/about/HowItWorks/HowItWorks';
import Values from '../../modules/about/Values/Values';
import AboutCTA from '../../modules/about/AboutCTA/AboutCTA';

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurPurpose />
      <HowItWorks />
      <Values />
      <AboutCTA />
    </>
  );
}