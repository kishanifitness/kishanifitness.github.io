'use client'
import { Instagram, Facebook, Twitter, Mail, Phone, Youtube, Icon } from 'lucide-react'

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">KIAN ISHANI</h3>
            <p className="text-gray-400">
              Premium fitness coaching for serious results
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('programs')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Programs
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={16} />
                <a
                  href="mailto:Kishanifitness@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  Kishanifitness@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={16} />
                <a
                  href="tel:+1(949)685-5553"
                  className="hover:text-white transition-colors"
                >
                  +1 (949) 685-5553
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Follow Me</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/kianishani8/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.youtube.com/@kianishani8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Youtube"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Kian Ishani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
