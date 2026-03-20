import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { WhatIHelp } from "@/components/WhatIHelp";
import { WhoIHelp } from "@/components/WhoIHelp";
import { Approach } from "@/components/Approach";
import { UseCases } from "@/components/UseCases";
import { RealExamples } from "@/components/RealExamples";
import { Story } from "@/components/Story";
import { ScheduleChat } from "@/components/ScheduleChat";
import { Connect } from "@/components/Connect";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <WhatIHelp />
        <WhoIHelp />
        <Approach />
        <UseCases />
        <RealExamples />
        <Story />
        <ScheduleChat />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
