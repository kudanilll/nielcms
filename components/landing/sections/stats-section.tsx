"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Website Aktif" },
  { value: "99.9%", label: "Uptime" },
  { value: "50ms", label: "Response Time" },
  { value: "24/7", label: "Support" },
];

export function StatsSection() {
  return (
    <section className="py-16 border-y border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
