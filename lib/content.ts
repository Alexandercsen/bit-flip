export type TreeNode = {
  id: string;
  label: string;
  file: string;
  breadcrumb?: string[];
  children?: TreeNode[];
};

export type Subject = {
  id: string;
  name: string;
  file: string;
  description: string;
  level: string;
  topics: string[];
  codeTopics: string[];
};

export type Tutor = {
  id: string;
  name: string;
  file: string;
  className: string;
  role: string;
  subjects: string[];
  experience: string;
  approach: string;
  shortIntro: string;
  bio: string[];
  linkedin?: string;
  photo?: string;
  notes?: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type SectionMeta = {
  id: string;
  tab: string;
  breadcrumb: string[];
};

export const site = {
  name: "BIT FLIP STUDIO",
  legalName: "BIT FLIP STUDIO",
  tagline: "Flip the bit. Understand the code.",
  title: "BIT FLIP STUDIO | Python, Java, C & C++ Tutoring",
  description:
    "Online programming tutoring in Python, Java, C, C++, and Leaving Certificate Computer Science. First lesson free. Ireland.",
  email: "bitflipireland@gmail.com",
  location: "Online",
  availability: "Evenings and weekends. Ask us what's free.",
  firstLessonFree: true,
  firstLessonOffer: "First lesson free",
  country: "Ireland",
  cancellationPolicy:
    "Cancel or move a lesson at least one day before. If you miss it without that notice, you still pay for the hour.",
} as const;

export const projectTree: TreeNode[] = [
  { id: "home", label: "README.md", file: "README.md", breadcrumb: ["BIT-FLIP", "README.md"] },
  {
    id: "about",
    label: "about.md",
    file: "about.md",
    breadcrumb: ["BIT-FLIP", "about.md"],
  },
  {
    id: "subjects",
    label: "subjects",
    file: "subjects/",
    breadcrumb: ["BIT-FLIP", "subjects"],
    children: [
      {
        id: "subject-python",
        label: "python.py",
        file: "subjects/python.py",
        breadcrumb: ["BIT-FLIP", "subjects", "python.py"],
      },
      {
        id: "subject-java",
        label: "java.java",
        file: "subjects/java.java",
        breadcrumb: ["BIT-FLIP", "subjects", "java.java"],
      },
      {
        id: "subject-c",
        label: "c.c",
        file: "subjects/c.c",
        breadcrumb: ["BIT-FLIP", "subjects", "c.c"],
      },
      {
        id: "subject-cpp",
        label: "cpp.cpp",
        file: "subjects/cpp.cpp",
        breadcrumb: ["BIT-FLIP", "subjects", "cpp.cpp"],
      },
      {
        id: "subject-leaving-cert",
        label: "leaving-cert.md",
        file: "subjects/leaving-cert.md",
        breadcrumb: ["BIT-FLIP", "subjects", "leaving-cert.md"],
      },
    ],
  },
  {
    id: "tutors",
    label: "tutors",
    file: "tutors/",
    breadcrumb: ["BIT-FLIP", "tutors"],
    children: [
      {
        id: "tutor-01",
        label: "tutor-one.py",
        file: "tutors/tutor-one.py",
        breadcrumb: ["BIT-FLIP", "tutors", "tutor-one.py"],
      },
      {
        id: "tutor-02",
        label: "tutor-two.py",
        file: "tutors/tutor-two.py",
        breadcrumb: ["BIT-FLIP", "tutors", "tutor-two.py"],
      },
    ],
  },
  {
    id: "for-parents",
    label: "for-parents.md",
    file: "for-parents.md",
    breadcrumb: ["BIT-FLIP", "for-parents.md"],
  },
  {
    id: "how-it-works",
    label: "how-it-works.md",
    file: "how-it-works.md",
    breadcrumb: ["BIT-FLIP", "how-it-works.md"],
  },
  {
    id: "pricing",
    label: "pricing.md",
    file: "pricing.md",
    breadcrumb: ["BIT-FLIP", "pricing.md"],
  },
  { id: "faq", label: "faq.md", file: "faq.md", breadcrumb: ["BIT-FLIP", "faq.md"] },
  {
    id: "contact",
    label: "contact.md",
    file: "contact.md",
    breadcrumb: ["BIT-FLIP", "contact.md"],
  },
];

export const sectionOrder = [
  "home",
  "about",
  "subjects",
  "tutors",
  "for-parents",
  "how-it-works",
  "pricing",
  "faq",
  "contact",
] as const;

export function flattenTree(nodes: TreeNode[]): TreeNode[] {
  const result: TreeNode[] = [];
  for (const node of nodes) {
    result.push(node);
    if (node.children) result.push(...flattenTree(node.children));
  }
  return result;
}

export const allNodes = flattenTree(projectTree);

export function getNode(id: string): TreeNode | undefined {
  return allNodes.find((n) => n.id === id);
}

export function getSectionId(id: string): string {
  if (id === "home") return "home";
  if (id.startsWith("subject-")) return "subjects";
  if (id.startsWith("tutor-")) return "tutors";
  return id;
}

export const subjects: Subject[] = [
  {
    id: "python",
    name: "Python",
    file: "python.py",
    description:
      "Good first language. Readable syntax, useful for school projects and early problem-solving.",
    level: "Beginner → Advanced",
    topics: [
      "Programming fundamentals",
      "Variables and data types",
      "Loops and conditionals",
      "Functions",
      "Lists and dictionaries",
      "Object-oriented programming",
      "Debugging",
      "Problem solving",
      "Projects",
    ],
    codeTopics: [
      "fundamentals",
      "functions",
      "data structures",
      "OOP",
      "debugging",
      "problem solving",
    ],
  },
  {
    id: "java",
    name: "Java",
    file: "java.java",
    description:
      "Common in college courses. Classes, objects, and the habits that make larger programs hold together.",
    level: "Beginner → Advanced",
    topics: [
      "Java fundamentals",
      "Classes and objects",
      "Object-oriented programming",
      "Inheritance",
      "Interfaces",
      "Data structures",
      "Algorithms",
      "Debugging",
      "Exam preparation",
    ],
    codeTopics: [
      "classes and objects",
      "inheritance",
      "interfaces",
      "data structures",
      "algorithms",
      "exam preparation",
    ],
  },
  {
    id: "c",
    name: "C",
    file: "c.c",
    description:
      "Pointers, memory, and the basics of how programs talk to the machine. Useful for college modules and systems work.",
    level: "Beginner → Advanced",
    topics: [
      "C fundamentals",
      "Variables and types",
      "Pointers and arrays",
      "Memory and malloc",
      "Structs",
      "Functions",
      "File I/O",
      "Debugging",
      "Problem solving",
    ],
    codeTopics: [
      "pointers",
      "memory",
      "structs",
      "functions",
      "debugging",
      "problem solving",
    ],
  },
  {
    id: "cpp",
    name: "C++",
    file: "cpp.cpp",
    description:
      "Closer to how the machine works. Memory, references, and why a program crashed for a reason.",
    level: "Intermediate → Advanced",
    topics: [
      "C++ fundamentals",
      "Variables and memory",
      "Functions",
      "Classes and objects",
      "STL",
      "Data structures",
      "Algorithms",
      "Debugging",
      "Problem solving",
    ],
    codeTopics: [
      "memory",
      "classes",
      "STL",
      "data structures",
      "algorithms",
      "debugging",
    ],
  },
  {
    id: "leaving-cert",
    name: "Leaving Certificate",
    file: "leaving-cert.md",
    description:
      "Help with LC Computer Science topics, past papers, and the bits school didn't click for.",
    level: "Leaving Certificate",
    topics: [
      "Programming support",
      "Exam preparation",
      "Programming concepts",
      "Problem solving",
      "Past-paper practice",
      "Exam technique",
      "Coursework / project guidance",
    ],
    codeTopics: [
      "exam preparation",
      "past papers",
      "problem solving",
      "coursework",
      "exam technique",
    ],
  },
];

export type PricingPlan = {
  id: string;
  name: string;
  rate: string;
  accent: "blue" | "green" | "yellow" | "purple";
  features: string[];
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "one-to-one",
    name: "ONE-TO-ONE",
    rate: "€15 / hour",
    accent: "blue",
    features: [
      "Lesson built around what you're stuck on",
      "Exercises at your level",
      "Notes you can reuse after",
      "Follow-up questions by email",
    ],
  },
  {
    id: "exam-prep",
    name: "EXAM PREP",
    rate: "€20 / hour",
    accent: "yellow",
    features: [
      "Past papers",
      "Exam technique",
      "Topic revision",
      "Practice on the questions that trip you up",
    ],
  },
];

