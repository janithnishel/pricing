import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, ArrowRight } from "lucide-react";

const categories = [
  { id: "all", label: "All Services" },
  { id: "core", label: "Core Setup" },
  { id: "marketing", label: "Marketing & Sales" },
  { id: "education", label: "Content & Education" },
  { id: "events", label: "Events & Webinars" },
  { id: "automation", label: "AI & Automation" }
];

const services = [
  {
    id: "quick-setup",
    category: "core",
    title: "Quick Account Set-Up",
    description: "A hands-on, foundational implementation service ensuring your account is fully operational and configured correctly from day one.",
    price: "$150",
    featured: true,
    image: "https://vibe.filesafe.space/1782368885117120993/assets/4c07458f-376c-4ac3-ae72-b76c43769bd7.jpg",
    includes: [
      "Live 90-minute strategy session",
      "Business profile & domain configuration",
      "Staff member setup & permissions",
      "Email compliance & sending setup",
      "Sales pipeline & customer journey creation"
    ]
  },
  {
    id: "appointment-booking",
    category: "core",
    title: "Appointment Booking System",
    description: "Set up customized digital calendars with automated reminders and follow-ups.",
    price: "$497",
    featured: false,
    image: "https://vibe.filesafe.space/1782368885117120993/assets/4819808e-6c1d-4f03-bc5c-c6789bdb20f8.jpg",
    includes: [
      "Up to 3 digital calendars (e.g., 15m, 60m, 90m)",
      "Branded calendar design",
      "Sync with preferred calendar",
      "Automated reminders & notifications",
      "Reschedule & cancellation links"
    ]
  },
  {
    id: "contracts-invoicing",
    category: "core",
    title: "Contracts & Invoicing",
    description: "Professional templates for contracts, proposals, and automated invoicing.",
    price: "$1,997",
    featured: false,
    image: "https://vibe.filesafe.space/1782368885117120993/assets/fc3dc9d1-ef6c-4719-bf6c-38a8a6b9fe3d.jpg",
    includes: [
      "Contract & proposal templates",
      "Invoice & receipt templates",
      "Payment reminder automation",
      "Custom fields mapping",
      "Brand alignment"
    ]
  },
  {
    id: "website",
    category: "marketing",
    title: "5-Page Website Build",
    description: "Launch a stunning, SEO-optimized, and AI-ready website designed and built entirely for your brand.",
    price: "$1,497",
    featured: true,
    image: "https://vibe.filesafe.space/1782368885117120993/assets/490e7824-6dcc-4c9f-a15d-d4b5b59753e3.jpg",
    includes: [
      "Up to 5 custom pages on your domain",
      "Fully branded to your aesthetic",
      "Lead capture & checkout integration",
      "Custom AI chat widget installed",
      "On-page SEO setup"
    ]
  },
  {
    id: "funnel",
    category: "marketing",
    title: "Automated Sales Funnel",
    description: "A conversion-focused sales funnel designed to turn visitors into buyers on autopilot.",
    price: "$2,297",
    featured: false,
    image: "https://vibe.filesafe.space/1782368885117120993/assets/d2e8e58e-de3b-4b5c-a13e-2290b1d76ea5.jpg",
    includes: [
      "High-converting landing page",
      "Automated order fulfillment",
      "Abandoned cart recovery",
      "Payment gateway setup"
    ]
  },
  {
    id: "lead-magnet",
    category: "marketing",
    title: "Lead Magnet & Nurture System",
    description: "Grow your email list and nurture new leads into warm buyers automatically.",
    price: "$997",
    featured: false,
    image: "https://vibe.filesafe.space/1782368885117120993/assets/9d25a85d-79f4-4562-9e0b-60ed61d4a45d.jpg",
    includes: [
      "Free opt-in funnel creation",
      "Automated delivery system",
      "Lead tagging and tracking",
      "Automated nurture sequence"
    ]
  },
  {
    id: "email-system",
    category: "marketing",
    title: "Email & Nurture System",
    description: "Set up a high-ROI email marketing engine that nurtures leads and drives sales automatically.",
    price: "$497",
    featured: false,
    image: "https://vibe.filesafe.space/1782368885117120993/assets/4f55e424-bbe8-4e65-b821-a070d414a8c9.jpg",
    includes: [
      "Branded master email template",
      "10-part automated welcome sequence",
      "Newsletter automation setup",
      "Smart list segmentation"
    ]
  },
  {
    id: "reputation",
    category: "marketing",
    title: "Reviews & Reputation",
    description: "Collect reviews on autopilot to boost your public reputation and stand out.",
    price: "$297",
    featured: false,
    image: "https://vibe.filesafe.space/1782368885117120993/assets/291ef229-0ae4-4e06-866e-4d0d10c6df09.jpg",
    includes: [
      "Review request automation",
      "Google & Facebook integration",
      "Negative review triage",
      "Reputation management dashboard"
    ]
  },
  {
    id: "affiliate",
    category: "marketing",
    title: "Affiliate Management",
    description: "Turn customers into marketers with a complete affiliate referral system.",
    price: "$597",
    featured: false,
    image: "https://vibe.filesafe.space/1782368885117120993/assets/550b87e4-1367-4d8e-a93a-f1dd81930aa0.jpg",
    includes: [
      "Affiliate campaign setup",
      "Payout terms configuration",
      "Automated affiliate onboarding",
      "Custom affiliate portal"
    ]
  },
  {
    id: "course-portal",
    category: "education",
    title: "Course & Learning Portal",
    description: "Scale your impact with a fully configured online course and coaching platform.",
    price: "$1,997",
    featured: true,
    image: "https://vibe.filesafe.space/1782368885117120993/assets/72cc856a-026f-4ac9-bc85-31474297ae81.jpg",
    includes: [
      "Secure student portal creation",
      "Course structure & placeholder setup",
      "Automated onboarding & check-ins",
      "Progress tracking integration"
    ]
  },
  {
    id: "membership",
    category: "education",
    title: "Membership Set Up",
    description: "Boost recurring revenue with a fully automated membership subscription platform.",
    price: "$2,497",
    featured: false,
    image: "https://vibe.filesafe.space/1782368885117120993/assets/7fa6e226-7e55-4cb2-a126-ebbd682be80c.jpg",
    includes: [
      "Membership tech configuration",
      "Subscription payment setup",
      "Student portal customization",
      "Member onboarding automations"
    ]
  },
  {
    id: "community",
    category: "education",
    title: "Community Setup",
    description: "Create your own private or public community away from traditional social media.",
    price: "$997",
    featured: false,
    image: "https://vibe.filesafe.space/1782368885117120993/assets/900d892d-8e52-4427-b751-040b2d54cfd1.jpg",
    includes: [
      "Custom community branding",
      "Categorized chat threads",
      "Automated member access",
      "Event calendar integration"
    ]
  },
  {
    id: "blog",
    category: "education",
    title: "Blog Set Up",
    description: "Dominate search engine results with a fully configured, AI-ready blog platform.",
    price: "$997",
    featured: false,
    image: "https://vibe.filesafe.space/1782368885117120993/assets/f286a9d1-2f2a-4dc0-8e11-f82f6d88f371.jpg",
    includes: [
      "Blog master templates",
      "Blog directory page setup",
      "SEO optimization settings",
      "Author profile configuration"
    ]
  },
  {
    id: "speaker-system",
    category: "events",
    title: "Professional Speaker System",
    description: "A complete system to manage speaking inquiries, bookings, and outreach.",
    price: "$2,997",
    featured: true,
    image: "https://vibe.filesafe.space/1782368885117120993/assets/a6880232-e588-4388-ae95-f73b041e4878.jpg",
    includes: [
      "Professional speaker web page",
      "Booking inquiry workflows",
      "Cold outreach automations",
      "Event management pipeline"
    ]
  },
  {
    id: "evergreen-webinar",
    category: "events",
    title: "Evergreen Webinar",
    description: "A hands-free lead generation and sales system running your webinars 24/7.",
    price: "$997",
    featured: false,
    image: "https://vibe.filesafe.space/1782368885117120993/assets/934a1c75-7aba-4c99-acd3-9e630f4f6c5a.jpg",
    includes: [
      "Opt-in & purchase funnel",
      "Automated webinar delivery",
      "Post-webinar nurture sequence",
      "Upsell automation"
    ]
  },
  {
    id: "live-webinar",
    category: "events",
    title: "Live Webinar Set Up",
    description: "Everything you need to host, promote, and follow up on live online workshops.",
    price: "$997",
    featured: false,
    image: "https://vibe.filesafe.space/1782368885117120993/assets/fd26adc0-1dc0-4107-a4c7-782166402b93.jpg",
    includes: [
      "Registration & thank you pages",
      "Pre-webinar reminder sequence",
      "Post-webinar follow-up",
      "Replay delivery automation"
    ]
  },
  {
    id: "events-retreats",
    category: "events",
    title: "Event & Retreat Tickets",
    description: "Professional event management for selling multiple ticket tiers and handling attendees.",
    price: "$2,497",
    featured: false,
    image: "https://vibe.filesafe.space/1782368885117120993/assets/f124eeb1-c18b-4611-a0e8-c2b295a9da88.jpg",
    includes: [
      "Multi-tier ticket sales setup",
      "Event management automation",
      "Attendee reminders & updates",
      "Post-event follow-ups"
    ]
  },
  {
    id: "ai-bot",
    category: "automation",
    title: "AI Chatbot & Auto-Responder",
    description: "Save hours of admin with an AI agent that answers queries and books appointments 24/7.",
    price: "$497",
    featured: true,
    image: "https://vibe.filesafe.space/1782368885117120993/assets/dd607e67-e476-437b-890f-3cc1f3406f6a.jpg",
    includes: [
      "Custom AI knowledgebase training",
      "Website chat widget integration",
      "Social media auto-responder setup",
      "Appointment booking routing"
    ]
  },
  {
    id: "onboarding",
    category: "automation",
    title: "Client Onboarding System",
    description: "Streamline your service delivery with an automated client intake and project management flow.",
    price: "$1,997",
    featured: false,
    image: "https://vibe.filesafe.space/1782368885117120993/assets/744bb32b-a4a2-40fe-86db-199560993ac8.jpg",
    includes: [
      "Custom intake form creation",
      "Automated contract & invoicing",
      "Welcome packet delivery",
      "Internal task generation"
    ]
  }
];

