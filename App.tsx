import React, { useState, useEffect, useRef } from 'react';
import { Phone, Menu, Mail, MapPin, ArrowRight, ArrowLeft, CheckCircle2, X, Calculator, HardHat, Sparkles, Building2, ShieldCheck, Ruler, Home as HomeIcon, Hammer, Users, Zap } from 'lucide-react';
import { SERVICES, BUSINESS_INFO, getIcon, PROJECTS_BY_SERVICE, JOURNEY_STEPS } from './constants';

const useReveal = () => {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, active };
};

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
};

const ProjectDetailsPage: React.FC<{ serviceId: string; onBack: () => void; onContact: () => void }> = ({ serviceId, onBack, onContact }) => {
  const service = SERVICES.find(s => s.id === serviceId);
  const projects = PROJECTS_BY_SERVICE[serviceId] || [];
  const [currentBg, setCurrentBg] = useState(projects[0]?.mainImage || "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#e2e8f0] animate-in fade-in duration-700 relative overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none transition-all duration-1000 overflow-hidden">
        {currentBg && (
          <img 
            src={currentBg} 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-[#e2e8f0] via-[#e2e8f0]/40 to-[#e2e8f0]" />
        <div className="absolute inset-0 bg-[#1E2B58]/5" />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-[150] bg-[#1E2B58] py-6 border-b border-white/10 shadow-lg">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="group flex items-center space-x-3 transition-all duration-300 font-mono-tech uppercase text-[11px] tracking-[0.4em] text-white hover:text-dm-red"
          >
            <div className="bg-white/10 p-2 rounded-lg group-hover:bg-dm-red transition-all">
              <ArrowLeft size={16} />
            </div>
            <span className="font-bold hidden sm:inline">Back to Home</span>
            <span className="font-bold sm:hidden">Home</span>
          </button>
          
          <div className="flex items-center space-x-2">
            <div className="bg-dm-red p-1.5 rounded-lg">
               <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
                  <path d="M12 3l10 9h-3v8H5v-8H2l10-9zm-1 12v3h2v-3h-2z" />
               </svg>
            </div>
            <span className="font-bold tracking-tighter text-xl md:text-2xl text-white font-heading">
              D.M. <span className="text-dm-red">BUILDING</span>
            </span>
          </div>
        </div>
      </nav>

      <div className="relative pt-32 pb-12 overflow-hidden blueprint-grid border-b border-slate-300/50 z-10">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <div className="inline-flex items-center space-x-3 mb-4 font-mono-tech text-[11px] text-[#1E2B58] uppercase tracking-[0.6em] font-bold">
              <span className="w-16 h-px bg-dm-red"></span>
              <span>Project Excellence Archive</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#1E2B58] leading-tight mb-4 uppercase font-heading tracking-tighter">
              {service?.title}
            </h1>
            <p className="text-lg md:text-2xl text-slate-800 leading-relaxed font-semibold border-l-4 border-dm-red pl-8 italic max-w-3xl">
              {service?.description}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 space-y-24 relative z-10">
        {projects.map((project, pIdx) => (
          <div key={pIdx} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-slate-300 pb-20 last:border-0">
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-4">
                <div className="flex justify-between items-end border-b border-[#1E2B58]/20 pb-4">
                  <h2 className="text-3xl md:text-5xl font-black text-[#1E2B58] uppercase font-heading tracking-tight leading-tight">
                    {project.title}
                  </h2>
                  <span className="text-dm-red font-mono-tech text-xs font-black tracking-[0.3em]">FY-{project.year}</span>
                </div>
                <div className="flex items-center text-slate-600 space-x-3 text-[10px] font-mono-tech uppercase tracking-[0.4em]">
                  <MapPin size={14} className="text-dm-red" />
                  <span>Location: {project.location}</span>
                </div>
              </div>

              <p className="text-base md:text-lg text-slate-800 leading-relaxed font-medium">
                {project.fullDescription}
              </p>

              <div className="space-y-4">
                <h4 className="text-[10px] font-mono-tech uppercase tracking-[0.5em] text-[#1E2B58]/50 font-black">Deliverables</h4>
                <div className="grid grid-cols-1 gap-2">
                  {project.highlights.map((h, hIdx) => (
                    <div 
                      key={hIdx} 
                      className="flex items-center space-x-4 text-slate-900 bg-white border border-slate-300 p-4 rounded-2xl transition-all duration-300 hover:bg-[#1E2B58] hover:text-white group shadow-sm"
                    >
                      <CheckCircle2 size={16} className="text-dm-red group-hover:text-white transition-colors" />
                      <span className="text-sm font-bold uppercase tracking-widest">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button 
                  onClick={onContact}
                  className="flex items-center space-x-4 px-10 py-5 bg-[#1E2B58] hover:bg-dm-red text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all shadow-xl group"
                >
                  <span>Request Similar Project</span>
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              <div 
                onMouseEnter={() => setCurrentBg(project.mainImage)}
                className="group overflow-hidden rounded-[2.5rem] border border-slate-300 bg-white shadow-2xl relative cursor-pointer"
              >
                <img src={project.mainImage} alt={project.title} className="w-full object-cover aspect-video group-hover:scale-105 transition-transform duration-[1500ms]" />
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                {project.gallery.map((img, iIdx) => (
                  <div 
                    key={iIdx} 
                    onMouseEnter={() => setCurrentBg(img)}
                    className="group overflow-hidden rounded-[2rem] border border-slate-300 bg-white shadow-xl relative cursor-pointer aspect-square"
                  >
                    <img src={img} alt="gallery" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="py-24 bg-[#1E2B58] border-t border-white/10 text-center mt-12 relative z-10">
        <button 
          onClick={onBack}
          className="px-16 py-6 border-2 border-white/20 text-white hover:bg-dm-red hover:border-dm-red font-black uppercase tracking-[0.6em] text-sm transition-all duration-500 rounded-2xl"
        >
          Return to Hub
        </button>
      </footer>
    </div>
  );
};

const JourneyStepItem: React.FC<{ step: typeof JOURNEY_STEPS[0]; idx: number; isEven: boolean; onImageHover: (img: string) => void }> = ({ step, idx, isEven, onImageHover }) => {
  const { ref, active } = useReveal();
  return (
    <div 
      ref={ref}
      className={`flex flex-col lg:flex-row items-center gap-12 reveal ${active ? 'active' : ''} ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
    >
      <div className="w-full lg:w-1/2 space-y-8">
        <div className="relative">
          <span className="absolute -top-16 left-0 text-[10rem] font-black text-[#1E2B58]/5 font-heading pointer-events-none">{step.number}</span>
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-dm-red rounded-xl flex items-center justify-center text-white shadow-lg">
              {idx === 0 && <CheckCircle2 size={24} />}
              {idx === 1 && <Calculator size={24} />}
              {idx === 2 && <HardHat size={24} />}
              {idx === 3 && <Sparkles size={24} />}
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#1E2B58] uppercase font-heading tracking-tight">
              {step.title}
            </h2>
          </div>
        </div>
        <p className="text-lg text-slate-800 leading-relaxed font-semibold italic border-l-4 border-dm-red pl-6">
          {step.description}
        </p>
        <div className="grid grid-cols-2 gap-4 pt-4">
          {step.specs.map((spec, sIdx) => (
            <div 
              key={sIdx} 
              className="bg-white border border-slate-300 p-3 rounded-xl flex items-center space-x-3 shadow-sm group/spec transition-all duration-300 hover:bg-[#1E2B58] hover:border-[#1E2B58] hover:scale-105 cursor-pointer"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-dm-red group-hover/spec:bg-white transition-colors" />
              <span className="text-[10px] font-mono-tech uppercase tracking-widest font-black text-[#1E2B58] group-hover/spec:text-white transition-colors">
                {spec}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div 
        className="w-full lg:w-1/2"
        onMouseEnter={() => onImageHover(step.image)}
        onClick={() => onImageHover(step.image)}
      >
        <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-white group cursor-pointer transform hover:scale-[1.02] transition-all duration-500 relative">
          <img 
            src={step.image} 
            alt={step.title} 
            className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-transparent group-hover:bg-[#1E2B58]/10 transition-colors pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

const BuildingJourneyPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [currentBg, setCurrentBg] = useState(JOURNEY_STEPS[0].image);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#e2e8f0] animate-in fade-in duration-700 relative overflow-x-hidden pb-24">
      <div className="fixed inset-0 z-0 pointer-events-none transition-all duration-1000 overflow-hidden">
        <img 
          src={currentBg} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 transition-all duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#e2e8f0] via-[#e2e8f0]/60 to-[#e2e8f0]" />
        <div className="absolute inset-0 bg-[#1E2B58]/10" />
        <div className="absolute inset-0 blueprint-grid opacity-20" />
      </div>
      
      <nav className="fixed top-0 left-0 right-0 z-[150] bg-[#1E2B58] py-6 border-b border-white/10 shadow-lg">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="group flex items-center space-x-3 transition-all duration-300 font-mono-tech uppercase text-[11px] tracking-[0.4em] text-white hover:text-dm-red"
          >
            <div className="bg-white/10 p-2 rounded-lg group-hover:bg-dm-red transition-all">
              <ArrowLeft size={16} />
            </div>
            <span className="font-bold">Back to Hub</span>
          </button>
          <div className="flex items-center space-x-2">
            <span className="font-bold tracking-tighter text-xl text-white font-heading">
              THE <span className="text-dm-red">BUILDING JOURNEY</span>
            </span>
          </div>
        </div>
      </nav>

      <div className="relative pt-32 pb-24 text-center z-10">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-8xl font-black text-[#1E2B58] uppercase font-heading tracking-tighter mb-6">
            Our Proven <span className="text-dm-red">Process</span>
          </h1>
          <p className="text-xl text-slate-700 font-bold max-w-2xl mx-auto uppercase tracking-widest border-y border-slate-300 py-4">
            From raw earth to architectural masterpiece
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#1E2B58]/10 -translate-x-1/2 hidden lg:block" />
        
        <div className="space-y-32">
          {JOURNEY_STEPS.map((step, idx) => (
            <JourneyStepItem 
              key={step.number} 
              step={step} 
              idx={idx} 
              isEven={idx % 2 === 0} 
              onImageHover={setCurrentBg} 
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 mt-32 relative z-10">
        <div className="bg-[#1E2B58] p-12 lg:p-24 rounded-[4rem] text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 blueprint-grid opacity-10" />
          <h2 className="text-4xl md:text-6xl font-black uppercase font-heading mb-8 relative z-10">Ready to start?</h2>
          <button 
             onClick={onBack}
             className="bg-dm-red px-16 py-6 rounded-2xl text-xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl relative z-10 hover:shadow-[0_0_40px_rgba(196,30,58,0.6)]"
          >
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

const SectionBackground: React.FC<{ imageUrl: string; opacity?: string; overlayOpacity?: string; blur?: string }> = ({ 
  imageUrl, 
  opacity = "opacity-60", 
  overlayOpacity = "bg-[#1E2B58]/5",
  blur = ""
}) => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <img 
      src={imageUrl} 
      alt="" 
      className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1500ms] ${opacity} ${blur}`}
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-[#e2e8f0]/0 via-[#e2e8f0]/60 to-[#e2e8f0]" />
    <div className={`absolute inset-0 ${overlayOpacity}`} />
  </div>
);

const TrustBar: React.FC = () => {
  const partners = ["Residential", "Commercial", "Industrial", "Civil", "Institutional", "Infrastructure"];
  return (
    <div className="w-full py-8 border-y border-slate-300 bg-white/40 backdrop-blur-sm overflow-hidden mt-16 lg:mt-24">
      <div className="flex items-center space-x-12 animate-marquee whitespace-nowrap">
        {[...partners, ...partners, ...partners].map((p, i) => (
          <div key={i} className="flex items-center space-x-3 opacity-80">
            <div className="w-2 h-2 rounded-full bg-dm-red"></div>
            <span className="text-[10px] font-mono-tech uppercase tracking-[0.5em] text-[#1E2B58] font-bold">{p}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Hero: React.FC<{ onStartJourney: () => void }> = ({ onStartJourney }) => {
  const stats = [
    { label: 'Experience', value: '15+', icon: <HomeIcon className="w-8 h-8" strokeWidth={1.5} /> },
    { label: 'Projects', value: '250+', icon: <Hammer className="w-8 h-8" strokeWidth={1.5} /> },
    { label: 'Experts', value: '12', icon: <Users className="w-8 h-8" strokeWidth={1.5} /> },
    { label: 'Success', value: '100%', icon: <Zap className="w-8 h-8" strokeWidth={1.5} /> },
  ];

  return (
    <header id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#e2e8f0] pt-28 pb-12 lg:pb-0">
      <SectionBackground imageUrl="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center space-x-3 mb-6 font-mono-tech text-[10px] text-dm-red uppercase tracking-[0.5em] font-medium">
              <span className="w-12 h-px bg-dm-red"></span>
              <span>Architectural precision since 2009</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black text-[#1E2B58] leading-[0.85] mb-8 tracking-tighter uppercase font-heading">
              D.M. BUILDING <br/>
              <span className="text-dm-red">RENOVATIONS</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-800 leading-relaxed font-bold border-l-4 border-dm-red pl-8 mb-12 max-w-2xl">
              Transforming Nakuru's skyline with structural integrity. We deliver end-to-end building and maintenance solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button onClick={() => scrollToSection('contact')} className="px-12 py-5 bg-[#1E2B58] hover:bg-dm-red text-white rounded-2xl font-bold uppercase tracking-widest transition-all shadow-xl">
                Book Consultation
              </button>
              <button onClick={onStartJourney} className="px-12 py-5 border-2 border-[#1E2B58] text-[#1E2B58] hover:bg-[#1E2B58] hover:text-white rounded-2xl font-bold uppercase tracking-widest transition-all flex items-center justify-center space-x-3">
                <span>Building Journey</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#1E2B58] p-12 rounded-[3.5rem] text-white shadow-2xl relative">
              <div className="grid grid-cols-2 gap-12">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-dm-red mb-3">{stat.icon}</div>
                    <div className="text-4xl font-black font-heading mb-1">{stat.value}</div>
                    <div className="text-[9px] uppercase tracking-widest text-white/40 font-mono-tech">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <TrustBar />
    </header>
  );
};

const Services: React.FC<{ onSelectService: (id: string) => void }> = ({ onSelectService }) => {
  const { ref, active } = useReveal();
  return (
    <section id="services" ref={ref} className="py-24 lg:py-32 relative bg-[#e2e8f0]">
      <SectionBackground imageUrl="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 text-center lg:text-left">
          <h2 className="text-dm-red font-mono-tech text-[10px] tracking-[0.5em] uppercase mb-4">Specialist Capability</h2>
          <h3 className="text-4xl lg:text-7xl font-black text-[#1E2B58] font-heading">Mastery in Every Discipline</h3>
        </div>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal ${active ? 'active' : ''}`}>
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white/80 backdrop-blur-md border border-slate-300 p-10 rounded-[2.5rem] transition-all duration-500 hover:border-[#1E2B58] hover:shadow-2xl flex flex-col h-full group">
              <div className="text-white bg-[#1E2B58] group-hover:bg-dm-red w-16 h-16 flex items-center justify-center rounded-2xl transition-all mb-8 group-hover:shadow-[0_0_25px_rgba(196,30,58,0.5)]">
                {getIcon(service.icon)}
              </div>
              <h4 className="text-2xl font-bold text-[#1E2B58] mb-4 uppercase font-heading">{service.title}</h4>
              <p className="text-slate-700 font-semibold mb-8 flex-grow">{service.description}</p>
              <button 
                onClick={() => onSelectService(service.id)}
                className="text-dm-red font-bold uppercase tracking-[0.4em] text-[11px] font-mono-tech hover:translate-x-2 transition-transform inline-flex items-center"
              >
                View Projects <ArrowRight size={14} className="ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About: React.FC = () => {
  const { ref, active } = useReveal();
  const pillars = [
    { title: "Structural Integrity", desc: "Our builds meet and exceed NCA safety codes for zero-failure longevity.", icon: <Building2 className="w-8 h-8" /> },
    { title: "Precision Engineering", desc: "Detailed architectural adherence from foundation to the final polish.", icon: <Ruler className="w-8 h-8" /> },
    { title: "Compliance First", desc: "Fully licensed by NCA and NEMA for safe, sustainable development.", icon: <ShieldCheck className="w-8 h-8" /> },
  ];

  return (
    <section id="about" ref={ref} className="py-24 lg:py-32 relative min-h-screen flex items-center overflow-hidden">
      <SectionBackground imageUrl="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000" opacity="opacity-80" overlayOpacity="bg-[#1E2B58]/20" blur="blur-[6px]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-center reveal ${active ? 'active' : ''}`}>
          <div className="lg:col-span-6 space-y-12">
            <div>
              <h2 className="text-dm-red font-mono-tech text-[10px] tracking-[0.5em] uppercase mb-4 font-black">Our Corporate Legacy</h2>
              <h3 className="text-5xl lg:text-8xl font-black text-[#1E2B58] leading-[1] uppercase font-heading tracking-tighter">Engineering <br/><span className="text-dm-red">The Future.</span></h3>
            </div>
            <div className="relative">
              <div className="absolute -left-6 top-0 bottom-0 w-1.5 bg-dm-red"></div>
              <p className="text-xl md:text-2xl text-slate-800 font-bold leading-relaxed pl-6 italic max-w-xl">Since 2009, D.M. Building Works & Renovations has been the definitive choice for structural excellence in the Rift Valley.</p>
            </div>
            <p className="text-slate-700 font-semibold text-lg leading-relaxed max-w-xl bg-white/40 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl">We specialize in end-to-end construction management. From large-scale commercial developments to bespoke residential renovations.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              {pillars.map((pillar, i) => (
                <div key={i} className="group p-6 bg-white/70 backdrop-blur-md border border-slate-300 rounded-3xl hover:bg-[#1E2B58] hover:text-white transition-all duration-500 shadow-xl">
                  <div className="text-dm-red mb-4 group-hover:text-white transition-colors">{pillar.icon}</div>
                  <h4 className="text-sm font-black uppercase tracking-widest mb-2 font-heading">{pillar.title}</h4>
                  <p className="text-[11px] opacity-70 font-semibold leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative group">
              <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white bg-white aspect-[4/5]">
                <img src="https://media-jl-cdn.materlotteries.com.au/cms/assets/2219035f-5017-40d8-83e9-676d037cb4c3.jpg?key=large" alt="Architectural Masterpiece" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[4000ms]" />
                <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-[#1E2B58] via-[#1E2B58]/80 to-transparent text-white">
                   <p className="text-4xl md:text-5xl font-black font-heading uppercase tracking-tighter leading-none">Built on Integrity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact: React.FC = () => {
  const { ref, active } = useReveal();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    // Basic sanitization and validation
    if (formData.name.length < 2) newErrors.name = "Name too short";
    if (formData.name.length > 100) newErrors.name = "Name too long";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email format";
    
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) newErrors.phone = "Invalid phone format";
    
    if (formData.message.length < 10) newErrors.message = "Message too short";
    if (formData.message.length > 2000) newErrors.message = "Message too long";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Sanitize inputs for mailto link
    const sanitize = (str: string) => str.replace(/[<>]/g, '');
    
    const subject = encodeURIComponent("Construction Consultation Request - D.M. Building Works");
    const body = encodeURIComponent(
      `Client Name: ${sanitize(formData.name)}\n` +
      `Client Email: ${sanitize(formData.email)}\n` +
      `Phone: ${sanitize(formData.phone)}\n\n` +
      `Requirements:\n${sanitize(formData.message)}`
    );
    
    window.location.href = `mailto:dm.buildingworks09@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  return (
    <section id="contact" ref={ref} className="py-24 lg:py-32 relative bg-[#e2e8f0]">
      <SectionBackground imageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-dm-red font-mono-tech text-[10px] tracking-[0.5em] uppercase mb-4 font-black">Get in Touch</h2>
          <h3 className="text-5xl lg:text-8xl font-black text-[#1E2B58] uppercase font-heading">Consultation</h3>
        </div>
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 reveal ${active ? 'active' : ''}`}>
          <div className="lg:col-span-5">
            <div className="bg-white p-12 rounded-[3rem] border border-slate-300 shadow-2xl">
              <h4 className="text-2xl font-black mb-10 text-[#1E2B58] uppercase font-heading">Direct Details</h4>
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="bg-[#1E2B58] p-4 rounded-xl text-white shadow-lg"><Phone size={24} /></div>
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-slate-500 mb-1 font-mono-tech">Hotlines</p>
                    {BUSINESS_INFO.phones.map(p => <p key={p} className="text-xl font-bold text-[#1E2B58]">{p}</p>)}
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="bg-[#1E2B58] p-4 rounded-xl text-white shadow-lg"><Mail size={24} /></div>
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-slate-500 mb-1 font-mono-tech">Email</p>
                    <p className="text-lg font-bold text-[#1E2B58] break-all">{BUSINESS_INFO.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <form className="bg-[#1E2B58] p-12 rounded-[3rem] text-white space-y-8 shadow-2xl" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-1">
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    className={`w-full bg-white/10 p-5 rounded-xl border ${errors.name ? 'border-red-500' : 'border-white/20'} outline-none focus:border-dm-red transition-all`} 
                    placeholder="Client Name" 
                    maxLength={100}
                  />
                  {errors.name && <p className="text-red-400 text-[10px] font-bold uppercase tracking-widest pl-2">{errors.name}</p>}
                </div>
                <div className="space-y-1">
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className={`w-full bg-white/10 p-5 rounded-xl border ${errors.email ? 'border-red-500' : 'border-white/20'} outline-none focus:border-dm-red transition-all`} 
                    placeholder="Client Email" 
                  />
                  {errors.email && <p className="text-red-400 text-[10px] font-bold uppercase tracking-widest pl-2">{errors.email}</p>}
                </div>
                <div className="space-y-1 md:col-span-2">
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                    className={`w-full bg-white/10 p-5 rounded-xl border ${errors.phone ? 'border-red-500' : 'border-white/20'} outline-none focus:border-dm-red transition-all`} 
                    placeholder="Phone Number" 
                  />
                  {errors.phone && <p className="text-red-400 text-[10px] font-bold uppercase tracking-widest pl-2">{errors.phone}</p>}
                </div>
              </div>
              <div className="space-y-1">
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  rows={4} 
                  className={`w-full bg-white/10 p-5 rounded-xl border ${errors.message ? 'border-red-500' : 'border-white/20'} outline-none focus:border-dm-red transition-all`} 
                  placeholder="Describe your requirements..."
                  maxLength={2000}
                ></textarea>
                {errors.message && <p className="text-red-400 text-[10px] font-bold uppercase tracking-widest pl-2">{errors.message}</p>}
              </div>
              <button type="submit" className="w-full bg-dm-red py-6 rounded-2xl font-bold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-xl">Send Request</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => (
    <footer className="py-20 bg-[#1E2B58] text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <span className="font-bold text-3xl font-heading">D.M. <span className="text-dm-red">BUILDING</span></span>
            <p className="mt-6 text-white/60 max-w-md uppercase text-[10px] tracking-widest leading-loose">Setting the standard in construction excellence. Precision, Integrity, and Structural Perfection.</p>
          </div>
          <div>
            <h5 className="font-black text-[10px] tracking-widest mb-8 uppercase text-dm-red">Office</h5>
            <p className="text-white/60 text-[10px] uppercase tracking-widest leading-relaxed">{BUSINESS_INFO.pobox}<br />{BUSINESS_INFO.location}</p>
          </div>
          <div>
            <h5 className="font-black text-[10px] tracking-widest mb-8 uppercase text-dm-red">Contact</h5>
            <p className="text-white/60 text-[10px] uppercase tracking-widest">{BUSINESS_INFO.email}</p>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-[9px] uppercase tracking-widest text-white/30 flex justify-between items-center">
          <span>© {new Date().getFullYear()} D.M. Building Works</span>
          <div className="flex space-x-6"><span>NCA Registered</span><span>NEMA Compliant</span></div>
        </div>
      </div>
    </footer>
);

const Navbar: React.FC<{ onNavigateToJourney: () => void }> = ({ onNavigateToJourney }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Journey', id: 'journey', special: true },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[150] transition-all duration-500 bg-[#1E2B58] border-b ${scrolled ? 'py-4 shadow-2xl border-white/10' : 'py-7 border-transparent'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="bg-dm-red p-1.5 rounded-lg">
               <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current"><path d="M12 3l10 9h-3v8H5v-8H2l10-9zm-1 12v3h2v-3h-2z" /></svg>
            </div>
            {/* Show full brand on tablets and up */}
            <span className="font-bold tracking-tight text-xl text-white font-heading hidden sm:block">D.M. <span className="text-dm-red uppercase">Building</span></span>
            {/* Show short brand on small mobile only */}
            <span className="font-bold tracking-tight text-xl text-white font-heading sm:hidden">D.M.</span>
          </div>
          
          {/* Horizontal menu visible on tablet (sm) and desktop (lg) */}
          <div className="hidden sm:flex items-center space-x-4 md:space-x-8 lg:space-x-12">
            {navItems.map(item => (
              <button key={item.label} onClick={() => { if (item.special) onNavigateToJourney(); else scrollToSection(item.id); }} className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-white/70 hover:text-white transition-all duration-500">{item.label}</button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button onClick={() => scrollToSection('contact')} className="hidden sm:block bg-dm-red px-6 py-2 rounded-lg text-white font-bold text-[10px] uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all">Get Quote</button>
            {/* Hamburger menu toggle visible ONLY on small mobile (< 640px) */}
            <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden text-white p-1 rounded-lg transition-colors"><Menu size={26} /></button>
          </div>
        </div>
      </div>
      
      {/* Mobile Sidebar Navigation - Restricted to small phones only */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[190] sm:hidden animate-in fade-in duration-300" 
            onClick={() => setIsOpen(false)}
          />
          
          <div className="fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-[#1E2B58] z-[200] sm:hidden flex flex-col items-center justify-start pt-24 space-y-8 shadow-2xl animate-in slide-in-from-right duration-500">
            <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-all">
              <X size={28} />
            </button>
            
            <div className="flex flex-col items-center space-y-8 w-full">
              {navItems.map(item => (
                <button 
                  key={item.label} 
                  onClick={() => { 
                    if (item.special) onNavigateToJourney(); 
                    else scrollToSection(item.id); 
                    setIsOpen(false); 
                  }} 
                  className="text-2xl font-heading text-white hover:text-dm-red transition-all tracking-widest w-full py-2"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="pt-8 w-full px-12">
                <button 
                   onClick={() => { scrollToSection('contact'); setIsOpen(false); }}
                   className="w-full bg-dm-red py-4 rounded-xl text-white font-bold text-sm uppercase tracking-widest shadow-xl"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<{ type: 'home' | 'project' | 'journey', id?: string }>({ type: 'home' });
  if (currentView.type === 'project' && currentView.id) return <ProjectDetailsPage serviceId={currentView.id} onBack={() => setCurrentView({ type: 'home' })} onContact={() => { setCurrentView({ type: 'home' }); setTimeout(() => scrollToSection('contact'), 100); }} />;
  if (currentView.type === 'journey') return <BuildingJourneyPage onBack={() => setCurrentView({ type: 'home' })} />;
  return (
    <div className="min-h-screen bg-[#e2e8f0] font-sans">
      <Navbar onNavigateToJourney={() => setCurrentView({ type: 'journey' })} />
      <Hero onStartJourney={() => setCurrentView({ type: 'journey' })} />
      <Services onSelectService={(id) => setCurrentView({ type: 'project', id })} />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;