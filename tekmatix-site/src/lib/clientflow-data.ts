export interface Plan {
  id: "solo-starter" | "growth" | "scale" | "ultimate";
  name: string;
  tagline: string;
  badge?: string;
  badgeColor?: "red" | "blue" | "dark";
  strikePrice?: number;
  audMonthly: number;
  usdMonthly: number;
  audAnnualMonthly: number;
  usdAnnualMonthly: number;
  audSavingsYear: number;
  usdSavingsYear: number;
  popular?: boolean;
  isDarkCard?: boolean;
  bestFor?: string;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
  ctaAction: string;
  trialText: string;
  introductoryNote?: string;
  annualBonus?: string;
}

export interface FeatureCategory {
  title: string;
  count: number;
  features: {
    name: string;
    subNote?: string;
    soloStarter: string | boolean;
    growth: string | boolean;
    scale: string | boolean;
    ultimate: string | boolean;
    isDifference?: boolean;
  }[];
}

export interface CustomerReview {
  id: string;
  author: string;
  date: string;
  rating: number;
  content: string;
  verified: boolean;
  initials: string;
}

export interface ReplaceableTool {
  name: string;
  category: string;
  typicalMonthlyCost: number;
  iconName: string;
  emoji?: string;
  description?: string;
  replaces?: string;
}

export const PRICING_PLANS: Plan[] = [
  {
    id: "solo-starter",
    name: "Solo Starter",
    tagline:
      "For solo entrepreneurs, freelancers and micro-businesses getting started with client management, bookings and social media planning.",
    badge: "LIMITED TIME OFFER",
    badgeColor: "red",
    strikePrice: 29,
    audMonthly: 5,
    usdMonthly: 4,
    audAnnualMonthly: 4.5,
    usdAnnualMonthly: 3.5,
    audSavingsYear: 288,
    usdSavingsYear: 190,
    introductoryNote: "Introductory launch price for early users. Standard price A$29/month.",
    features: [
      "Social Media & Campaign Planner: Manage posts and campaigns across multiple platforms from one place",
      "Built-in CRM & contact management",
      "Single user included",
      "Free web hosting included",
      "Email templates",
      "Appointment booking calendar",
      "One onboarding demo included",
    ],
    ctaText: "Buy Now",
    ctaAction: "buy",
    trialText: "Instant access • Cancel anytime",
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "For small businesses starting with CRM, leads, follow-ups and bookings.",
    audMonthly: 47,
    usdMonthly: 32,
    audAnnualMonthly: 42,
    usdAnnualMonthly: 28,
    audSavingsYear: 60,
    usdSavingsYear: 48,
    features: [
      "Social Media & Campaign Planner: Manage posts and campaigns across multiple platforms from one place",
      "Built-in CRM & contact management",
      "Up to 10 users included",
      "Lead capture forms",
      "Website & funnel templates",
      "Free web hosting included",
      "Email & SMS templates",
      "Appointment booking calendar",
      "Basic automation workflows",
      "Basic reporting dashboard",
      "Email, online & onboarding phone support",
      "Onboarding demo included",
    ],
    ctaText: "Get Started Free",
    ctaAction: "trial",
    trialText: "14-day free trial • No card required",
  },
  {
    id: "scale",
    name: "Scale",
    tagline: "For growing businesses that need automation, campaigns and team visibility.",
    badge: "MOST POPULAR",
    badgeColor: "blue",
    popular: true,
    isDarkCard: true,
    audMonthly: 97,
    usdMonthly: 65,
    audAnnualMonthly: 88,
    usdAnnualMonthly: 59,
    audSavingsYear: 108,
    usdSavingsYear: 72,
    features: [
      "Everything in Growth, plus...",
      "Up to 100 users included",
      "Advanced sales pipelines",
      "Workflows & triggers",
      "Email and SMS campaigns",
      "WhatsApp follow-up workflow support",
      "Social media planner",
      "Review request automation",
      "AI assistant / chat widget setup",
      "Monthly performance report",
      "Priority online support",
      "Onboarding demo included",
    ],
    ctaText: "Buy Now",
    ctaAction: "buy",
    trialText: "Fast onboarding & 24/7 dedicated support",
  },
  {
    id: "ultimate",
    name: "Ultimate",
    tagline:
      "For larger teams that need full CRM setup, advanced automation, reporting and website/funnel support.",
    audMonthly: 199,
    usdMonthly: 135,
    audAnnualMonthly: 179,
    usdAnnualMonthly: 120,
    audSavingsYear: 240,
    usdSavingsYear: 180,
    features: [
      "Everything in Scale, plus...",
      "Unlimited users",
      "Full CRM setup support",
      "Advanced automation workflows",
      "Advanced AI chatbot support",
      "Website and funnel integration",
      "Advanced reporting dashboard",
      "Team pipeline management",
      "Campaign planning support",
      "Email, online & onboarding phone support",
    ],
    annualBonus:
      "Get a Free professional website build valued at A$ 999 when you choose annual billing.",
    ctaText: "Buy Now",
    ctaAction: "buy",
    trialText: "Includes VIP onboarding + phone support",
  },
];

