import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const programServices = [
  "Curso de Noruego hasta el B1+",
  "Curso de Helsenorsk (Noruego sanitario y procesos de trabajo en enfermería)",
  "Curso de Helsenorsk Enfermedades y Tratamientos",
  "Curso de Desarrollo Profesional y Cultura",
  "Curso Guía para la Vida en Noruega",
  "Herramientas IA para aprender el idioma",
  "Autorización de trabajo",
  "Inserción Profesional en Noruega",
  "Coordinador/a durante el programa y tu llegada a Noruega",
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
      {programServices.map((service) => (
        <li
          key={service}
          className={cn(
            "flex items-start gap-2",
            isGrid &&
              "rounded-xl border border-border/60 bg-background/80 p-4 shadow-sm backdrop-blur-sm",
          )}
        >
          <Check
            className={cn(
              "mt-0.5 h-4 w-4 flex-shrink-0 text-accent",
              isGrid && "mt-1 h-5 w-5 text-primary",
            )}
          />
          <span
            className={cn(
              "leading-relaxed",
              service === "Curso de Desarrollo Profesional y Cultura" && "whitespace-nowrap",
            )}
          >
            {service}
          </span>
        </li>
      ))}
    </ul>
  );
};
