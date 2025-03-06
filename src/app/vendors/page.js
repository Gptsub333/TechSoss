"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Star,
  ArrowRight,
  ExternalLink,
  Award,
  CheckCircle,
  MapPin,
  Users,
  Calendar,
  Shield,
} from "lucide-react"
import Footer from "@/components/footer"

// Sample vendor data
const vendors = [
  {
    id: 1,
    name: "CloudTech Solutions",
    logo: "/images/vendor1.jpg",
    category: "Cloud Infrastructure",
    subcategories: ["IaaS", "PaaS", "Cloud Migration"],
    rating: 4.9,
    reviewCount: 128,
    description:
      "Enterprise-grade cloud infrastructure and migration services. Helping businesses scale their operations with secure and reliable cloud solutions.",
    featured: true,
    premium: true,
    location: "San Francisco, CA",
    founded: 2012,
    clients: 350,
    verified: true,
  },
  {
    id: 2,
    name: "SecureNet Systems",
    logo: "/images/vendor1.jpg",
    category: "Cybersecurity",
    subcategories: ["Threat Detection", "Security Assessments", "Compliance"],
    rating: 4.8,
    reviewCount: 96,
    description:
      "Advanced cybersecurity solutions for businesses of all sizes. Protecting your digital assets with cutting-edge security technology.",
    featured: true,
    premium: false,
    location: "Boston, MA",
    founded: 2015,
    clients: 275,
    verified: true,
  },
  {
    id: 3,
    name: "DataFlow Analytics",
    logo: "/images/vendor1.jpg",
    category: "Data Analytics",
    subcategories: ["Business Intelligence", "Predictive Analytics", "Data Visualization"],
    rating: 4.7,
    reviewCount: 84,
    description:
      "Turn your data into actionable business insights with our advanced analytics platform. Helping businesses make data-driven decisions.",
    featured: false,
    premium: true,
    location: "Chicago, IL",
    founded: 2014,
    clients: 210,
    verified: true,
  },
  {
    id: 4,
    name: "DevOps Pro",
    logo: "/images/vendor1.jpg",
    category: "DevOps",
    subcategories: ["CI/CD", "Infrastructure as Code", "Containerization"],
    rating: 4.9,
    reviewCount: 112,
    description:
      "Streamline your development and operations with our integrated tools. Accelerating software delivery with modern DevOps practices.",
    featured: true,
    premium: true,
    location: "Seattle, WA",
    founded: 2016,
    clients: 180,
    verified: true,
  },
  {
    id: 5,
    name: "AI Innovations",
    logo: "/images/vendor1.jpg",
    category: "Artificial Intelligence",
    subcategories: ["Machine Learning", "Natural Language Processing", "Computer Vision"],
    rating: 4.8,
    reviewCount: 76,
    description:
      "Cutting-edge AI solutions to automate and enhance your business processes. Transforming businesses with intelligent automation.",
    featured: false,
    premium: false,
    location: "Austin, TX",
    founded: 2018,
    clients: 120,
    verified: true,
  },
  {
    id: 6,
    name: "MobileTech",
    logo: "/images/vendor1.jpg",
    category: "Mobile Development",
    subcategories: ["iOS Development", "Android Development", "Cross-Platform"],
    rating: 4.7,
    reviewCount: 92,
    description:
      "Expert mobile application development for iOS and Android platforms. Creating engaging mobile experiences for businesses worldwide.",
    featured: false,
    premium: true,
    location: "New York, NY",
    founded: 2013,
    clients: 230,
    verified: true,
  },
  {
    id: 7,
    name: "WebSphere Solutions",
    logo: "/images/vendor1.jpg",
    category: "Web Development",
    subcategories: ["E-commerce", "CMS", "Progressive Web Apps"],
    rating: 4.6,
    reviewCount: 88,
    description:
      "Full-service web development agency specializing in responsive and scalable web applications. Building digital experiences that drive business growth.",
    featured: false,
    premium: false,
    location: "Denver, CO",
    founded: 2015,
    clients: 195,
    verified: true,
  },
  {
    id: 8,
    name: "BlockChain Ventures",
    logo: "/images/vendor1.jpg",
    category: "Blockchain",
    subcategories: ["Smart Contracts", "DeFi", "Enterprise Blockchain"],
    rating: 4.5,
    reviewCount: 64,
    description:
      "Innovative blockchain solutions for secure and transparent business operations. Revolutionizing industries with distributed ledger technology.",
    featured: false,
    premium: false,
    location: "Miami, FL",
    founded: 2017,
    clients: 85,
    verified: true,
  },
  {
    id: 9,
    name: "IoT Systems",
    logo: "/images/vendor1.jpg",
    category: "Internet of Things",
    subcategories: ["IoT Hardware", "IoT Software", "Industrial IoT"],
    rating: 4.7,
    reviewCount: 72,
    description:
      "End-to-end IoT solutions for smart homes, cities, and industries. Connecting devices and systems for improved efficiency and automation.",
    featured: true,
    premium: true,
    location: "Portland, OR",
    founded: 2016,
    clients: 140,
    verified: true,
  },
  {
    id: 10,
    name: "UX Design Studio",
    logo: "/images/vendor1.jpg",
    category: "UI/UX Design",
    subcategories: ["User Research", "Interface Design", "Usability Testing"],
    rating: 4.8,
    reviewCount: 108,
    description:
      "Creating intuitive and engaging user experiences for web and mobile applications. Designing interfaces that users love to interact with.",
    featured: false,
    premium: true,
    location: "Los Angeles, CA",
    founded: 2014,
    clients: 220,
    verified: true,
  },
  {
    id: 11,
    name: "Network Solutions",
    logo: "/images/vendor1.jpg",
    category: "Networking",
    subcategories: ["Network Security", "SD-WAN", "Network Monitoring"],
    rating: 4.6,
    reviewCount: 82,
    description:
      "Comprehensive networking solutions for businesses of all sizes. Ensuring reliable and secure connectivity for your organization.",
    featured: false,
    premium: false,
    location: "Atlanta, GA",
    founded: 2011,
    clients: 310,
    verified: true,
  },
  {
    id: 12,
    name: "VR Immersive",
    logo: "/images/vendor1.jpg",
    category: "Virtual Reality",
    subcategories: ["VR Applications", "AR Solutions", "Mixed Reality"],
    rating: 4.7,
    reviewCount: 68,
    description:
      "Immersive virtual and augmented reality solutions for training, marketing, and entertainment. Creating engaging virtual experiences for real-world applications.",
    featured: false,
    premium: false,
    location: "San Diego, CA",
    founded: 2017,
    clients: 95,
    verified: true,
  },
]

