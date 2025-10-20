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
    { value: "promo-113-online-feb2025", label: "Promoción 113 Online - Febrero 2025" },
    { value: "promo-112-semi-ene2025", label: "Promoción 112 Semipresencial - Enero 2025" },
    { value: "promo-111-presencial-dic2024", label: "Promoción 111 Presencial - Diciembre 2024" },
    { value: "promo-110-online-nov2024", label: "Promoción 110 Online - Noviembre 2024" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
      {/* Background elements */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${norwayHero})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-accent/90" />
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
                className="w-full text-lg gap-2 group"
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
