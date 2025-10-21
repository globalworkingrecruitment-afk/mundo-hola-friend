import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Globe, X } from "lucide-react";

interface OnboardingTutorialProps {
  onComplete: () => void;
}

type TutorialStep = 1 | 2 | 3;

export const OnboardingTutorial = ({ onComplete }: OnboardingTutorialProps) => {
  const [currentStep, setCurrentStep] = useState<TutorialStep>(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Pequeño delay para que la página cargue antes de mostrar el tutorial
    const timer = setTimeout(() => {
      setIsVisible(true);
      scrollToPlans();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Agregar clase de highlight a la sección actual
    const removeHighlights = () => {
      document.querySelectorAll('[data-tutorial]').forEach(el => {
        el.classList.remove('tutorial-highlight');
        el.classList.remove('tutorial-highlight-contact');
      });
    };

    removeHighlights();

    if (currentStep === 1) {
      const plansSection = document.querySelector('[data-tutorial="plans"]');
      if (plansSection) {
        plansSection.classList.add('tutorial-highlight');
      }
    } else if (currentStep === 2) {
      const contactSection = document.querySelector('[data-tutorial="contact"]');
      if (contactSection) {
        contactSection.classList.add('tutorial-highlight');
        contactSection.classList.add('tutorial-highlight-contact');
      }
    } else if (currentStep === 3) {
      removeHighlights();
    }

    return removeHighlights;
  }, [currentStep]);

  const scrollToPlans = () => {
    const plansSection = document.querySelector('[data-tutorial="plans"]');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('[data-tutorial="contact"]');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
      scrollToContact();
    } else if (currentStep === 2) {
      setCurrentStep(3);
      scrollToTop();
      // Esperar a que el scroll termine antes de mostrar el mensaje final
      setTimeout(() => {
        setIsVisible(true);
      }, 800);
    } else {
      handleComplete();
    }
  };

  const handleComplete = () => {
    setIsVisible(false);
    setTimeout(() => {
      onComplete();
    }, 300);
  };

  const handleSkip = () => {
    handleComplete();
  };

  const messages = {
    1: "Estos son nuestros planes para ofrecerte lo que mejor se adapte a ti",
    2: "Si tienes dudas en cualquier momento puedes hablar con Amanda",
    3: "Te dejo en la parte inicial de nuestra página. ¡Que disfrutes tu experiencia!",
  };

  const buttonLabels = {
    1: "Continuar",
    2: "Comenzar la experiencia",
    3: "Entendido",
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay oscuro */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-fade-in"
        onClick={handleSkip}
      />

      {/* Mascota y bocadillo */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4 animate-slide-up">
        {/* Bocadillo */}
        <div className="bg-card border-2 border-primary rounded-2xl p-6 shadow-2xl max-w-sm relative animate-scale-in">
          {/* Botón cerrar */}
          <button
            onClick={handleSkip}
            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Saltar tutorial"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Contenido del mensaje */}
          <p className="text-foreground font-medium mb-4 pr-4">
            {messages[currentStep]}
          </p>

          {/* Botón de acción */}
          <Button 
            onClick={handleNext}
            className="w-full gap-2"
            size="lg"
          >
            {buttonLabels[currentStep]}
          </Button>

          {/* Flecha del bocadillo */}
          <div 
            className="absolute -bottom-3 right-12 w-6 h-6 bg-card border-r-2 border-b-2 border-primary transform rotate-45"
          />
        </div>

        {/* Mascota */}
        <div className="bg-gradient-to-br from-primary to-accent rounded-full p-4 shadow-2xl animate-bounce">
          <Globe className="w-10 h-10 text-primary-foreground" />
        </div>
      </div>
    </>
  );
};
