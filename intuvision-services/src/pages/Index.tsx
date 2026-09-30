import { Hero } from "@/components/Hero";
import { ServicesBento } from "@/components/ServicesBento";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Simple Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-foreground">
            <img 
              src="https://vibe.filesafe.space/1781959095335714383/attachments/79e5149d-bdf9-48ea-ae2b-c547079df118.png" 
              alt="ClientFlow CRM" 
              className="h-24 object-contain" 
            />
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Custom Quote</a>
          </nav>
          <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Get Started
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <Hero />
        
        {/* Trust Banner */}
        <div className="bg-[#0f1b3d] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <ShieldCheck className="mx-auto h-12 w-12 mb-4 text-blue-400" />
            <h3 className="text-3xl font-bold mb-4">Get Started Risk-Free. We'll Take It From There.</h3>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
              Our services are provided in-house, by our own directly employed, experienced tech specialists.
            </p>
            <img 
              src="https://vibe.filesafe.space/1782368885117120993/attachments/f8d34afc-f916-4fcb-abd6-7c9f128e25e0.png" 
              alt="ClientFlow Team" 
              className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        <ServicesBento />
        
        {/* Hire an Expert Section */}
        <section className="py-24 bg-[#0f1b3d] text-white overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Just Want a Quick Hand?</h2>
                <p className="text-xl text-white/80 mb-10">
                  Book one of our ClientFlow TechSperts by the hour for personal, hands-on tech services. 
                  Attend the session live or provide detailed instructions for us to execute during the hour.
                </p>
                <div className="bg-card text-card-foreground rounded-xl p-8 shadow-xl max-w-md">
                  <div className="text-3xl font-bold mb-2">$150 <span className="text-lg text-muted-foreground font-normal">/ hour</span></div>
                  <p className="text-muted-foreground mb-6">Strictly 60 minutes of dedicated expert time.</p>
                  <Button size="lg" className="w-full text-lg h-14" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
                    Book an Expert Now
                  </Button>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <img 
                  src="https://vibe.filesafe.space/1782368885117120993/attachments/942bca5f-e7ee-477a-92bc-30dfda64bb03.png" 
                  alt="ClientFlow Expert" 
                  className="w-full max-w-md mx-auto object-cover rounded-2xl relative z-10 shadow-2xl"
                />
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl -z-10 transform scale-75 translate-y-12"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Booking Placeholder Section */}
        <section id="booking" className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Select a Time</h2>
              <p className="text-muted-foreground mb-8">Choose a convenient slot for your 60-minute expert session.</p>
              <div className="bg-muted/30 border border-border rounded-xl p-12 flex items-center justify-center min-h-[400px]">
                <p className="text-muted-foreground">Calendar Integration Loading...</p>
              </div>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} ClientFlow CRM. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
