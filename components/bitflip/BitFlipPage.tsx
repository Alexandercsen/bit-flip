"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  getNode,
  getSectionId,
  projectTree,
  sectionOrder,
} from "@/lib/content";
import { TopBar } from "./TopBar";
import { ProjectExplorer } from "./ProjectExplorer";
import { EditorTabs, Breadcrumbs, StatusBar } from "./EditorChrome";
import { Hero } from "./Hero";
import { About } from "./About";
import { Subjects } from "./Subjects";
import { Tutors } from "./Tutors";
import { ForParents } from "./ForParents";
import { HowItWorks } from "./HowItWorks";
import { FAQ } from "./FAQ";
import { Pricing } from "./Pricing";
import { Contact } from "./Contact";

const watchIds = [
  ...sectionOrder,
  "subject-python",
  "subject-java",
  "subject-cpp",
  "subject-leaving-cert",
  "tutor-01",
  "tutor-02",
];

export function BitFlipPage() {
  const [activeId, setActiveId] = useState("home");
  const [openTabIds, setOpenTabIds] = useState<string[]>(["home"]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState("");

  const activeNode = getNode(activeId) ?? getNode("home")!;
  const breadcrumb = activeNode.breadcrumb ?? ["BIT-FLIP", "README.md"];

  const tabs = useMemo(
    () =>
      openTabIds
        .map((id) => getNode(id))
        .filter(Boolean)
        .map((node) => ({
          id: node!.id,
          label: node!.label,
        })),
    [openTabIds]
  );

  const navigate = useCallback((id: string) => {
    const node = getNode(id);
    if (!node) return;

    setActiveId(id);
    setOpenTabIds((prev) => (prev.includes(id) ? prev : [...prev, id]));

    const sectionId = getSectionId(id);
    let target: HTMLElement | null = null;

    if (id.startsWith("subject-")) {
      target = document.getElementById(id);
    } else if (id.startsWith("tutor-")) {
      target = document.getElementById(id);
    } else {
      target = document.getElementById(sectionId);
    }

    target?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  }, []);

  const goToContact = useCallback(
    (subject?: string) => {
      if (subject) setContactSubject(subject);
      navigate("contact");
    },
    [navigate]
  );

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    watchIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
            setOpenTabIds((prev) =>
              prev.includes(id) ? prev : [...prev, id]
            );
          }
        },
        { rootMargin: "-15% 0px -65% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="flex h-dvh flex-col bg-jb-main text-jb-text">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-[5px] focus:bg-jb-surface focus:px-3 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>

      <TopBar
        onContact={() => goToContact()}
        onToggleMobileMenu={() => setMobileOpen((o) => !o)}
        mobileMenuOpen={mobileOpen}
      />

      <div className="flex min-h-0 flex-1">
        <ProjectExplorer
          tree={projectTree}
          activeId={activeId}
          onNavigate={navigate}
          className="hidden lg:flex"
        />

        {mobileOpen && (
          <ProjectExplorer
            id="mobile-explorer"
            tree={projectTree}
            activeId={activeId}
            onNavigate={navigate}
            className="fixed inset-x-0 top-11 z-40 max-h-[60dvh] border-b border-jb-border lg:hidden"
          />
        )}

        <div className="flex min-w-0 flex-1 flex-col bg-jb-editor">
          <EditorTabs tabs={tabs} activeId={activeId} onSelect={navigate} />
          <Breadcrumbs parts={breadcrumb} />

          <main className="min-h-0 flex-1 overflow-y-auto">
            <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
              <Hero
                onBookSession={() => goToContact()}
                onMeetTutors={() => navigate("tutor-01")}
              />
              <div className="mt-20">
                <About
                  onBookSession={() => goToContact()}
                  onContact={() => goToContact()}
                  onViewTutor={(id) => navigate(id)}
                />
              </div>
              <div className="mt-20">
                <Subjects
                  onBookSession={() => goToContact()}
                  onAskAbout={(subject) => goToContact(subject)}
                />
              </div>
              <div className="mt-20">
                <Tutors onBookSession={() => goToContact()} />
              </div>
              <div className="mt-20">
                <ForParents onContact={() => goToContact()} />
              </div>
              <div className="mt-20">
                <HowItWorks />
              </div>
              <div className="mt-20">
                <Pricing onBookSession={() => goToContact()} />
              </div>
              <div className="mt-20">
                <FAQ />
              </div>
              <div className="mt-20">
                <Contact prefillSubject={contactSubject} />
              </div>
            </div>
          </main>
        </div>
      </div>

      <StatusBar />
    </div>
  );
}
