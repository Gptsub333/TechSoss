"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  Building, ShoppingBag, Stethoscope, Landmark, Truck, Lightbulb, ArrowRight, ChevronDown 
} from "lucide-react"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"

const industries = [
  {
    id: "finance",
    name: "Financial Services",
    icon: Landmark,
    color: "bg-blue-50 text-blue-600",
    description: "Secure and scalable technology solutions for banks, insurance companies, and financial institutions.",
    features: [
      "Secure payment processing systems",
      "Fraud detection and prevention",
      "Regulatory compliance solutions",
      "Customer relationship management",
      "Data analytics and reporting",
    ],
    image: "/images/vendor1.jpg",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: Stethoscope,
    color: "bg-green-50 text-green-600",
    description: "Innovative technology solutions for healthcare providers, hospitals, and medical practices.",
    features: [
      "Electronic health record systems",
      "Telemedicine platforms",
      "Healthcare data analytics",
      "Patient engagement solutions",
      "Medical billing and coding systems",
    ],
    image: "/images/vendor2.jpg",
  },
  {
    id: "retail",
    name: "Retail & E-commerce",
    icon: ShoppingBag,
    color: "bg-purple-50 text-purple-600",
    description:
      "Digital transformation solutions for retailers to enhance customer experience and streamline operations.",
    features: [
      "E-commerce platforms",
      "Inventory management systems",
      "Customer analytics",
      "Omnichannel retail solutions",
      "Point of sale systems",
    ],
    image: "/images/vendor3.avif",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: Truck,
    color: "bg-orange-50 text-orange-600",
    description: "Technology solutions to optimize manufacturing processes, improve efficiency, and reduce costs.",
    features: [
      "Supply chain management",
      "Production planning and scheduling",
      "Quality control systems",
      "IoT and predictive maintenance",
      "Warehouse management",
    ],
    image: "/images/vendor4.jpg",
  },
  {
    id: "realestate",
    name: "Real Estate",
    icon: Building,
    color: "bg-red-50 text-red-600",
    description: "Digital solutions for real estate agencies, property management companies, and construction firms.",
    features: [
      "Property management systems",
      "Virtual property tours",
      "Client relationship management",
      "Construction management software",
      "Smart building solutions",
    ],
    image: "/images/vendor5.jpg",
  },
  {
    id: "energy",
    name: "Energy & Utilities",
    icon: Lightbulb,
    color: "bg-cyan-50 text-cyan-600",
    description: "Technology solutions for energy companies, utilities, and renewable energy providers.",
    features: [
      "Smart grid management",
      "Energy consumption analytics",
      "Renewable energy monitoring",
      "Utility billing systems",
      "Field service management",
    ],
    image: "/images/vendor6.jpg",
  }
]

export default function Industries() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0].id)

  const activeIndustryData = industries.find((i) => i.id === activeIndustry)

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-5">
            Specialized Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
            Industries We Serve
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We provide tailored technology solutions for a wide range of industries, addressing their unique challenges
            and requirements.
          </p>
        </div>

        {/* Mobile Select Dropdown - Visible only on mobile */}
        <div className="md:hidden mb-8">
          <Select onValueChange={setActiveIndustry} value={activeIndustry}>
            <SelectTrigger className="w-full bg-white shadow-md border border-slate-100 rounded-xl">
              <SelectValue placeholder="Select an Industry">
                <div className="flex items-center">
                  <span className={`${activeIndustryData.color} p-2 rounded-lg mr-3`}>
                    <activeIndustryData.icon className="h-5 w-5" />
                  </span>
                  {activeIndustryData.name}
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {industries.map((industry) => (
                <SelectItem key={industry.id} value={industry.id}>
                  <div className="flex items-center">
                    <span className={`${industry.color} p-2 rounded-lg mr-3`}>
                      <industry.icon className="h-5 w-5" />
                    </span>
                    {industry.name}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Desktop Grid - Visible only on desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-4 mb-12">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className={`cursor-pointer rounded-xl p-5 transition-all duration-300 ${
                activeIndustry === industry.id
                  ? "bg-white shadow-lg border-2 border-blue-100"
                  : "bg-white/50 border border-slate-100 hover:bg-white hover:shadow-md"
              }`}
              onClick={() => setActiveIndustry(industry.id)}
            >
              <div className="flex items-center">
                <div className={`${industry.color} p-2 rounded-lg inline-flex mr-4`}>
                  <industry.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-800">{industry.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Details - Responsive */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg border border-slate-100 p-6 md:p-8"
          >
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div>
                <div className={`${activeIndustryData.color} p-3 rounded-lg inline-flex mb-4`}>
                  <activeIndustryData.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{activeIndustryData.name}</h3>
                <p className="text-slate-600 mb-6">{activeIndustryData.description}</p>
                <ul className="space-y-3 mb-6">
                  {activeIndustryData.features.map((feature, index) => (
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
                    src={activeIndustryData.image || "/placeholder.svg"}
                    alt={activeIndustryData.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-slate-100">
                  <div className="text-sm font-medium text-slate-800">{activeIndustryData.name}</div>
                  <div className="text-xs text-slate-500">Tailored Solutions</div>
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