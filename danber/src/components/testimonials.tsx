"use client"

import { Star } from "lucide-react"
import { useEffect, useRef } from "react"

export default function Testimonials() {
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    let animationId: number

    const animate = () => {
      carousel.scrollLeft += 1
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0
      }
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [])

  const testimonials = [
    {
      id: 1,
      text: "Their ability to capture our brand essence in every project is unparalleled - an invaluable creative collaborator.",
      author: "Isabella Rodriguez",
      title: "CEO and Co-founder of ABC Company",
      avatar: "/placeholder-avatar-1.jpg",
    },
    {
      id: 2,
      text: "Creative geniuses who listen, understand, and craft captivating visuals - an agency that truly understands our needs.",
      author: "Gabrielle Williams",
      title: "CEO and Co-founder of ABC Company",
      avatar: "/placeholder-avatar-2.jpg",
    },
    {
      id: 3,
      text: "Exceeded our expectations with innovative design and vision to life - a truly creative agency.",
      author: "Samantha Johnson",
      title: "CEO and Co-founder of ABC Company",
      avatar: "/placeholder-avatar-3.jpg",
    },
    {
      id: 4,
      text: "A refreshing and imaginative agency that consistently delivers exceptional results - highly recommended for any project.",
      author: "Victoria Thompson",
      title: "CEO and Co-founder of ABC Company",
      avatar: "/placeholder-avatar-4.jpg",
    },
    {
      id: 5,
      text: "Their team's artistic flair and strategic approach resulted in remarkable campaigns - a reliable creative partner.",
      author: "John Peter",
      title: "CEO and Co-founder of ABC Company",
      avatar: "/placeholder-avatar-5.jpg",
    },
    {
      id: 6,
      text: "From concept to execution, their creativity knows no bounds - a game-changer for our brand's success.",
      author: "Natalie Martinez",
      title: "CEO and Co-founder of ABC Company",
      avatar: "/placeholder-avatar-6.jpg",
    },
  ]

  return (
    <section className="bg-gradient-to-b from-amber-500 to-amber-200 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl px-8 py-16 mb-12">
          {/* Rating Badge */}
          <div className="flex justify-center mb-8">
            <div className="bg-black text-white rounded-full px-6 py-3 flex items-center gap-2 inline-flex">
              <Star className="w-5 h-5 fill-blue-500 text-blue-500" />
              <span className="text-sm font-semibold">Rated 4/5 by our users and partners</span>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl font-bold text-center text-black mb-8">
            Words of praise from others
            <br />
            about our presence.
          </h2>
        </div>

        <div className="overflow-hidden">
          <div ref={carouselRef} className="flex gap-6 animate-scroll">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={`${testimonial.id}-${index}`} className="bg-gray-100 rounded-2xl p-8 flex-shrink-0 w-80">
                {/* Quotation Mark */}
                <div className="text-5xl text-blue-500 font-bold mb-4">&quot;</div>

                {/* Testimonial Text */}
                <p className="text-gray-800 font-semibold text-base mb-6 leading-relaxed">{testimonial.text}</p>

                {/* User Info */}
                <div>
                  <p className="font-bold text-gray-900 text-sm">{testimonial.author}</p>
                  <p className="text-gray-600 text-xs">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
