import CourseServices from "@/components/ui/course-services"
import { Briefcase, TrendingUp, Users, FileText } from "lucide-react"
import React from "react"
import Navbar from "@/components/ui/navbar"
export default function BusinessEnglishPage() {
  const services = [
    {
      icon: Briefcase,
      title: "Professional Communication",
      description:
        "Learn corporate vocabulary, email etiquette, and presentation skills essential for international business environments.",
      link: "#",
    },
    {
      icon: TrendingUp,
      title: "Career Advancement",
      description: "Develop advanced English skills to excel in job interviews, negotiations, and leadership roles.",
      link: "#",
    },
    {
      icon: Users,
      title: "Networking Skills",
      description:
        "Master the art of business networking, small talk, and building professional relationships globally.",
      link: "#",
    },
    {
      icon: FileText,
      title: "Business Writing",
      description: "Perfect your written communication for reports, proposals, and professional correspondence.",
      link: "#",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
    <Navbar />
      <CourseServices
        title="We are giving you perfect solutions with our Business English program."
        subtitle="Elevate your career with professional English skills tailored for the corporate world."
        services={services}
      />
    </main>
  )
}