export const ServicesBento = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredServices = activeTab === "all" 
    ? services 
    : services.filter(s => s.category === activeTab);

  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Done-For-You Tech Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Select what you need and get your dream business running effortlessly. 
            Expected turnaround of less than 14 days per project.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full mb-12" onValueChange={setActiveTab}>
          <div className="flex justify-center w-full overflow-x-auto pb-4">
            <TabsList className="bg-background/50 border border-border h-auto flex-wrap justify-center p-1 gap-1">
              {categories.map(cat => (
                <TabsTrigger 
                  key={cat.id} 
                  value={cat.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-6 py-2.5 text-sm font-medium transition-all"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
              {filteredServices.map((service) => (
                <Card 
                  key={service.id} 
                  className={`flex flex-col h-full overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300 ${service.featured ? 'bg-[#0f1b3d] text-white shadow-xl ring-1 ring-blue-500/50' : 'bg-card'}`}
                >
                  <div className="h-48 w-full overflow-hidden relative group">
                    <div className="absolute inset-0 bg-[#0f1b3d]/10 group-hover:bg-transparent transition-colors z-10" />
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {service.featured && (
                      <div className="absolute top-3 right-3 z-20 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        POPULAR
                      </div>
                    )}
                  </div>
                  <CardHeader className={service.featured ? 'pt-5' : 'bg-muted/10 pt-5'}>
                    <div className="mb-2">
                      <span className={`text-xs font-semibold uppercase tracking-wider ${service.featured ? 'text-blue-400' : 'text-blue-600'}`}>
                        {categories.find(c => c.id === service.category)?.label}
                      </span>
                    </div>
                    <CardTitle className={`text-xl ${service.featured ? 'text-white' : 'text-foreground'}`}>
                      {service.title}
                    </CardTitle>
                    <CardDescription className={`text-sm mt-2 line-clamp-2 min-h-[40px] ${service.featured ? 'text-white/80' : 'text-muted-foreground'}`}>
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-grow pt-6">
                    <div className="mb-6">
                      <span className={`text-3xl font-bold ${service.featured ? 'text-white' : 'text-foreground'}`}>
                        {service.price}
                      </span>
                      <span className={`text-sm ml-1 ${service.featured ? 'text-white/70' : 'text-muted-foreground'}`}>
                        AUD
                      </span>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="what-you-get" className={`border-b-0 ${service.featured ? 'border-white/20' : ''}`}>
                        <AccordionTrigger className={`py-2 hover:no-underline ${service.featured ? 'text-white hover:text-white/90' : ''}`}>
                          <span className="font-medium text-sm">What You Get</span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2.5 pt-2">
                            {service.includes.map((item, i) => (
                              <li key={i} className="flex items-start gap-2.5">
                                <CheckCircle2 className={`h-4 w-4 shrink-0 mt-0.5 ${service.featured ? 'text-blue-400' : 'text-blue-600'}`} />
                                <span className={`text-sm leading-tight ${service.featured ? 'text-white/90' : 'text-muted-foreground'}`}>
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                  
                  <CardFooter className="pt-4 pb-6 mt-auto">
                    <Button 
                      className="w-full group" 
                      variant={service.featured ? "secondary" : "default"}
                      size="lg"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Select Service
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};
