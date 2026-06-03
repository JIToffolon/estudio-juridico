"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Scale,
  ShieldAlert,
  Briefcase,
  Users,
  MapPin,
  Phone,
  Mail,
  Clock,
  Menu,
  X,
  ChevronRight,
  Quote,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

import { PracticeAreaCard } from "@/components/practice-area-card";
import { PartnerCard } from "@/components/partner-card";

// Areas of practice data
const practiceAreas = [
  {
    title: "Derecho Corporativo & M&A",
    description: "Asesoramiento estratégico para constitución de sociedades, transacciones comerciales, fusiones y adquisiciones transfronterizas de alta complejidad.",
    Icon: Briefcase,
  },
  {
    title: "Derecho Penal Económico",
    description: "Defensa corporativa e individual en delitos tributarios, lavado de activos, cumplimiento normativo y disputas de alta sensibilidad.",
    Icon: ShieldAlert,
  },
  {
    title: "Litigios Civiles & Comerciales",
    description: "Representación rigurosa ante tribunales arbitrales y ordinarios, resolución de conflictos contractuales, daños e indemnizaciones corporativas.",
    Icon: Scale,
  },
  {
    title: "Relaciones Laborales & Gremios",
    description: "Consultoría laboral preventiva, reestructuraciones de nómina, representación en negociaciones colectivas y defensa judicial ante litigios de trabajo.",
    Icon: Users,
  },
];

// Partners data
const partners = [
  {
    name: "Dr. Valerius Vance",
    role: "Socio Senior - Corporativo & Financiero",
    image: "/socio_1.png",
    shortBio: "Más de 25 años liderando transacciones internacionales y el diseño de estructuras societarias de vanguardia.",
    longBio: "El Dr. Valerius Vance cuenta con un renombre consolidado en el sector financiero y corporativo latinoamericano. Ha asesorado a múltiples juntas directivas en fusiones multilaterales y en la mitigación de riesgos legales estratégicos. Se destaca por su agudeza de análisis comercial y compromiso con la gobernanza empresarial transparente.",
    credentials: [
      "Socio Fundador del Departamento de M&A y Finanzas",
      "Clasificado en Banda 1 por Chambers & Partners Global",
      "Asesor Externo para Proyectos de Financiación del Banco Mundial",
    ],
    education: [
      "Abogado (Diploma de Honor) - Universidad de Buenos Aires",
      "Master of Laws (LL.M.) - Harvard Law School",
    ],
    email: "v.vance@valerius.law",
    phone: "+54 (11) 4815-9921",
  },
  {
    name: "Dra. Elena Thorne",
    role: "Socia Senior - Penal & Compliance",
    image: "/socio_2.png",
    shortBio: "Ex-magistrada y experta en litigación compleja de cuello blanco y regulaciones de cumplimiento internacional.",
    longBio: "La Dra. Elena Thorne lidera el área de derecho penal corporativo. Su vasta experiencia tanto en el ámbito judicial como en la práctica privada le permite estructurar defensas infalibles ante litigios penales sofisticados. Es experta en el diseño de programas de compliance empresarial que cumplen con estándares internacionales.",
    credentials: [
      "Directora de Litigios Penales de Alta Complejidad",
      "Miembro de la Barra de Abogados Internacional (IBA)",
      "Autora de tres tratados sobre Crimen Organizado y Finanzas",
    ],
    education: [
      "Abogada - Universidad del Salvador",
      "Especialista en Derecho Penal Económico - Universidad Austral",
    ],
    email: "e.thorne@valerius.law",
    phone: "+54 (11) 4815-9922",
  },
  {
    name: "Dr. Gabriel Rostova",
    role: "Socio - Laboral & Negociación",
    image: "/socio_3.png",
    shortBio: "Especialista en prevención de litigios, convenios colectivos de trabajo y reestructuraciones laborales de gran escala.",
    longBio: "El Dr. Gabriel Rostova se enfoca en brindar soluciones ágiles y preventivas a corporaciones nacionales y extranjeras. Su liderazgo en negociaciones paritarias y de convenios gremiales ha sido fundamental para mantener la paz social y la estabilidad corporativa de nuestros clientes en escenarios de alta volatilidad.",
    credentials: [
      "Especialista en Relaciones de Trabajo Corporativas",
      "Profesor Adjunto de Derecho Colectivo del Trabajo (UBA)",
      "Miembro de la Sociedad Argentina de Derecho Laboral",
    ],
    education: [
      "Abogado - Universidad de Buenos Aires",
      "Posgrado en Relaciones Laborales - Universidad de San Andrés",
    ],
    email: "g.rostova@valerius.law",
    phone: "+54 (11) 4815-9923",
  },
];

