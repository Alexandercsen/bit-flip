"use client";

import { useCallback, useState } from "react";
import { SiteNav } from "./SiteNav";
import { Hero } from "./Hero";
import { About } from "./About";
import { Subjects } from "./Subjects";
import { Tutors } from "./Tutors";
import { ForParents } from "./ForParents";
import { HowItWorks } from "./HowItWorks";
import { FAQ } from "./FAQ";
import { Pricing } from "./Pricing";
import { Contact } from "./Contact";
import { SiteFooter } from "./SiteFooter";

export function BitFlipPage() {
  const [contactSubject, setContactSubject] = useState("");

  const navigate = useCallback((id: string) => {
    const target = document.getElementById(id);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const goToContact = useCallback(
    (subject?: string) => {
      if (subject) setContactSubject(subject);
      navigate("contact");
    },
    [navigate]
  );

  return (
    <div className="min-h-dvh bg-jb-bg text-jb-text">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-jb-surface focus:px-3 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>

      <SiteNav
        onNavigate={navigate}
        onBook={() => goToContact()}
      />

      <main>
        <Hero
          onBookSession={() => goToContact()}
          onMeetTutors={() => navigate("tutors")}
        />
        <About
          onBookSession={() => goToContact()}
          onContact={() => goToContact()}
          onViewTutor={(id) => navigate(id)}
        />
        <Subjects
          onBookSession={() => goToContact()}
          onAskAbout={(subject) => goToContact(subject)}
        />
        <Tutors onBookSession={() => goToContact()} />
        <ForParents onContact={() => goToContact()} />
        <HowItWorks />
        <Pricing onBookSession={() => goToContact()} />
        <FAQ />
        <Contact prefillSubject={contactSubject} />
      </main>

      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <SiteFooter />
      </div>
    </div>
  );
}
