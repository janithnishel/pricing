import { useState } from "react";
import { Plan, FAQS } from "@/lib/clientflow-data";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { CheckCircle2, ShieldCheck, Sparkles, HelpCircle, PhoneCall, Calendar } from "lucide-react";
import { toast } from "sonner";

interface TrialAndFaqModalProps {
  selectedPlan: Plan | null;
  isOpen: boolean;
  onClose: () => void;
  currency: "AUD" | "USD";
}

// Skilled tracking helper template
const postTrackingEvent = (
  trackingPayload: Record<string, unknown> & {
    formData: Record<string, unknown>;
    formLabels: Record<string, string>;
  },
  options: {
    customFields?: Record<string, { value?: unknown; label: string }>;
  } = {},
) => {
  const { customFields = {} } = options;
  const eventPayload = {
    ...trackingPayload,
    formData: { ...trackingPayload.formData },
    formLabels: { ...trackingPayload.formLabels },
  };
  const body = new FormData();

  for (const [key, field] of Object.entries(customFields)) {
    if (field.value === undefined) continue;
    eventPayload.formData[key] = field.value;
    eventPayload.formLabels[key] = field.label;
  }

  for (const key of Object.keys(eventPayload.formData)) {
    eventPayload.formLabels[key] ||= key;
  }

  body.append("event", JSON.stringify(eventPayload));

  fetch("https://backend.leadconnectorhq.com/external-tracking/events", {
    method: "POST",
    headers: {
      version: "2021-07-28",
    },
    body,
  }).catch(() => {});
};

export function TrialAndFaqModal({
  selectedPlan,
  isOpen,
  onClose,
  currency,
}: TrialAndFaqModalProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [preferredCurrency, setPreferredCurrency] = useState(currency);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !firstName) {
      toast.error("Please enter your name and email address.");
      return;
    }

    setIsSubmitting(true);

    // Track Form Submission event
    try {
      const trackingPayload = {
        type: "external_form_submission",
        timestamp: Date.now(),
        formId: "clientflow-trial-signup",
        formData: {
          first_name: firstName,
          last_name: lastName,
          email: email,
          phone: phone,
          organization: company,
        },
        formLabels: {
          first_name: "First Name",
          last_name: "Last Name",
          email: "Email Address",
          phone: "Phone Number",
          organization: "Business / Company Name",
        },
        url: window.location.href,
        title: document.title,
        path: window.location.pathname,
        userAgent: navigator.userAgent,
        trackingId: "tk_34e34be0037c45d3badba950a33080f4",
        locationId: "Xz9k6gbYdtKglPHAyZbw",
        projectId: "1789700829408721345",
        sessionId: crypto.randomUUID(),
        properties: {
          deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? "mobile" : "desktop",
          source: "ai_studio",
          projectId: "1789700829408721345",
          formName: "ClientFlow CRM Free Trial & Demo Signup",
          planSelected: selectedPlan ? selectedPlan.name : "Starter",
          currencyPreference: preferredCurrency,
        },
      };

      postTrackingEvent(trackingPayload);
    } catch (err) {
      console.error(err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success("Your 14-day trial account is ready to be set up!");
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <>
      {/* Trial Modal Dialog */}
      <Dialog open={isOpen} onOpenChange={handleReset}>
        <DialogContent className="max-w-md md:max-w-lg p-6 md:p-8 bg-card border-border rounded-2xl shadow-2xl">
          <DialogHeader>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold w-fit mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              {selectedPlan?.ctaAction === "demo"
                ? "Book VIP Strategy Demo"
                : "Start 14-Day Free Trial"}
            </div>
            <DialogTitle className="text-2xl font-extrabold text-foreground tracking-tight">
              {selectedPlan
                ? `Get Started on ClientFlow CRM ${selectedPlan.name}`
                : "Start Your ClientFlow CRM Free Trial"}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-xs md:text-sm mt-1">
              Includes 14 days free access + 1-on-1 Zoom onboarding setup call with our onboarding
              specialist!
            </DialogDescription>
          </DialogHeader>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="fn" className="text-xs font-semibold">
                    First Name *
                  </Label>
                  <Input
                    id="fn"
                    required
                    placeholder="Sarah"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="text-xs"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="ln" className="text-xs font-semibold">
                    Last Name
                  </Label>
                  <Input
                    id="ln"
                    placeholder="Cordiner"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="text-xs"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="em" className="text-xs font-semibold">
                  Work Email Address *
                </Label>
                <Input
                  id="em"
                  type="email"
                  required
                  placeholder="sarah@yourbusiness.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="ph" className="text-xs font-semibold">
                    Phone Number
                  </Label>
                  <Input
                    id="ph"
                    placeholder="+61 400 000 000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="text-xs"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="cur" className="text-xs font-semibold">
                    Billing Currency
                  </Label>
                  <Select
                    value={preferredCurrency}
                    onValueChange={(val) => setPreferredCurrency(val as "AUD" | "USD")}
                  >
                    <SelectTrigger id="cur" className="text-xs">
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AUD">AUD (Australian Dollar)</SelectItem>
                      <SelectItem value="USD">USD (US Dollar)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="comp" className="text-xs font-semibold">
                  Business / School Name
                </Label>
                <Input
                  id="comp"
                  placeholder="e.g. EduEmpire Academy"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="text-xs"
                />
              </div>

              <div className="bg-muted/40 p-3 rounded-xl border border-border/60 text-[11px] text-muted-foreground flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  No lock-in contracts. Instant access to courses, CRM & funnels. Free 60-min 1-on-1
                  Zoom onboarding setup included!
                </span>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full font-bold bg-primary text-primary-foreground hover:bg-primary/90 py-5 text-sm"
              >
                {isSubmitting
                  ? "Creating Your Account..."
                  : selectedPlan?.ctaText
                    ? `${selectedPlan.ctaText} — ${selectedPlan.name}`
                    : "Get Started Free"}
              </Button>
            </form>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-primary/15 text-primary mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-extrabold text-foreground">Welcome to ClientFlow CRM!</h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                We've sent your account activation link and 60-min Zoom setup call booking
                invitation to <strong className="text-foreground">{email}</strong>.
              </p>

              <div className="p-4 rounded-xl bg-muted/50 border border-border text-xs text-left space-y-2">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" /> Next Steps:
                </div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Check your email inbox for login credentials.</li>
                  <li>Schedule your free 60-min setup call with our onboarding specialist.</li>
                  <li>Join our daily live Zoom group Q&A sessions.</li>
                </ul>
              </div>

              <Button onClick={handleReset} variant="outline" className="w-full font-semibold">
                Close
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* FAQ Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto" id="faqs">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            Got questions? We've got answers.
          </h2>
          <p className="text-muted-foreground text-sm mt-2">
            Everything you need to know about ClientFlow CRM plans, usage billing, and 24/7 support.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`faq-${idx}`}
              className="border border-border rounded-xl px-5 py-1 bg-card/70 shadow-sm"
            >
              <AccordionTrigger className="text-left font-bold text-foreground text-sm md:text-base hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-xs md:text-sm text-muted-foreground leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}
