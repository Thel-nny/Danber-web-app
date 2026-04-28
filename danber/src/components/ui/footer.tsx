import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-amber-200 border-t border-gray-300">
      {/* Main Footer Content */}
      <div className="px-6 py-4 md:px-8 md:py-4">
        <div className="max-w-6xl mx-auto">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6 mb-6">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-2">
                <h3 className="text-lg font-bold text-black-700 mb-1">Danber&apos;s Online Tutorial School</h3>
                <p className="text-xs text-gray-800">
                  Master English with expert guidance and personalized learning paths.
                </p>
              </div>
              {/* Social Links */}
              <div className="flex gap-2 mt-3">
                <a
                  href="https://www.instagram.com/danberesl?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  className="w-10 h-10 rounded-full bg-amber-50 hover:bg-gray-300 flex items-center justify-center text-red-700 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" fill="currentColor" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/danber-online-tutorial-services/about/"
                  className="w-10 h-10 rounded-full bg-amber-50 hover:bg-gray-300 flex items-center justify-center text-blue-900 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61586673291370"
                  className="w-10 h-10 rounded-full bg-amber-50 hover:bg-gray-300 flex items-center justify-center text-blue-900 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 012-2h3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-1">
            <div className="flex flex-col md:flex-row justify-between items-center gap-2">
              <p className="text-sm text-gray-800">© {currentYear} Danber&apos;s Online Tutorial School. All rights reserved.</p>
              <div className="flex gap-4">
                <Link href="/Privacy" className="text-sm text-gray-800 hover:text-gray-900 transition-colors">
                  Privacy Policy
                </Link>
                <span className="text-gray-400">•</span>
                <Link href="/Terms" className="text-sm text-gray-800 hover:text-gray-900 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
