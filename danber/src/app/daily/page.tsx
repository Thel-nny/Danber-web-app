import CourseServices from "@/components/ui/course-services"
import { BookOpen, Users, Zap, Target } from "lucide-react"
import Navbar from "@/components/ui/navbar"
export default function DailyEnglishPage() {
  const services = [
    {
      icon: BookOpen,
      title: "Conversational Skills",
      description:
        "Master everyday English through real-world conversations, idioms, and natural speaking patterns used by native speakers.",
      link: "#",
    },
    {
      icon: Users,
      title: "Interactive Classes",
      description:
        "Join live group sessions with fellow learners from around the world to practice speaking and build confidence.",
      link: "#",
    },
    {
      icon: Zap,
      title: "Quick Lessons",
      description:
        "Flexible 30-minute lessons designed to fit your busy schedule while maintaining consistent progress.",
      link: "#",
    },
    {
      icon: Target,
      title: "Personalized Feedback",
      description:
        "Receive detailed corrections and guidance from certified instructors to improve pronunciation and grammar.",
      link: "#",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
    <Navbar />
      <CourseServices
        title="We are giving you perfect solutions with our Daily English program."
        subtitle="Build confidence in everyday English communication with our interactive and engaging daily lessons."
        services={services}
      />
    </main>
  )
}
