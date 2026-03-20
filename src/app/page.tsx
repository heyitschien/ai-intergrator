import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { WhatIHelp } from "@/components/WhatIHelp";
import { WhoIHelp } from "@/components/WhoIHelp";
import { Approach } from "@/components/Approach";
import { UseCases } from "@/components/UseCases";
import { Story } from "@/components/Story";
import { ScheduleChat } from "@/components/ScheduleChat";
import { Connect } from "@/components/Connect";
import { Footer } from "@/components/Footer";
import { MobileStickyCta } from "@/components/MobileStickyCta";

export default function Home() {
  return (
    <>
      <Nav />
      <main
        id="top"
        tabIndex={-1}
        className="pb-[calc(5.75rem+env(safe-area-inset-bottom))] lg:pb-0 outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
      >
        <Hero />
        <WhatIHelp />
        <WhoIHelp />
        <Approach />
        <UseCases />
        <Story />
        <ScheduleChat />
        <Connect />
      </main>
      <MobileStickyCta />
      <Footer />
    </>
  );
}
