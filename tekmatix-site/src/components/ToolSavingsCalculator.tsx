import { useState } from "react";
import { TOOL_REPLACEMENTS, CF_PLAN_OPTIONS, CfPlanOption } from "@/lib/clientflow-data";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface SavingsCalculatorProps {
  onStartTrial: () => void;
}

export function ToolSavingsCalculator({ onStartTrial }: SavingsCalculatorProps) {
  const [selectedTools, setSelectedTools] = useState<string[]>(
    TOOL_REPLACEMENTS.map((t) => t.name),
  );
  const [selectedPlan, setSelectedPlan] = useState<CfPlanOption>(
    CF_PLAN_OPTIONS.find((p) => p.popular) ?? CF_PLAN_OPTIONS[0],
  );

  const allSelected = selectedTools.length === TOOL_REPLACEMENTS.length;

  const toggleTool = (name: string) => {
    setSelectedTools((prev) =>
      prev.includes(name) ? prev.filter((t) => t !== name) : [...prev, name],
    );
  };

  const toggleAll = () => {
    setSelectedTools(allSelected ? [] : TOOL_REPLACEMENTS.map((t) => t.name));
  };

  const totalCurrentMonthly = selectedTools.reduce((acc, name) => {
    const found = TOOL_REPLACEMENTS.find((t) => t.name === name);
    return acc + (found ? found.typicalMonthlyCost : 0);
  }, 0);

  const monthlySaving = Math.max(0, totalCurrentMonthly - selectedPlan.price);
  const yearlySaving = monthlySaving * 12;

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      {/* Tool Replacement Calculator */}
      <div className="bg-gradient-to-br from-card via-card to-primary/5 rounded-3xl border border-primary/20 p-6 md:p-12 shadow-2xl relative overflow-hidden mb-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="text-center max-w-3xl mx-auto mb-10">
          <Badge className="bg-primary/15 text-primary border-primary/30 px-3.5 py-1 text-xs uppercase font-semibold tracking-wider mb-3">
            💰 Replace &amp; Save Big
          </Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Stop paying monthly for{" "}
            <span className="text-primary">10+ software subscriptions.</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base mt-3">
            Select the tools your business currently pays for and see exactly how much you save
            every year by switching to ClientFlow CRM.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Tools List */}
          <div className="lg:col-span-7 bg-card rounded-2xl border border-border shadow-md overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-border/80">
              <h3 className="text-base font-bold text-foreground">
                🛠️ Tools You Currently Pay For
              </h3>
              <span className="text-xs text-muted-foreground font-medium">
                Click to select / deselect
              </span>
            </div>

            <button
              onClick={toggleAll}
              className="w-full flex items-center gap-2.5 px-6 py-3 bg-muted/50 border-b border-border/80 hover:bg-muted transition-colors"
            >
              <span
                className={`w-5 h-5 rounded-md flex items-center justify-center border-2 transition-all ${
                  allSelected
                    ? "bg-primary border-primary text-primary-foreground"
                    : "border-muted-foreground/40 bg-background"
                }`}
              >
                {allSelected && <Check className="w-3 h-3 stroke-[3]" />}
              </span>
              <span className="text-sm font-semibold text-foreground">
                {allSelected ? "Deselect All Tools" : "Select All Tools"}
              </span>
            </button>

            <div className="divide-y divide-border/60">
              {TOOL_REPLACEMENTS.map((tool) => {
                const isSelected = selectedTools.includes(tool.name);
                return (
                  <button
                    key={tool.name}
                    onClick={() => toggleTool(tool.name)}
                    className={`w-full flex items-center gap-3.5 px-6 py-3.5 text-left transition-all ${
                      isSelected ? "bg-primary/5 hover:bg-primary/10" : "hover:bg-muted/40"
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-md flex items-center justify-center border-2 flex-shrink-0 transition-all ${
                        isSelected
                          ? "bg-primary border-primary text-primary-foreground"
                          : "border-muted-foreground/40 bg-background"
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </span>
                    <span className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-lg flex-shrink-0">
                      {tool.emoji}
                    </span>
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-semibold text-foreground block">
                        {tool.name}
                      </span>
                      <span className="text-xs text-muted-foreground block">
                        {tool.description}
                      </span>
                      <span className="text-[11px] text-success font-semibold block mt-0.5">
                        ✓ ClientFlow replaces: {tool.replaces}
                      </span>
                    </div>
                    <span className="text-sm font-bold text-foreground flex-shrink-0 text-right">
                      A${tool.typicalMonthlyCost}
                      <span className="block text-[10px] font-normal text-muted-foreground">
                        /mo
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Summary */}
          <div className="lg:col-span-5 bg-card rounded-2xl border border-border shadow-xl overflow-hidden lg:sticky lg:top-24">
            <div className="px-6 pt-6 pb-4 border-b border-border/80">
              <p className="text-[11px] font-bold tracking-widest uppercase text-muted-foreground mb-2">
                Your Estimated Savings
              </p>
              <div
                className="bg-gradient-to-br from-navy to-navy-2 rounded-xl p-5 text-center"
                style={{ background: "linear-gradient(135deg, var(--navy), var(--navy-2))" }}
              >
                <p className="text-[11px] font-bold text-gold/80 uppercase tracking-wider mb-1.5">
                  Yearly Pocket Savings
                </p>
                <div className="text-4xl font-black tracking-tight text-gold">
                  A${yearlySaving.toLocaleString()}
                </div>
                <p className="text-xs text-gold/80 mt-1.5 font-medium">
                  (A${monthlySaving.toLocaleString()} saved every month!)
                </p>
              </div>
            </div>

            {/* Plan Selector */}
            <div className="px-6 pt-5 pb-4">
              <label className="text-[11.5px] font-semibold text-muted-foreground uppercase tracking-wider block mb-2">
                Your ClientFlow AU Plan
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {CF_PLAN_OPTIONS.map((plan) => {
                  const isSel = plan.id === selectedPlan.id;
                  return (
                    <button
                      key={plan.id}
                      onClick={() => setSelectedPlan(plan)}
                      className={`p-2 border-2 rounded-lg text-center transition-all ${
                        isSel
                          ? "border-primary bg-primary/10"
                          : "border-border bg-card hover:border-primary/50 hover:bg-primary/5"
                      }`}
                    >
                      <div
                        className={`text-xs font-bold ${
                          isSel ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {plan.name}
                      </div>
                      <div className="text-[11px] text-muted-foreground">A${plan.price}/mo</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Breakdown */}
            <div className="px-6 pb-5 space-y-2.5 text-sm">
              <div className="flex justify-between items-center py-1">
                <span className="text-muted-foreground">Selected Subscriptions</span>
                <span className="font-bold text-foreground font-mono">
                  A${totalCurrentMonthly.toLocaleString()}/mo
                </span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-muted-foreground">ClientFlow AU Plan</span>
                <span className="font-bold text-foreground font-mono">
                  A${selectedPlan.price}/mo
                </span>
              </div>
              <div className="flex justify-between items-center py-2 px-3 -mx-3 rounded-lg bg-success/10 border border-success/20">
                <span className="text-success font-semibold">✅ Monthly Saving</span>
                <span className="font-bold text-success font-mono">
                  A${monthlySaving.toLocaleString()}/mo
                </span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-muted-foreground">Tools Replaced</span>
                <span className="font-bold text-foreground">
                  {selectedTools.length} tool{selectedTools.length !== 1 ? "s" : ""}
                </span>
              </div>
            </div>

            <div className="px-6 pb-2">
              <p className="text-xs text-muted-foreground">
                All prices shown in{" "}
                <strong className="text-foreground">Australian Dollars (AUD)</strong>. Competitor
                prices are approximate market rates.
              </p>
            </div>

            <div className="px-6 pb-6 pt-2">
              <Button
                onClick={onStartTrial}
                size="lg"
                className="w-full font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg text-sm"
              >
                <span>Switch &amp; Start 14-Day Free Trial</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
