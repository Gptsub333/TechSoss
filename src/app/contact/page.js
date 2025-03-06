"use client"

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import Footer from "@/components/footer"

export default function Contact() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [inView, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <div><section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-5">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Have questions or need more information? Our team is here to help you find the right technology solutions
            for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="How can we help you?" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message here..." className="min-h-[150px]" />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-md hover:shadow-lg group"
              >
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>

            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={controls}
              className="space-y-6 mb-8"
            >
              <motion.div variants={itemVariants} className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-lg mr-4">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Our Location</h4>
                  <p className="text-slate-600">
                    15101 Ronald Reagan Blvd Suite 510,
                    <br />
                    Leander, TX, 77641, USA.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-lg mr-4">
                  <Phone className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Phone Number</h4>
                  <p className="text-slate-600">
                    +1 408-598-7831
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-lg mr-4">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Email Address</h4>
                  <p className="text-slate-600">
                    info@techsoss.com
                    <br />
                    support@techsoss.com
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-lg mr-4">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Business Hours</h4>
                  <p className="text-slate-600">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <div>
              <h4 className="font-semibold text-slate-800 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-50 p-3 rounded-lg text-blue-600 hover:bg-blue-100 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-blue-50 p-3 rounded-lg text-blue-600 hover:bg-blue-100 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="bg-blue-50 p-3 rounded-lg text-blue-600 hover:bg-blue-100 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="bg-blue-50 p-3 rounded-lg text-blue-600 hover:bg-blue-100 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    <Footer />
    </div>
  )
}

