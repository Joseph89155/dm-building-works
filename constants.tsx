
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
    image: "https://www.optron.com/wp-content/uploads/2025/07/survey-equipment-construction-site-overlay-1024x683.png",
    specs: ["Topographical Mapping", "Soil Bearing Tests", "Feasibility Assessment", "Boundary Verification"]
  },
  {
    number: "02",
    title: "Quotation & Planning",
    description: "Transparency is our hallmark. We provide detailed Bill of Quantities (BQ) that outline every nail, brick, and labor hour, ensuring your budget aligns with your vision without surprises.",
    image: "https://contractor-plus-website.s3.us-east-2.amazonaws.com/construction_quoting_jpg_369fe38cec.jpg",
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
    image: "https://www.aproplan.com/wp-content/uploads/2023/07/construction-project-handover-process.jpg",
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
        "https://www.cnet.com/a/img/resize/9d380b8b51811dbeb0de48bb5000db41444de552/hub/2021/12/20/91e397a0-c7db-448d-b343-113d418dad9c/gettyimages-1134479857.jpg?auto=webp&width=1200",
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
      mainImage: "https://static.designboom.com/wp-content/dbsub/442245/2020-08-21/a-weekend-home-with-regional-techniques-from-the-oaxacan-region-in-mexico-5-5f40464c38e3a.jpg",
      gallery: [
        "https://phantomfurniture.co.uk/cdn/shop/files/TONI_290_artisan001.jpg?v=1739970395",
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
      mainImage: "https://electrical-engineering-portal.com/wp-content/uploads/2017/07/electrical-circuits-design.jpg",
      gallery: [
        "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=800",
        "https://electrical-engineering-portal.com/wp-content/uploads/2017/07/electrical-circuits-design.jpg"
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
        "https://americantorchtip.com/wp-content/uploads/2021/10/AdobeStock_260336691-scaled.jpeg",
        "https://www.faistgroup.com/site/assets/files/1659/social_-_new_frontiers_of_laser_welding_technology-1.jpg"
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
      mainImage: "https://res.cloudinary.com/dcspg/image/upload/f_auto,q_auto/v1/article-images/Bigelow%20Flooring%20Inc/313642/featured?v=07d1b8d0-2224-4f3b-a012-c565b7059c1c",
      gallery: [
        "https://cloudfrontgharpediabucket.gharpedia.com/uploads/2018/08/0205090001-1-Tiling-Work-Installation-shutterstock_196421168.jpg",
        "https://hototools.com/cdn/shop/files/HOTO-Laser-Level-3_360-used-on-construction-site.jpg?v=1755845299&width=1000"
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
