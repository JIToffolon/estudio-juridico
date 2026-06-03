"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Award, BookOpen, User } from "lucide-react";

interface PartnerCardProps {
  name: string;
  role: string;
  image: string;
  shortBio: string;
  longBio: string;
  credentials: string[];
  education: string[];
  email: string;
  phone: string;
  index: number;
}

export function PartnerCard({
  name,
  role,
  image,
  shortBio,
  longBio,
  credentials,
  education,
  email,
  phone,
  index,
}: PartnerCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="group relative flex flex-col overflow-hidden rounded-xl border border-zinc-800 bg-[#0d121f]/40 transition-all duration-300 hover:border-primary/40 hover:bg-[#111726]/60 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
      >
        {/* Photo Container */}
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-900">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-w-700px) 100vw, 33vw"
          />
          {/* Elegant gold top border overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070B13] via-transparent to-transparent opacity-60" />
        </div>

        {/* Info */}
        <div className="flex flex-1 flex-col p-6">
          <span className="text-[11px] font-semibold tracking-[0.2em] text-primary uppercase mb-1">
            {role}
          </span>
          <h3 className="font-serif text-2xl font-medium tracking-wide text-zinc-100 mb-2">
            {name}
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1 font-sans">
            {shortBio}
          </p>

          <Button
            onClick={() => setIsOpen(true)}
            variant="outline"
            size="sm"
            className="w-full border-zinc-800 bg-transparent text-zinc-300 hover:border-primary hover:bg-primary hover:text-primary-foreground font-sans transition-all duration-300 tracking-wider"
          >
            Ver Trayectoria
          </Button>
        </div>
      </motion.div>

      {/* Modal Biography */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0a0f1d] border border-zinc-800 text-zinc-100 p-6 md:p-8 sm:max-w-xl md:max-w-2xl rounded-xl">
          <DialogHeader className="flex flex-col sm:flex-row gap-6 items-start text-left">
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                {role}
              </span>
              <DialogTitle className="font-serif text-3xl font-medium tracking-wide text-zinc-100 mt-1 mb-2">
                {name}
              </DialogTitle>
              <div className="flex flex-col gap-1.5 text-zinc-400 text-sm">
                <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="h-4 w-4 text-primary" />
                  {email}
                </a>
                <a href={`tel:${phone}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="h-4 w-4 text-primary" />
                  {phone}
                </a>
              </div>
            </div>
          </DialogHeader>

          <div className="mt-6 space-y-6">
            <DialogDescription className="text-zinc-300 text-sm leading-relaxed font-sans font-light">
              {longBio}
            </DialogDescription>

            {/* Credentials & Education */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-zinc-800">
              <div>
                <h4 className="flex items-center gap-2 font-serif text-base font-semibold text-primary mb-3">
                  <Award className="h-4 w-4" />
                  Especialidades & Reconocimientos
                </h4>
                <ul className="space-y-2">
                  {credentials.map((cred, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-zinc-400 text-xs leading-relaxed">
                      <span className="text-primary mt-1">•</span>
                      <span>{cred}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="flex items-center gap-2 font-serif text-base font-semibold text-primary mb-3">
                  <BookOpen className="h-4 w-4" />
                  Educación
                </h4>
                <ul className="space-y-2">
                  {education.map((edu, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-zinc-400 text-xs leading-relaxed">
                      <span className="text-primary mt-1">•</span>
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