export const howItWorks = [
  {
    step: "01",
    title: "Message us",
    description:
      "Say what you're learning, roughly where you're at, and what's going wrong. A short note is fine.",
  },
  {
    step: "02",
    title: "Pick a time",
    description:
      "We'll suggest a slot. First lesson is free, so you can see if the fit works before paying.",
  },
  {
    step: "03",
    title: "Work through real problems",
    description:
      "Expect code on screen: exercises, bugs, past-paper questions, the homework that didn't make sense.",
  },
  {
    step: "04",
    title: "Leave able to try the next one alone",
    description:
      "If you still need us for every exercise, we haven't done the job. The point is independence.",
  },
];

export const tutors: Tutor[] = [
  {
    id: "tutor-01",
    name: "Alexander Coyle-Şentürk",
    file: "tutor-one.py",
    className: "Alexander",
    role: "Programming Tutor",
    subjects: ["Python", "Java", "C", "Leaving Certificate"],
    experience: "SWE + CS tutoring",
    approach: "practical",
    shortIntro:
      "Software engineer at a risk management and supplier information company (defense, finance, aerospace). Majoring in Software Engineering at Maynooth. Python, Java, C, LC Comp Sci.",
    bio: [
      "I'm Alexander, one of the tutors behind BIT FLIP STUDIO. I'm majoring in Software Engineering at Maynooth University. I work with C, Python, and Java.",
      "I now work as a software engineer at a risk management and supplier information company serving defense, finance, and aerospace.",
      "I've tutored Maynooth CS students on Java and Prolog, and helped 6th years prep for Leaving Certificate Computer Science.",
      "I care a lot about embedded systems and figuring out why something broke. In lessons I break problems into smaller pieces. I'll push you to reason through it, not wait for me to type the answer.",
    ],
    linkedin:
      "https://www.linkedin.com/in/alexander-coyle-%C5%9Fent%C3%BCrk-018a0b310/",
    photo: "/api/media/tutors/alexander-coyle.png",
  },
  {
    id: "tutor-02",
    name: "Loïc Peloille",
    file: "tutor-two.py",
    className: "Loic",
    role: "Programming Tutor",
    subjects: ["Python", "C++", "Leaving Certificate"],
    experience: "Programming tutoring",
    approach: "practical, patient",
    shortIntro:
      "Python and C++. Absolute beginners through OOP and recursion. Mixes theory with practice in the same session.",
    bio: [
      "Hi, I'm Loic. I'm experienced in writing both Python and C++, and I've taught absolute beginners who've never written a line of code before, to people working through harder topics like object oriented programming and recursion.",
      "I enjoy mixing theory and practice together instead of separating them out, so you're not just memorizing concepts but actually applying them as you learn. I'm adaptable to different learning styles and I'm a patient person, so there's no such thing as a stupid question. On top of teaching you how to code, I'll also teach you how to debug and research your own code, two skills that matter just as much as writing it in the first place.",
    ],
    linkedin: "https://www.linkedin.com/in/loic-peloille/",
    photo: "/api/media/tutors/loic-peloille.png",
  },
];

