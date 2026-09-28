import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PricingCards } from "@/components/PricingCards";
import { PayAsYouGoEstimator } from "@/components/PayAsYouGoEstimator";
import { FeatureComparisonMatrix } from "@/components/FeatureComparisonMatrix";
import { ToolSavingsCalculator } from "@/components/ToolSavingsCalculator";
import { TrialAndFaqModal } from "@/components/TrialAndFaqModal";
import { Plan, PRICING_PLANS } from "@/lib/clientflow-data";
import {
  Sparkles,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  Gift,
  PhoneCall,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ClientFlow CRM Pricing & Plans" },
      {
        name: "description",
        content:
          "Simple, transparent pricing for ClientFlow CRM. Choose Solo Starter, Growth, Scale or Ultimate plans with unlimited contacts.",
      },
      { property: "og:title", content: "ClientFlow CRM Pricing & Plans" },
      {
        property: "og:description",
        content:
          "Simple, transparent pricing for ClientFlow CRM. Choose Solo Starter, Growth, Scale or Ultimate plans with unlimited contacts.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content:
          "https://vibe.filesafe.space/1789700829408721345/attachments/f3166193-50f5-4050-9324-316b30d4921f.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content:
          "https://vibe.filesafe.space/1789700829408721345/attachments/f3166193-50f5-4050-9324-316b30d4921f.png",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [currency, setCurrency] = useState<"AUD" | "USD">("AUD");
  const [selectedPlanModal, setSelectedPlanModal] = useState<Plan | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenPlanModal = (plan: Plan) => {
    setSelectedPlanModal(plan);
    setIsModalOpen(true);
  };

  const handleSelectPlanById = (planId: "solo-starter" | "growth" | "scale" | "ultimate") => {
    const found = PRICING_PLANS.find((p) => p.id === planId) || PRICING_PLANS[0];
    handleOpenPlanModal(found);
  };

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 px-4 max-w-7xl mx-auto text-center overflow-hidden bg-white rounded-3xl">
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent blur-3xl -z-10 rounded-full pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-bold uppercase tracking-wider mb-6 animate-fade-in">
          <Sparkles className="w-4 h-4" />
          Best Features. Best Service. Best Price.
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-[1.1] max-w-4xl mx-auto">
          Simple, transparent pricing
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-4 font-normal leading-relaxed">
          Pick the perfect ClientFlow plan for your business. Grow without limits, automate your
          leads and bookings with zero headaches.
        </p>

        {/* Highlight Chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-6 text-xs sm:text-sm font-semibold text-foreground">
          <span className="flex items-center gap-1.5 bg-card border border-border/80 px-3 py-1.5 rounded-full shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            Unlimited Contacts & Staff
          </span>
          <span className="flex items-center gap-1.5 bg-card border border-border/80 px-3 py-1.5 rounded-full shadow-sm">
            <Gift className="w-4 h-4 text-gold" />
            FREE 60-min Setup Call Included
          </span>
          <span className="flex items-center gap-1.5 bg-card border border-border/80 px-3 py-1.5 rounded-full shadow-sm">
            <PhoneCall className="w-4 h-4 text-primary" />
            24/7 Live Chat Support
          </span>
        </div>

        {/* Currency Toggle Control */}
        <div className="mt-10 max-w-md mx-auto">
          <div className="relative flex items-center p-1.5 bg-card border border-border rounded-2xl shadow-lg overflow-hidden">
            {/* Sliding indicator */}
            <div
              className={`absolute top-1.5 bottom-1.5 w-[calc(50%-0.375rem)] rounded-xl bg-primary shadow-md transition-transform duration-300 ease-out ${
                currency === "USD" ? "translate-x-[calc(100%+0.375rem)]" : "translate-x-0"
              }`}
            />
            {/* AUD Button */}
            <button
              onClick={() => setCurrency("AUD")}
              className={`relative z-10 flex-1 flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl transition-colors duration-300 ${
                currency === "AUD"
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="text-lg leading-none">🇦🇺</span>
              <span className="tracking-tight">AUD</span>
            </button>
            {/* USD Button */}
            <button
              onClick={() => setCurrency("USD")}
              className={`relative z-10 flex-1 flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl transition-colors duration-300 ${
                currency === "USD"
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="text-lg leading-none">🇺🇸</span>
              <span className="tracking-tight">USD</span>
            </button>
          </div>
          <p className="text-center text-[11px] text-muted-foreground mt-2.5 font-medium">
            Showing prices in {currency === "AUD" ? "Australian Dollars" : "US Dollars"} · plans
            billed monthly
          </p>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section id="plans" className="scroll-mt-24">
        <PricingCards
          currency={currency}
          billingCycle="monthly"
          onSelectPlan={handleOpenPlanModal}
        />
      </section>

      {/* Pay-As-You-Go Estimator */}
      <PayAsYouGoEstimator />

      {/* Feature Matrix Table */}
      <FeatureComparisonMatrix currency={currency} />

      {/* Tool Replacement Savings Calculator & Customer Reviews */}
      <section id="savings">
        <ToolSavingsCalculator onStartTrial={() => handleSelectPlanById("growth")} />
      </section>

      {/* Trial Form Modal & FAQ Accordion */}
      <TrialAndFaqModal
        selectedPlan={selectedPlanModal}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currency={currency}
      />
    </div>
  );
}
