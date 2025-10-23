import { Award, Globe } from "lucide-react"
import Image from "next/image"

export default function WhyChooseUs() {
  const certifications = ["TEFL", "TESOL", "TOEFL", "CESL", "CFR"]

  const features = [
    {
      icon: Award,
      title: "Certified Instructors",
      description: "All our teachers hold internationally recognized certifications ensuring quality education",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Learn English with native speakers from around the world, anytime, anywhere",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-accent rounded-full"></div>
              <span className="text-sm font-bold text-rose-600 tracking-wider text-muted-foreground">WHY CHOOSE US</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Master English with <span className="text-rose-600">Certified Experts</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We provide world-class English language education through certified instructors and proven teaching
              methodologies. Our commitment to excellence ensures every student achieves their language goals.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="bg-card border border-border rounded-lg p-6">
                    <div className="mb-4">
                      <Icon className="w-8 h-8 text-rose-600" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                )
              })}
            </div>

            {/* Certifications Section */}
            <div className="bg-muted/30 rounded-lg p-6 border border-border">
              <p className="text-sm font-semibold text-muted-foreground mb-4">INTERNATIONALLY CERTIFIED</p>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-amber-300 text-primary-foreground rounded-full text-sm font-semibold"
                  >
                    {cert}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Text */}
            <p className="text-sm text-muted-foreground mt-8">
              Our platform combines modern technology with expert instruction to deliver personalized learning
              experiences that transform lives and open doors to global opportunities.
            </p>
          </div>

          {/* Right Side - Image & Trust Badge */}
          <div className="relative">
            {/* Placeholder Image */}
            <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-accent/20 to-primary/20 aspect-square md:aspect-auto md:h-96">
              <Image
                src="/group.jpg"
                alt="Professional English teacher conducting an online class"
                className="w-full h-full object-cover"
                width={400}
                height={400}
              />

              {/* Trust Badge */}
              <div className="absolute bottom-6 left-6 bg-white rounded-lg shadow-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-lg">⭐</span>
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">Trusted by 5K+ Students</p>
                  <p className="text-xs text-muted-foreground">Worldwide</p>
                </div>
              </div>
            </div>

            {/* Decorative Accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
