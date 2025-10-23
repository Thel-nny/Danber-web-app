"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
export default function Services() {
  const services = [
    {
      title: "Daily English",
      color: "bg-amber-300",
      description: <>Learn English Daily<br />with the Right teachers<br />that will guide you.</>,
      image: "/daily.svg",
      link: "/daily",
    },
    {
      title: "IELTS Preparation",
      color: "bg-red-500",
      description: <>Learn English Daily<br />with the Right teachers<br />that will guide you.</>,
      image: "/Ielts.svg",
      link: "/ielts",
    },
    {
      title: "Business English",
      color: "bg-amber-300",
      description: <>Learn English Daily<br />with the Right teachers<br />that will guide you.</>,
      image: "/Business.svg",
      link: "/business",
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
            <div key={idx} className={`${service.color} rounded-3xl p-8 space-y-4 relative`}>
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="w-full h-48 object-cover rounded-2xl"
                width={400}
                height={200}
              />
              <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
              <div className="absolute w-[152px] h-[124px] left-[275px] top-[280px] bg-white rounded-[32px]"></div>
              <div className="absolute w-[85px] h-[98px] left-[307px] top-[295px] bg-[#FFEE7E] rounded-[32px]"></div>
              <Link href={service.link} className="absolute w-[61px] h-[64px] left-[319px] top-[310px] flex items-center justify-center">
                <div className="absolute left-[29.17%] right-[29.17%] top-[29.17%] bottom-[29.17%] flex items-center justify-center">
                  <ArrowUpRight className="w-50 h-50" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
