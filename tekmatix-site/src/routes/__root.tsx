import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportVibeError } from "../lib/vibe-error-reporting";
import { Toaster } from "sonner";
import { Sparkles, PhoneCall, ShieldCheck, MessageSquare, ArrowUpRight } from "lucide-react";
import { Button } from "../components/ui/button";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportVibeError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ClientFlow CRM: Simple, Transparent Pricing Plans" },
      {
        name: "description",
        content:
          "Solo Starter, Growth, Scale and Ultimate pricing plans for Australian SMEs. Built-in CRM, social media planner, workflows, and bookings.",
      },
      { name: "author", content: "ClientFlow CRM" },
      { property: "og:title", content: "ClientFlow CRM Plans & Pricing" },
      {
        property: "og:description",
        content:
          "Simple, transparent pricing with unlimited bookings, CRM, automation, and dedicated support for Australian businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Outfit:wght@600;700;800&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="font-['Plus_Jakarta_Sans',sans-serif] bg-background text-foreground antialiased min-h-screen flex flex-col">
        {/* Header Navigation */}
        <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="https://vibe.filesafe.space/1789700829408721345/attachments/f3166193-50f5-4050-9324-316b30d4921f.png"
                alt="ClientFlow CRM Logo"
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            {/* Nav Links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-foreground/80">
              <a href="#plans" className="hover:text-primary transition-colors">
                Plans & Pricing
              </a>
              <a href="#compare-features" className="hover:text-primary transition-colors">
                Feature Matrix
              </a>
              <a href="#savings" className="hover:text-primary transition-colors">
                Savings Calculator
              </a>
              <a href="#faqs" className="hover:text-primary transition-colors">
                FAQs
              </a>
            </nav>

            {/* Header Actions */}
            <div className="flex items-center gap-3">
              <a
                href="https://clientflowcrm.com.au/"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-foreground hover:text-primary px-3 py-2 transition-colors"
              >
                LOGIN <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a href="#plans">
                <Button
                  size="sm"
                  className="font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-md"
                >
                  <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                  Start Free Trial
                </Button>
              </a>
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        {/* ClientFlow Styled Dark Footer */}
        <footer className="bg-secondary text-muted-foreground py-16 px-4 border-t border-border text-sm mt-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
            {/* Column 1: Brand & Logo */}
            <div className="lg:col-span-2 space-y-4">
              <img
                src="https://vibe.filesafe.space/1789700829408721345/attachments/f3166193-50f5-4050-9324-316b30d4921f.png"
                alt="ClientFlow CRM Logo"
                className="h-12 w-auto object-contain"
              />
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                The all-in-one growth platform Australian SMEs use to capture, nurture and close
                more leads.
              </p>
              <div className="space-y-1 text-xs text-muted-foreground">
                <p>
                  <strong className="text-secondary-foreground font-semibold">Contact:</strong>{" "}
                  <a
                    href="mailto:info@intuvision.pro"
                    className="hover:text-primary transition-colors"
                  >
                    info@intuvision.pro
                  </a>
                </p>
                <p>ClientFlow CRM is a Web-based Marketing CRM by IntuVision.</p>
              </div>
              {/* Social icons */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.facebook.com/IntuVision.pro/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-muted/30 border border-border flex items-center justify-center text-muted-foreground hover:text-secondary-foreground hover:bg-primary hover:border-primary transition-all text-xs font-bold"
                >
                  FB
                </a>
                <a
                  href="https://www.linkedin.com/company/intuvision-tech/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-muted/30 border border-border flex items-center justify-center text-muted-foreground hover:text-secondary-foreground hover:bg-primary hover:border-primary transition-all text-xs font-bold"
                >
                  IN
                </a>
                <a
                  href="https://www.youtube.com/@clientflowcrm"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-muted/30 border border-border flex items-center justify-center text-muted-foreground hover:text-secondary-foreground hover:bg-destructive hover:border-destructive transition-all text-xs font-bold"
                >
                  YT
                </a>
              </div>
            </div>

            {/* Column 2: Industries */}
            <div>
              <h4 className="font-bold text-secondary-foreground text-base mb-4 tracking-tight">
                Industries
              </h4>
              <ul className="space-y-2.5 text-xs text-muted-foreground">
                <li>
                  <a href="#plans" className="hover:text-secondary-foreground transition-colors">
                    SMEs & Local Biz
                  </a>
                </li>
                <li>
                  <a href="#plans" className="hover:text-secondary-foreground transition-colors">
                    Tradies
                  </a>
                </li>
                <li>
                  <a href="#plans" className="hover:text-secondary-foreground transition-colors">
                    Real Estate
                  </a>
                </li>
                <li>
                  <a href="#plans" className="hover:text-secondary-foreground transition-colors">
                    Coaches & Consultants
                  </a>
                </li>
                <li>
                  <a href="#plans" className="hover:text-secondary-foreground transition-colors">
                    Educators
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h4 className="font-bold text-secondary-foreground text-base mb-4 tracking-tight">
                Company
              </h4>
              <ul className="space-y-2.5 text-xs text-muted-foreground">
                <li>
                  <a
                    href="#compare-features"
                    className="hover:text-secondary-foreground transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a href="#plans" className="hover:text-secondary-foreground transition-colors">
                    Affiliate Program
                  </a>
                </li>
                <li>
                  <a href="#plans" className="hover:text-secondary-foreground transition-colors">
                    Pricing Plans
                  </a>
                </li>
                <li>
                  <a href="#faqs" className="hover:text-secondary-foreground transition-colors">
                    Book a Demo
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Comparisons */}
            <div>
              <h4 className="font-bold text-secondary-foreground text-base mb-4 tracking-tight">
                Comparisons
              </h4>
              <ul className="space-y-2.5 text-xs text-muted-foreground">
                <li>
                  <a href="#savings" className="hover:text-secondary-foreground transition-colors">
                    ClientFlow vs Kajabi
                  </a>
                </li>
                <li>
                  <a href="#savings" className="hover:text-secondary-foreground transition-colors">
                    ClientFlow vs Zoho
                  </a>
                </li>
                <li>
                  <a href="#savings" className="hover:text-secondary-foreground transition-colors">
                    ClientFlow vs HubSpot
                  </a>
                </li>
                <li>
                  <a href="#savings" className="hover:text-secondary-foreground transition-colors">
                    ClientFlow vs ActiveCampaign
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 5: Legal */}
            <div>
              <h4 className="font-bold text-secondary-foreground text-base mb-4 tracking-tight">
                Legal
              </h4>
              <ul className="space-y-2.5 text-xs text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-secondary-foreground transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary-foreground transition-colors">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary-foreground transition-colors">
                    Affiliate Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="max-w-7xl mx-auto pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <p>© 2026 ClientFlow CRM by IntuVision. All rights reserved.</p>
            <p className="text-muted-foreground font-medium">
              Built for Aussie businesses that value time, simplicity, and growth. ⚡
            </p>
          </div>
        </footer>

        <Toaster position="top-right" />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