export const whyBitFlip = [
  {
    step: "01",
    title: "We explain the why",
    description:
      "A solution that only works on one homework question is useless next week. We care whether you understand the idea.",
  },
  {
    step: "02",
    title: "You write code in the lesson",
    description:
      "Watching someone else type isn't tutoring. You'll be in the editor, stuck sometimes, and we'll work through that.",
  },
  {
    step: "03",
    title: "Different students get different lessons",
    description:
      "First loop and Linked List revision are not the same session. We plan around where you actually are.",
  },
  {
    step: "04",
    title: "Ask the awkward questions",
    description:
      "If you're afraid of looking stupid, you'll stay stuck. Ask anything. We'll answer without the performance.",
  },
  {
    step: "05",
    title: "We write code for a living too",
    description:
      "We're not reading from a script. We debug for real, so we can show you how that looks in practice.",
  },
];

export const beliefs = [
  "Show why it works, not just what to type.",
  "Hard problems should get smaller, not scarier.",
  "Questions are part of the work.",
  "Mistakes are how you learn debugging.",
  "Leave more independent than you arrived.",
];

export const parentExpectations = [
  "Straight answers about how lessons are going",
  "Sessions matched to your child, not a fixed script",
  "Time spent on actual code and problems",
  "Patience when something doesn't click the first time",
  "Exam help when that's what's needed",
  "Clear pricing (€15 / €20 an hour, first lesson free)",
];

