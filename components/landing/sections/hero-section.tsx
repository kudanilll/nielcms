"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-glow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-glow"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 text-balance leading-tight tracking-tighter"
          >
            Content Management{" "}
            <span className="text-primary">System Modern</span> untuk Website
            Anda
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed text-pretty"
          >
            NCMS memudahkan Anda mengelola konten website dengan antarmuka yang
            intuitif, performa tinggi, dan fitur lengkap untuk developer maupun
            content creator.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12 text-base"
            >
              Mulai Gratis
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary px-8 h-12 text-base bg-transparent"
            >
              <Play className="mr-2 w-4 h-4" />
              Lihat Demo
            </Button>
          </motion.div>

          {/* Code Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-card border border-border rounded-xl p-1 shadow-2xl shadow-primary/10">
              <div className="bg-secondary/50 rounded-lg p-4 md:p-6">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-4 text-xs text-muted-foreground font-mono">
                    ncms install
                  </span>
                </div>

                {/* Code */}
                <pre className="text-left text-sm md:text-base font-mono overflow-x-auto">
                  <code className="text-muted-foreground">
                    <span className="text-primary">$</span> npx
                    create-ncms@latest my-project{"\n"}
                    <span className="text-muted-foreground/60">
                      ✓ Creating project structure...{"\n"}
                    </span>
                    <span className="text-muted-foreground/60">
                      ✓ Installing dependencies...{"\n"}
                    </span>
                    <span className="text-muted-foreground/60">
                      ✓ Setting up database...{"\n"}
                    </span>
                    <span className="text-green-400">
                      ✓ Your NCMS project is ready!
                    </span>
                  </code>
                </pre>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-3 shadow-lg animate-float hidden md:block">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-xs text-muted-foreground">
                  Live Preview
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
