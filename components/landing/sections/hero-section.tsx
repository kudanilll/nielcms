"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import Background from "@/components/layout/background";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Grid */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" /> */}

      {/* Glow Effects */}
      {/* <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-glow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-glow"
        style={{ animationDelay: "1s" }}
      /> */}

      {/* Background */}
      <div className="absolute inset-0">
        <Background
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mt-[16vh] mb-[8vh] max-w-4xl mx-auto text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-shadow-[0_0_10px_rgba(0,0,0,0.5)] text-4xl md:text-6xl font-semibold text-foreground mb-6 text-balance leading-[1.2] tracking-tighter"
          >
            Content Management System{" "}
            <Link
              href="https://github.com/kudanilll/nielcms"
              target="_blank"
              className="text-sky-400"
            >
              Open Source
            </Link>{" "}
            untuk Website Anda
          </motion.h1>

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
            <Image
              src="/hero.webp"
              alt="Hero (Test), akan di perbarui nanti"
              width={1000}
              height={1000}
              className="mx-auto rounded-lg border border-border shadow-[0_0_10px_rgba(255,255,255,0.3)]"
            />

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
