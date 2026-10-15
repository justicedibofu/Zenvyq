export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export const SITE_CONFIG = {
  name: "ZENVYQ Tech Ltd",
  shortName: "ZENVYQ",
  tagline: "Technology to power business growth.",
  headline: {
    line1: "TECHNOLOGY TO",
    line2: "POWER BUSINESS",
    line3: "GROWTH",
  },
  microLabels: {
    topRight: "AI & AUTOMATION / WHATSAPP CHATBOTS",
    left: "WEB & MOBILE / SOFTWARE ENGINEERING",
    rightVertical: "BUSINESS REGISTRATION · NIGERIA",
  },
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
    whatsappLink: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
      ? `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER.replace(/\+/g, "").trim()}?text=Hi%20ZENVYQ%2C%20I%27d%20like%20to%20discuss%20a%20project`
      : null,
    location: "Remote · Nigeria",
  },
};

export const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "Who We Are", href: "#about" },
  { label: "What We Build", href: "#services" },
  { label: "How We Work", href: "#process" },
  { label: "Why ZENVYQ", href: "#why-us" },
  { label: "Connect", href: "#contact" },
];

export const WHO_WE_ARE = {
  label: "WHO WE ARE",
  statementLead: "DEDICATED",
  statementRest: "TO BUILDING DIGITAL SYSTEMS THAT HELP AFRICAN BUSINESSES RUN SMARTER AND GROW FASTER.",
  cards: [
    {
      id: "automation",
      category: "AUTOMATION",
      title: "Workflow Automation",
      description: "We connect your forms, spreadsheets, and everyday tools so you spend less time copying and pasting.",
      icon: "SettingConfig",
    },
    {
      id: "intelligence",
      category: "PRACTICAL AI",
      title: "AI That Actually Helps",
      description: "We set up AI tools that handle repetitive tasks—like organizing customer requests and drafting routine replies.",
      icon: "Brain",
    },
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: "ai-automation",
    number: "01",
    title: "AI & Automation",
    description: "We connect your everyday tools and set up automated workflows so your team can focus on what matters.",
    tags: ["Workflow automation", "Task automation", "App integrations"],
    icon: "Robot",
  },
  {
    id: "chatbots",
    number: "02",
    title: "Chatbots (WhatsApp)",
    description: "Chatbots that answer customer questions, share product details, and take bookings on WhatsApp.",
    tags: ["WhatsApp bots", "Customer support", "Booking flows"],
    icon: "MessageOne",
  },
  {
    id: "web-apps",
    number: "03",
    title: "Websites & Web Apps",
    description: "Clean, fast websites and web apps that look good on phones and load quickly on any network.",
    tags: ["Websites", "Web apps", "Client portals"],
    icon: "Browser",
  },
  {
    id: "mobile-apps",
    number: "04",
    title: "Mobile Apps (Android & iOS)",
    description: "Practical mobile apps for Android and iOS, built to work smoothly on everyday phones.",
    tags: ["Android", "iOS", "Mobile apps"],
    icon: "PhoneTelephone",
  },
  {
    id: "business-registration",
    number: "05",
    title: "Business Registration (Nigeria)",
    description: "CAC business name and company registration, handled from start to finish.",
    tags: ["CAC registration", "Business name", "Company registration"],
    icon: "Certificate",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "We talk through what you need, who your customers are, and what to build first.",
    icon: "Search",
  },
  {
    number: "02",
    title: "Design",
    description: "We sketch out the screens and flows so you can see how everything works before we build.",
    icon: "GraphicDesign",
  },
  {
    number: "03",
    title: "Build",
    description: "We write clean code and share progress updates regularly so you can test as we go.",
    icon: "Code",
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "We help you go live, train your team, and stick around to fix issues.",
    icon: "Rocket",
  },
];

export const WHY_ZENVYQ = {
  headlineLead: "BUILDING TECH THAT",
  headlineHighlight: "WORKS",
  headlineEnd: "IN REAL LIFE",
  tiles: [
    {
      id: "whatsapp",
      title: "BUILT FOR HOW YOU ACTUALLY SELL",
      body: "Your customers are on WhatsApp and on their phones. So that's where we start, not where we end up.",
      icon: "PhoneTelephone",
      theme: "light" as const,
    },
    {
      id: "remote",
      title: "REMOTE TEAM. NIGERIAN ROOTS.",
      body: "No office, no overhead. We work from across Nigeria and build for businesses anywhere.",
      icon: "Earth",
      theme: "dark" as const,
    },
    {
      id: "direct",
      title: "TALK TO THE PEOPLE BUILDING IT",
      body: "No middlemen. You message us directly and get straight answers.",
      icon: "Message",
      theme: "light" as const,
    },
    {
      id: "all-in-one",
      title: "FROM REGISTRATION TO LAUNCH",
      body: "Need your business registered and your website built? One team handles both, so you're not chasing different vendors.",
      icon: "Certificate",
      theme: "light" as const,
    },
  ],
};
