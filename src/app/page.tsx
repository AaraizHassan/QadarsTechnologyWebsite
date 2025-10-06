import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
// import { Orbitron } from "next/font/google";


const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      {/* <Logos /> */}
      <Container>
        {/* <Benefits /> */}

        <Section
          id="techstack"
          title="Our Tech Stack"
          // description="Simple, transparent pricing. No surprises."
          description="Powering innovation with a proven stack across web, apps, and AI."
        >
          <Pricing />
        </Section>

        {/* <Section
          id="testimonials"
          title="What Our Clients Say"
          description="Hear from those who have partnered with us."
        >
          <Testimonials />
        </Section> */}

        <FAQ />

        {/* <Stats /> */}
        
        <CTA />
        {/* <Section id="contactus" title="Contact Us">
          <CTA />
        </Section> */}

      </Container>
    </>
  );
};

export default HomePage;
