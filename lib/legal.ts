import { site } from "@/lib/content";

export const privacyPolicy = {
  title: "Privacy Policy",
  lastUpdated: "9 August 2026",
  sections: [
    {
      heading: "Who operates this website",
      body: [
        `${site.legalName} ("we", "us") operates this website and provides online programming tutoring.`,
        `Contact: ${site.email}`,
        `Country: ${site.country}`,
      ],
    },
    {
      heading: "What personal data we collect",
      body: [
        "When you use the contact form or email us, we may receive your name, email address, student level, subject of interest, lesson type (one-to-one or exam prep), message content, and availability notes.",
        "Our hosting provider may process technical data such as IP address, browser type, and request logs needed to deliver the site securely.",
        "If you set a cookie preference, we store that choice in your browser (local storage).",
      ],
    },
    {
      heading: "Why we collect it",
      body: [
        "To reply to enquiries and arrange tutoring sessions.",
        "To provide the service you asked for (scheduling, lesson arrangements, follow-up questions).",
        "To keep the website running and secure.",
        "To remember your cookie preferences.",
      ],
    },
    {
      heading: "Legal bases (GDPR)",
      body: [
        "Contract / steps prior to contract: when you ask us to arrange lessons or discuss tutoring.",
        "Legitimate interests: running and securing the website, answering general questions about our services.",
        "Consent: where we use non-essential cookies or similar technologies (we do not currently load third-party analytics).",
        "Legal obligation: where we must keep records for tax or other legal reasons.",
      ],
    },
    {
      heading: "How long we keep data",
      body: [
        "Contact form and email enquiries: kept while we need them to handle your request and any related tutoring, then deleted when they are no longer required.",
        "Cookie preference storage: until you clear site data or change your choice.",
        "Billing or lesson records (if any): kept for as long as Irish tax and accounting rules require.",
      ],
    },
    {
      heading: "Who receives the data",
      body: [
        "The tutors operating BIT FLIP, so we can reply and teach.",
        "Email delivery providers used to send and receive messages (for example Gmail / SMTP).",
        "Hosting providers that store and serve this website.",
        "We do not sell your personal data.",
      ],
    },
    {
      heading: "International transfers",
      body: [
        "Some providers (email, hosting) may process data outside the EEA. Where that happens, we rely on the safeguards those providers offer (such as standard contractual clauses) when required.",
      ],
    },
    {
      heading: "Your rights",
      body: [
        "Under the GDPR you may have the right to access, rectify, erase, restrict, or object to certain processing, and to data portability, depending on the situation.",
        "Where processing is based on consent, you can withdraw consent at any time (this does not affect processing already carried out).",
        `To exercise these rights, email ${site.email}.`,
      ],
    },
    {
      heading: "Complaints",
      body: [
        "If you are unhappy with how we handle your data, you can contact us first.",
        "You also have the right to lodge a complaint with the Data Protection Commission (Ireland): https://www.dataprotection.ie/",
      ],
    },
    {
      heading: "Automated decision-making",
      body: [
        "We do not use automated decision-making or profiling that produces legal or similarly significant effects about you.",
      ],
    },
    {
      heading: "Children",
      body: [
        "We tutor school-age students. Parents or guardians usually arrange lessons. If you believe we hold a child's data inappropriately, contact us and we will address it.",
      ],
    },
    {
      heading: "Changes",
      body: [
        "We may update this policy when our practices or the law change. The date at the top will change when we do.",
      ],
    },
  ],
};

export const cookiePolicy = {
  title: "Cookie Policy",
  lastUpdated: "9 August 2026",
  sections: [
    {
      heading: "What this covers",
      body: [
        "This page explains how BIT FLIP uses cookies and similar technologies (including browser local storage) on this website.",
      ],
    },
    {
      heading: "What we use today",
      body: [
        "Essential: technologies needed to run the site (for example delivering pages securely). We do not use these for advertising.",
        "Preference storage: when you respond to the cookie banner, we store your choice in local storage so we can respect it.",
        "Non-essential analytics: we do not currently load third-party analytics or advertising cookies. If that changes, we will update this policy and ask for consent before enabling them.",
      ],
    },
    {
      heading: "Your choices",
      body: [
        "You can Accept all, Reject non-essential, or Manage choices in the cookie banner.",
        "Refusing non-essential cookies is as easy as accepting them.",
        "To change your mind later, clear this site's data in your browser, or use the cookie controls again if we show them. You can also email us.",
        "Most browsers let you block or delete cookies in their settings. Blocking all cookies may affect how some sites work.",
      ],
    },
    {
      heading: "More detail",
      body: [
        `For how we handle personal data generally, see the Privacy Policy. Questions: ${site.email}`,
      ],
    },
  ],
};

export const termsAndConditions = {
  title: "Terms & Conditions",
  lastUpdated: "9 August 2026",
  sections: [
    {
      heading: "About these terms",
      body: [
        `These terms cover use of the BIT FLIP website and tutoring arranged through ${site.email} or the contact form.`,
        `Operator: ${site.legalName}. Contact: ${site.email}. ${site.country}.`,
      ],
    },
    {
      heading: "What we offer",
      body: [
        "Online one-to-one programming tutoring (Python, Java, C++, Leaving Certificate Computer Science support) at the rates shown on the site, unless we agree otherwise in writing.",
        "The first lesson is free. After that, fees apply as stated (currently €15/hour one-to-one, €20/hour exam prep) unless we confirm a different arrangement.",
      ],
    },
    {
      heading: "Booking and cancellation",
      body: [
        "Sessions are arranged by email or form. A booking is confirmed when we reply with a time.",
        site.cancellationPolicy,
      ],
    },
    {
      heading: "Student work and academic honesty",
      body: [
        "We help students understand and write their own code. We will not complete assessed coursework or exams on a student's behalf.",
        "Students remain responsible for following their school or college rules on academic integrity.",
      ],
    },
    {
      heading: "Payments",
      body: [
        "Payment details are agreed when you book ongoing lessons after the free first session.",
      ],
    },
    {
      heading: "Website content",
      body: [
        "Site content is for information. We try to keep it accurate but it may change (including prices and availability).",
        "You may not scrape, copy, or reuse the site in a way that misrepresents BIT FLIP or harms the service.",
      ],
    },
    {
      heading: "Liability",
      body: [
        "Tutoring is educational support. We do not guarantee exam grades or course outcomes.",
        "To the extent permitted by Irish and EU law, we are not liable for indirect losses arising from use of the site or tutoring. Nothing in these terms limits liability that cannot be limited by law (including for death or personal injury caused by negligence, or fraud).",
      ],
    },
    {
      heading: "Governing law",
      body: [
        "These terms are governed by the laws of Ireland. Courts in Ireland have jurisdiction, without prejudice to mandatory consumer protections that apply where you live in the EU.",
      ],
    },
    {
      heading: "Contact",
      body: [
        `Questions about these terms: ${site.email}`,
      ],
    },
  ],
};
