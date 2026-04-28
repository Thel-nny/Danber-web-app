"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

export default function Services() {
  const services = [
    {
      title: "Daily English",
      color: "bg-amber-200",
      description: <>Learn English daily with the right teachers who will guide you patiently, inspire your progress, and provide the tools you need to communicate effectively in real-life situations.</>,
      image: "/daily.svg",
      link: "/daily",
    },
    {
      title: "IELTS Preparation",
      color: "bg-red-400",
      description: <>Prepare for IELTS with expert teachers who guide you daily through practice, strategies, and personalized lessons, helping you build confidence, master test techniques, and achieve the score you need for your academic or career goals.</>,
      image: "/Ielts.svg",
      link: "/ielts",
    },
    {
      title: "Business English",
      color: "bg-amber-200",
      description: <>Learn Business English with professional teachers who provide daily guidance in communication, presentations, and workplace vocabulary, empowering you to express yourself clearly, negotiate effectively, and succeed in international business environments.</>,
      image: "/Business.svg",
      link: "/bussiness",
    },
  ]

  return (
    <section id="services" className="bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
          <h2 className="text-5xl font-bold text-foreground">Our Services</h2>
          <p className="lg:ml-8">When students get the right English lessons and teachers have the right tools,<br />
          learning becomes easier. This helps students speak with confidence, find new opportunities,<br />
           and succeed in school, work, and life.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="group h-full transition-all duration-300 hover:scale-105">
              <div className={`relative overflow-hidden rounded-2xl ${service.color} shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col`}>
                {/* Image Container */}
                <div className="relative h-40 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-120"
                      width={400}
                      height={200}
                    />
                  </div>

                {/* Content */}
                <div className="flex-1 p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">{service.title}</h3>
                    <p className="text-xs leading-relaxed text-black/70">{service.description}</p>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6 pt-4 border-t border-black/20">
                    <Link href={service.link} className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-black/10 hover:bg-black/20 text-black font-medium transition-colors duration-200 group/btn block">
                      <span>Explore Course</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
    </section>
  )
}