export const TOOL_REPLACEMENTS: ReplaceableTool[] = [
  {
    name: "ActiveCampaign / Mailchimp",
    category: "Email Marketing & Automation",
    description: "Email Marketing & Automation",
    replaces: "Email Marketing, Broadcasts",
    typicalMonthlyCost: 200,
    iconName: "Mail",
    emoji: "📧",
  },
  {
    name: "ClickFunnels / Leadpages",
    category: "Website & Funnel Builder",
    description: "Website & Funnel Builder",
    replaces: "Funnels, Websites, Hosting",
    typicalMonthlyCost: 220,
    iconName: "Layout",
    emoji: "🌐",
  },
  {
    name: "Calendly / Acuity Scheduling",
    category: "Appointment Booking",
    description: "Appointment Booking",
    replaces: "Calendar & Booking System",
    typicalMonthlyCost: 45,
    iconName: "Calendar",
    emoji: "📅",
  },
  {
    name: "HubSpot / Salesforce Essentials",
    category: "CRM & Pipeline Management",
    description: "CRM & Pipeline Management",
    replaces: "Contacts, Pipeline, CRM",
    typicalMonthlyCost: 150,
    iconName: "Users",
    emoji: "📊",
  },
  {
    name: "Kajabi / Teachable",
    category: "Courses & Membership Platform",
    description: "Courses & Membership Platform",
    replaces: "Courses, Certificates, Client Portal",
    typicalMonthlyCost: 250,
    iconName: "GraduationCap",
    emoji: "🎓",
  },
  {
    name: "Circle.so / Skool",
    category: "Community & Group Platform",
    description: "Community & Group Platform",
    replaces: "Communities",
    typicalMonthlyCost: 130,
    iconName: "MessageSquare",
    emoji: "👥",
  },
  {
    name: "DocuSign / PandaDoc",
    category: "Contracts & e-Signatures",
    description: "Contracts & e-Signatures",
    replaces: "Documents & Contracts",
    typicalMonthlyCost: 65,
    iconName: "FileCheck",
    emoji: "✍️",
  },
  {
    name: "Zapier Pro",
    category: "Automations & Integrations",
    description: "Automations & Integrations",
    replaces: "Workflows, Automations, Triggers",
    typicalMonthlyCost: 75,
    iconName: "Zap",
    emoji: "⚡",
  },
  {
    name: "Twilio / CallRail",
    category: "SMS, Phone & Call Tracking",
    description: "SMS, Phone & Call Tracking",
    replaces: "Phone Core, SMS, Missed Call Text-Back",
    typicalMonthlyCost: 55,
    iconName: "Phone",
    emoji: "📱",
  },
  {
    name: "ManyChat",
    category: "Social Media Bots & DM Automation",
    description: "Social Media Bots & DM Automation",
    replaces: "Conversation AI, Web Chat Widget",
    typicalMonthlyCost: 65,
    iconName: "Bot",
    emoji: "🤖",
  },
  {
    name: "Podium / Birdeye",
    category: "Reviews & Reputation Management",
    description: "Reviews & Reputation Management",
    replaces: "Reputation Management, Reviews AI",
    typicalMonthlyCost: 100,
    iconName: "Star",
    emoji: "🌟",
  },
  {
    name: "Hootsuite / Buffer",
    category: "Social Media Planner & Scheduler",
    description: "Social Media Planner & Scheduler",
    replaces: "Social Media & Campaign Planner",
    typicalMonthlyCost: 90,
    iconName: "Share",
    emoji: "📣",
  },
  {
    name: "Google Analytics (Premium)",
    category: "Advanced Analytics & Reporting",
    description: "Advanced Analytics & Reporting",
    replaces: "Dashboard, Attribution Reporting",
    typicalMonthlyCost: 50,
    iconName: "BarChart",
    emoji: "📊",
  },
  {
    name: "Typeform / Jotform",
    category: "Forms, Surveys & Quizzes",
    description: "Forms, Surveys & Quizzes",
    replaces: "Form Builder, Survey Builder, Quizzes",
    typicalMonthlyCost: 50,
    iconName: "FileText",
    emoji: "🖊️",
  },
];

export interface CfPlanOption {
  id: string;
  name: string;
  price: number;
  popular?: boolean;
}

