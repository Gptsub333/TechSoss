"use client"

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { Users, Building2, BarChart3, Globe, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AboutUs() {
  const router = useRouter()
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }


  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-5">
              About TechSoss
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
              Connecting Businesses with Premium Tech Solutions
            </h2>
            <p className="text-slate-600 mb-6">
              Founded in 2010, TechSoss has been at the forefront of the technology solutions marketplace, helping
              businesses find the perfect tech partners for their unique needs.
            </p>
            <p className="text-slate-600 mb-8">
              Our mission is to simplify the process of finding, evaluating, and implementing technology solutions for
              businesses of all sizes. We believe that the right technology partnership can transform businesses and
              drive unprecedented growth.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-50 p-2 rounded-lg mr-4">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Expert Team</h4>
                  <p className="text-sm text-slate-600">Industry professionals with deep tech expertise</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-cyan-50 p-2 rounded-lg mr-4">
                  <Building2 className="h-5 w-5 text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Global Reach</h4>
                  <p className="text-sm text-slate-600">Connecting businesses across continents</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-indigo-50 p-2 rounded-lg mr-4">
                  <BarChart3 className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Data-Driven</h4>
                  <p className="text-sm text-slate-600">Insights that power better decisions</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-50 p-2 rounded-lg mr-4">
                  <Globe className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Industry Leaders</h4>
                  <p className="text-sm text-slate-600">Setting standards in tech solutions</p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <button
                onClick={() => router.push('/solutions')}
                className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
              >
                Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              
              <button
                onClick={() => router.push('/about-us')}
                className="flex items-center px-6 py-3 bg-white hover:bg-blue-50 text-blue-600 font-medium rounded-lg border border-blue-200 transition-colors duration-300"
              >
                Meet Our Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              
              <button
                onClick={() => router.push('/contact')}
                className="flex items-center px-6 py-3 bg-blue-50 hover:bg-blue-100 text-blue-600 font-medium rounded-lg transition-colors duration-300"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                <img src="/images/aboutus.jpg" alt="TechSoss Team" className="w-full h-auto" />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 border border-slate-100">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <img
                      src="/images/leader1.avif"
                      alt="Team Member"
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                    <img
                      src="/images/leader2.jpg"
                      alt="Team Member"
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                    <img
                      src="/images/leader3.avif"
                      alt="Team Member"
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-800">Our Leadership</p>
                    <p className="text-xs text-slate-500">15+ years of experience</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}