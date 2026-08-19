import React from 'react';
import {
  Hammer,
  Droplets,
  Home,
  Zap,
  Flame,
  Layout,
  Users,
  Phone,
  Mail,
  MapPin,
  ClipboardCheck,
  Calculator,
  HardHat,
  Sparkles
} from 'lucide-react';
import { ServiceItem, ContactInfo, ProjectData, JourneyStep } from './types';

export const BUSINESS_INFO: ContactInfo = {
  name: "Daniel Maina Mwathi",
  role: "Director",
  pobox: "P.O. Box 14597 - 20100",
  location: "Nakuru, Kenya",
  phones: ["0101826214", "0735 794 801"],
  email: "dm.buildingworks09@gmail.com"
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'building',
    title: 'Building Works',
    description: 'Full-scale construction of residential and commercial structures with precision and durability.',
    icon: 'Hammer'
  },
  {
    id: 'plumbing',
    title: 'Plumbing & Heating',
    description: 'Expert plumbing installations and heating solutions for optimal comfort and utility.',
    icon: 'Droplets'
  },
  {
    id: 'woodwork',
    title: 'Roof & Interior Woodwork',
    description: 'Custom carpentry, roofing systems, and sophisticated interior wooden finishes.',
    icon: 'Home'
  },
  {
    id: 'electrical',
    title: 'Electrical',
    description: 'Safe and efficient electrical wiring and maintenance for modern living environments.',
    icon: 'Zap'
  },
  {
    id: 'welding',
    title: 'Welding',
    description: 'Professional metal fabrication and welding services for structural or decorative needs.',
    icon: 'Flame'
  },
  {
    id: 'tiling',
    title: 'Tiling',
    description: 'High-quality tiling for floors, walls, and decorative accents in any space.',
    icon: 'Layout'
  },
  {
    id: 'consultation',
    title: 'Building Consultation',
    description: 'Professional advice and strategic planning for your building and renovation projects.',
    icon: 'Users'
  }
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    number: "01",
    title: "Site Survey",
    description: "The foundation of every great build starts with a deep understanding of the land. We conduct comprehensive site visits to assess topography, soil stability, and accessibility.",
    image: "/images/journey/01-site-survey.jpg",
    specs: ["Topographical Mapping", "Soil Bearing Tests", "Feasibility Assessment", "Boundary Verification"]
  },
  {
    number: "02",
    title: "Quotation & Planning",
    description: "Transparency is our hallmark. We provide detailed Bill of Quantities (BQ) that outline every nail, brick, and labor hour, ensuring your budget aligns with your vision without surprises.",
    image: "/images/journey/02-quotation-planning.jpg",
    specs: ["Itemized Cost Estimates", "Material Scheduling", "Timeline Projection", "Structural Design Review"]
  },
  {
    number: "03",
    title: "Construction Phase",
    description: "This is where the blueprint breathes. Our expert crews mobilize to execute structural works, from foundation pouring and walling to heavy steel fabrication and roofing.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600&auto=format&fit=crop",
    specs: ["Structural Framing", "NCA Standard Supervision", "Electrical & Plumbing Rough-in", "Quality Control Audits"]
  },
  {
    number: "04",
    title: "Finishing & Handover",
    description: "The final polish that turns a structure into a masterpiece. We handle exquisite tiling, cabinetry, painting, and lighting before the final walkthrough and project commissioning.",
    image: "/images/journey/04-finishing-handover.jpg",
    specs: ["Surface Treatments", "Sanitary Installation", "Debris Clearance", "Final Compliance Check"]
  }
];

