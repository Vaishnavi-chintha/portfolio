// ---------------------------------------------------------------------------
// All portfolio content lives here. Edit this file to update copy, links,
// and data — the components below just render it.
//
// Links marked `undefined` are intentionally left as placeholders (no URL
// was provided). Replace them with real URLs once you have them; the UI
// will automatically switch from a "coming soon" label to a live link.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Sri Sai Vaishnavi Chintha",
  role: "Frontend Engineer & AI/ML Researcher",
  location: "Dubai, United Arab Emirates",
  email: "vaishnavichintha2812@gmail.com",
  github: "https://github.com/Vaishnavi-chintha",
  linkedin: "https://www.linkedin.com/in/sri-sai-vaishnavi-chintha/",
  workAuth: "UAE Golden Visa holder - authorised to work in the UAE",
};

export const education = {
  school: "Heriot-Watt University, Dubai",
  degree: "BSc (Hons) Computer Science and Artificial Intelligence",
  dates: "Sept 2023 - May 2026",
  honours: "First Class Honours",
  gpa: "4.0 GPA",
};

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------

export type ExperienceEntry = {
  company: string;
  role: string;
  dates: string;
  location: string;
  bullets: string[];
  stack: string[];
  pipeline: string[];
};

export const experience: ExperienceEntry = {
  company: "ZEEK",
  role: "Frontend Development Intern",
  dates: "Aug 2025 — Sept 2025",
  location: "Dubai, UAE",
  bullets: [
    "Redesigned and implemented ZEEK\u2019s desktop web interface in React, translating updated Figma designs into responsive, production-ready UI.",
    "Built reusable React components to improve UI consistency and reduce duplication across the interface.",
    "Worked closely with Figma designs and existing frontend code to maintain visual consistency across layouts, components, and interaction states.",
    "Improved the responsiveness, structure, and maintainability of the frontend while implementing the new visual design.",
  ],
  stack: ["React", "Figma", "Reusable Components", "Responsive UI"],
  pipeline: [
    "Figma",
    "React",
    "Reusable Components",
    "Responsive UI",
    "Maintainable Frontend",
  ],
};

// ---------------------------------------------------------------------------
// Research
// ---------------------------------------------------------------------------

export const research = {
  title:
    "Hybrid LLM-Guided Multi-Agent Planning for Personalised Learning Interventions",
  authors: "Sri Sai Vaishnavi Chintha and Talal Shaikh",
  venue:
    "Proceedings of the 6th Conference on Advanced Artificial Intelligence and Education (CAAIE 2026)",
  status: "Accepted for publication · In Press",
  note: "Derived from my undergraduate honours dissertation.",
  summary:
    "Models personalised academic intervention as a tightly coupled multi-agent planning problem, spanning roles such as a diagnostic AI, curriculum planner, academic advisor, tutors, an assessment system, and instructors. A hybrid pipeline uses large language models to decompose and translate the intervention goal, then hands the resulting subproblems to a classical planner to solve.",
  paperUrl: undefined as string | undefined, // TODO: add the paper link once available
  pipeline: [
    {
      label: "Goal",
    },
    {
      label: "LLM Decomposition",
    },
    {
      label: "LLM Translation",
    },
    {
      label: "Planner",
    },
    { label: "Execute" },
    {
      label: "Updated State",
    },
    { label: "Goal Satisfied" },
  ],
  model: "Locally served LLaMA 3.1 8B via Ollama",
  metrics: {
    hybridStates: 58,
    monolithicStates: 785057,
    reductionLabel: "99.99%",
    reductionSub: "fewer states expanded",
    hybridCost: 32,
    monolithicCost: 30,
    overheadSeconds: 146.7,
  },
  caveat:
    "Search effort on the evaluated planning instance, not an end-to-end runtime improvement — LLM decomposition and translation added 146.7s of overhead, and the hybrid plan cost 32 actions versus an optimal 30.",
};

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

