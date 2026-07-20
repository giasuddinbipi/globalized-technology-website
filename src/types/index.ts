export type IconName =
  | "code"
  | "smartphone"
  | "server"
  | "mail"
  | "cloud"
  | "shield"
  | "wifi"
  | "headphones"
  | "monitor"
  | "briefcase"
  | "key"
  | "database"
  | "camera"
  | "phone"
  | "workflow";

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  category: string;
  icon: IconName;
  shortDescription: string;
  description: string;
  features: string[];
  deliverables: string[];
  suitableFor: string[];
  faqs: ServiceFaq[];
};
