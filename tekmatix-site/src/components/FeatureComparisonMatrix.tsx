import { PRICING_PLANS } from "@/lib/clientflow-data";
import { Check, Minus, Star } from "lucide-react";

interface FeatureComparisonMatrixProps {
  currency: "AUD" | "USD";
}

/* ── Cell value model ─────────────────────────────────────── */
type CellValue = boolean | { text: string; variant: "blue" | "green" | "gold" };

interface FeatureRow {
  name: string;
  cells: [CellValue, CellValue, CellValue, CellValue]; // Solo, Growth, Scale, Ultimate
}

interface FeatureSection {
  emoji: string;
  title: string;
  rows: FeatureRow[];
}

const chk = true;
const dash = false;

const FEATURE_SECTIONS: FeatureSection[] = [
  {
    emoji: "🏆",
    title: "CRM & Contact Management",
    rows: [
      { name: "Contacts & Conversations Inbox", cells: [chk, chk, chk, chk] },
      { name: "Tags & Contact Organisation", cells: [chk, chk, chk, chk] },
      { name: "Smart Lists & Saved Filters", cells: [chk, chk, chk, chk] },
      { name: "Custom Objects & Fields", cells: [chk, chk, chk, chk] },
      { name: "Sales Pipeline & Opportunities", cells: [chk, chk, chk, chk] },
      { name: "Appointment Booking Calendar", cells: [chk, chk, chk, chk] },
      { name: "Lead Capture Forms", cells: [chk, chk, chk, chk] },
      { name: "Survey Builder", cells: [dash, dash, chk, chk] },
      { name: "Quizzes", cells: [dash, dash, chk, chk] },
      {
        name: "Onboarding Sessions",
        cells: [
          { text: "1 Session", variant: "blue" },
          { text: "4 Sessions", variant: "green" },
          { text: "4 Sessions", variant: "green" },
          { text: "VIP 4 Sessions", variant: "gold" },
        ],
      },
    ],
  },
  {
    emoji: "📣",
    title: "Social Media & Marketing",
    rows: [
      { name: "Social Media & Campaign Planner", cells: [chk, chk, chk, chk] },
      { name: "Email Templates & Builder", cells: [chk, chk, chk, chk] },
      { name: "Email & SMS Broadcast Campaigns", cells: [dash, dash, chk, chk] },
      { name: "Brand Boards (Brand Identity)", cells: [chk, chk, chk, chk] },
      { name: "Blogs & Content Publishing", cells: [dash, chk, chk, chk] },
      { name: "QR Codes", cells: [dash, chk, chk, chk] },
      { name: "Trigger Links", cells: [dash, chk, chk, chk] },
      { name: "Snippets & Countdown Timers", cells: [dash, chk, chk, chk] },
      { name: "Affiliate Manager", cells: [dash, dash, chk, chk] },
      { name: "Ad Manager (Google & Meta)", cells: [dash, dash, dash, chk] },
    ],
  },
  {
    emoji: "📡",
    title: "Lead Acquisition Channels",
    rows: [
      { name: "Phone & SMS Core", cells: [chk, chk, chk, chk] },
      { name: "Web Chat Widget", cells: [chk, chk, chk, chk] },
      { name: "Missed Call Text Back", cells: [chk, chk, chk, chk] },
      { name: "Facebook Messenger Integration", cells: [dash, dash, dash, chk] },
      { name: "GMB Messaging & Call Tracking", cells: [dash, dash, dash, chk] },
      { name: "TikTok Messaging", cells: [dash, dash, dash, chk] },
      { name: "Facebook Lead Ads", cells: [dash, dash, dash, chk] },
      { name: "Google Lead Ads", cells: [dash, dash, dash, chk] },
      { name: "LinkedIn Lead Ads", cells: [dash, dash, dash, chk] },
      { name: "TikTok Lead Ads", cells: [dash, dash, dash, chk] },
    ],
  },
  {
    emoji: "🌐",
    title: "Websites, Funnels & Hosting",
    rows: [
      { name: "Free Web Hosting Included", cells: [chk, chk, chk, chk] },
      { name: "Website & Funnel Builder", cells: [chk, chk, chk, chk] },
      { name: "Custom Domain Connection", cells: [chk, chk, chk, chk] },
      { name: "SEO Tools", cells: [chk, chk, chk, chk] },
      { name: "Analytics & Tracking", cells: [chk, chk, chk, chk] },
      { name: "Online Store (eCommerce)", cells: [chk, chk, chk, chk] },
      { name: "Webinars", cells: [chk, chk, chk, chk] },
    ],
  },
  {
    emoji: "💳",
    title: "Payments & Revenue",
    rows: [
      { name: "Invoicing", cells: [chk, chk, chk, chk] },
      { name: "Payments Core (Stripe)", cells: [chk, chk, chk, chk] },
      { name: "Payment Links", cells: [dash, chk, chk, chk] },
      { name: "Text to Pay (SMS Payment)", cells: [dash, dash, dash, chk] },
      { name: "Custom Payment Providers", cells: [dash, dash, dash, chk] },
      { name: "Documents & Contracts", cells: [dash, dash, chk, chk] },
      { name: "Client Portal", cells: [dash, dash, chk, chk] },
      { name: "Courses & Membership", cells: [dash, dash, chk, chk] },
      { name: "Certificates", cells: [dash, dash, chk, chk] },
    ],
  },
  {
    emoji: "🤖",
    title: "Automations, Workflows & AI",
    rows: [
      { name: "Automation Workflows", cells: [chk, chk, chk, chk] },
      { name: "Advanced Triggers", cells: [dash, dash, dash, chk] },
      { name: "Ask AI (Content Assistant)", cells: [dash, chk, chk, chk] },
      { name: "Content AI (Copywriting)", cells: [dash, chk, chk, chk] },
      { name: "Conversation AI (Chatbot)", cells: [dash, chk, chk, chk] },
      { name: "Voice AI (Call Handling)", cells: [dash, chk, chk, chk] },
      { name: "Reviews AI (Auto-Replies)", cells: [dash, chk, chk, chk] },
      { name: "Agent Studio (Custom Agents)", cells: [dash, dash, chk, chk] },
      { name: "AI Studio (Full AI Builder)", cells: [dash, dash, chk, chk] },
      { name: "Communities", cells: [dash, dash, dash, chk] },
      { name: "All Marketplace Apps", cells: [dash, dash, dash, chk] },
    ],
  },
  {
    emoji: "📊",
    title: "Analytics, Reporting & Support",
    rows: [
      { name: "Dashboard & Overview", cells: [chk, chk, chk, chk] },
      { name: "Call & Appointment Reports", cells: [chk, chk, chk, chk] },
      { name: "Attribution Reporting", cells: [dash, chk, chk, chk] },
      { name: "Google & FB Ads Reports", cells: [dash, chk, chk, chk] },
      { name: "Custom Reports", cells: [dash, chk, chk, chk] },
      { name: "Audit Report", cells: [dash, dash, chk, chk] },
      { name: "GBP (Google Business) Optimisation", cells: [dash, chk, chk, chk] },
      { name: "Reputation Management", cells: [chk, chk, chk, chk] },
      { name: "Review Widgets & Testimonials", cells: [chk, chk, chk, chk] },
      { name: "Mobile App", cells: [dash, dash, chk, chk] },
      { name: "Media Storage", cells: [chk, chk, chk, chk] },
    ],
  },
];