// Get all unique categories
const allCategories = ["All", ...new Set(vendors.map((vendor) => vendor.category))]

export default function VendorPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [showPremiumOnly, setShowPremiumOnly] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [vendorsPerPage] = useState(6)
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Filter vendors based on search term, category, and premium filter
  const filteredVendors = vendors.filter((vendor) => {
    const matchesSearch =
      vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vendor.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || vendor.category === selectedCategory
    const matchesPremium = showPremiumOnly ? vendor.premium : true
    return matchesSearch && matchesCategory && matchesPremium
  })

  // Get featured vendors
  const featuredVendors = vendors.filter((vendor) => vendor.featured)

  // Get current vendors for pagination
  const indexOfLastVendor = currentPage * vendorsPerPage
  const indexOfFirstVendor = indexOfLastVendor - vendorsPerPage
  const currentVendors = filteredVendors.slice(indexOfFirstVendor, indexOfLastVendor)

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  // Calculate total pages
  const totalPages = Math.ceil(filteredVendors.length / vendorsPerPage)

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
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 pt-24">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-5"
            >
              Technology Partners
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-700 to-cyan-500 bg-clip-text text-transparent"
            >
              Our Trusted Vendors
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-600 mb-8"
            >
              Discover our network of premium technology vendors, carefully selected for their exceptional quality,
              reliability, and customer satisfaction.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search vendors..."
                className="pl-10 border-slate-200 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  setCurrentPage(1) // Reset to first page on search
                }}
              />
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <Select
                value={selectedCategory}
                onValueChange={(value) => {
                  setSelectedCategory(value)
                  setCurrentPage(1) // Reset to first page on category change
                }}
              >
                <SelectTrigger className="w-full md:w-[180px] border-slate-200">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {allCategories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                variant={showPremiumOnly ? "default" : "outline"}
                className={`flex items-center ${
                  showPremiumOnly ? "bg-blue-600 hover:bg-blue-700" : "border-slate-200 hover:bg-slate-50"
                }`}
                onClick={() => {
                  setShowPremiumOnly(!showPremiumOnly)
                  setCurrentPage(1) // Reset to first page on filter change
                }}
              >
                <Award className="h-4 w-4 mr-2" />
                Premium Only
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vendors Section */}
      {featuredVendors.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center">
                <Award className="h-5 w-5 text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                  Featured Vendors
                </h2>
              </div>
              <Link href="#all-vendors">
                <Button variant="ghost" className="text-blue-600 hover:text-blue-700 group">
                  View All Vendors
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredVendors.slice(0, 3).map((vendor) => (
                <motion.div
                  key={vendor.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-16 h-16 bg-slate-50 rounded-lg p-2 flex items-center justify-center overflow-hidden">
                        <img
                          src={vendor.logo || "/placeholder.svg"}
                          alt={vendor.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center bg-yellow-50 px-2 py-1 rounded text-sm mr-2">
                          <Star className="h-3 w-3 text-yellow-500 mr-1" />
                          <span className="text-yellow-700">{vendor.rating}</span>
                        </div>
                        {vendor.premium && (
                          <Badge className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                            Premium
                          </Badge>
                        )}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
                      {vendor.name}
                    </h3>
                    <p className="text-sm text-blue-600 mb-3">{vendor.category}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {vendor.subcategories.map((subcategory, index) => (
                        <span
                          key={index}
                          className="inline-block bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded"
                        >
                          {subcategory}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-slate-600 mb-4 flex-grow">{vendor.description}</p>
                    <div className="flex flex-wrap gap-y-2 text-xs text-slate-500 mb-4">
                      <div className="flex items-center mr-4">
                        <MapPin className="h-3 w-3 mr-1 text-slate-400" />
                        {vendor.location}
                      </div>
                      <div className="flex items-center mr-4">
                        <Calendar className="h-3 w-3 mr-1 text-slate-400" />
                        Est. {vendor.founded}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-3 w-3 mr-1 text-slate-400" />
                        {vendor.clients}+ clients
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 group">
                      View Profile
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Vendors Grid */}
      <section id="all-vendors" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
              All Vendors
            </h2>
            {filteredVendors.length > 0 && (
              <p className="text-sm text-slate-500">
                Showing {indexOfFirstVendor + 1}-{Math.min(indexOfLastVendor, filteredVendors.length)} of{" "}
                {filteredVendors.length} vendors
              </p>
            )}
          </div>

          {filteredVendors.length === 0 ? (
            <div className="bg-white rounded-xl p-10 text-center border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">No vendors found</h3>
              <p className="text-slate-600 mb-6">We couldn&apos;t find any vendors matching your search criteria.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                  setShowPremiumOnly(false)
                }}
              >
                Clear filters
              </Button>
            </div>
          ) : (
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {currentVendors.map((vendor) => (
                <motion.div
                  key={vendor.id}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-16 h-16 bg-slate-50 rounded-lg p-2 flex items-center justify-center overflow-hidden">
                        <img
                          src={vendor.logo || "/placeholder.svg"}
                          alt={vendor.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center bg-yellow-50 px-2 py-1 rounded text-sm mr-2">
                          <Star className="h-3 w-3 text-yellow-500 mr-1" />
                          <span className="text-yellow-700">{vendor.rating}</span>
                        </div>
                        {vendor.premium && (
                          <Badge className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                            Premium
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                        {vendor.name}
                      </h3>
                      {vendor.verified && (
                        <div className="flex items-center text-green-600 text-xs">
                          <Shield className="h-3 w-3 mr-1" />
                          Verified
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-blue-600 mb-3">{vendor.category}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {vendor.subcategories.map((subcategory, index) => (
                        <span
                          key={index}
                          className="inline-block bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded"
                        >
                          {subcategory}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-slate-600 mb-4 flex-grow">{vendor.description}</p>
                    <div className="flex flex-wrap gap-y-2 text-xs text-slate-500 mb-4">
                      <div className="flex items-center mr-4">
                        <MapPin className="h-3 w-3 mr-1 text-slate-400" />
                        {vendor.location}
                      </div>
                      <div className="flex items-center mr-4">
                        <Calendar className="h-3 w-3 mr-1 text-slate-400" />
                        Est. {vendor.founded}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-3 w-3 mr-1 text-slate-400" />
                        {vendor.clients}+ clients
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-slate-200 hover:bg-slate-50 hover:text-blue-600 transition-colors group"
                    >
                      View Profile
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Pagination */}
          {filteredVendors.length > 0 && totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => paginate(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-3"
                >
                  Previous
                </Button>
                {Array.from({ length: totalPages }).map((_, index) => (
                  <Button
                    key={index}
                    variant={currentPage === index + 1 ? "default" : "outline"}
                    size="sm"
                    onClick={() => paginate(index + 1)}
                    className={`h-8 w-8 ${currentPage === index + 1 ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                  >
                    {index + 1}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="px-3"
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Become a Vendor CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Join Our Vendor Network
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-blue-50 mb-8"
            >
              Become a part of our trusted vendor network and connect with businesses looking for your solutions. Expand
              your reach and grow your business with TechSoss.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vendor Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
              Benefits of Joining Our Network
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our vendor program is designed to help you reach more clients, streamline your sales process, and grow
              your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:shadow-md transition-all duration-300">
              <div className="bg-blue-50 p-3 rounded-lg inline-flex mb-4">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Expanded Reach</h3>
              <p className="text-slate-600">
                Connect with thousands of potential clients actively looking for technology solutions in your domain.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:shadow-md transition-all duration-300">
              <div className="bg-green-50 p-3 rounded-lg inline-flex mb-4">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Verified Status</h3>
              <p className="text-slate-600">
                Gain credibility with our verified vendor badge, showing potential clients that you&apos;ve been vetted and
                approved.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:shadow-md transition-all duration-300">
              <div className="bg-purple-50 p-3 rounded-lg inline-flex mb-4">
                <Award className="h-5 w-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Marketing Support</h3>
              <p className="text-slate-600">
                Benefit from our marketing initiatives, including featured placements, promotional campaigns, and
                content opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    <Footer />
    </main>
  )
}