export const PROJECTS_BY_SERVICE: Record<string, ProjectData[]> = {
  building: [
    {
      title: "Nakuru Heights Commercial Hub",
      location: "Central Business District, Nakuru",
      year: "2023",
      mainImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200",
      gallery: [
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800",
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800"
      ],
      fullDescription: "A landmark structural project requiring deep excavation and heavy-duty steel reinforcement. This multi-story commercial hub features earthquake-resistant foundations and sustainable architectural design, setting a new standard for Nakuru's growing skyline.",
      highlights: ["High-Tensile Steel Framework", "Advanced Structural Piling", "Seismic Safety Standards", "Energy-Efficient Ventilation"]
    }
  ],
  plumbing: [
    {
      title: "Modern Residential Plumbing",
      location: "Milimani, Nakuru",
      year: "2023",
      mainImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200",
      gallery: [
        "/images/projects/plumbing/gallery-1.png",
        "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=800"
      ],
      fullDescription: "Installation of high-efficiency plumbing systems for a premium residential complex. This project involved solar water heating integration, high-pressure pump systems, and modern concealed piping for a seamless aesthetic finish.",
      highlights: ["Solar Water Heating", "Pressure Pump Calibration", "Concealed Sanitary Fittings", "Wastewater Management"]
    }
  ],
  woodwork: [
    {
      title: "Custom Interior Woodwork",
      location: "Kiamunyi, Nakuru",
      year: "2022",
      mainImage: "/images/projects/woodwork/main.jpg",
      gallery: [
        "/images/projects/woodwork/gallery-1.png",
        "https://images.unsplash.com/photo-1596079890744-c1a0462d0975?q=80&w=800"
      ],
      fullDescription: "Elegant interior carpentry featuring structural roofing trusses and handcrafted mahogany finishes. We combined traditional woodworking techniques with modern design to create durable and visually stunning roof structures and kitchen cabinetry.",
      highlights: ["Mahogany Truss Systems", "Artisan Kitchen Cabinets", "Moisture-Treated Framing", "Hand-Polished Finishes"]
    }
  ],
  electrical: [
    {
      title: "Residential Smart-Grid",
      location: "Lanet Estate, Nakuru",
      year: "2023",
      mainImage: "/images/projects/electrical/main.jpg",
      gallery: [
        "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=800",
        "/images/projects/electrical/gallery-2.jpg"
      ],
      fullDescription: "A comprehensive electrical overhaul and solar integration project for a multi-unit apartment block. The system features centralized breaker management, surge protection, and optimized lighting circuits for reduced energy consumption.",
      highlights: ["Solar Inverter Integration", "Master Circuit Control", "Safety Earthing Systems", "Energy Audit Compliant"]
    }
  ],
  welding: [
    {
      title: "Structural Steel Fabrication",
      location: "Industrial Area, Nakuru",
      year: "2024",
      mainImage: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200",
      gallery: [
        "/images/projects/welding/gallery-1.jpeg",
        "/images/projects/welding/gallery-2.jpg"
      ],
      fullDescription: "Specialized metal fabrication for heavy-duty security gates and architectural steel frames. Our team executed high-precision welding with anti-corrosion treatments to ensure long-term structural integrity in harsh environments.",
      highlights: ["Heavy-Duty Gate Framing", "Precision Arc Welding", "Galvanized Protection", "Architectural Grille Work"]
    }
  ],
  tiling: [
    {
      title: "Luxury Floor Finishes",
      location: "Section 58, Nakuru",
      year: "2023",
      mainImage: "/images/projects/tiling/main.png",
      gallery: [
        "/images/projects/tiling/gallery-1.jpg",
        "/images/projects/tiling/gallery-2.jpg"
      ],
      fullDescription: "Large-format ceramic and granite tiling for a premium hotel lobby. This project required laser-perfect alignment and specialized grout sealing to create a seamless, waterproof, and high-traffic resistant floor surface.",
      highlights: ["Laser-Aligned Layout", "Zero-Grout Visuals", "Waterproof Sealants", "High-Traffic Durability"]
    }
  ],
  consultation: [
    {
      title: "Architectural Planning",
      location: "Nakuru West",
      year: "2024",
      mainImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200",
      gallery: [
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800",
        "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=800"
      ],
      fullDescription: "Strategic building consultation for urban residential development. We provided comprehensive site analysis, material costing, and structural design optimization to ensure the project met all NCA safety and quality standards.",
      highlights: ["Structural Safety Audits", "Cost-Efficiency Planning", "NCA Standard Compliance", "Site Layout Optimization"]
    }
  ]
};

export const getIcon = (iconName: string) => {
  const props = { className: "w-8 h-8", strokeWidth: 1.5 };
  switch (iconName) {
    case 'Hammer': return <Hammer {...props} />;
    case 'Droplets': return <Droplets {...props} />;
    case 'Home': return <Home {...props} />;
    case 'Zap': return <Zap {...props} />;
    case 'Flame': return <Flame {...props} />;
    case 'Layout': return <Layout {...props} />;
    case 'Users': return <Users {...props} />;
    case 'Phone': return <Phone className="w-5 h-5" />;
    case 'Mail': return <Mail className="w-5 h-5" />;
    case 'MapPin': return <MapPin className="w-5 h-5" />;
    case 'SiteSurvey': return <ClipboardCheck {...props} />;
    case 'Quotation': return <Calculator {...props} />;
    case 'Construction': return <HardHat {...props} />;
    case 'Finishing': return <Sparkles {...props} />;
    default: return <Hammer {...props} />;
  }
};
