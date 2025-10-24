"use client"

import React from "react"
import Image from "next/image"

interface Teacher {
  id: number
  name: string
  title: string
  bio: string
  image: string
  avatar: string
}

const teachers: Teacher[] = [
  {
    id: 1,
    name: "Berthel T. Maguillano",
    title: "General Manager / CEO / COO",
    bio: "With over 20 years of experience in English language education, Berthel T. Maguillano has dedicated her career to empowering learners worldwide. As CEO and General Manager of Danber Online Tutorial Services, she leads with a passion for accessible, high-quality ESL instruction. Her expertise in curriculum design, teacher development, and online learning platforms continues to shape the company’s mission: helping students thrive in a global, English-speaking world. She believes that even ",
    image: "/CEO.png",
    avatar: "/CEO.png",
  },
  {
    id: 2,
    name: "BDM Danny Maguillano",
    title: "Business Development Manager",
    bio: "",
    image: "/3.svg",
    avatar: "/3.svg",
  },
  {
    id: 3,
    name: "Teacher Chen",
    title: "Assistant General Manager",
    bio: "",
    image: "/4.svg",
    avatar: "/4.svg",
  },
  {
    id: 4,
    name: "Admin Hope",
    title: "Admin and Scheduler",
    bio: "Bob oversees all operational aspects of our organization with precision and excellence. His leadership has been instrumental in our growth.",
    image: "/5.svg",
    avatar: "/5.svg",
  },
  {
    id: 5,
    name: "Admin John",
    title: "Technical Admin",
    bio: "David brings strategic vision and operational excellence to our executive team. His innovative approach drives our company forward.",
    image: "/6.svg",
    avatar: "/6.svg",
  },
  {
    id: 6,
    name: "Teacher Wildee",
    title: "ESL Teacher",
    bio: "Zoe manages our financial strategy with expertise and precision. Her financial acumen ensures sustainable growth.",
    image: "/7.svg",
    avatar: "/7.svg",
  },
  {
    id: 7,
    name: "Teacher Jewel",
    title: "Admin for Payroll",
    bio: "Nicole leads our human resources initiatives with compassion and strategic thinking. She builds our strong team culture.",
    image: "/8.svg",
    avatar: "/8.svg",
  },
    {
    id: 8,
    name: "Teacher Leah",
    title: "Account Executive for Guatemala",
    bio: "Nicole leads our human resources initiatives with compassion and strategic thinking. She builds our strong team culture.",
    image: "/9.svg",
    avatar: "/9.svg",
  },
    {
    id: 9,
    name: "Teacher Ivy",
    title: "VP of HR",
    bio: "Nicole leads our human resources initiatives with compassion and strategic thinking. She builds our strong team culture.",
    image: "/10.svg",
    avatar: "/10.svg",
  },
    {
    id: 10,
    name: "Teacher Dennise",
    title: "Account Executive for Taiwan",
    bio: "Nicole leads our human resources initiatives with compassion and strategic thinking. She builds our strong team culture.",
    image: "/11.svg",
    avatar: "/11.svg",
  },
    {
    id: 11,
    name: "Teacher Krishna",
    title: "VP of HR",
    bio: "Nicole leads our human resources initiatives with compassion and strategic thinking. She builds our strong team culture.",
    image: "/12.svg",
    avatar: "/12.svg",
  },
    {
    id: 12,
    name: "Teacher Keziah",
    title: "Account Executive for China Accounts",
    bio: "Nicole leads our human resources initiatives with compassion and strategic thinking. She builds our strong team culture.",
    image: "/13.svg",
    avatar: "/13.svg",
  },
    {
    id: 13,
    name: "Teacher Jamie",
    title: "VP of HR",
    bio: "Nicole leads our human resources initiatives with compassion and strategic thinking. She builds our strong team culture.",
    image: "/14.svg",
    avatar: "/14.svg",
  },
    {
    id: 14,
    name: "Teacher Raven",
    title: "Assistant HR",
    bio: "Nicole leads our human resources initiatives with compassion and strategic thinking. She builds our strong team culture.",
    image: "/15.svg",
    avatar: "/15.svg",
  },
]

