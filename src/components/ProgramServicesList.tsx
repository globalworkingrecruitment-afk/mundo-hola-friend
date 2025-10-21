import { cn } from "@/lib/utils";
import { 
  GraduationCap, 
  Stethoscope, 
  FileText, 
  Briefcase, 
  Compass, 
  Sparkles, 
  FileCheck, 
  Building2, 
  UserCheck,
  LucideIcon
} from "lucide-react";

const programServices: { text: string; icon: LucideIcon }[] = [
  { text: "Curso de Noruego hasta el B1+", icon: GraduationCap },
  { text: "Curso de Helsenorsk (Noruego sanitario y procesos de trabajo en enfermería)", icon: Stethoscope },
  { text: "Curso de Helsenorsk Enfermedades y Tratamientos", icon: FileText },
  { text: "Curso de Desarrollo Profesional y Cultura", icon: Briefcase },
  { text: "Curso Guía para la Vida en Noruega", icon: Compass },
  { text: "Herramientas IA para aprender el idioma", icon: Sparkles },
  { text: "Autorización de trabajo", icon: FileCheck },
  { text: "Inserción Profesional en Noruega a través de la RedGW", icon: Building2 },
  { text: "Coordinador/a durante el programa y tu llegada a Noruega", icon: UserCheck },
];

interface ProgramServicesListProps {
  className?: string;
  variant?: "stacked" | "grid";
}

export const ProgramServicesList = ({ className, variant = "stacked" }: ProgramServicesListProps) => {
  const isGrid = variant === "grid";

  return (
    <ul
      className={cn(
        "text-sm text-foreground",
        isGrid
          ? "mt-6 grid gap-4 sm:grid-cols-2"
          : "mt-4 space-y-2",
        className,
      )}
    >
      {programServices.map((service) => {
        const Icon = service.icon;
        return (
          <li
            key={service.text}
            className={cn(
              "flex items-start gap-2",
              isGrid &&
                "rounded-xl border border-border/60 bg-background/80 p-4 shadow-sm backdrop-blur-sm",
            )}
          >
            <Icon
              className={cn(
                "mt-0.5 h-4 w-4 flex-shrink-0 text-accent",
                isGrid && "mt-1 h-5 w-5 text-primary",
              )}
            />
            <span
              className={cn(
                "leading-relaxed",
                service.text === "Curso de Desarrollo Profesional y Cultura" && "whitespace-nowrap",
              )}
            >
              {service.text}
            </span>
          </li>
        );
      })}
    </ul>
  );
};