// Testimonials data
const testimonials = [
  {
    text: "La solvencia técnica y la discreción de Valerius Law en nuestro proceso de reestructuración corporativa superó con creces nuestras expectativas. Son asesores invaluables.",
    author: "Ing. Roberto Mancini",
    position: "Vicepresidente de Operaciones, Cono Sur Logística",
    category: "Derecho Corporativo",
  },
  {
    text: "En un caso penal económico sumamente complejo, la Dra. Thorne demostró un dominio absoluto del derecho procesal y una estrategia defensiva impecable. Excelente resultado.",
    author: "Dra. Martina Silveyra",
    position: "Directora Ejecutiva, Latam Fintech Group",
    category: "Compliance & Penal",
  },
  {
    text: "El profesionalismo del Dr. Rostova resolvió un conflicto sindical que parecía insalvable, permitiendo que nuestra planta reanudara operaciones bajo un marco de mutua confianza.",
    author: "Federico Alvear",
    position: "Gerente de Recursos Humanos, Siderurgia Austral",
    category: "Derecho Laboral",
  },
  {
    text: "Su rigor ético y la inmediatez de sus respuestas nos brindan una absoluta tranquilidad jurídica en el día a día corporativo de nuestra firma inmobiliaria.",
    author: "Gabriela Solís de Toledo",
    position: "Socia Fundadora, Desarrollos Palermo",
    category: "Asesoría General",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  // Smooth Scroll handler
  const handleScroll = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      // Small delay to allow mobile drawer state transition to finish
      // avoiding layout jumps during scroll calculations.
      setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 120);
    }
  };

  // Form Validation
  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = "El nombre es obligatorio";
    
    if (!formData.email.trim()) {
      tempErrors.email = "El correo electrónico es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "El formato de correo no es válido";
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = "El teléfono es obligatorio";
    } else if (!/^[+0-9\s-]{7,18}$/.test(formData.phone)) {
      tempErrors.phone = "Ingrese un número de teléfono válido";
    }

    if (!formData.subject) tempErrors.subject = "Seleccione un asunto";
    if (!formData.message.trim()) tempErrors.message = "El mensaje es obligatorio";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessDialog(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="relative min-h-screen bg-[#070B13] text-zinc-100 font-sans selection:bg-primary selection:text-primary-foreground bg-grid-pattern">
      {/* Global Grain Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-grain" />
      
      {/* BACKGROUND GRADIENTS */}
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[130px] pointer-events-none" />
      <div className="absolute top-[800px] left-0 -z-10 h-[600px] w-[600px] rounded-full bg-primary/3 blur-[140px] pointer-events-none" />

      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800/60 bg-[#070B13]/85 backdrop-blur-md transition-all duration-300">
        <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
          
          {/* Logo */}
          <button
            onClick={() => handleScroll("inicio")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="h-9 w-9 flex items-center justify-center rounded border border-primary/40 bg-primary/5 text-primary transition-all duration-300 group-hover:border-primary">
              <Scale className="h-4.5 w-4.5" />
            </div>
            <span className="font-serif text-2xl font-semibold tracking-[0.1em] text-zinc-100 group-hover:text-primary transition-colors">
              VALERIUS<span className="text-primary font-sans font-normal ml-0.5">.</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wider text-zinc-400">
            {["Especialidades", "Socios", "Testimonios", "Contacto"].map((section) => (
              <button
                key={section}
                onClick={() => handleScroll(section.toLowerCase())}
                className="hover:text-primary transition-colors duration-200 cursor-pointer animate-none"
              >
                {section}
              </button>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => handleScroll("contacto")}
              className="bg-primary hover:bg-primary/95 text-primary-foreground font-medium px-5 py-2.5 rounded-lg transition-all duration-300 font-sans tracking-wide text-xs"
            >
              Consulta Gratuita
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* MOBILE DRAWER */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-20 left-0 w-full border-b border-zinc-800 bg-[#070B13] overflow-hidden z-50 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div className="container mx-auto px-6 py-6 flex flex-col gap-4 text-zinc-300">
                {["Especialidades", "Socios", "Testimonios", "Contacto"].map((section) => (
                  <button
                    key={section}
                    onClick={() => handleScroll(section.toLowerCase())}
                    className="py-2 text-left text-base font-medium tracking-wide hover:text-primary transition-colors border-b border-zinc-900/60"
                  >
                    {section}
                  </button>
                ))}
                <Button
                  onClick={() => handleScroll("contacto")}
                  className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground tracking-wider"
                >
                  Solicitar Consulta
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section id="inicio" className="relative flex min-h-[calc(100vh-80px)] items-center px-6 sm:px-8 py-20 lg:py-28 overflow-hidden">
        
        {/* Elegant vertical architectural line and top monogram */}
        <div className="hidden lg:flex flex-col items-center absolute left-1/2 -translate-x-1/2 top-0 h-32 z-10 pointer-events-none">
          <div className="w-px h-20 bg-gradient-to-b from-primary/60 to-primary/10" />
          <div className="h-8 w-8 rounded-full border border-primary/20 flex items-center justify-center text-[10px] tracking-widest text-primary bg-[#070B13] font-serif select-none">
            V
          </div>
        </div>

        <div className="container mx-auto max-w-7xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-8 relative pl-0 xl:pl-6">
              
              {/* Structural border axis anchor */}
              <div className="absolute -left-4 top-4 bottom-4 w-px bg-gradient-to-b from-primary/20 via-zinc-800/40 to-transparent hidden xl:block" />

              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-[10px] font-bold tracking-[0.2em] text-primary uppercase"
                >
                  <Scale className="h-3 w-3" />
                  Estudio Jurídico de Elite
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-light tracking-tight leading-[1.05] text-zinc-50"
                >
                  La defensa de sus intereses, abordada con <span className="italic font-serif text-primary font-normal">rigor</span> y honor.
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="max-w-xl text-zinc-400 text-sm md:text-[15px] leading-relaxed font-sans font-light"
              >
                En Valerius Law entendemos que las situaciones complejas demandan soluciones excepcionales. Diseñamos estrategias legales personalizadas que combinan solidez técnica con una estricta ética y confidencialidad.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4"
              >
                <Button
                  onClick={() => handleScroll("contacto")}
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/95 text-primary-foreground text-xs font-semibold tracking-[0.15em] uppercase px-8 rounded-lg h-12 shadow-[0_4px_20px_rgba(197,168,128,0.15)]"
                >
                  Solicitar Consulta
                </Button>
                <Button
                  onClick={() => handleScroll("especialidades")}
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-zinc-800 bg-transparent text-zinc-300 hover:bg-zinc-900/60 hover:text-zinc-100 text-xs font-semibold tracking-[0.15em] uppercase px-8 rounded-lg h-12"
                >
                  Áreas de Práctica
                </Button>
              </motion.div>

              {/* Minimalist Trust Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="flex items-center gap-8 pt-8 border-t border-zinc-900 w-full"
              >
                <div>
                  <h4 className="font-serif text-2xl font-semibold text-primary">98%</h4>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-widest mt-0.5 font-semibold">Casos Exitosos</p>
                </div>
                <div className="h-8 w-px bg-zinc-800/80" />
                <div>
                  <h4 className="font-serif text-2xl font-semibold text-primary">25+</h4>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-widest mt-0.5 font-semibold">Años de Trayectoria</p>
                </div>
                <div className="h-8 w-px bg-zinc-800/80" />
                <div>
                  <h4 className="font-serif text-2xl font-semibold text-primary">USD 2B+</h4>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-widest mt-0.5 font-semibold">En Transacciones M&A</p>
                </div>
              </motion.div>
            </div>

            {/* Right Graphic/Image - Editorial composition */}
            <div className="lg:col-span-5 relative mt-12 lg:mt-0 flex justify-center w-full px-6 sm:px-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-[360px] sm:max-w-[400px]"
              >
                {/* Offset background gold frame */}
                <div className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-5 sm:translate-y-5 border border-primary/20 pointer-events-none rounded-lg z-0" />

                {/* Foreground Image Container */}
                <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden border border-zinc-800/80 shadow-[0_25px_55px_rgba(0,0,0,0.65)] bg-[#0d121f] z-10 group">
                  <Image
                    src="/hero_law_firm.png"
                    alt="Valerius Law Office"
                    fill
                    priority
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-103"
                    sizes="(max-w-768px) 100vw, 400px"
                  />
                  {/* Shadow Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B13]/70 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Confidentiality Card */}
                <div className="absolute -bottom-8 -left-8 z-20 hidden sm:block max-w-[240px] rounded-lg border border-primary/25 bg-[#0a0f1d]/90 backdrop-blur-md p-5 shadow-[0_15px_35px_rgba(0,0,0,0.4)]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-[9px] uppercase font-bold tracking-[0.25em] text-primary">Prestigio y Reserva</span>
                  </div>
                  <p className="text-zinc-300 text-[11px] leading-relaxed font-sans font-light">
                    Nuestros socios asumen cada caso personalmente, garantizando confidencialidad absoluta y un análisis jurídico a medida.
                  </p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section id="especialidades" className="py-24 border-t border-zinc-900 bg-[#070B13]/40">
        <div className="container mx-auto max-w-7xl px-6 sm:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Excelencia Técnica
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-wide text-zinc-100 mt-2 mb-4">
              Áreas de Especialización
            </h2>
            <div className="h-0.5 w-16 bg-primary mx-auto mb-6" />
            <p className="text-zinc-400 text-sm leading-relaxed font-sans font-light">
              Nuestros socios lideran equipos dedicados por especialidad jurídica, garantizando respuestas óptimas y asesoramiento de primer nivel frente a conflictos complejos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceAreas.map((area, index) => (
              <PracticeAreaCard
                key={area.title}
                title={area.title}
                description={area.description}
                Icon={area.Icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section id="socios" className="py-24 border-t border-zinc-900">
        <div className="container mx-auto max-w-7xl px-6 sm:px-8">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Socios Directores
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-wide text-zinc-100 mt-2 mb-4">
              Nuestro Equipo de Elite
            </h2>
            <div className="h-0.5 w-16 bg-primary mx-auto mb-6" />
            <p className="text-zinc-400 text-sm leading-relaxed font-sans font-light">
              Unión de rigor académico con amplia destreza práctica en litigación penal, reestructuraciones societarias y negociaciones de alto nivel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <PartnerCard
                key={partner.name}
                name={partner.name}
                role={partner.role}
                image={partner.image}
                shortBio={partner.shortBio}
                longBio={partner.longBio}
                credentials={partner.credentials}
                education={partner.education}
                email={partner.email}
                phone={partner.phone}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonios" className="py-24 border-t border-zinc-900 bg-[#0c1220]/20">
        <div className="container mx-auto max-w-7xl px-6 sm:px-8">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Resultados Probados
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-wide text-zinc-100 mt-2 mb-4">
              Testimonios de Clientes
            </h2>
            <div className="h-0.5 w-16 bg-primary mx-auto mb-6" />
            <p className="text-zinc-400 text-sm leading-relaxed font-sans font-light">
              La confianza se construye a través de resoluciones exitosas. Conozca las opiniones de corporaciones y personas que asesoramos.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto px-10">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent>
                {testimonials.map((item, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
                    <div className="h-full flex flex-col justify-between p-6 md:p-8 bg-[#0d121f]/60 rounded-xl border border-zinc-800/80 hover:border-primary/35 transition-colors duration-300">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <Quote className="h-8 w-8 text-primary/20" />
                          <span className="text-[10px] uppercase font-semibold tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-zinc-300 text-sm leading-relaxed italic font-light mb-6">
                          &ldquo;{item.text}&rdquo;
                        </p>
                      </div>
                      <div className="border-t border-zinc-800/60 pt-4 mt-auto">
                        <h4 className="font-serif text-sm font-semibold text-zinc-200">
                          {item.author}
                        </h4>
                        <p className="text-zinc-500 text-[11px] mt-0.5">
                          {item.position}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end gap-3 mt-8">
                <CarouselPrevious className="relative translate-y-0 left-0 border-zinc-800 bg-transparent text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/60 h-9 w-9" />
                <CarouselNext className="relative translate-y-0 right-0 border-zinc-800 bg-transparent text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/60 h-9 w-9" />
              </div>
            </Carousel>
          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contacto" className="py-24 border-t border-zinc-900">
        <div className="container mx-auto max-w-7xl px-6 sm:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Atención Presencial & Remota
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-wide text-zinc-100 mt-2 mb-4">
              Solicitar una Consulta
            </h2>
            <div className="h-0.5 w-16 bg-primary mx-auto mb-6" />
            <p className="text-zinc-400 text-sm leading-relaxed font-sans font-light">
              Analizamos cada caso bajo estricta confidencialidad. Complete el formulario a continuación o comuníquese de forma directa a nuestras oficinas en Buenos Aires.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Contact Details & Map */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              
              <div className="space-y-6">
                <h3 className="font-serif text-2xl font-light text-zinc-200">
                  Nuestras Oficinas Centrales
                </h3>
                
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="h-9 w-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-primary shrink-0">
                      <MapPin className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Dirección</h4>
                      <p className="text-zinc-300 text-sm mt-0.5">
                        Av. Corrientes 1050 (Esq. Carlos Pellegrini)<br />
                        C1043 Buenos Aires, Argentina
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="h-9 w-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-primary shrink-0">
                      <Phone className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Teléfono</h4>
                      <p className="text-zinc-300 text-sm mt-0.5">
                        +54 (11) 4815-9900 (Rotativas)
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="h-9 w-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-primary shrink-0">
                      <Mail className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Email</h4>
                      <p className="text-zinc-300 text-sm mt-0.5">
                        contacto@valerius.law
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="h-9 w-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-primary shrink-0">
                      <Clock className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Horario de Atención</h4>
                      <p className="text-zinc-300 text-sm mt-0.5">
                        Lunes a Viernes, de 09:00 a 18:00 hs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dark Google Map Embed */}
              <div className="relative w-full h-[220px] rounded-xl overflow-hidden border border-zinc-800 bg-[#0d121f]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878569344!2d-58.38415068426038!3d-34.60373887968565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac6d7b5b549%3A0xd73df7819ef36894!2sObelisco!5e0!3m2!1ses-419!2sar!4v1685816781234!5m2!1ses-419!2sar"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: "grayscale(1) invert(0.9) contrast(1.2) hue-rotate(200deg)",
                    opacity: 0.85,
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Valerius Law location near Obelisco, Buenos Aires"
                />
              </div>

            </div>

            {/* Strict Contact Form */}
            <div className="lg:col-span-7 bg-[#0d121f]/30 p-8 rounded-xl border border-zinc-800 flex flex-col justify-between">
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-serif text-2xl font-light text-zinc-200 mb-6">
                  Enviar Mensaje Reservado
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                      Nombre Completo
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Ej. Juan Pérez"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className={`bg-zinc-900/60 border-zinc-800 focus:border-primary/80 focus:ring-1 focus:ring-primary/80 text-zinc-100 ${
                        errors.name ? "border-red-500/80 focus:border-red-500" : ""
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-500">{errors.name}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                      Correo Electrónico
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ejemplo@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={`bg-zinc-900/60 border-zinc-800 focus:border-primary/80 focus:ring-1 focus:ring-primary/80 text-zinc-100 ${
                        errors.email ? "border-red-500/80 focus:border-red-500" : ""
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-500">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                      Teléfono de Contacto
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+54 11 1234 5678"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className={`bg-zinc-900/60 border-zinc-800 focus:border-primary/80 focus:ring-1 focus:ring-primary/80 text-zinc-100 ${
                        errors.phone ? "border-red-500/80 focus:border-red-500" : ""
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-red-500">{errors.phone}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                      Área de Interés / Asunto
                    </label>
                    <Select
                      value={formData.subject}
                      onValueChange={(value) => handleInputChange("subject", value)}
                    >
                      <SelectTrigger
                        id="subject"
                        className={`bg-zinc-900/60 border-zinc-800 focus:border-primary/80 focus:ring-1 focus:ring-primary/80 text-zinc-100 ${
                          errors.subject ? "border-red-500/80" : ""
                        }`}
                      >
                        <SelectValue placeholder="Seleccione una especialidad" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0c1220] border-zinc-800 text-zinc-100">
                        <SelectItem value="corporativo">Derecho Corporativo & M&A</SelectItem>
                        <SelectItem value="penal">Derecho Penal Económico</SelectItem>
                        <SelectItem value="civil">Litigios Civiles & Comerciales</SelectItem>
                        <SelectItem value="laboral">Relaciones Laborales & Gremios</SelectItem>
                        <SelectItem value="consulta">Consulta General Privada</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.subject && <p className="text-[11px] text-red-500">{errors.subject}</p>}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                    Descripción Breve de la Situación
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Escriba los hechos principales aquí bajo absoluta confidencialidad..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className={`w-full bg-zinc-900/60 border border-zinc-800 rounded-lg p-3 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-primary/80 focus:ring-1 focus:ring-primary/80 focus:outline-none ${
                      errors.message ? "border-red-500/80 focus:border-red-500" : ""
                    }`}
                  />
                  {errors.message && <p className="text-[11px] text-red-500">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/95 text-primary-foreground text-sm font-semibold tracking-wider h-11 transition-all"
                >
                  {isSubmitting ? "Enviando mensaje reservado..." : "Enviar Solicitud de Consulta"}
                </Button>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#05080e] border-t border-zinc-900 py-12">
        <div className="container mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Brand */}
            <div className="md:col-span-5 flex flex-col space-y-3">
              <span className="font-serif text-xl font-semibold tracking-widest text-zinc-100">
                VALERIUS<span className="text-primary">.</span>
              </span>
              <p className="text-zinc-500 text-xs leading-relaxed max-w-sm">
                La información contenida en este sitio web tiene propósitos puramente informativos y de divulgación general. No constituye, bajo ningún concepto, asesoramiento legal ni entabla relación abogado-cliente.
              </p>
            </div>

            {/* Links */}
            <div className="md:col-span-4 flex gap-8">
              <div className="flex flex-col space-y-2 text-xs text-zinc-400">
                <h5 className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest mb-1">Secciones</h5>
                <button onClick={() => handleScroll("inicio")} className="hover:text-primary transition-colors text-left">Inicio</button>
                <button onClick={() => handleScroll("especialidades")} className="hover:text-primary transition-colors text-left">Áreas de Práctica</button>
                <button onClick={() => handleScroll("socios")} className="hover:text-primary transition-colors text-left">Equipo de Socios</button>
              </div>
              
              <div className="flex flex-col space-y-2 text-xs text-zinc-400">
                <h5 className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest mb-1">Legales</h5>
                <a href="#" className="hover:text-primary transition-colors">Políticas de Privacidad</a>
                <a href="#" className="hover:text-primary transition-colors">Términos de Servicio</a>
                <a href="#" className="hover:text-primary transition-colors">Aviso de Secreto Profesional</a>
              </div>
            </div>

            {/* Copyright */}
            <div className="md:col-span-3 text-left md:text-right flex flex-col space-y-1">
              <p className="text-zinc-400 text-xs">
                © {new Date().getFullYear()} Valerius Law.
              </p>
              <p className="text-zinc-600 text-[10px]">
                Todos los derechos reservados.
              </p>
            </div>

          </div>
        </div>
      </footer>

      {/* Success Dialog Modal */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="max-w-md bg-[#0a0f1d] border border-zinc-800 text-zinc-100 p-6 rounded-xl flex flex-col items-center text-center">
          <div className="h-12 w-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-4">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <DialogTitle className="font-serif text-2xl font-light text-zinc-100 mb-2">
            Solicitud Recibida
          </DialogTitle>
          <DialogDescription className="text-zinc-400 text-sm leading-relaxed max-w-sm mb-6">
            Su mensaje ha sido encriptado y transmitido de forma confidencial a nuestro equipo de socios. Un representante se pondrá en contacto con usted dentro de las próximas 24 horas hábiles.
          </DialogDescription>
          <Button
            onClick={() => setShowSuccessDialog(false)}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground tracking-wider font-semibold"
          >
            Entendido
          </Button>
        </DialogContent>
      </Dialog>

    </div>
  );
}
