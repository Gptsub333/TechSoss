"use client"

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"

const benefits = [
  "Access to thousands of potential clients",
  "Increased visibility in the tech marketplace",
  "Dedicated account manager and support",
  "Marketing and promotional opportunities",
  "Networking with industry leaders",
  "Streamlined client acquisition process",
]

export default function BecomeVendor() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section id="become-vendor" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                  Join Our Vendor Network
                </h3>

                <motion.ul
                  ref={ref}
                  variants={containerVariants}
                  initial="hidden"
                  animate={controls}
                  className="space-y-4 mb-8"
                >
                  {benefits.map((benefit, index) => (
                    <motion.li key={index} variants={itemVariants} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{benefit}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-5">
              Partner With Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
              Become a TechSoss Vendor
            </h2>
            <p className="text-slate-600 mb-6">
              Join our network of premium technology vendors and connect with businesses looking for your solutions.
              TechSoss provides a platform for growth, visibility, and success in the competitive tech marketplace.
            </p>
            <p className="text-slate-600 mb-8">
              Our vendor program is designed to help you reach more clients, streamline your sales process, and grow
              your business. With TechSoss, you'll have access to a wide range of tools and resources to showcase your
              products and services.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                <h4 className="font-semibold text-slate-800 mb-1">Vendor Dashboard</h4>
                <p className="text-sm text-slate-600">Track leads, manage inquiries, and monitor performance</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                <h4 className="font-semibold text-slate-800 mb-1">Marketing Support</h4>
                <p className="text-sm text-slate-600">Promotional materials and campaign assistance</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

