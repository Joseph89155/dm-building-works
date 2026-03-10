
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ContactInfo {
  name: string;
  role: string;
  pobox: string;
  location: string;
  phones: string[];
  email: string;
}

export interface ProjectData {
  title: string;
  location: string;
  year: string;
  mainImage: string;
  gallery: string[];
  fullDescription: string;
  highlights: string[];
}

export interface JourneyStep {
  number: string;
  title: string;
  description: string;
  image: string;
  specs: string[];
}
