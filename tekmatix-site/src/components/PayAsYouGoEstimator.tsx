import { useState } from "react";
import { Mail, MessageSquare, Phone, Bot, Info, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type UsageKey = "email" | "sms" | "voice" | "chat";

const RATES: Record<
  UsageKey,
  {
    rate: number;
    max: number;
    min: number;
    step: number;
    unit: string;
    label: string;
    rateNote: string;
    emoji: string;
    Icon: typeof Mail;
  }
> = {
  email: {
    rate: 0.00095,
    max: 100000,
    min: 0,
    step: 1000,
    unit: "emails",
    label: "Monthly Emails Sent",
    rateNote: "Rate: $0.00095 USD per email · ≈ AU¢0.15 each",
    emoji: "📧",
    Icon: Mail,
  },
  sms: {
    rate: 0.0166,
    max: 5000,
    min: 0,
    step: 50,
    unit: "segments",
    label: "Monthly SMS Segments",
    rateNote: "Rate: $0.0166 USD per SMS · AU outbound ~AU¢2.5",
    emoji: "💬",
    Icon: MessageSquare,
  },
  voice: {
    rate: 0.2,
    max: 500,
    min: 0,
    step: 10,
    unit: "mins",
    label: "Voice AI Receptionist",
    rateNote: "Rate: $0.20 USD per minute · AI handles calls 24/7",
    emoji: "🎙️",
    Icon: Phone,
  },
  chat: {
    rate: 0.02,
    max: 2000,
    min: 0,
    step: 50,
    unit: "replies",
    label: "Conversation AI Replies",
    rateNote: "Rate: $0.02 USD per reply · Chatbot auto-responds 24/7",
    emoji: "🤖",
    Icon: Bot,
  },
};

const fmt = (n: number) => "$" + n.toFixed(2);
const fmtNum = (n: number) => Number(n).toLocaleString();

export function PayAsYouGoEstimator() {
  const [email, setEmail] = useState(10000);
  const [sms, setSms] = useState(500);
  const [voice, setVoice] = useState(60);
  const [chat, setChat] = useState(200);

  const values: Record<UsageKey, number> = { email, sms, voice, chat };
  const setters: Record<UsageKey, (n: number) => void> = {
    email: setEmail,
    sms: setSms,
    voice: setVoice,
    chat: setChat,
  };

  const costs: Record<UsageKey, number> = {
    email: email * RATES.email.rate,
    sms: sms * RATES.sms.rate,
    voice: voice * RATES.voice.rate,
    chat: chat * RATES.chat.rate,
  };

  const total = costs.email + costs.sms + costs.voice + costs.chat;

  const sliderPct = (key: UsageKey) => `${((values[key] / RATES[key].max) * 100).toFixed(1)}%`;

  return (
    <section className="max-w-[1100px] mx-auto px-4 py-8">
      {/* Hero */}
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-1.5 bg-accent text-primary text-[11px] font-bold uppercase tracking-[1px] px-4 py-1.5 rounded-full mb-4">
          ⚡ Pay-As-You-Go Estimator
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight leading-tight mb-3">
          Your plan is flat. <span className="text-primary">Usage is fair.</span>
        </h2>
        <p className="text-muted-foreground text-base max-w-xl mx-auto mb-1">
          Estimate your monthly usage for emails, SMS, Voice AI, and Conversation AI replies. No
          hidden markups — only pay for what you use.
        </p>
        <p className="text-xs text-muted-foreground">
          💡 All new accounts receive{" "}
          <strong className="text-foreground">AU$5.00 bonus credit</strong> to get started for free.
        </p>
      </div>

      {/* Sliders + Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-7 items-start">
        {/* LEFT: Sliders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {(Object.keys(RATES) as UsageKey[]).map((key) => {
            const r = RATES[key];
            const Icon = r.Icon;
            return (
              <div
                key={key}
                className="bg-card rounded-[14px] shadow-[0_4px_24px_rgba(11,44,94,0.09)] p-6 border-2 border-transparent hover:border-accent hover:shadow-[0_6px_30px_rgba(37,99,235,0.12)] transition-all"
              >
                <span className="text-2xl mb-2.5 block">{r.emoji}</span>
                <div className="flex items-start justify-between mb-1.5">
                  <div>
                    <div className="text-[13px] font-semibold text-muted-foreground uppercase tracking-[0.6px]">
                      {r.label}
                    </div>
                    <div className="text-3xl font-black text-foreground tracking-tight my-1">
                      {fmtNum(values[key])}{" "}
                      <span className="text-base font-medium text-muted-foreground">{r.unit}</span>
                    </div>
                  </div>
                  <div className="text-xl font-extrabold text-navy text-right">
                    {fmt(costs[key])}
                    <small className="text-xs font-medium text-muted-foreground block">USD</small>
                  </div>
                </div>

                <input
                  type="range"
                  min={r.min}
                  max={r.max}
                  step={r.step}
                  value={values[key]}
                  onChange={(e) => setters[key](Number(e.target.value))}
                  className="estimator-range w-full h-1.5 rounded-full outline-none cursor-pointer my-1"
                  style={
                    {
                      background: `linear-gradient(to right, var(--color-primary) ${sliderPct(
                        key,
                      )}, var(--color-muted) ${sliderPct(key)})`,
                      ["--pct" as string]: sliderPct(key),
                    } as React.CSSProperties
                  }
                />
                <div className="flex justify-between text-[10.5px] text-muted-foreground mt-1">
                  <span>{fmtNum(r.min)}</span>
                  <span>{fmtNum(r.max / 2)}</span>
                  <span>{fmtNum(r.max)}</span>
                </div>

                <div className="text-[11.5px] text-muted-foreground mt-3 pt-2.5 border-t border-border/60">
                  <strong className="text-foreground/80">{r.rateNote}</strong>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT: Summary */}
        <div className="bg-card rounded-[14px] shadow-[0_4px_24px_rgba(11,44,94,0.12)] overflow-hidden lg:sticky lg:top-24">
          {/* Total box */}
          <div className="bg-gradient-to-br from-navy to-navy-2 p-6 text-center">
            <div className="text-[11px] font-bold uppercase tracking-[1.2px] text-muted-foreground mb-2.5">
              Estimated Usage Cost
            </div>
            <div className="text-4xl font-black text-gold tracking-tight leading-none">
              {fmt(total)}
            </div>
            <div className="text-[13px] text-muted-foreground mt-2 font-medium">USD per month</div>
            <div className="text-[11.5px] text-gold mt-1.5 font-medium">
              ✅ Includes AU$5.00 bonus credit
            </div>
          </div>

          {/* Breakdown */}
          <div className="px-5 py-5">
            {(Object.keys(RATES) as UsageKey[]).map((key) => {
              const r = RATES[key];
              return (
                <div
                  key={key}
                  className="flex justify-between items-center py-2.5 border-b border-border/60 text-[13px] last:border-b-0"
                >
                  <span className="flex items-center gap-2 text-muted-foreground font-medium">
                    <span className="text-[15px]">{r.emoji}</span>
                    {r.label.split(" ").slice(0, 2).join(" ")}
                  </span>
                  <span className="font-bold text-foreground">{fmt(costs[key])} USD</span>
                </div>
              );
            })}
          </div>

          {/* Bonus row */}
          <div className="bg-success/15 px-5 py-2.5 flex justify-between items-center text-[13px]">
            <span className="text-success font-semibold">🎁 Welcome Bonus Credit</span>
            <span className="font-bold text-success">− AU$5.00</span>
          </div>

          {/* Divider total */}
          <div className="px-5 py-2.5 bg-muted/40 border-t-2 border-border flex justify-between items-center">
            <span className="text-[13.5px] font-bold text-foreground/80">Est. Monthly Usage</span>
            <span className="text-base font-black text-navy">{fmt(total)} USD</span>
          </div>

          {/* Info box */}
          <div className="mx-5 my-4 bg-accent/60 rounded-[10px] p-3.5 text-[12px] text-muted-foreground leading-relaxed border border-accent">
            <Info className="inline w-3.5 h-3.5 mr-1 -mt-0.5 text-primary" />
            <strong className="text-navy">Your plan fee is separate.</strong> Usage charges are
            billed on top of your flat monthly plan. LC usage is billed in USD by the platform — AU
            pricing on plans only.
          </div>

          {/* CTA */}
          <div className="px-5 pb-5">
            <a href="#plans">
              <Button className="w-full h-12 font-bold text-sm rounded-[10px] bg-primary text-primary-foreground hover:bg-primary/90 group">
                Start 14-Day Free Trial
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Info Notes */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
        <div className="bg-card rounded-[10px] p-5 shadow-sm border-l-4 border-primary">
          <div className="text-xl mb-2.5">📬</div>
          <h4 className="text-[13.5px] font-bold text-navy mb-1.5">LC Email — Flat Low Rate</h4>
          <p className="text-[12.5px] text-muted-foreground leading-relaxed">
            Send marketing emails, automations, and newsletters. Billed per email sent — no monthly
            send limits on your plan.
          </p>
        </div>
        <div className="bg-card rounded-[10px] p-5 shadow-sm border-l-4 border-primary">
          <div className="text-xl mb-2.5">💬</div>
          <h4 className="text-[13.5px] font-bold text-navy mb-1.5">SMS — AU Outbound Rates</h4>
          <p className="text-[12.5px] text-muted-foreground leading-relaxed">
            Send SMS to Australian numbers via LC Phone. Rates are standard carrier pass-through —
            no markup. 1 segment ≈ 160 chars.
          </p>
        </div>
        <div className="bg-card rounded-[10px] p-5 shadow-sm border-l-4 border-primary">
          <div className="text-xl mb-2.5">🎙️</div>
          <h4 className="text-[13.5px] font-bold text-navy mb-1.5">Voice AI — Per Minute</h4>
          <p className="text-[12.5px] text-muted-foreground leading-relaxed">
            Your AI receptionist handles inbound calls 24/7, books appointments, answers FAQs. Only
            billed for minutes where the AI speaks.
          </p>
        </div>
      </div>
    </section>
  );
}
