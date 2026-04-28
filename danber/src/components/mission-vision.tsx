"use client"

import { motion } from "framer-motion"
import { Target, Eye } from "lucide-react"

export default function MissionVision() {
  return (
    <motion.section
      className="py-16 md:py-24 px-4 md:px-8 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10 justify-center">
          <div className="w-1 h-8 bg-accent rounded-full"></div>
          <span className="text-sm font-bold text-rose-600 tracking-wider text-muted-foreground">
            OUR PURPOSE
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <motion.div
            className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                <Target className="w-6 h-6 text-rose-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Mission</h2>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              To provide stable job opportunities for Filipino teachers while delivering high-quality English lessons to learners around the world. We focus on training and supporting our teachers so they can use effective and modern teaching methods. Our goal is to help students achieve their desired level of English and communicate confidently in a global setting.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                <Eye className="w-6 h-6 text-rose-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Vision</h2>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              To be a trusted ESL provider known for developing skilled Filipino teachers and delivering effective English learning experiences worldwide. We aim to create more opportunities for Filipino educators and support community growth and social responsibility in the Philippines.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

