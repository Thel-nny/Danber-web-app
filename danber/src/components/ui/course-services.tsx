import type { LucideIcon } from "lucide-react"

interface ServiceCard {
  icon: LucideIcon
  title: string
  description: string
  link?: string
}

interface CourseServicesProps {
  title: string
  subtitle: string
  services: ServiceCard[]
}

export default function CourseServices({ title, subtitle, services }: CourseServicesProps) {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-bold tracking-wider text-rose-400 mb-4">WHAT WE DO?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto leading-tight text-balance">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Divider */}
        <div className="w-24 h-1 bg-amber-400 mx-auto mb-12 rounded-full"></div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="mb-6 p-4 rounded-lg bg-muted/30 border border-border">
                  <Icon className="w-8 h-8 text-amber-500" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-rose-700 mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">{service.description}</p>
              </div>
            )
          })}
        </div>

        {/* Bottom Text */}
        <div className="mt-16 pt-12 border-t border-border">
          <p className="text-center text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive approach combines interactive lessons, expert instruction, and personalized feedback to
            ensure your success in mastering English language skills.
          </p>
        </div>
      </div>
    </section>
  )
}
