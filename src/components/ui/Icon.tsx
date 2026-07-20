import {
  BriefcaseBusiness,
  Camera,
  Cloud,
  Code2,
  DatabaseBackup,
  Headphones,
  KeyRound,
  Mail,
  MonitorCog,
  PhoneCall,
  Server,
  ShieldCheck,
  Smartphone,
  Wifi,
  Workflow,
} from "lucide-react";
import type { IconName } from "@/types";
import { cn } from "@/lib/utils";

const icons = {
  code: Code2,
  smartphone: Smartphone,
  server: Server,
  mail: Mail,
  cloud: Cloud,
  shield: ShieldCheck,
  wifi: Wifi,
  headphones: Headphones,
  monitor: MonitorCog,
  briefcase: BriefcaseBusiness,
  key: KeyRound,
  database: DatabaseBackup,
  camera: Camera,
  phone: PhoneCall,
  workflow: Workflow,
};

export function ServiceIcon({ name, className }: { name: IconName; className?: string }) {
  const Icon = icons[name];
  return <Icon className={cn("size-6", className)} aria-hidden="true" />;
}
