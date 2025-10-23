import CourseServices from "@/components/ui/course-services"
import { Award, BookMarked, Headphones, PenTool } from "lucide-react"
import Navbar from "@/components/ui/navbar"
export default function IeltsPreparationPage() {
  const services = [
    {
      icon: Award,
      title: "Exam Strategy",
      description: "Learn proven test-taking strategies and time management techniques to maximize your IELTS score.",
      link: "#",
    },
    {
      icon: Headphones,
      title: "Listening Practice",
      description: "Intensive listening exercises with authentic IELTS audio materials and detailed explanations.",
      link: "#",
    },
    {
      icon: PenTool,
      title: "Writing Mastery",
      description:
        "Develop strong writing skills for both Task 1 and Task 2 with expert feedback on structure and vocabulary.",
      link: "#",
    },
    {
      icon: BookMarked,
      title: "Reading & Speaking",
      description: "Comprehensive training in reading comprehension and fluent speaking for all IELTS band levels.",
      link: "#",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <CourseServices
        title="We are giving you perfect solutions with our IELTS Preparation program."
        subtitle="Achieve your target IELTS score with our comprehensive exam preparation course."
        services={services}
      />
    </main>
  )
}
