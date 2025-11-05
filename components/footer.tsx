import { Github, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-primary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-sm" />
              <span className="text-xl font-bold">Reform IP</span>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Advocating for evidence-based intellectual property reform to promote innovation, access, and economic
              efficiency.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Learn</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="#statistics" className="hover:text-accent transition-colors">
                  Statistics
                </a>
              </li>
              <li>
                <a href="#research" className="hover:text-accent transition-colors">
                  Research
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Take Action</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="#action" className="hover:text-accent transition-colors">
                  Get Involved
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Petitions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Donate
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm text-primary-foreground/70">contact@reformip.org</p>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/60">
          <p>© 2025 Reform IP. All content available under Creative Commons CC0 (Public Domain).</p>
          <p className="mt-2">
            This is an educational advocacy website. All statistics cited from peer-reviewed sources.
          </p>
        </div>
      </div>
    </footer>
  )
}
