"use client"
import { useInView } from "react-intersection-observer"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <footer className="bg-slate-800 text-slate-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-4">TechSoss</h4>
            <p className="text-sm">Premium technology solutions and services for businesses.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-slate-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-slate-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-slate-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-slate-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#about" className="hover:text-slate-400 transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="/solutions" className="hover:text-slate-400 transition-colors text-sm">
                  Solutions
                </a>
              </li>
              <li>
                <a href="/vendors" className="hover:text-slate-400 transition-colors text-sm">
                  Vendors
                </a>
              </li>
              <li>
                <a href="/#blogs" className="hover:text-slate-400 transition-colors text-sm">
                  Blogs
                </a>
              </li>
              <li>
                <a href="/career" className="hover:text-slate-400 transition-colors text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-slate-400 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <p className="text-sm">
               15101 Ronald Reagan Blvd Suite 510,
              <br /> 
              Leander, TX, 77641, USA.
            </p>
            <p className="text-sm mt-2">
              info@techsoss.com
              <br />
              +1 408-598-7831
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-xs">&copy; {new Date().getFullYear()} TechSoss. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