export const CF_PLAN_OPTIONS: CfPlanOption[] = [
  { id: "solo-starter", name: "Solo Starter", price: 5 },
  { id: "growth", name: "Growth ⭐", price: 47, popular: true },
  { id: "scale", name: "Scale", price: 97 },
  { id: "ultimate", name: "Ultimate", price: 199 },
];

export const FEATURE_CATEGORIES: FeatureCategory[] = [
  {
    title: "Users, CRM & Contact Management",
    count: 7,
    features: [
      {
        name: "Included users",
        soloStarter: "1 user",
        growth: "Up to 10 users",
        scale: "Up to 100 users",
        ultimate: "Unlimited users",
        isDifference: true,
      },
      {
        name: "Built-in CRM & contact management",
        soloStarter: true,
        growth: true,
        scale: true,
        ultimate: true,
      },
      {
        name: "Advanced sales pipelines",
        soloStarter: false,
        growth: "Basic",
        scale: true,
        ultimate: true,
        isDifference: true,
      },
      {
        name: "Team pipeline management",
        soloStarter: false,
        growth: false,
        scale: true,
        ultimate: true,
        isDifference: true,
      },
      {
        name: "Appointment booking calendar",
        soloStarter: true,
        growth: true,
        scale: true,
        ultimate: true,
      },
      {
        name: "Lead capture forms",
        soloStarter: "Standard",
        growth: true,
        scale: true,
        ultimate: true,
      },
      {
        name: "Onboarding demo",
        soloStarter: "1 demo",
        growth: "Included",
        scale: "Included",
        ultimate: "VIP Onboarding",
      },
    ],
  },
  {
    title: "Social Media & Marketing Campaigns",
    count: 6,
    features: [
      {
        name: "Social Media & Campaign Planner (multi-platform)",
        soloStarter: true,
        growth: true,
        scale: true,
        ultimate: true,
      },
      {
        name: "Email templates & builder",
        soloStarter: true,
        growth: true,
        scale: true,
        ultimate: true,
      },
      {
        name: "SMS campaign templates",
        soloStarter: false,
        growth: true,
        scale: true,
        ultimate: true,
        isDifference: true,
      },
      {
        name: "Email & SMS broadcast campaigns",
        soloStarter: false,
        growth: "Basic",
        scale: true,
        ultimate: true,
        isDifference: true,
      },
      {
        name: "WhatsApp follow-up workflow support",
        soloStarter: false,
        growth: false,
        scale: true,
        ultimate: true,
        isDifference: true,
      },
      {
        name: "Review request automation",
        soloStarter: false,
        growth: false,
        scale: true,
        ultimate: true,
        isDifference: true,
      },
    ],
  },
  {
    title: "Websites, Funnels & Hosting",
    count: 5,
    features: [
      {
        name: "Free web hosting included",
        soloStarter: true,
        growth: true,
        scale: true,
        ultimate: true,
      },
      {
        name: "Website & funnel templates",
        soloStarter: false,
        growth: true,
        scale: true,
        ultimate: true,
        isDifference: true,
      },
      {
        name: "Website and funnel integration",
        soloStarter: false,
        growth: "Standard",
        scale: true,
        ultimate: "Advanced Setup",
        isDifference: true,
      },
      {
        name: "Free professional website build (Annual bonus)",
        soloStarter: false,
        growth: false,
        scale: false,
        ultimate: "Valued at A$ 999",
        isDifference: true,
      },
      {
        name: "Mobile responsive design",
        soloStarter: true,
        growth: true,
        scale: true,
        ultimate: true,
      },
    ],
  },
  {
    title: "Automations, Workflows & AI",
    count: 5,
    features: [
      {
        name: "Basic automation workflows",
        soloStarter: false,
        growth: true,
        scale: true,
        ultimate: true,
        isDifference: true,
      },
      {
        name: "Advanced workflows & triggers",
        soloStarter: false,
        growth: false,
        scale: true,
        ultimate: true,
        isDifference: true,
      },
      {
        name: "AI assistant / chat widget setup",
        soloStarter: false,
        growth: false,
        scale: true,
        ultimate: true,
        isDifference: true,
      },
      {
        name: "Advanced AI chatbot support",
        soloStarter: false,
        growth: false,
        scale: false,
        ultimate: true,
        isDifference: true,
      },
      {
        name: "Campaign planning support",
        soloStarter: false,
        growth: false,
        scale: false,
        ultimate: true,
        isDifference: true,
      },
    ],
  },
  {
    title: "Analytics, Reporting & Support",
    count: 5,
    features: [
      {
        name: "Reporting dashboard",
        soloStarter: false,
        growth: "Basic",
        scale: "Advanced",
        ultimate: "Full Suite",
        isDifference: true,
      },
      {
        name: "Monthly performance report",
        soloStarter: false,
        growth: false,
        scale: true,
        ultimate: true,
        isDifference: true,
      },
      {
        name: "Support channels",
        soloStarter: "Online",
        growth: "Email, Online & Phone",
        scale: "Priority Online & Phone",
        ultimate: "Dedicated VIP Phone & Setup",
        isDifference: true,
      },
      {
        name: "Full CRM setup assistance",
        soloStarter: false,
        growth: false,
        scale: false,
        ultimate: "Full Setup",
        isDifference: true,
      },
      {
        name: "Launch price guarantee",
        soloStarter: "A$5/mo limited offer",
        growth: "Flat A$47/mo",
        scale: "Flat A$97/mo",
        ultimate: "Flat A$199/mo",
      },
    ],
  },
];

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: "1",
    author: "Tristan Heron",
    date: "Jan 16, 2026",
    rating: 5,
    content:
      "ClientFlow CRM is the perfect all-in-one platform for any person who is looking to create a thriving business or share something with the world. The high level of support, fantastic value and continuous improvements make ClientFlow CRM the perfect partner.",
    verified: true,
    initials: "TH",
  },
  {
    id: "2",
    author: "Melanie Gleeson",
    date: "Jan 05, 2026",
    rating: 5,
    content:
      "Patricia Atienza 5 Stars PLUS Thank you, you were amazing. You were super clear, efficient with what we covered and I followed everything! Yesterday I felt overwhelmed and now after our session I feel excited and empowered.",
    verified: true,
    initials: "MG",
  },
  {
    id: "3",
    author: "Alyson Horne",
    date: "Dec 10, 2025",
    rating: 5,
    content:
      "Love ClientFlow CRM and how it is all in one place to build my CRM, Social, Website, Calendar, Payments everything under the one roof and the tech team to support getting it all set up. ClientFlow CRM makes tech simple with sparkles.",
    verified: true,
    initials: "AH",
  },
  {
    id: "4",
    author: "Karen Geiszler",
    date: "Dec 10, 2025",
    rating: 5,
    content:
      "Fantastic Platform and 24hour live support is wonderful. Anytime I get stuck there is someone on chat ready to guide me.",
    verified: true,
    initials: "KG",
  },
  {
    id: "5",
    author: "Korryn Campbell",
    date: "Jan 09, 2026",
    rating: 5,
    content:
      "Patricia was so informative and personable during my setup call. I cant wait to get my entire course and CRM fully launched!",
    verified: true,
    initials: "KC",
  },
  {
    id: "6",
    author: "Nicole Turnbull",
    date: "Dec 07, 2025",
    rating: 5,
    content:
      "Tirsh solved my problems I have had for weeks in 50 minutes on a live Zoom call. Wonderful support team!",
    verified: true,
    initials: "NT",
  },
];

