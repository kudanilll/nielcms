"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Andi Pratama",
    role: "CTO, TechStart Indonesia",
    avatar: "/professional-asian-man.png",
    content:
      "NCMS mengubah cara kami mengelola konten. Kecepatan dan fleksibilitasnya luar biasa!",
    rating: 5,
  },
  {
    name: "Sarah Wijaya",
    role: "Content Manager, MediaHub",
    avatar: "/professional-asian-woman.png",
    content:
      "Interface yang intuitif membuat tim non-teknis kami bisa mengelola konten dengan mudah.",
    rating: 5,
  },
  {
    name: "Budi Santoso",
    role: "Founder, DigitalCraft",
    avatar: "/professional-man-glasses.png",
    content:
      "API yang lengkap dan dokumentasi yang jelas. Developer dream come true!",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24">
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
            Dipercaya oleh <span className="text-primary">Tim Profesional</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Lihat apa kata pengguna NCMS tentang pengalaman mereka.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card border-border h-full">
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
