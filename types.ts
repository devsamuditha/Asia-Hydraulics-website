
export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  specs: string[];
}

export interface ServiceCategory {
  title: string;
  description: string;
  products: Product[];
}

export interface NavItem {
  label: string;
  href: string;
}

export enum MessageRole {
  USER = 'user',
  BOT = 'bot'
}

export interface ChatMessage {
  role: MessageRole;
  text: string;
}

export interface SubsidiaryData {
  about: {
    title: string;
    description: string;
    stats: { label: string; value: string }[];
  };
  categories: {
    hydraulic: ServiceCategory;
    industrial: ServiceCategory;
    sandblasting: ServiceCategory;
    airless: ServiceCategory;
  };
}