export const FAQS = [
  {
    q: "Can I pay for ClientFlow CRM in AUD or USD?",
    a: "Yes! You can pay for your ClientFlow CRM monthly or annual subscription either in USD or AUD. You can toggle between currencies right here on the pricing table to see exact rates.",
  },
  {
    q: "Do you offer help to set up my account, and is there support?",
    a: "Yes. Every new user receives a FREE 60-minute 1-on-1 Zoom setup call where our onboarding specialists guide you through connecting your domains, payments, and email. Plus, enjoy 24/7 live chat support and daily live training webinars.",
  },
  {
    q: "Do you offer a migration service from Kajabi, ActiveCampaign, etc.?",
    a: "Yes! If you are currently using other platforms, our team of onboarding specialists can help migrate your contacts, courses, funnels, and email lists directly into ClientFlow CRM with minimal downtime.",
  },
  {
    q: "Are emails and SMS included in ClientFlow CRM plans?",
    a: "ClientFlow CRM replaces external email marketing tools. On both Starter and Pro plans, you receive $5.00 USD credit in your first month (which covers up to ~5,250 emails or ~300 SMS). After that, you pay standard pay-as-you-go rates for exact usage without contact list penalties.",
  },
  {
    q: "How many contacts do I get, and does the price increase as my list grows?",
    a: "You get UNLIMITED contacts on all plans! Unlike other software that penalizes your success with tier upgrades as your subscriber list grows, ClientFlow CRM keeps your plan price flat forever.",
  },
  {
    q: "Can I run memberships, courses, and communities on ClientFlow CRM?",
    a: "Absolutely. ClientFlow CRM is designed specifically for course creators, educators, and coaches. You can create unlimited courses, modules, video hosting, quizzes, and certificates (Pro & Max), plus built-in Facebook Group alternatives.",
  },
];