/* ── Plan header cards ────────────────────────────────────── */
const PLAN_HEADERS = [
  { id: "solo-starter" as const, name: "Solo Starter", users: "1 User" },
  { id: "growth" as const, name: "Growth", users: "Up to 5 Users", popular: true },
  { id: "scale" as const, name: "Scale", users: "Up to 10 Users" },
  { id: "ultimate" as const, name: "Ultimate", users: "Unlimited Users" },
];

function renderCell(value: CellValue) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center w-[26px] h-[26px] rounded-full bg-primary/15 text-primary">
        <Check className="w-3.5 h-3.5 stroke-[3]" />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center w-[26px] h-[26px] rounded-full bg-muted text-muted-foreground/60">
        <Minus className="w-3.5 h-3.5" />
      </span>
    );
  }
  const variantClasses: Record<CellValue extends infer _ ? string : never, string> = {
    blue: "bg-primary/15 text-primary",
    green: "bg-success/15 text-success",
    gold: "bg-gold/25 text-gold",
  } as never;
  return (
    <span
      className={`inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${variantClasses[value.variant]}`}
    >
      {value.text}
    </span>
  );
}

export function FeatureComparisonMatrix({ currency }: FeatureComparisonMatrixProps) {
  const isAud = currency === "AUD";
  const prefix = isAud ? "A$" : "$";

  const planPrice = (id: string) => {
    const plan = PRICING_PLANS.find((p) => p.id === id)!;
    return `${prefix}${isAud ? plan.audMonthly : plan.usdMonthly}`;
  };

  return (
    <section id="compare-features" className="max-w-[1100px] mx-auto px-4 scroll-mt-24">
      {/* ── HERO ── */}
      <div className="text-center pt-8 pb-10">
        <span className="inline-flex items-center gap-1.5 bg-accent text-primary text-[11px] font-bold uppercase tracking-[1px] px-3.5 py-1.5 rounded-full mb-5">
          <Star className="w-3 h-3 fill-current" />
          Everything your business needs — one platform
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-foreground tracking-tight leading-[1.15] mb-4">
          Compare All <span className="text-primary">ClientFlow CRM</span> Plans
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-[600px] mx-auto">
          Every feature, every plan — verified against our live Australian configuration. No
          guessing, no surprises.
        </p>
      </div>

      {/* ── PLAN HEADER CARDS ── */}
      <div className="grid grid-cols-2 lg:grid-cols-[220px_repeat(4,1fr)] gap-2 sm:gap-3 items-end">
        {/* Spacer matching the table's first "Features" column */}
        <div className="hidden lg:block" />
        {PLAN_HEADERS.map((p) => {
          const isPop = p.popular;
          return (
            <div
              key={p.id}
              className={`relative rounded-t-2xl border border-border border-b-0 text-center px-4 py-6 transition-all ${
                isPop
                  ? "bg-gradient-to-br from-navy to-navy-2 border-navy text-white -mt-2.5 z-10 shadow-lg"
                  : "bg-card hover:shadow-md"
              }`}
            >
              {isPop && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navy text-[10px] font-black uppercase tracking-[0.8px] px-3.5 py-1 rounded-full whitespace-nowrap">
                  ⭐ Most Popular
                </span>
              )}
              <div className={`text-[15px] font-bold ${isPop ? "text-white" : "text-foreground"}`}>
                {p.name}
              </div>
              <div className="text-[30px] font-black tracking-tight mt-2.5">
                <span className={isPop ? "text-gold" : "text-navy"}>{planPrice(p.id)}</span>
                <span
                  className={`text-[15px] font-medium ${isPop ? "text-muted-foreground" : "text-muted-foreground"}`}
                >
                  /mo
                </span>
              </div>
              <div
                className={`text-[11.5px] mt-1.5 ${isPop ? "text-muted-foreground" : "text-muted-foreground"}`}
              >
                {p.users}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── FEATURE TABLE ── */}
      <div className="overflow-x-auto rounded-b-2xl shadow-[0_8px_32px_rgba(11,44,94,0.10)] bg-card">
        <table className="w-full border-collapse min-w-[640px] table-fixed">
          <thead>
            <tr className="bg-muted/40">
              <th className="w-[220px] text-left px-6 py-3.5 text-xs font-bold uppercase tracking-[0.8px] text-muted-foreground border-b-2 border-border">
                Features &amp; Capabilities
              </th>
              <th className="text-center px-3 py-3.5 text-xs font-bold text-muted-foreground border-b-2 border-border">
                Solo Starter
              </th>
              <th className="text-center px-3 py-3.5 text-xs font-bold text-primary border-b-2 border-primary bg-accent/50">
                Growth
              </th>
              <th className="text-center px-3 py-3.5 text-xs font-bold text-muted-foreground border-b-2 border-border">
                Scale
              </th>
              <th className="text-center px-3 py-3.5 text-xs font-bold text-muted-foreground border-b-2 border-border">
                Ultimate
              </th>
            </tr>
          </thead>
          <tbody>
            {FEATURE_SECTIONS.map((section) => (
              <FeatureSectionBlock key={section.title} section={section} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function FeatureSectionBlock({ section }: { section: FeatureSection }) {
  return (
    <>
      <tr>
        <td
          colSpan={5}
          className="bg-gradient-to-r from-navy to-navy-2 text-white text-[11.5px] font-bold uppercase tracking-[1.2px] px-6 py-2.5 border-none"
        >
          <span className="mr-2">{section.emoji}</span>
          {section.title}
        </td>
      </tr>
      {section.rows.map((row, idx) => (
        <tr key={idx} className="hover:bg-muted/20 transition-colors">
          <td className="px-6 py-3 text-[13px] font-medium text-foreground border-b border-border/60">
            {row.name}
          </td>
          <td className="px-3 py-3 text-center border-b border-border/60">
            {renderCell(row.cells[0])}
          </td>
          <td className="px-3 py-3 text-center border-b border-border/60 bg-accent/50">
            {renderCell(row.cells[1])}
          </td>
          <td className="px-3 py-3 text-center border-b border-border/60">
            {renderCell(row.cells[2])}
          </td>
          <td className="px-3 py-3 text-center border-b border-border/60">
            {renderCell(row.cells[3])}
          </td>
        </tr>
      ))}
    </>
  );
}
