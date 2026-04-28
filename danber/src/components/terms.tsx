import Link from "next/link"

export default function Terms() {
  const sections = [
    { id: "acceptance", title: "Acceptance of Terms" },
    { id: "responsibilities", title: "User Responsibilities" },
    { id: "intellectual", title: "Intellectual Property Rights" },
    { id: "license", title: "Use License" },
    { id: "disclaimer", title: "Disclaimer" },
    { id: "modifications", title: "Modifications" },
    { id: "governing", title: "Governing Law" },
    { id: "contact", title: "Contact Information" },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/30">
      {/* Header */}
      <div className="px-6 pt-16 pb-12 md:px-8 border-b border-border/50 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to Home</span>
          </Link>
          <h1 className="text-5xl md:text-2xl font-bold text-foreground mb-4 text-pretty">Terms and Conditions</h1>
          <p className="text-lg text-foreground/60">Last updated: January 2026</p>
        </div>
      </div>

      {/* Content with Sidebar */}
      <div className="px-6 py-16 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
          <aside className="hidden md:block">
            <div className="sticky top-20 bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-6">Table of Contents</h3>
              <nav className="space-y-3">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-sm text-foreground/60 hover:text-primary transition-colors duration-200 hover:pl-2"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="md:col-span-3 space-y-12">
            <section id="acceptance">
              <div className="flex gap-4 mb-4">
                <div className="flex-shrink-0 w-1 bg-gradient-to-b from-primary to-primary/40 rounded-full"></div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    By accessing and using this English learning platform, you accept and agree to be bound by the terms
                    and provision of this agreement. If you do not agree to abide by the above, please do not use this
                    service.
                  </p>
                </div>
              </div>
            </section>

            <section id="responsibilities">
              <div className="flex gap-4 mb-4">
                <div className="flex-shrink-0 w-1 bg-gradient-to-b from-accent to-accent/40 rounded-full"></div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-foreground mb-4">2. User Responsibilities</h2>
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    You are responsible for maintaining the confidentiality and authenticity of any messages you send.
                    You agree to accept responsibility for all activities that occur under your account.
                  </p>
                </div>
              </div>
            </section>

            <section id="intellectual">
              <div className="flex gap-4 mb-4">
                <div className="flex-shrink-0 w-1 bg-gradient-to-b from-primary to-primary/40 rounded-full"></div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-foreground mb-4">3. Intellectual Property Rights</h2>
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    All content included on our site, such as text, graphics, logos, images, audio clips, and digital
                    downloads, is the property of our company or its content suppliers and protected by international
                    copyright laws.
                  </p>
                </div>
              </div>
            </section>

            <section id="license">
              <div className="flex gap-4 mb-4">
                <div className="flex-shrink-0 w-1 bg-gradient-to-b from-primary to-primary/40 rounded-full"></div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-foreground mb-4">5. Use License</h2>
                  <p className="text-foreground/80 leading-relaxed text-lg mb-6">
                    Permission is granted to temporarily download one copy of the materials (information or software) on
                    our website for personal, non-commercial transitory viewing only. This is the grant of a license,
                    not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="space-y-3 ml-6">
                    {[
                      "Modifying or copying the materials",
                      "Using the materials for any commercial purpose or for any public display",
                      "Attempting to decompile or reverse engineer any software contained on the website",
                      "Transferring the materials to another person or mirroring the materials on any other server",
                      "Removing any copyright or other proprietary notations from the materials",
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-foreground/80 text-lg">
                        <span className="text-primary font-semibold flex-shrink-0 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section id="disclaimer">
              <div className="flex gap-4 mb-4">
                <div className="flex-shrink-0 w-1 bg-gradient-to-b from-accent to-accent/40 rounded-full"></div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-foreground mb-4">6. Disclaimer</h2>
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    The materials on our website are provided on an &apos;as is&apos; basis. We assume no liability or
                    responsibility for any errors, omissions in the content, or any losses, injuries, or damages arising
                    from the display or use of this material.
                  </p>
                </div>
              </div>
            </section>

            <section id="modifications">
              <div className="flex gap-4 mb-4">
                <div className="flex-shrink-0 w-1 bg-gradient-to-b from-primary to-primary/40 rounded-full"></div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-foreground mb-4">7. Modifications</h2>
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    We may revise these terms of service at any time without notice. By using this website, you are
                    agreeing to be bound by the then current version of these terms of service.
                  </p>
                </div>
              </div>
            </section>

            <section id="governing">
              <div className="flex gap-4 mb-4">
                <div className="flex-shrink-0 w-1 bg-gradient-to-b from-accent to-accent/40 rounded-full"></div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-foreground mb-4">8. Governing Law</h2>
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    These terms and conditions are governed by and construed in accordance with the laws applicable in
                    your country, and you irrevocably submit to the exclusive jurisdiction of the courts in that
                    location.
                  </p>
                </div>
              </div>
            </section>

            <section id="contact" className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
              <div className="flex gap-4 mb-4">
                <div className="flex-shrink-0 w-1 bg-gradient-to-b from-primary to-primary/40 rounded-full"></div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-foreground mb-4">9. Contact Information</h2>
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    If you have any questions about these Terms and Conditions, please contact us at
                    <a
                      href="mailto:danberesl221@danberesl.com"
                      className="text-primary hover:text-primary/80 font-semibold ml-1 transition-colors"
                    >
                      danberesl221@danberesl.com
                    </a>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
