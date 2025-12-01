"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-card border border-border p-8 md:p-16 text-center"
        >
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[128px]" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Siap Tingkatkan{" "}
              <span className="text-primary">Website Anda?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Bergabung dengan ribuan developer dan content creator yang sudah
              menggunakan NCMS untuk mengelola konten website mereka.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12"
              >
                Mulai Sekarang
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary px-8 h-12 bg-transparent"
              >
                Pelajari Dokumentasi
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
