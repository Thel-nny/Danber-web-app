import TeacherImageWithBackground from "@/components/ui/TeacherImageWithBackground"

export default function Hero() {
  return (
    <section className="pt-40 pb-12 md:pb-24 lg:pb-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Use English Effectively,
                <br />
                <span className="relative">
                  Speak English Fluently.
                  {/* Red underline decoration */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3"
                    viewBox="0 0 400 12"
                    fill="none"
                  >
                    <path
                      d="M5 8c50-3 100-5 150-4s100 3 150 2c30-1 60-2 90-1"
                      stroke="#ef4444"
                      strokeWidth="3"
                      fill="none"
                    />
                  </svg>
                </span>
              </h1>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              When students get the right English lessons and teachers have the right tools, learning becomes easier.
              This helps students speak with confidence, find new opportunities, and succeed in school, work, and life.
            </p>

            <button className="bg-yellow-300 hover:bg-yellow-400 text-gray-800 font-semibold px-8 py-3 rounded-md transition-colors">
              Get Started
            </button>
          </div>

          {/* Right Side */}
          <TeacherImageWithBackground />
        </div>
      </div>
    </section>
  )
}