export default function MeetTheTeachers() {
  const ceoTeacher = teachers[0]
  const teamMembers = teachers.slice(1)
  const duplicatedTeamMembers = [...teamMembers, ...teamMembers]

  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#FDDA0D] py-20 px-4 md:px-8 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-1 w-8 bg-gray-800"></div>
          <span className="text-sm font-semibold text-gray-700">Management Team</span>
        </div>

        {/* Featured CEO Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div>
            <h2 className="text-5xl md:text-6xl font-light mb-2 text-gray-900">{ceoTeacher.name}</h2>
            <p className="text-lg text-gray-600 mb-8">{ceoTeacher.title}</p>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">{ceoTeacher.bio}</p>
          </div>

          {/* Right Image */}
          <div>
            <Image
              src={ceoTeacher.image || "/placeholder.svg"}
              alt={ceoTeacher.name}
              className="w-full h-auto rounded-lg shadow-lg"
              width={600}
              height={400}
            />
          </div>
        </div>

        {/* Team Carousel */}
        <div className="relative mt-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
              Explore our comprehensive
              <br />
              service offerings
            </h3>
          </div>

          <div className="flex gap-4 overflow-hidden">
            {/* Featured CEO Card */}
            <div className="flex-shrink-0 w-64 bg-rose-500 p-6 text-white relative z-10">
              <h4 className="text-xl font-bold mb-1">{ceoTeacher.name}</h4>
              <p className="text-rose-100 text-sm mb-4">{ceoTeacher.title}</p>
              <p className="text-rose-50 text-sm mb-6 line-clamp-3">{ceoTeacher.bio}</p>
              <div className="flex gap-3">
                <a href="#" className="text-white hover:text-rose-200 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-rose-200 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-rose-200 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path
                      d="M16.6915026,12.4744748 L16.6915026,12.4744748 C16.6915026,14.1002199 15.3917682,15.4144899 13.8013399,15.4144899 L10.4786667,15.4144899 L10.4786667,9.53448713 L13.8013399,9.53448713 C15.3917682,9.53448713 16.6915026,10.8487571 16.6915026,12.4744748 Z M14.4744748,12.4744748 C14.4744748,11.5089605 13.8013399,10.8358256 12.8358256,10.8358256 L11.6915026,10.8358256 L11.6915026,14.1131513 L12.8358256,14.1131513 C13.8013399,14.1131513 14.4744748,13.4400164 14.4744748,12.4744748 Z M18.5599348,15.4144899 L18.5599348,9.53448713 L19.8597692,9.53448713 L19.8597692,15.4144899 L18.5599348,15.4144899 Z M19.2098521,8.82360248 C18.6674486,8.82360248 18.2357516,8.39190548 18.2357516,7.84950198 C18.2357516,7.30709849 18.6674486,6.87540148 19.2098521,6.87540148 C19.7522556,6.87540148 20.1839526,7.30709849 20.1839526,7.84950198 C20.1839526,8.39190548 19.7522556,8.82360248 19.2098521,8.82360248 Z M9.29514851,15.4144899 L9.29514851,9.53448713 L10.5949829,9.53448713 L10.5949829,10.5599348 C10.9192053,9.97788954 11.5923402,9.53448713 12.5578545,9.53448713 C14.1482828,9.53448713 15.4480172,10.8487571 15.4480172,12.4744748 L15.4480172,12.4744748 C15.4480172,14.1002199 14.1482828,15.4144899 12.5578545,15.4144899 C11.5923402,15.4144899 10.9192053,14.9710875 10.5949829,14.3890422 L10.5949829,15.4144899 L9.29514851,15.4144899 Z M12.5578545,14.1131513 C13.5233688,14.1131513 14.1965037,13.4400164 14.1965037,12.4744748 L14.1965037,12.4744748 C14.1965037,11.5089605 13.5233688,10.8358256 12.5578545,10.8358256 C11.5923402,10.8358256 10.9192053,11.5089605 10.9192053,12.4744748 C10.9192053,13.4400164 11.5923402,14.1131513 12.5578545,14.1131513 Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Animated Team Member Cards */}
            <div className="flex gap-4 animate-scroll">
              {duplicatedTeamMembers.map((teacher, index) => (
                <div
                  key={`${teacher.id}-${index}`}
                  className="flex-shrink-0 w-56 bg-gray-300 rounded-2xl overflow-hidden hover:shadow-lg transition cursor-pointer"
                >
                  <Image
                    src={teacher.image || "/placeholder.svg"}
                    alt={teacher.name}
                    className="w-full h-64 object-cover"
                    width={600}
                    height={400}
                  />
                  <div className="p-4 bg-gray-800 text-white">
                    <p className="font-semibold text-sm">{teacher.name}</p>
                    <p className="text-gray-300 text-xs">{teacher.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