export type Project = {
  id: string;
  title: string;
  category: string;
  size: "large" | "medium" | "small";
  description: string;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
  detail?: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    id: "google-maps-ratings",
    title: "Google Maps Review Rating Prediction",
    category: "NLP / Machine Learning",
    size: "large",
    description:
      "A text classification system trained on roughly 288K Google Maps reviews to predict 1\u20135 star ratings from review text, comparing classical, deep learning, and transformer approaches under the same evaluation setup.",
    tags: ["Python", "Scikit-learn", "RoBERTa", "BiLSTM"],
    detail: [
      {
        label: "Problem",
        value: "Predict a 1\u20135 star rating from review text.",
      },
      { label: "Dataset", value: "~288K Google Maps reviews." },
      { label: "Models", value: "Logistic Regression, SVM, BiLSTM, RoBERTa." },
      {
        label: "Evaluation",
        value:
          "Hyperparameter tuning with cross-validation, optimised for macro F1.",
      },
      {
        label: "Result",
        value:
          "RoBERTa reached ~0.62 macro F1, ahead of the classical and LSTM models.",
      },
    ],
    repoUrl:
      "https://github.com/Vaishnavi-chintha/Google_Maps_Rating_Prediction",
  },
  {
    id: "watthome",
    title: "WattHome",
    category: "React Native / TypeScript / Smart Home",
    size: "large",
    description:
      "A smart home energy management app built with a team, letting users monitor and control electricity usage in a simulated environment. Includes a chatbot assistant for querying usage and settings.",
    tags: ["React Native", "TypeScript", "Expo", "Chatbot Integration"],
    detail: [
      { label: "Platform", value: "React Native + Expo" },
      { label: "Language", value: "TypeScript" },
      {
        label: "Assistant",
        value: "Chatbot integration using the Google Flash API",
      },
      { label: "Role", value: "Collaborated as part of a team build" },
    ],
    repoUrl: "https://github.com/Vaishnavi-chintha/Watt_Home",
  },
  {
    id: "tic-tac-toe-agents",
    title: "Tic Tac Toe Agents",
    category: "Reinforcement Learning / MDP",
    size: "small",
    description:
      "Intelligent Tic Tac Toe agents implemented in Java, learning strategy through Markov Decision Processes and evaluated against rule-based opponents.",
    tags: ["Java", "Q-Learning", "Value Iteration", "Policy Iteration"],
    repoUrl: "https://github.com/Vaishnavi-chintha/TicTacToe",
  },
  {
    id: "autonomous-planning",
    title: "Autonomous Planning System",
    category: "AI Planning / PDDL",
    size: "small",
    description:
      "PDDL planning domains modelling multi-agent tasks — including underwater inspections and wind farm maintenance — with actions, constraints, and goals defined for automated plan generation.",
    tags: ["PDDL", "Automated Planning", "Multi-Agent"],
    repoUrl: "https://github.com/Vaishnavi-chintha/Automated_Planning",
  },
  {
    id: "employee-experience",
    title: "Employee Experience & Workplace Analysis",
    category: "Data Analysis",
    size: "small",
    description:
      "Analysis of employee review data to identify drivers of workplace satisfaction, covering data cleaning, exploratory analysis, visualisation, and sentiment-related pattern identification.",
    tags: ["Data Cleaning", "EDA", "Visualisation"],
    repoUrl: "https://github.com/Vaishnavi-chintha/F20AA",
  },
  {
    id: "Mastermind-Game",
    title: "Rasberry Pi Mastermind Game",
    category: "Game Development",
    size: "small",
    description:
      "A implementation of Mastermind game developed using both C and ARM Assembler, on a Raspberry Pi.",
    tags: ["C", "ARM Assembler", "Raspberry Pi"],
    repoUrl: "https://github.com/Vaishnavi-chintha/Mastermind_RaspberryPi",
  },
];

// ---------------------------------------------------------------------------
// Tech stack
// ---------------------------------------------------------------------------

export const skillGroups: { title: string; skills: string[] }[] = [
  {
    title: "Languages",
    skills: [
      "Python",
      "Java",
      "C",
      "JavaScript",
      "TypeScript",
      "PDDL",
      "OCaml",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "React Native",
      "Typescript",
      "JavaScript",
      "Node.js",
      "Expo",
    ],
  },
  {
    title: "AI / ML & Data",
    skills: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Data Analysis",
      "Model Evaluation",
      "NLP ",
      " Reinforcement Learning",
    ],
  },
  {
    title: "Development",
    skills: ["Git", "UI/UX Design", "Figma", "LaTeX", "Scrum / Agile"],
  },
  {
    title: "AI Planning",
    skills: ["PDDL", "Automated Planning", "Multi-Agent Systems"],
  },
];

// ---------------------------------------------------------------------------
// Achievements
// ---------------------------------------------------------------------------

export const achievements: { title: string; org: string; date: string }[] = [
  {
    title: "Deputy Principal's Award for Academic Excellence",
    org: "Heriot-Watt University Dubai",
    date: "May 2026",
  },
  {
    title: "Deputy Principal's Award for Academic Excellence",
    org: "Heriot-Watt University Dubai",
    date: "May 2025",
  },
  {
    title: "Agentic AI ML Masterclass",
    org: "IIT Hyderabad",
    date: "June 2025",
  },
  {
    title: "CS50P: Introduction to Programming with Python",
    org: "Harvard",
    date: "May 2025",
  },
  {
    title: "Watt-Bud Peer Mentorship Programme",
    org: "Heriot-Watt University Dubai",
    date: "2024 \u2013 2025",
  },
  {
    title: "Microsoft Learn Student Ambassadors Workshop",
    org: "Heriot-Watt University Dubai",
    date: "2024",
  },
  {
    title: "HWU Tech Club Capture The Flag Competition",
    org: "9th place",
    date: "2024",
  },
  {
    title: "CS50x: Introduction to Computer Science",
    org: "Harvard",
    date: "August 2023",
  },
];
