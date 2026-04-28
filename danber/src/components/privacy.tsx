import Link from "next/link"

export default function Privacy() {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "information", title: "Information We Collect" },
    { id: "how-we-use", title: "How We Use Your Information" },
    { id: "security", title: "Data Security" },
    { id: "retention", title: "Data Retention" },
    { id: "sharing", title: "Sharing of Information" },
    { id: "rights", title: "Your Rights" },
    { id: "changes", title: "Changes to Privacy Policy" },
    { id: "contact", title: "Contact Us" },
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
          <h1 className="text-xl md:text-6xl font-bold text-red-800 mb-4 text-pretty">Privacy Policy</h1>
          <p className="text-lg text-foreground/60">Last updated: January 2026</p>
        </div>
      </div>

      {/* Content with Sidebar */}
      <div className="px-6 py-16 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
          <aside className="hidden md:block">
            <div className="sticky top-20 bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <h3 className="text-sm font-semibold text-amber-600 uppercase tracking-wide mb-6">Table of Contents</h3>
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
            <section id="introduction">
              <div className="flex gap-4 mb-4">
                <div className="flex-shrink-0 w-1 bg-gradient-to-b from-primary to-primary/40 rounded-full"></div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-foreground mb-4">1. Introduction</h2>
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    We are committed to protecting your privacy. This Privacy Policy explains how we collect, use,
                    disclose, and otherwise process personal information in connection with our English learning
                    platform and services.
                  </p>
                </div>
              </div>
            </section>

            <section id="information">
              <div className="flex gap-4 mb-4">
                <div className="flex-shrink-0 w-1 bg-gradient-to-b from-accent to-accent/40 rounded-full"></div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                  <p className="text-foreground/80 leading-relaxed text-lg mb-6">
                    We collect information you provide directly, such as:
                  </p>
                  <ul className="space-y-3 ml-6">
                    {[
                      "Account registration information (name, email address, contact information)",
                      "Communication data (messages, feedback, support inquiries)",
                      "Learning activity data (course progress, assessments, performance)",
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-foreground/80 text-lg">
                        <span className="text-accent font-semibold flex-shrink-0 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section id="how-we-use">
              <div className="flex gap-4 mb-4">
                <div className="flex-shrink-0 w-1 bg-gradient-to-b from-primary to-primary/40 rounded-full"></div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                  <p className="text-foreground/80 leading-relaxed text-lg mb-6">
                    We use the information we collect to:
                  </p>
                  <ul className="space-y-3 ml-6">
                    {[
                      "Send promotional communications (with your consent)",
                      "Respond to your inquiries and support requests",
                      "Prevent fraud and ensure security",
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

            <section id="security">
              <div className="flex gap-4 mb-4">
                <div className="flex-shrink-0 w-1 bg-gradient-to-b from-accent to-accent/40 rounded-full"></div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-foreground mb-4">4. Data Security</h2>
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    We implement appropriate technical and organizational measures to protect your personal information
                    against unauthorized access, alteration, disclosure, or destruction. However, no method of
                    transmission over the Internet is 100% secure.
                  </p>
                </div>
              </div>
            </section>

            <section id="retention">
              <div className="flex gap-4 mb-4">
                <div className="flex-shrink-0 w-1 bg-gradient-to-b from-primary to-primary/40 rounded-full"></div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-foreground mb-4">5. Data Retention</h2>
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    We retain your personal information for as long as your inquiry is active or as needed to provide
                    you with our services. You can request deletion of your data by contacting us at any time.
                  </p>
                </div>
              </div>
            </section>

            <section id="sharing">
              <div className="flex gap-4 mb-4">
                <div className="flex-shrink-0 w-1 bg-gradient-to-b from-accent to-accent/40 rounded-full"></div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-foreground mb-4">6. Sharing of Information</h2>
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    We do not sell, trade, or rent your personal information to third parties. We may share information
                    with service providers who assist us in operating our website and conducting our business, subject
                    to confidentiality agreements.
                  </p>
                </div>
              </div>
            </section>

            <section id="rights">
              <div className="flex gap-4 mb-4">
                <div className="flex-shrink-0 w-1 bg-gradient-to-b from-primary to-primary/40 rounded-full"></div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-foreground mb-4">7. Your Rights</h2>
                  <p className="text-foreground/80 leading-relaxed text-lg mb-6">
                    Depending on your location, you may have the right to:
                  </p>
                  <ul className="space-y-3 ml-6">
                    {[
                      "Access the personal information we hold about you",
                      "Correct inaccurate or incomplete data",
                      "Request deletion of your data",
                      "Opt-out of marketing communications",
                      "Data portability (receive your data in a structured format)",
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-foreground/80 text-lg">
                        <span className="text-accent font-semibold flex-shrink-0 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section id="changes">
              <div className="flex gap-4 mb-4">
                <div className="flex-shrink-0 w-1 bg-gradient-to-b from-accent to-accent/40 rounded-full"></div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-foreground mb-4">10. Changes to Privacy Policy</h2>
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    We may update this Privacy Policy from time to time. Changes will be effective immediately upon
                    posting to the website. Your continued use of our services following the posting of revised Privacy
                    Policy means you accept and agree to the changes.
                  </p>
                </div>
              </div>
            </section>

            <section id="contact" className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
              <div className="flex gap-4 mb-4">
                <div className="flex-shrink-0 w-1 bg-gradient-to-b from-primary to-primary/40 rounded-full"></div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-foreground mb-4">11. Contact Us</h2>
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    If you have any questions or concerns about this Privacy Policy or our privacy practices, please
                    contact us at
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
