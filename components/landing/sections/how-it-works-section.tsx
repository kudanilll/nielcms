"use client";

import { motion } from "framer-motion";
import { Download, Settings, Rocket } from "lucide-react";

const steps = [
  {
    icon: Download,
    step: "01",
    title: "Install NCMS",
    description:
      "Jalankan satu perintah untuk menginstall NCMS ke project Anda. Setup selesai dalam hitungan menit.",
  },
  {
    icon: Settings,
    step: "02",
    title: "Konfigurasi",
    description:
      "Sesuaikan pengaturan, pilih template, dan hubungkan dengan database Anda melalui dashboard intuitif.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Go Live",
    description:
      "Publikasikan website Anda dan mulai kelola konten dengan mudah dari mana saja.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mulai dalam <span className="text-primary">3 Langkah Mudah</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tidak perlu konfigurasi rumit. Mulai dari nol hingga production
            dalam waktu singkat.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-full h-[2px] bg-border" />
              )}

              <div className="text-center relative z-10">
                {/* Step Number */}
                <div className="text-6xl font-bold text-primary/20 mb-4">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
