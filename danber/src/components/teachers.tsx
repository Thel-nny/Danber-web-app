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
    title: "General Manager / CEO",
    bio: "Berthel Tabares Maguillano is the Chief Executive Officer and General Manager of DANBER Online Tutorial Services where she leads the company's strategic direction, operations, and growth initiatives. With extensive experience in a wide range of ESL courses, specialized training and courses in Essential Management Skills, Human Resource and Management, Marketing and Communications, she has built a reputation for driving innovation, operational excellence, and sustainable business development. Under her leadership, DANBER  has maintained satisfaction with international language centers in China, Costa Rica, Colombia, Japan, Taiwan, Peru, Mexico and Vietnam. She is committed to fostering a culture of integrity, collaboration, and client-focused service, ensuring that the teaching methodology is properly imposed according to the specifications and standard procedure of various language centers worldwide.",
    image: "/CEO.png",
    avatar: "/CEO.png",
  },
  {
    id: 2,
    name: "BDM Danny Maguillano",
    title: "Business Development Manager & Co-Founder",
    bio: "",
    image: "/3.svg",
    avatar: "/3.svg",
  },
  {
    id: 3,
    name: "Teacher Chen",
    title: "Assistant General Manager/International Teacher",
    bio: "",
    image: "/4.svg",
    avatar: "/4.svg",
  },
  {
    id: 4,
    name: "Admin Hope",
    title: "Admin and Scheduler",
    bio: "",
    image: "/5.svg",
    avatar: "/5.svg",
  },
  {
    id: 5,
    name: "Admin John",
    title: "Technical Admin",
    bio: "",
    image: "/6.svg",
    avatar: "/6.svg",
  },
  {
    id: 6,
    name: "Teacher Wildee",
    title: "International Teacher",
    bio: "",
    image: "/7.svg",
    avatar: "/7.svg",
  },
  {
    id: 7,
    name: "Teacher Anny",
    title: "International Teacher",
    bio: "",
    image: "/8.svg",
    avatar: "/8.svg",
  },
  {
    id: 8,
    name: "Teacher Leah",
    title: "Account Executive for Guatemala",
    bio: "",
    image: "/9.svg",
    avatar: "/9.svg",
  },
  {
    id: 9,
    name: "Teacher Ivy",
    title: "International Teacher",
    bio: "",
    image: "/10.svg",
    avatar: "/10.svg",
  },
  {
    id: 10,
    name: "Teacher Loraine",
    title: "International Teacher",
    bio: "",
    image: "/11.svg",
    avatar: "/11.svg",
  },
  {
    id: 11,
    name: "Teacher Krishna",
    title: "International Teacher",
    bio: "",
    image: "/12.svg",
    avatar: "/12.svg",
  },
  {
    id: 12,
    name: "Teacher Jeffrey",
    title: "International Teacher",
    bio: "",
    image: "/13.svg",
    avatar: "/13.svg",
  },
  {
    id: 13,
    name: "Teacher Jamie",
    title: "International Teacher",
    bio: "",
    image: "/14.svg",
    avatar: "/14.svg",
  },
  {
    id: 14,
    name: "Teacher Raven",
    title: "Assistant HR/International Teacher",
    bio: "",
    image: "/15.svg",
    avatar: "/15.svg",
  },
  {
    id: 15,
    name: "Teacher Eirene",
    title: "International Teacher",
    bio: "",
    image: "/16.svg",
    avatar: "/16.svg",
  },
]

export default function MeetTheTeachers() {
  const ceoTeacher = teachers[0]
  const bdmTeacher = teachers[1]
  const teamMembers = teachers.slice(2)
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
            <h2 className="text-4xl md:text-3xl font-bold mb-2 text-gray-900">{ceoTeacher.name}</h2>
            <p className="text-lg text-gray-600 mb-8">{ceoTeacher.title}</p>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">{ceoTeacher.bio}</p>
          </div>

          {/* Right Image */}
          <div>
            <Image
              src={ceoTeacher.image || "/CEO.png"}
              alt={ceoTeacher.name}
              className="w-full h-auto rounded-lg shadow-lg"
              width={200}
              height={200}
            />
          </div>
        </div>

        {/* Featured BDM Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-2 text-gray-900">{bdmTeacher.name}</h2>
            <p className="text-base text-gray-600 mb-8">{bdmTeacher.title}</p>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">{bdmTeacher.bio}</p>
          </div>

          {/* Right Image */}
          <div>
            <Image
              src={bdmTeacher.image || "/3.svg"}
              alt={bdmTeacher.name}
              className="w-80 h-auto rounded-lg shadow-lg ml-auto"
              width={400}
              height={300}
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

          <div className="flex flex-col md:flex-row gap-4 overflow-hidden">
            {/* About Danber Text */}
            <div className="flex-shrink-0 w-full md:w-80 bg-rose-500 p-6 text-white relative z-10 rounded-2xl overflow-y-auto">
              <p className="text-sm leading-relaxed">
                Danber Online Tutorial Services is a Filipino-led online education company dedicated to teaching English to learners across the globe. With a team of skilled and culturally adaptable tutors, we provide accessible, flexible, and engaging lessons tailored to the needs of international students. Our approach combines professional expertise with the warmth and hospitality Filipinos are known for, creating a supportive environment where learners can build confidence, improve communication skills, and connect meaningfully in English. At Danber, we believe language is more than grammar and vocabulary, it is a bridge to opportunity, understanding, and global connection.
              </p>
            </div>

            {/* Animated Team Member Cards */}
            <div className="flex gap-4 overflow-hidden">
              <div className="flex gap-4 animate-scroll">
                {duplicatedTeamMembers.map((teacher, index) => (
                  <div
                    key={`${teacher.id}-${index}`}
                    className="flex-shrink-0 w-64 bg-gray-300 rounded-2xl overflow-hidden hover:shadow-lg transition cursor-pointer"
                  >
                    <div className="h-96 overflow-hidden">
                      <Image
                        src={teacher.image || "/1.svg"}
                        alt={teacher.name}
                        className="w-full h-full object-cover"
                        width={600}
                        height={400}
                      />
                    </div>
                    <div className="p-4 bg-gray-800 text-white h-24 flex flex-col justify-center">
                      <p className="font-semibold text-sm">{teacher.name}</p>
                      <p className="text-gray-300 text-xs line-clamp-2">{teacher.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}