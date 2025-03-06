"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Star, ArrowRight, ExternalLink, Award } from "lucide-react"
import { useRouter } from "next/navigation"

const vendors = [
  {
    id: 1,
    name: "CloudTech Solutions",
    category: "Cloud Infrastructure",
    rating: 4.9,
    image: "/images/vendor1.jpg",
    description: "Enterprise-grade cloud infrastructure and migration services.",
    specialties: ["Multi-Cloud", "Hybrid Solutions", "Cost Optimization"]
  },
  {
    id: 2,
    name: "SecureNet Systems",
    category: "Cybersecurity",
    rating: 4.8,
    image: "/images/vendor2.jpg",
    description: "Advanced cybersecurity solutions for businesses of all sizes.",
    specialties: ["Threat Detection", "Network Security", "Compliance"]
  },
  {
    id: 3,
    name: "DataFlow Analytics",
    category: "Data Analytics",
    rating: 4.7,
    image: "/images/vendor3.avif",
    description: "Turn your data into actionable business insights with our advanced analytics platform.",
    specialties: ["Predictive Analytics", "Machine Learning", "Business Intelligence"]
  },
  {
    id: 4,
    name: "DevOps Pro",
    category: "DevOps",
    rating: 4.9,
    image: "/images/vendor4.jpg",
    description: "Streamline your development and operations with our integrated tools.",
    specialties: ["CI/CD", "Containerization", "Infrastructure as Code"]
  },
  {
    id: 5,
    name: "AI Innovations",
    category: "Artificial Intelligence",
    rating: 4.8,
    image: "/images/vendor5.jpg",
    description: "Cutting-edge AI solutions to automate and enhance your business processes.",
    specialties: ["Natural Language Processing", "Computer Vision", "AI Strategy"]
  },
  {
    id: 6,
    name: "MobileTech",
    category: "Mobile Development",
    rating: 4.7,
    image: "/images/vendor6.jpg",
    description: "Expert mobile application development for iOS and Android platforms.",
    specialties: ["Cross-Platform", "Native Development", "UI/UX Design"]
  }
]

export default function PremiumVendorsGrid() {
  const router = useRouter()
  const [hoveredVendor, setHoveredVendor] = useState(null)

  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-2 px-4 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-4"
          >
            Trusted Technology Partners
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-cyan-600 bg-clip-text text-transparent"
          >
            Our Premium Vendor Network
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-3xl mx-auto text-lg"
          >
            Meticulously curated vendors that deliver exceptional technological solutions, 
            driving innovation and excellence across diverse business domains.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vendors.map((vendor) => (
            <motion.div
              key={vendor.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onHoverStart={() => setHoveredVendor(vendor.id)}
              onHoverEnd={() => setHoveredVendor(null)}
              className={`
                bg-white rounded-2xl overflow-hidden shadow-lg 
                border border-slate-100 transform transition-all duration-300
                ${hoveredVendor === vendor.id 
                  ? 'scale-105 shadow-2xl border-blue-200' 
                  : 'scale-100 shadow-md'}
              `}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={vendor.image || "/placeholder.svg"}
                  alt={vendor.name}
                  className="w-full h-full object-cover transition-transform duration-500 
                    hover:scale-110"
                />
                <div className="absolute top-4 right-4 flex items-center 
                  bg-white/80 backdrop-blur-sm rounded-full px-3 py-1">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                  <span className="font-semibold text-slate-800">{vendor.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold text-slate-900">{vendor.name}</h3>
                  <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                    {vendor.category}
                  </span>
                </div>
                
                <p className="text-slate-600 mb-4">{vendor.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2 flex items-center">
                    <Award className="h-4 w-4 mr-2 text-blue-500" />
                    Key Specialties
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {vendor.specialties.map((specialty) => (
                      <span 
                        key={specialty} 
                        className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-blue-200 hover:bg-blue-50 group"
                >
                  Explore Vendor
                  <ExternalLink className="ml-2 h-4 w-4 text-blue-500 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
          onClick={() => router.push("/vendors")}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 
              hover:from-blue-700 hover:to-cyan-600 
              text-white font-semibold 
              shadow-lg hover:shadow-xl 
              transition-all duration-300 
              group"
          >
            View Complete Vendor Catalog
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}