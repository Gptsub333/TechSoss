"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Users, Building, Briefcase, Award } from "lucide-react"

const stats = [
  {
    id: 1,
    name: "Trusted Vendors",
    value: 500,
    icon: Building,
    color: "bg-blue-50 text-blue-600",
  },
  {
    id: 2,
    name: "Happy Clients",
    value: 2500,
    icon: Users,
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    id: 3,
    name: "Projects Delivered",
    value: 10000,
    icon: Briefcase,
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    id: 4,
    name: "Industry Awards",
    value: 75,
    icon: Award,
    color: "bg-purple-50 text-purple-600",
  },
]

export default function Statistics() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [counters, setCounters] = useState(stats.map(() => 0))

  useEffect(() => {
    if (inView) {
      controls.start("visible")

      // Animate counters
      stats.forEach((stat, index) => {
        const duration = 2000 // 2 seconds
        const interval = 20 // Update every 20ms
        const steps = duration / interval
        const increment = stat.value / steps
        let count = 0
        let currentStep = 0

        const timer = setInterval(() => {
          currentStep++
          count = Math.min(Math.round(increment * currentStep), stat.value)

          setCounters((prev) => {
            const newCounters = [...prev]
            newCounters[index] = count
            return newCounters
          })

          if (currentStep >= steps) {
            clearInterval(timer)
          }
        }, interval)
      })
    }
  }, [inView, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
            Our Impact in Numbers
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            TechSoss has been connecting businesses with premium technology solutions for over a decade, creating
            lasting impact across industries.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className={`${stat.color} p-3 rounded-lg mb-4 inline-flex`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                {counters[index].toLocaleString()}+
              </h3>
              <p className="text-slate-600 font-medium">{stat.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

