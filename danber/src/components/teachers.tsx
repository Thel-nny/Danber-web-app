"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"

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
    name: "Teacher Jewel",
    title: "Admin for Payroll/International Teacher",
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
    name: "Teacher Dennise",
    title: "Account Executive for Taiwan",
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
    name: "Teacher Keziah",
    title: "Account Executive for China Accounts",
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
    name: "Teacher Renz",
    title: "International Teacher",
    bio: "",
    image: "/16.svg",
    avatar: "/16.svg",
  },
  {
    id: 16,
    name: "Teacher Trishia",
    title: "International Teacher",
    bio: "",
    image: "/17.svg",
    avatar: "/17.svg",
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

        {/* Featured BDM Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div>
            <h2 className="text-5xl md:text-6xl font-light mb-2 text-gray-900">{bdmTeacher.name}</h2>
            <p className="text-lg text-gray-600 mb-8">{bdmTeacher.title}</p>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">{bdmTeacher.bio}</p>
          </div>

          {/* Right Image */}
          <div>
            <Image
              src={bdmTeacher.image || "/placeholder.svg"}
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
            {/* Featured CEO Card */}
            <div className="flex-shrink-0 w-full md:w-64 bg-rose-500 p-6 text-white relative z-10">
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
                  <Image src="/instagram.svg" alt="Instagram" className="w-5 h-5" width={20} height={20} style={{ filter: 'invert(1)' }} />
                </a>
                <a href="#" className="text-white hover:text-rose-200 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
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
                        src={teacher.image || "/placeholder.svg"}
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