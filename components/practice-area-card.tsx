"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface PracticeAreaCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  index: number;
}

export function PracticeAreaCard({ title, description, Icon, index }: PracticeAreaCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <Card className="h-full border border-zinc-800 bg-[#0d121f]/50 transition-all duration-300 hover:border-primary/50 hover:bg-[#111726]/80 hover:shadow-[0_0_20px_rgba(197,168,128,0.07)]">
        <CardHeader className="pb-2">
          <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="h-5 w-5" />
          </div>
          <CardTitle className="font-serif text-xl font-medium tracking-wide text-zinc-100">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-zinc-400 text-sm leading-relaxed font-sans">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}
