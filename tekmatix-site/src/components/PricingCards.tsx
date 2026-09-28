import { useState } from "react";
import { PRICING_PLANS, Plan } from "@/lib/clientflow-data";
import { Check, ArrowRight, ShieldCheck, Gift, Hourglass } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PricingCardsProps {
  currency: "AUD" | "USD";
  billingCycle: "monthly" | "annual";
  onSelectPlan: (plan: Plan) => void;
}

export function PricingCards({ currency, billingCycle, onSelectPlan }: PricingCardsProps) {
  const isAud = currency === "AUD";
  const currencyPrefix = isAud ? "A$" : "$";

  return (
    <div className="max-w-[1400px] mx-auto px-4">
      {/* 4 Cards Grid matching ClientFlow CRM layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {PRICING_PLANS.map((plan) => {
          const isAnnual = billingCycle === "annual";
          const isDark = plan.isDarkCard;

          // Price calculations
          let price = isAud ? plan.audMonthly : plan.usdMonthly;
          if (isAnnual) {
            price = isAud ? plan.audAnnualMonthly : plan.usdAnnualMonthly;
          }

          return (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-3xl transition-all duration-300 ${
                isDark
                  ? "bg-secondary text-secondary-foreground shadow-2xl border border-primary/30 scale-[1.02] z-10"
                  : "bg-card text-foreground border border-border/80 shadow-md hover:shadow-xl hover:border-border"
              }`}
            >
              {/* Top Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                  {plan.badgeColor === "red" ? (
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-black tracking-wider uppercase bg-destructive text-destructive-foreground shadow-sm">
                      <Hourglass className="w-3 h-3" />
                      {plan.badge}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full text-[11px] font-black tracking-wider uppercase bg-primary text-primary-foreground shadow-md">
                      {plan.badge}
                    </span>
                  )}
                </div>
              )}

              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title & Description */}
                  <div className="mb-6 pt-1">
                    <h3
                      className={`text-2xl font-black tracking-tight ${
                        isDark ? "text-white" : "text-foreground"
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <p
                      className={`text-xs sm:text-[13px] mt-2.5 min-h-[58px] leading-relaxed ${
                        isDark ? "text-white/80" : "text-muted-foreground"
                      }`}
                    >
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price Tag */}
                  <div className="mb-4">
                    {plan.strikePrice ? (
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span
                            className={`text-xl sm:text-2xl font-bold line-through decoration-2 ${
                              isDark ? "text-muted-foreground/70" : "text-muted-foreground/60"
                            }`}
                          >
                            {currencyPrefix}
                            {plan.strikePrice}
                          </span>
                          <span
                            className={`text-4xl sm:text-5xl font-black tracking-tight ${
                              isDark ? "text-white" : "text-foreground"
                            }`}
                          >
                            {currencyPrefix}
                            {price}
                          </span>
                          <span
                            className={`text-sm font-semibold ${
                              isDark ? "text-white/80" : "text-muted-foreground"
                            }`}
                          >
                            /mo
                          </span>
                        </div>
                        {plan.introductoryNote && (
                          <p
                            className={`text-[11px] mt-1.5 leading-snug ${
                              isDark ? "text-white/80" : "text-muted-foreground"
                            }`}
                          >
                            {plan.introductoryNote}
                          </p>
                        )}
                      </div>
                    ) : (
                      <div className="flex items-baseline gap-1.5">
                        <span
                          className={`text-4xl sm:text-5xl font-black tracking-tight ${
                            isDark ? "text-white" : "text-foreground"
                          }`}
                        >
                          {currencyPrefix}
                          {price}
                        </span>
                        <span
                          className={`text-sm font-semibold ${
                            isDark ? "text-white/80" : "text-muted-foreground"
                          }`}
                        >
                          /mo
                        </span>
                      </div>
                    )}

                    {isAnnual && (
                      <p
                        className={`text-[11px] font-semibold mt-1.5 ${
                          isDark ? "text-primary" : "text-primary"
                        }`}
                      >
                        Billed annually • Save {currencyPrefix}
                        {isAud ? plan.audSavingsYear : plan.usdSavingsYear}/year
                      </p>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 pt-4 border-t border-border/50">
                    {plan.features.map((feature, idx) => {
                      const isBoldHighlight = feature.startsWith("Everything in");
                      return (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-[13px] leading-snug"
                        >
                          <div
                            className={`mt-0.5 rounded-full p-0.5 shrink-0 ${
                              isDark ? "text-primary bg-primary/20" : "text-primary bg-primary/10"
                            }`}
                          >
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                          <span
                            className={
                              isBoldHighlight
                                ? `font-bold ${isDark ? "text-white" : "text-foreground"}`
                                : isDark
                                  ? "text-white/80"
                                  : "text-foreground/90"
                            }
                          >
                            {feature}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom section with optional bonus callout & CTA Button */}
                <div className="mt-6 space-y-4">
                  {/* Annual Bonus box for Ultimate plan */}
                  {plan.annualBonus && (
                    <div className="p-3.5 rounded-2xl bg-primary/10 border border-primary/20 flex items-start gap-3 text-left">
                      <div className="text-xl shrink-0">🎁</div>
                      <div className="text-xs">
                        <strong className="block font-bold text-foreground">
                          Annual Plan Bonus
                        </strong>
                        <span className="text-muted-foreground leading-relaxed">
                          {plan.annualBonus}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Action CTA Button */}
                  <Button
                    onClick={() => onSelectPlan(plan)}
                    size="lg"
                    className="w-full font-bold text-sm h-12 rounded-xl transition-all shadow-md group bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                  </Button>

                  <p
                    className={`text-[11px] text-center ${
                      isDark ? "text-white/80" : "text-muted-foreground"
                    }`}
                  >
                    {plan.trialText}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
