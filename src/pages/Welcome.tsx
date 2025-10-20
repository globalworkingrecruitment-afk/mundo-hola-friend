import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import logoGW from "@/assets/globalworking-logo.png";
import norwayHero from "@/assets/norway-fjord-hero.jpg";
import { Ship, ArrowRight } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres").max(100),
  email: z.string().email("Introduce un email válido").max(255),
  promotion: z.string().min(1, "Por favor selecciona tu promoción"),
});

type FormValues = z.infer<typeof formSchema>;

const Welcome = () => {
  const navigate = useNavigate();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      promotion: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    // Guardar datos en localStorage para usar después si es necesario
    localStorage.setItem("globalWorkerData", JSON.stringify(data));
    // Marcar que debe mostrar el tutorial
    localStorage.setItem("showTutorial", "true");
    // Redirigir a la página principal
    navigate("/inicio");
  };

  const promotions = [
    {
      value: "promocion-113-online-espana-20250204",
      label: "Promoción 113 · Online · España · 4/2/2025 - 27/2/2026",
    },
    {
      value: "promocion-114-online-italia-20250203",
      label: "Promoción 114 · Online · Italia · 3/2/2025 - 27/2/2026",
    },
    {
      value: "promocion-115-online-europa-20250325",
      label: "Promoción 115 · Online · Europa · 25/3/2025 - 13/3/2026",
    },
    {
      value: "promocion-116-online-francia-20250317",
      label: "Promoción 116 · Online · Francia · 17/3/2025 - 13/3/2026",
    },
    {
      value: "promocion-117-semi-espana-20250422",
      label: "Promoción 117 · Semi · España · 22/4/2025 - 31/12/2025",
    },
    {
      value: "promocion-118-online-italia-20250616",
      label: "Promoción 118 · Online · Italia · 16/6/2025 - 24/4/2026",
    },
    {
      value: "promocion-119-online-espana-20250609",
      label: "Promoción 119 · Online · España · 9/6/2025 - 24/4/2026",
    },
    {
      value: "promocion-120-semipresencial-espana-20250915",
      label: "Promoción 120 · Semipresencial · España · 15/9/2025 - 15/5/2026",
    },
    {
      value: "promocion-120-online-espana-20250915",
      label: "Promoción 120 · Online · España · 15/9/2025 - 15/5/2026",
    },
    {
      value: "promocion-121-semipresencial-italia-20250915",
      label: "Promoción 121 · Semipresencial · Italia · 15/9/2025 - 29/5/2026",
    },
    {
      value: "promocion-121-online-italia-20250915",
      label: "Promoción 121 · Online · Italia · 15/9/2025 - 29/5/2026",
    },
    {
      value: "promocion-122-online-fr-esp-eu-20250915",
      label: "Promoción 122 · Online · FR - ESP - EU · 15/9/2025 - 29/5/2026",
    },
    {
      value: "promocion-123-presencial-espana-20251007",
      label: "Promoción 123 · Presen. · España · 7/10/2025 - 28/3/2026",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/30 via-accent/25 to-secondary/30 relative overflow-hidden">
      {/* Background elements */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url(${norwayHero})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-primary/20 to-accent/20" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMm0tNCAwYzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMm0tNCAwYzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMiIvPjwvZz48L2c+PC9zdmc+')] opacity-10" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img src={logoGW} alt="Global Working" className="h-16 md:h-20 drop-shadow-2xl" />
        </div>

        {/* Welcome Card */}
        <div className="w-full max-w-2xl bg-card/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 animate-slide-up">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-primary/10 p-4 rounded-full">
                <Ship className="w-12 h-12 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Bienvenido a Global Working
            </h1>
            <p className="text-lg text-muted-foreground">
              Estamos encantados de que te hayas unido a este barco para comenzar el viaje
            </p>
          </div>

          {/* Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tu nombre</FormLabel>
                    <FormControl>
                      <Input placeholder="Ej: María García" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tu correo electrónico</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="tu@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="promotion"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Selecciona tu promoción</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Elige tu promoción" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {promotions.map((promo) => (
                          <SelectItem key={promo.value} value={promo.value}>
                            {promo.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Helper text */}
              <div className="bg-muted/50 rounded-lg p-4 text-sm text-muted-foreground">
                <p className="font-semibold mb-2">¿No sabes tu promoción?</p>
                <p>
                  Indica la modalidad que elegiste (presencial, semipresencial u online) 
                  y el mes en que comienzas. Con esta información podremos identificar tu promoción.
                </p>
              </div>

              <Button
                type="submit"
                size="lg"
                variant="secondary"
                className="w-full text-lg gap-2 group shadow-lg shadow-secondary/30 hover:shadow-secondary/50"
              >
                Comencemos este viaje juntos
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Form>
        </div>

        {/* Footer note */}
        <p className="text-primary-foreground/80 text-sm mt-8 text-center max-w-md">
          Tu aventura profesional en Noruega está a punto de comenzar. 
          Prepárate para una experiencia que transformará tu carrera.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
