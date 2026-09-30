import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export const ContactForm = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Need a More Customised Service?
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether you have a major migration from other software, a highly customised tech project, 
              or have fancy integrations you'd like put into place, let us help you with a custom quote.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 md:p-10 shadow-lg">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" placeholder="Doe" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="organization">Organization *</Label>
                  <Input id="organization" placeholder="Your Company Name" required />
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-base">What services are you interested in?</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="service-setup" />
                    <label htmlFor="service-setup" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Quick Account Set-Up
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="service-web" />
                    <label htmlFor="service-web" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Website or Funnel Build
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="service-course" />
                    <label htmlFor="service-course" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Course & Learning Portal
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="service-ai" />
                    <label htmlFor="service-ai" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      AI Chatbot & Automation
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="service-email" />
                    <label htmlFor="service-email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Email Marketing System
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="service-onboarding" />
                    <label htmlFor="service-onboarding" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Client Onboarding System
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="service-migration" />
                    <label htmlFor="service-migration" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Platform Migration
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="service-other" />
                    <label htmlFor="service-other" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Other Custom Project
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="comments">Project Details</Label>
                <Textarea 
                  id="comments" 
                  placeholder="Tell us a bit about what you need help with..." 
                  className="min-h-[120px]"
                />
              </div>

              <Button type="submit" size="lg" className="w-full text-lg h-14">
                Get Custom Quote
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
