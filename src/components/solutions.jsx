"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  Cloud, Shield, Database, Code, Smartphone, Cpu, ArrowRight, ChevronDown 
} from "lucide-react"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"

const solutions = [
  {
    id: "cloud",
    name: "Cloud Solutions",
    icon: Cloud,
    color: "bg-blue-50 text-blue-600",
    description:
      "Scalable cloud infrastructure, migration services, and managed cloud solutions for businesses of all sizes.",
    features: [
      "Infrastructure as a Service (IaaS)",
      "Platform as a Service (PaaS)",
      "Software as a Service (SaaS)",
      "Cloud Migration & Strategy",
      "Hybrid Cloud Solutions",
    ],
    photo: "/images/vendor1.jpg",
  },
  {
    id: "security",
    name: "Cybersecurity",
    icon: Shield,
    color: "bg-red-50 text-red-600",
    description:
      "Comprehensive security solutions to protect your business from evolving cyber threats and ensure data integrity.",
    features: [
      "Threat Detection & Response",
      "Security Assessments",
      "Compliance Management",
      "Identity & Access Management",
      "Security Operations Center",
    ],
    photo: "/images/vendor2.jpg",
  },
  {
    id: "data",
    name: "Data Analytics",
    icon: Database,
    color: "bg-green-50 text-green-600",
    description:
      "Transform your data into actionable insights with our advanced analytics and business intelligence solutions.",
    features: [
      "Business Intelligence",
      "Predictive Analytics",
      "Data Warehousing",
      "Big Data Processing",
      "Data Visualization",
    ],
    photo: "/images/vendor3.avif",
  },
  {
    id: "development",
    name: "Software Development",
    icon: Code,
    color: "bg-purple-50 text-purple-600",
    description:
      "Custom software development services tailored to your business needs, from web applications to enterprise systems.",
    features: [
      "Custom Application Development",
      "API Development & Integration",
      "DevOps & CI/CD",
      "Quality Assurance & Testing",
      "Legacy System Modernization",
    ],
    photo: "/images/vendor4.jpg",
  },
  {
    id: "mobile",
    name: "Mobile Solutions",
    icon: Smartphone,
    color: "bg-orange-50 text-orange-600",
    description:
      "Engage your customers and empower your workforce with cutting-edge mobile applications and solutions.",
    features: [
      "iOS & Android Development",
      "Cross-Platform Solutions",
      "Mobile Strategy Consulting",
      "UI/UX Design",
      "Mobile App Maintenance",
    ],
    photo: "/images/vendor6.jpg",
  },
  {
    id: "ai",
    name: "AI & Machine Learning",
    icon: Cpu,
    color: "bg-cyan-50 text-cyan-600",
    description:
      "Harness the power of artificial intelligence and machine learning to automate processes and gain competitive advantage.",
    features: [
      "Predictive Modeling",
      "Natural Language Processing",
      "Computer Vision",
      "Recommendation Systems",
      "AI Strategy & Implementation",
    ],
    photo: "/images/vendor5.jpg",
  }
]

export default function Solutions() {
  const [activeSolution, setActiveSolution] = useState(solutions[0].id)

  const activeSolutionData = solutions.find((s) => s.id === activeSolution)

  return (
    <section id="solutions" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-5">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
            Technology Solutions
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Discover our comprehensive range of technology solutions designed to help your business thrive in the
            digital age.
          </p>
        </div>

        {/* Mobile Select Dropdown - Visible only on mobile */}
        <div className="md:hidden mb-8">
          <Select onValueChange={setActiveSolution} value={activeSolution}>
            <SelectTrigger className="w-full bg-white shadow-md border border-slate-100 rounded-xl">
              <SelectValue placeholder="Select a Solution">
                <div className="flex items-center">
                  <span className={`${activeSolutionData.color} p-2 rounded-lg mr-3`}>
                    <activeSolutionData.icon className="h-5 w-5" />
                  </span>
                  {activeSolutionData.name}
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {solutions.map((solution) => (
                <SelectItem key={solution.id} value={solution.id}>
                  <div className="flex items-center">
                    <span className={`${solution.color} p-2 rounded-lg mr-3`}>
                      <solution.icon className="h-5 w-5" />
                    </span>
                    {solution.name}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Desktop Grid - Visible only on desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className={`cursor-pointer rounded-xl p-6 transition-all duration-300 ${
                activeSolution === solution.id
                  ? "bg-white shadow-lg border-2 border-blue-100 scale-105"
                  : "bg-white/50 border border-slate-100 hover:bg-white hover:shadow-md"
              }`}
              onClick={() => setActiveSolution(solution.id)}
            >
              <div className={`${solution.color} p-3 rounded-lg inline-flex mb-4`}>
                <solution.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{solution.name}</h3>
              <p className="text-sm text-slate-600">{solution.description.substring(0, 100)}...</p>
            </div>
          ))}
        </div>

        {/* Solution Details - Responsive */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSolution}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg border border-slate-100 p-6 md:p-8"
          >
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div>
                <div className={`${activeSolutionData.color} p-3 rounded-lg inline-flex mb-4`}>
                  <activeSolutionData.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{activeSolutionData.name}</h3>
                <p className="text-slate-600 mb-6">{activeSolutionData.description}</p>
                <ul className="space-y-3 mb-6">
                  {activeSolutionData.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-md hover:shadow-lg group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="relative hidden md:block">
                <div className="aspect-square rounded-xl overflow-hidden shadow-md border border-slate-100">
                  <img
                    src={activeSolutionData.photo}
                    alt={activeSolutionData.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-slate-100">
                  <div className="text-sm font-medium text-slate-800">{activeSolutionData.name}</div>
                  <div className="text-xs text-slate-500">Premium Solutions</div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

function CheckCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}