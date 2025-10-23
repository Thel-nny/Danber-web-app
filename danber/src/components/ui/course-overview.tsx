import CourseServices from "./course-services"
import { BookOpen, Briefcase, Award } from "lucide-react"

export default function CourseOverview() {
  const dailyEnglishServices = [
    {
      icon: BookOpen,
      title: "Conversational Skills",
      description:
        "Build confidence in everyday conversations with native speakers through interactive dialogues and real-world scenarios.",
    },
    {
      icon: BookOpen,
      title: "Grammar Fundamentals",
      description:
        "Master essential grammar rules and structures with clear explanations and practical exercises tailored to your level.",
    },
    {
      icon: BookOpen,
      title: "Vocabulary Building",
      description:
        "Expand your vocabulary with contextual learning, idioms, and expressions used in daily communication.",
    },
    {
      icon: BookOpen,
      title: "Pronunciation Coaching",
      description:
        "Perfect your accent and pronunciation with personalized feedback from certified English instructors.",
    },
  ]

  const businessEnglishServices = [
    {
      icon: Briefcase,
      title: "Professional Communication",
      description:
        "Learn to write emails, reports, and presentations that impress in corporate environments worldwide.",
    },
    {
      icon: Briefcase,
      title: "Business Meetings & Negotiations",
      description:
        "Develop skills for leading meetings, presenting ideas, and negotiating deals with confidence and clarity.",
    },
    {
      icon: Briefcase,
      title: "Industry-Specific Vocabulary",
      description: "Master terminology and jargon specific to your industry, from finance to technology to healthcare.",
    },
    {
      icon: Briefcase,
      title: "Interview Preparation",
      description:
        "Ace your job interviews with targeted practice, common questions, and professional communication strategies.",
    },
  ]

  const ieltsServices = [
    {
      icon: Award,
      title: "Listening Module Training",
      description:
        "Develop strategies to understand various accents and question types with practice tests and detailed feedback.",
    },
    {
      icon: Award,
      title: "Reading Comprehension",
      description: "Master time management and comprehension techniques for academic and general reading passages.",
    },
    {
      icon: Award,
      title: "Writing Task Practice",
      description:
        "Learn to write task 1 and task 2 essays with proper structure, vocabulary, and grammar for high band scores.",
    },
    {
      icon: Award,
      title: "Speaking Fluency",
      description:
        "Practice all three parts of the speaking test with mock interviews and personalized coaching from IELTS experts.",
    },
  ]

  return (
    <>
      <CourseServices
        title="Master Daily English"
        subtitle="Build your foundation with everyday English skills that help you communicate naturally and confidently."
        services={dailyEnglishServices}
      />
      <CourseServices
        title="Excel in Business English"
        subtitle="Advance your career with professional English skills designed for the modern workplace."
        services={businessEnglishServices}
      />
      <CourseServices
        title="Ace Your IELTS Exam"
        subtitle="Achieve your target band score with comprehensive preparation and expert guidance."
        services={ieltsServices}
      />
    </>
  )
}
