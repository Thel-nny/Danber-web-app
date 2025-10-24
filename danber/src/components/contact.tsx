"use client"
import Image from "next/image"
import type React from "react"

import { useState } from "react"
import { Phone, Mail, Clock, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        alert('Message sent successfully!')
        setFormData({ name: "", email: "", company: "", subject: "", message: "" })
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      alert('An error occurred. Please try again.')
    }
  }

  return (
    <section id="contact" className="bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-amber-600 font-semibold mb-2">Contact us</p>
          <h2 className="text-5xl font-bold text-red-600 mb-6">Get in Touch with Our Team</h2>
          <p className="text-gray-600 max-w-2xl">
            We&apos;re here to answer your questions, discuss your concerns, and help you find the best teachers for your
             needs. Reach out to us, and let&apos;s start building something great together.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-black mb-8">Tell Us About You</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="We'll get back to you here"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Company Field */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Let us know who you represent"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-12">
            {/* Direct Approach Section */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-8">Prefer a Direct Approach?</h3>
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-600 text-sm">Phone / WhatsApp</p>
                    <a href="tel:+639778556355" className="text-black-600 font-semibold hover:underline">
                      +639778556355 
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-600 text-sm">Email</p>
                    <a href="mailto:danbersonlineschool221@gmail.com" className="text-black-600 font-semibold hover:underline">
                      danbersonlineschool221@gmail.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-600 text-sm">Business Hours</p>
                    <p className="text-black font-semibold">Monday to Saturday, 7 AM - 11 PM (GMT)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <Image src="/map.svg" alt="Map" className="w-full h-full object-cover rounded-lg" width={400} height={200} />
            </div>

            {/* Office Location */}
            <div>
              <h4 className="text-lg font-bold text-black mb-4">Visit Our Office</h4>
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-black font-semibold">Angeles Street, Silay, 6116 Negros Occidental, Philippines</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
