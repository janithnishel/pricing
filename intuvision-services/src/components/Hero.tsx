import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-24 pb-16 overflow-hidden bg-[#0f1b3d]">
      {/* Background Image/Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-[#3b6fa0]/20 via-[#1e3a5f]/10 to-transparent opacity-80 pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-[#0B1221] px-4 py-2 text-sm font-medium text-white shadow-[0_0_15px_rgba(37,99,235,0.15)]">
              <span className="text-blue-500 mr-2">⚡</span>
              By ClientFlow - Built for Growing Businesses
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              Let's Get Your Tech <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                DONE FOR YOU
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl font-light leading-relaxed mx-auto lg:mx-0">
              When your tech is all done for you, you'll finally love your tech. 
              Imagine the speed at which you could be launched, live, and making money.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button size="lg" className="h-14 px-8 text-lg w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white rounded-full" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                View Our Services
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg w-full sm:w-auto border-blue-500/30 text-white hover:bg-white/10 rounded-full" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Get a Custom Quote
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[100px] -z-10 transform translate-y-10"></div>
            <img 
              src="https://vibe.filesafe.space/1782368885117120993/attachments/08a93263-4c11-4680-b12b-a9419e93a364.png" 
              alt="ClientFlow Professional" 
              className="w-full max-w-lg mx-auto object-cover rounded-3xl shadow-2xl relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
