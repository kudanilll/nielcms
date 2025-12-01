"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Zap,
  Shield,
  Layers,
  Globe,
  Code2,
  Palette,
  Database,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Super Cepat",
    description:
      "Performa tinggi dengan response time dibawah 50ms untuk pengalaman pengguna terbaik.",
  },
  {
    icon: Shield,
    title: "Keamanan Tinggi",
    description:
      "Dilengkapi dengan enkripsi end-to-end dan proteksi terhadap serangan cyber.",
  },
  {
    icon: Layers,
    title: "Modular & Extensible",
    description:
      "Arsitektur plugin yang memungkinkan Anda menambah fitur sesuai kebutuhan.",
  },
  {
    icon: Globe,
    title: "Multi-Language",
    description:
      "Dukungan penuh untuk berbagai bahasa dan localization untuk audiens global.",
  },
  {
    icon: Code2,
    title: "Developer Friendly",
    description:
      "API yang lengkap, dokumentasi detail, dan SDK untuk berbagai bahasa pemrograman.",
  },
  {
    icon: Palette,
    title: "Customizable UI",
    description: "Tema dan template yang dapat disesuaikan tanpa perlu coding.",
  },
  {
    icon: Database,
    title: "Multi-Database",
    description:
      "Dukungan untuk MySQL, PostgreSQL, MongoDB, dan database lainnya.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Fitur kolaborasi tim dengan role management dan workflow approval.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Fitur yang Membuat{" "}
            <span className="text-primary">NCMS Berbeda</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Semua yang Anda butuhkan untuk mengelola konten website dengan
            efisien dan profesional.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 h-full group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