export const lessonActivities = [
  "Walking through a concept that didn't stick in class",
  "Working an exercise together",
  "Debugging broken code",
  "Past-paper questions",
  "Exam prep for a date that's coming up",
  "Homework or school project review",
  "Practising how to approach a new problem",
];

export const leavingCertSupport = [
  "Topics that still feel fuzzy",
  "Programming concepts from the course",
  "Past papers",
  "Exam technique",
  "Where marks get lost",
  "Coursework / project guidance (you do the work)",
];

export const parentFaqItems: FaqItem[] = [
  {
    question: "Do I need to attend the lessons?",
    answer:
      "No. You're welcome on the first one if you want to meet us. After that, email us anytime.",
  },
  {
    question: "How will I know how my child is progressing?",
    answer:
      "Ask and we'll tell you plainly. If you want a short note after each lesson, say so and we'll do that.",
  },
  {
    question: "Can lessons focus on schoolwork?",
    answer:
      "Yes. Bring the worksheet, the chapter, or the bug. That's often the best use of the hour.",
  },
  {
    question: "Can you help with exam preparation?",
    answer:
      "Yes. Past papers, weak topics, timing, the usual exam nerves stuff.",
  },
  {
    question: "What if my child is a complete beginner?",
    answer: "That's normal. We start at the start.",
  },
  {
    question: "What if my child is already quite advanced?",
    answer:
      "We can go into algorithms, tougher debugging, or a project they're stuck on. Say what they need.",
  },
  {
    question: "Can you help with a programming project?",
    answer:
      "We can help them understand and finish it themselves. We won't write assessed coursework for them.",
  },
  {
    question: "How do I arrange a lesson?",
    answer: `Email ${site.email} or use the contact form. We'll find a time.`,
  },
  {
    question: "What happens if we need to cancel?",
    answer: site.cancellationPolicy,
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "What do you teach?",
    answer:
      "Python, Java, C, C++, and Leaving Certificate Computer Science support.",
  },
  {
    question: "Do I need experience?",
    answer: "No. Beginners are fine. We'll meet you where you are.",
  },
  {
    question: "Online or in person?",
    answer: "Online for now. Screen share works well for code.",
  },
  {
    question: "How long is a lesson?",
    answer: "Usually 60 minutes. Ask if you want something different.",
  },
  {
    question: "Exam prep?",
    answer: "Yes. Papers, topics, technique.",
  },
  {
    question: "Can I bring one bug I'm stuck on?",
    answer:
      "Please do. We'll dig into it and talk about how you'd approach the next one.",
  },
  {
    question: "Beginners and advanced?",
    answer: "Both. Say what you're working on.",
  },
  {
    question: "How much?",
    answer:
      "First lesson free. Then €15/hour one-to-one, €20/hour exam prep. Sessions are usually an hour.",
  },
  {
    question: "Is the first lesson really free?",
    answer:
      "Yes. No card upfront. If it's not a fit, walk away.",
  },
  {
    question: "How do I book?",
    answer: `Form below, or email ${site.email}.`,
  },
  {
    question: "What if I miss a lesson?",
    answer: site.cancellationPolicy,
  },
];

export const subjectOptions = [
  "Python",
  "Java",
  "C",
  "C++",
  "Leaving Certificate",
  "Not sure yet",
];

export const levelOptions = [
  "Complete beginner",
  "Junior Cycle",
  "Leaving Certificate",
  "University / college",
  "Other",
];

export const lessonTypeOptions = ["One-to-one", "Exam prep"] as const;
