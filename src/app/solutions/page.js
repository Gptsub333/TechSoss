"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  ArrowRight,
  CheckCircle,
  Cloud,
  Shield,
  Database,
  Code,
  Smartphone,
  Cpu,
  Zap,
  Globe,
  BarChart,
  Building,
  Briefcase,
  Lightbulb,
  Headphones,
  Server,
  Network,
  Users,
  ChevronRight,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { XIcon } from "lucide-react"
import Footer from "@/components/footer"

// Sample solutions data
const solutions = [
  {
    id: "cloud",
    name: "Cloud Solutions",
    icon: Cloud,
    color: "bg-blue-50 text-blue-600",
    shortDescription: "Scalable cloud infrastructure and migration services.",
    description:
      "Scalable cloud infrastructure, migration services, and managed cloud solutions for businesses of all sizes. Our cloud experts help you leverage the power of the cloud to drive innovation and growth.",
    features: [
      "Infrastructure as a Service (IaaS)",
      "Platform as a Service (PaaS)",
      "Software as a Service (SaaS)",
      "Cloud Migration & Strategy",
      "Hybrid Cloud Solutions",
      "Cloud Security & Compliance",
      "Disaster Recovery & Backup",
    ],
    benefits: [
      "Reduce IT infrastructure costs",
      "Scale resources on demand",
      "Improve business continuity",
      "Enhance collaboration and productivity",
      "Access enterprise-grade security",
    ],
    industries: ["Finance", "Healthcare", "Retail", "Manufacturing", "Education"],
    featured: true,
    image: "/images/vendor1.jpg",
    caseStudy: {
      title: "Global Retailer Achieves 40% Cost Reduction with Cloud Migration",
      excerpt:
        "Learn how we helped a major retail chain migrate their legacy systems to the cloud, resulting in significant cost savings and improved performance.",
    },
  },
  {
    id: "security",
    name: "Cybersecurity",
    icon: Shield,
    color: "bg-red-50 text-red-600",
    shortDescription: "Comprehensive security solutions for evolving threats.",
    description:
      "Comprehensive security solutions to protect your business from evolving cyber threats and ensure data integrity. Our security experts implement robust defenses to safeguard your critical assets.",
    features: [
      "Threat Detection & Response",
      "Security Assessments",
      "Compliance Management",
      "Identity & Access Management",
      "Security Operations Center",
      "Penetration Testing",
      "Security Awareness Training",
    ],
    benefits: [
      "Protect sensitive data from breaches",
      "Maintain regulatory compliance",
      "Reduce security incident response time",
      "Minimize business disruption from attacks",
      "Build customer trust through strong security",
    ],
    industries: ["Finance", "Healthcare", "Government", "Retail", "Energy"],
    featured: true,
    image: "/images/vendor1.jpg",
    caseStudy: {
      title: "Financial Institution Strengthens Security Posture Against Advanced Threats",
      excerpt:
        "Discover how our cybersecurity team helped a financial services company detect and mitigate sophisticated cyber attacks.",
    },
  },
  {
    id: "data",
    name: "Data Analytics",
    icon: Database,
    color: "bg-green-50 text-green-600",
    shortDescription: "Transform data into actionable business insights.",
    description:
      "Transform your data into actionable insights with our advanced analytics and business intelligence solutions. Leverage your data assets to make informed decisions and gain competitive advantage.",
    features: [
      "Business Intelligence",
      "Predictive Analytics",
      "Data Warehousing",
      "Big Data Processing",
      "Data Visualization",
      "Machine Learning Integration",
      "Real-time Analytics",
    ],
    benefits: [
      "Make data-driven business decisions",
      "Identify market trends and opportunities",
      "Optimize operations and reduce costs",
      "Enhance customer experience through insights",
      "Forecast future business outcomes",
    ],
    industries: ["Retail", "Finance", "Healthcare", "Manufacturing", "Telecommunications"],
    featured: false,
    image: "/images/vendor1.jpg",
    caseStudy: {
      title: "Healthcare Provider Improves Patient Outcomes with Predictive Analytics",
      excerpt:
        "See how our data analytics solution helped a healthcare organization predict patient readmissions and improve care quality.",
    },
  },
  {
    id: "development",
    name: "Software Development",
    icon: Code,
    color: "bg-purple-50 text-purple-600",
    shortDescription: "Custom software tailored to your business needs.",
    description:
      "Custom software development services tailored to your business needs, from web applications to enterprise systems. Our development team creates scalable, secure, and user-friendly software solutions.",
    features: [
      "Custom Application Development",
      "API Development & Integration",
      "DevOps & CI/CD",
      "Quality Assurance & Testing",
      "Legacy System Modernization",
      "Microservices Architecture",
      "Progressive Web Applications",
    ],
    benefits: [
      "Streamline business processes with tailored solutions",
      "Integrate disparate systems seamlessly",
      "Accelerate time-to-market for digital products",
      "Reduce technical debt with modern architecture",
      "Scale applications to meet growing demands",
    ],
    industries: ["Finance", "Healthcare", "Retail", "Logistics", "Professional Services"],
    featured: false,
    image: "/images/vendor1.jpg",
    caseStudy: {
      title: "Logistics Company Transforms Operations with Custom Software Platform",
      excerpt:
        "Learn how our custom software solution helped a logistics company automate processes and improve efficiency by 60%.",
    },
  },
  {
    id: "mobile",
    name: "Mobile Solutions",
    icon: Smartphone,
    color: "bg-orange-50 text-orange-600",
    shortDescription: "Engaging mobile applications for customers and workforce.",
    description:
      "Engage your customers and empower your workforce with cutting-edge mobile applications and solutions. Our mobile experts create intuitive and feature-rich apps that drive engagement and productivity.",
    features: [
      "iOS & Android Development",
      "Cross-Platform Solutions",
      "Mobile Strategy Consulting",
      "UI/UX Design",
      "Mobile App Maintenance",
      "Progressive Web Apps",
      "Mobile Backend as a Service",
    ],
    benefits: [
      "Reach customers on their preferred devices",
      "Increase employee productivity with mobile tools",
      "Create new revenue channels through mobile",
      "Enhance brand presence in mobile marketplaces",
      "Deliver personalized user experiences",
    ],
    industries: ["Retail", "Healthcare", "Finance", "Hospitality", "Transportation"],
    featured: true,
    image: "/images/vendor1.jpg",
    caseStudy: {
      title: "Retail Chain Boosts Sales by 35% with Mobile Shopping App",
      excerpt:
        "Discover how our mobile solution helped a retail chain increase customer engagement and drive significant revenue growth.",
    },
  },
  {
    id: "ai",
    name: "AI & Machine Learning",
    icon: Cpu,
    color: "bg-cyan-50 text-cyan-600",
    shortDescription: "Harness AI to automate processes and gain advantage.",
    description:
      "Harness the power of artificial intelligence and machine learning to automate processes and gain competitive advantage. Our AI experts develop intelligent solutions that transform how you do business.",
    features: [
      "Predictive Modeling",
      "Natural Language Processing",
      "Computer Vision",
      "Recommendation Systems",
      "AI Strategy & Implementation",
      "Conversational AI & Chatbots",
      "AI-Powered Process Automation",
    ],
    benefits: [
      "Automate repetitive tasks and workflows",
      "Extract insights from unstructured data",
      "Personalize customer experiences at scale",
      "Optimize resource allocation with AI",
      "Identify patterns and anomalies in data",
    ],
    industries: ["Retail", "Finance", "Healthcare", "Manufacturing", "Customer Service"],
    featured: false,
    image: "/images/vendor1.jpg",
    caseStudy: {
      title: "Insurance Company Reduces Claims Processing Time by 70% with AI",
      excerpt:
        "See how our AI solution automated claims processing for an insurance provider, improving efficiency and customer satisfaction.",
    },
  },
  {
    id: "iot",
    name: "Internet of Things",
    icon: Zap,
    color: "bg-yellow-50 text-yellow-600",
    shortDescription: "Connect devices and systems for improved efficiency.",
    description:
      "Connect devices and systems to improve efficiency, gather valuable data, and enable new business models. Our IoT experts design and implement solutions that bring the physical and digital worlds together.",
    features: [
      "IoT Strategy & Consulting",
      "IoT Architecture Design",
      "Sensor Integration",
      "IoT Data Analytics",
      "Edge Computing Solutions",
      "IoT Security",
      "Industrial IoT Applications",
    ],
    benefits: [
      "Monitor assets and operations in real-time",
      "Reduce maintenance costs with predictive insights",
      "Improve operational efficiency through automation",
      "Create new service-based business models",
      "Enhance decision-making with IoT data",
    ],
    industries: ["Manufacturing", "Healthcare", "Smart Cities", "Agriculture", "Energy"],
    featured: false,
    image: "/images/vendor1.jpg",
    caseStudy: {
      title: "Manufacturing Plant Achieves 30% Efficiency Gain with IoT Implementation",
      excerpt:
        "Learn how our IoT solution helped a manufacturing company monitor equipment, predict failures, and optimize production.",
    },
  },
  {
    id: "digital",
    name: "Digital Transformation",
    icon: Globe,
    color: "bg-indigo-50 text-indigo-600",
    shortDescription: "Comprehensive strategy for digital business evolution.",
    description:
      "Comprehensive digital transformation strategy and implementation to evolve your business for the digital age. Our experts guide you through technology adoption, process optimization, and cultural change.",
    features: [
      "Digital Strategy Development",
      "Business Process Reengineering",
      "Technology Roadmap Creation",
      "Change Management",
      "Digital Workplace Solutions",
      "Customer Experience Transformation",
      "Digital Innovation Workshops",
    ],
    benefits: [
      "Increase organizational agility and resilience",
      "Improve customer experience across channels",
      "Optimize operations through digitization",
      "Create new digital business models",
      "Foster innovation and digital culture",
    ],
    industries: ["Retail", "Finance", "Healthcare", "Manufacturing", "Professional Services"],
    featured: true,
    image: "/images/vendor1.jpg",
    caseStudy: {
      title: "Traditional Retailer Successfully Pivots to Omnichannel Business Model",
      excerpt:
        "Discover how our digital transformation approach helped a traditional retailer adapt to changing market conditions and thrive.",
    },
  },
]

// Sample industries data
const industries = [
  {
    id: "finance",
    name: "Finance & Banking",
    icon: Building,
    color: "bg-blue-50 text-blue-600",
    description:
      "Secure and compliant technology solutions for financial institutions, from digital banking platforms to fraud detection systems.",
    solutions: ["security", "data", "ai", "digital", "cloud"],
    challenges: [
      "Maintaining regulatory compliance",
      "Protecting sensitive customer data",
      "Modernizing legacy systems",
      "Competing with fintech disruptors",
      "Delivering seamless digital experiences",
    ],
    caseStudy: {
      title: "Major Bank Achieves Digital Transformation with TechSoss",
      excerpt: "Learn how we helped a leading bank modernize their systems and improve customer experience.",
    },
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: Briefcase,
    color: "bg-green-50 text-green-600",
    description:
      "Innovative technology solutions for healthcare providers, from electronic health records to telemedicine platforms.",
    solutions: ["security", "data", "mobile", "ai", "iot"],
    challenges: [
      "Ensuring HIPAA compliance and data security",
      "Integrating disparate healthcare systems",
      "Improving patient engagement",
      "Optimizing clinical workflows",
      "Managing healthcare costs",
    ],
    caseStudy: {
      title: "Healthcare Network Improves Patient Care with Integrated Solutions",
      excerpt: "Discover how our healthcare solutions helped a major provider enhance patient outcomes.",
    },
  },
  {
    id: "retail",
    name: "Retail & E-commerce",
    icon: BarChart,
    color: "bg-purple-50 text-purple-600",
    description:
      "Digital transformation solutions for retailers to enhance customer experience and streamline operations.",
    solutions: ["digital", "mobile", "data", "ai", "cloud"],
    challenges: [
      "Creating seamless omnichannel experiences",
      "Personalizing customer interactions",
      "Optimizing supply chain operations",
      "Competing with e-commerce giants",
      "Managing inventory efficiently",
    ],
    caseStudy: {
      title: "Retailer Increases Online Sales by 45% with Digital Transformation",
      excerpt: "See how our retail solutions helped a traditional retailer thrive in the digital marketplace.",
    },
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: Server,
    color: "bg-orange-50 text-orange-600",
    description:
      "Technology solutions to optimize manufacturing processes, improve efficiency, and reduce costs through automation.",
    solutions: ["iot", "data", "ai", "cloud", "digital"],
    challenges: [
      "Optimizing production efficiency",
      "Implementing predictive maintenance",
      "Managing complex supply chains",
      "Ensuring quality control",
      "Adapting to Industry 4.0",
    ],
    caseStudy: {
      title: "Manufacturer Reduces Downtime by 35% with IoT and Predictive Analytics",
      excerpt: "Learn how our manufacturing solutions improved operational efficiency and reduced costs.",
    },
  },
  {
    id: "energy",
    name: "Energy & Utilities",
    icon: Lightbulb,
    color: "bg-cyan-50 text-cyan-600",
    description:
      "Technology solutions for energy companies, utilities, and renewable energy providers to optimize operations and improve sustainability.",
    solutions: ["iot", "data", "cloud", "security", "digital"],
    challenges: [
      "Modernizing grid infrastructure",
      "Implementing smart metering",
      "Ensuring cybersecurity for critical infrastructure",
      "Managing renewable energy integration",
      "Optimizing energy distribution",
    ],
    caseStudy: {
      title: "Utility Company Transforms Operations with Smart Grid Technology",
      excerpt: "Discover how our energy solutions helped a utility provider improve efficiency and customer service.",
    },
  },
  {
    id: "professional",
    name: "Professional Services",
    icon: Headphones,
    color: "bg-red-50 text-red-600",
    description:
      "Digital solutions for consulting firms, legal practices, and other professional service providers to enhance client service and operational efficiency.",
    solutions: ["digital", "data", "cloud", "development", "mobile"],
    challenges: [
      "Streamlining client communication",
      "Managing complex projects",
      "Securing sensitive client data",
      "Optimizing resource allocation",
      "Delivering value-added services",
    ],
    caseStudy: {
      title: "Consulting Firm Enhances Client Delivery with Digital Platform",
      excerpt: "See how our professional services solutions improved client satisfaction and operational efficiency.",
    },
  },
]

// Get all unique industries
const allIndustries = ["All Industries", ...new Set(solutions.flatMap((solution) => solution.industries))]

export default function SolutionsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries")
  const [activeTab, setActiveTab] = useState("all")
  const [selectedSolution, setSelectedSolution] = useState(null)
  const [selectedIndustryDetail, setSelectedIndustryDetail] = useState(null)
  const [mounted, setMounted] = useState(false)
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [isDetailOpen, setIsDetailOpen] = useState(false)
  const [isIndustryDetailOpen, setIsIndustryDetailOpen] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Set initial selected solution
    if (!selectedSolution && solutions.length > 0) {
      setSelectedSolution(solutions[0])
    }

    // Set initial selected industry
    if (!selectedIndustryDetail && industries.length > 0) {
      setSelectedIndustryDetail(industries[0])
    }
  }, [solutions, selectedSolution, industries, selectedIndustryDetail])

  if (!mounted) return null

  // Filter solutions based on search term and industry
  const filteredSolutions = solutions.filter((solution) => {
    const matchesSearch =
      solution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      solution.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesIndustry = selectedIndustry === "All Industries" || solution.industries.includes(selectedIndustry)
    const matchesTab = activeTab === "all" || (activeTab === "featured" && solution.featured)
    return matchesSearch && matchesIndustry && matchesTab
  })

  // Get featured solutions
  const featuredSolutions = solutions.filter((solution) => solution.featured)

  // Get related solutions for an industry
  const getRelatedSolutions = (industryId) => {
    const industry = industries.find((ind) => ind.id === industryId)
    if (!industry) return []
    return solutions.filter((sol) => industry.solutions.includes(sol.id))
  }

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
      <section className="relative py-12 md:py-20 overflow-hidden">
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
              Our Expertise
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-700 to-cyan-500 bg-clip-text text-transparent"
            >
              Technology Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-600 mb-8"
            >
              Discover our comprehensive range of technology solutions designed to help your business thrive in the
              digital age. From cloud infrastructure to AI-powered applications, we have the expertise to drive your
              success.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-md hover:shadow-lg"
                size="lg"
              >
                Explore Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-slate-300 hover:bg-slate-50">
                Schedule Consultation
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="sticky top-16 z-30 py-4 bg-white border-y border-slate-200 backdrop-blur-md bg-white/90">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search solutions..."
                className="pl-10 border-slate-200 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                }}
              />
            </div>
            <div className="flex flex-wrap gap-4 w-full md:w-auto">
              <Select
                value={selectedIndustry}
                onValueChange={(value) => {
                  setSelectedIndustry(value)
                }}
              >
                <SelectTrigger className="w-full md:w-[180px] border-slate-200">
                  <SelectValue placeholder="Industry" />
                </SelectTrigger>
                <SelectContent>
                  {allIndustries.map((industry) => (
                    <SelectItem key={industry} value={industry}>
                      {industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
                <TabsList className="bg-slate-100">
                  <TabsTrigger value="all" className="data-[state=active]:bg-white">
                    All
                  </TabsTrigger>
                  <TabsTrigger value="featured" className="data-[state=active]:bg-white">
                    Featured
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredSolutions.length === 0 ? (
            <div className="bg-white rounded-xl p-10 text-center border border-slate-200 shadow-md">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">No solutions found</h3>
              <p className="text-slate-600 mb-6">We couldn&apos;t find any solutions matching your search criteria.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedIndustry("All Industries")
                  setActiveTab("all")
                }}
              >
                Clear filters
              </Button>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                  {activeTab === "featured" ? "Featured Solutions" : "All Solutions"}
                </h2>
                <p className="text-sm text-slate-500">
                  Showing {filteredSolutions.length} {filteredSolutions.length === 1 ? "solution" : "solutions"}
                </p>
              </div>

              <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredSolutions.map((solution) => (
                  <motion.div key={solution.id} variants={itemVariants} className="relative group">
                    <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg border-slate-200 group-hover:border-blue-200">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div className={`${solution.color} p-3 rounded-lg inline-flex`}>
                            <solution.icon className="h-5 w-5" />
                          </div>
                          {solution.featured && (
                            <Badge className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                              Featured
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="mt-3 text-xl group-hover:text-blue-600 transition-colors">
                          {solution.name}
                        </CardTitle>
                        <CardDescription className="text-slate-500">{solution.shortDescription}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {solution.industries.slice(0, 3).map((industry, index) => (
                            <span
                              key={index}
                              className="inline-block bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded"
                            >
                              {industry}
                            </span>
                          ))}
                          {solution.industries.length > 3 && (
                            <span className="inline-block bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded">
                              +{solution.industries.length - 3}
                            </span>
                          )}
                        </div>

                        <div className="space-y-2 mb-4">
                          {solution.features.slice(0, 3).map((feature, index) => (
                            <div key={index} className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-slate-700">{feature}</span>
                            </div>
                          ))}
                          {solution.features.length > 3 && (
                            <div className="text-sm text-blue-600 font-medium">
                              +{solution.features.length - 3} more features
                            </div>
                          )}
                        </div>
                      </CardContent>
                      <CardFooter className="pt-0 flex justify-between">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              className="border-slate-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                            >
                              Learn More
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                              <div className="flex items-center gap-3">
                                <div className={`${solution.color} p-2 rounded-lg inline-flex`}>
                                  <solution.icon className="h-5 w-5" />
                                </div>
                                <DialogTitle className="text-2xl">{solution.name}</DialogTitle>
                              </div>
                              <DialogDescription className="text-base text-slate-600 mt-2">
                                {solution.description}
                              </DialogDescription>
                            </DialogHeader>

                            <div className="grid md:grid-cols-2 gap-8 mt-6">
                              <div>
                                <h3 className="text-lg font-semibold text-slate-800 mb-3">Key Features</h3>
                                <ul className="space-y-3 mb-6">
                                  {solution.features.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                      <span className="text-slate-700">{feature}</span>
                                    </li>
                                  ))}
                                </ul>

                                <h3 className="text-lg font-semibold text-slate-800 mb-3">Industries</h3>
                                <div className="flex flex-wrap gap-2 mb-6">
                                  {solution.industries.map((industry, index) => (
                                    <Badge key={index} variant="outline" className="bg-white">
                                      {industry}
                                    </Badge>
                                  ))}
                                </div>

                                <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-md hover:shadow-lg group">
                                  Request a Consultation
                                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                              </div>

                              <div className="space-y-6">
                                <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Business Benefits</h3>
                                  <ul className="space-y-2">
                                    {solution.benefits.map((benefit, index) => (
                                      <li key={index} className="flex items-start">
                                        <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700 text-sm">{benefit}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl p-6 text-white">
                                  <h3 className="text-lg font-semibold mb-2">Case Study</h3>
                                  <h4 className="font-medium mb-2">{solution.caseStudy.title}</h4>
                                  <p className="text-sm text-blue-50 mb-4">{solution.caseStudy.excerpt}</p>
                                  <Button
                                    variant="outline"
                                    className="bg-transparent text-white border-white hover:bg-white/10"
                                  >
                                    Read Case Study
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>

                        <Button
                          variant="ghost"
                          className="p-0 h-auto text-blue-600 hover:text-blue-700 hover:bg-transparent group"
                          onClick={() => {
                            setSelectedSolution(solution);
                            setIsDetailOpen(true);
                          }}
                        >
                          Quick View
                          <ArrowUpRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </>
          )}
        </div>
      </section>

      {/* Solution Detail Modal */}
      <AnimatePresence>
        {isDetailOpen && selectedSolution && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setIsDetailOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-5xl overflow-auto rounded-2xl bg-white p-6 shadow-xl"
            >
              <button
                onClick={() => setIsDetailOpen(false)}
                className="absolute right-4 top-4 rounded-full bg-slate-100 p-2 text-slate-500 hover:bg-slate-200 transition-colors"
              >
                <XIcon className="h-5 w-5" />
              </button>

              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`${selectedSolution.color} p-3 rounded-lg inline-flex`}>
                      <selectedSolution.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">{selectedSolution.name}</h3>
                    {selectedSolution.featured && (
                      <Badge className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                        Featured
                      </Badge>
                    )}
                  </div>
                  
                  <p className="text-slate-600 mb-6">{selectedSolution.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-slate-800 mb-3">Key Features</h4>
                    <ul className="space-y-3">
                      {selectedSolution.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-slate-800 mb-3">Industries</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedSolution.industries.map((industry, index) => (
                        <Badge key={index} variant="outline" className="bg-white">
                          {industry}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-md hover:shadow-lg group">
                    Request a Consultation
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                <div className="space-y-6">
                  <div className="aspect-video overflow-hidden rounded-xl bg-slate-100 mb-4">
                    <img
                      src={selectedSolution.image || "/placeholder.svg"}
                      alt={selectedSolution.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: "Features", value: selectedSolution.features.length },
                      { label: "Industries", value: selectedSolution.industries.length },
                      { label: "Benefits", value: selectedSolution.benefits.length },
                    ].map((stat, index) => (
                      <div key={index} className="rounded-lg bg-slate-50 p-4 text-center">
                        <div className="text-xl font-bold text-slate-900">{stat.value}</div>
                        <div className="text-sm text-slate-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-3">Business Benefits</h4>
                    <ul className="space-y-2">
                      {selectedSolution.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl p-6 text-white">
                    <h3 className="text-lg font-semibold mb-2">Case Study</h3>
                    <h4 className="font-medium mb-2">{selectedSolution.caseStudy.title}</h4>
                    <p className="text-sm text-blue-50 mb-4">{selectedSolution.caseStudy.excerpt}</p>
                    <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 w-full">
                      Read Case Study
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Industry Detail Modal */}
      <AnimatePresence>
        {isIndustryDetailOpen && selectedIndustryDetail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setIsIndustryDetailOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-5xl overflow-auto rounded-2xl bg-white p-6 shadow-xl"
            >
              <button
                onClick={() => setIsIndustryDetailOpen(false)}
                className="absolute right-4 top-4 rounded-full bg-slate-100 p-2 text-slate-500 hover:bg-slate-200 transition-colors"
              >
                <XIcon className="h-5 w-5" />
              </button>

              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`${selectedIndustryDetail.color} p-3 rounded-lg inline-flex`}>
                      <selectedIndustryDetail.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">{selectedIndustryDetail.name}</h3>
                  </div>
                  
                  <p className="text-slate-600 mb-6">{selectedIndustryDetail.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-slate-800 mb-3">Industry Challenges</h4>
                    <ul className="space-y-3">
                      {selectedIndustryDetail.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-md hover:shadow-lg group">
                    Request Industry Consultation
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl p-6 text-white mb-6">
                    <h3 className="text-lg font-semibold mb-2">Case Study</h3>
                    <h4 className="font-medium mb-2">{selectedIndustryDetail.caseStudy.title}</h4>
                    <p className="text-sm text-blue-50 mb-4">{selectedIndustryDetail.caseStudy.excerpt}</p>
                    <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 w-full">
                      Read Case Study
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-3">Our Solutions</h4>
                    <div className="grid gap-3">
                      {getRelatedSolutions(selectedIndustryDetail.id).map((solution) => (
                        <div 
                          key={solution.id} 
                          className="flex items-start gap-3 p-4 rounded-lg border border-slate-100 hover:border-blue-100 hover:bg-blue-50 cursor-pointer transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedSolution(solution);
                            setIsIndustryDetailOpen(false);
                            setIsDetailOpen(true);
                          }}
                        >
                          <div className={`${solution.color} p-2 rounded-lg inline-flex flex-shrink-0`}>
                            <solution.icon className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium text-slate-800">{solution.name}</h4>
                            <p className="text-xs text-slate-500 mb-2">{solution.shortDescription}</p>
                            <Button 
                              variant="ghost" 
                              className="p-0 h-auto text-blue-600 hover:text-blue-700 hover:bg-transparent text-xs group"
                            >
                              View Solution
                              <ChevronRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: "Solutions", value: getRelatedSolutions(selectedIndustryDetail.id).length },
                      { label: "Challenges", value: selectedIndustryDetail.challenges.length },
                      { label: "Success Rate", value: "95%" },
                    ].map((stat, index) => (
                      <div key={index} className="rounded-lg bg-slate-50 p-4 text-center">
                        <div className="text-xl font-bold text-slate-900">{stat.value}</div>
                        <div className="text-sm text-slate-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Industry Solutions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
              Solutions by Industry
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We provide tailored technology solutions for a wide range of industries, addressing their unique
              challenges and requirements.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <Card
                key={industry.id}
                className="overflow-hidden transition-all duration-300 hover:shadow-lg border-slate-200 hover:border-blue-200 group"
              >
                <CardHeader className="pb-2">
                  <div className={`${industry.color} p-3 rounded-lg inline-flex mb-2`}>
                    <industry.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="group-hover:text-blue-600 transition-colors">{industry.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4 text-sm">{industry.description}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {industry.challenges.slice(0, 2).map((challenge, index) => (
                      <div key={index} className="flex items-start w-full mb-1">
                        <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-slate-700">{challenge}</span>
                      </div>
                    ))}
                    {industry.challenges.length > 2 && (
                      <div className="text-xs text-blue-600 font-medium">
                        +{industry.challenges.length - 2} more challenges addressed
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="pt-0 flex justify-between">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="border-slate-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                      >
                        Learn More
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <div className="flex items-center gap-3">
                          <div className={`${industry.color} p-2 rounded-lg inline-flex`}>
                            <industry.icon className="h-5 w-5" />
                          </div>
                          <DialogTitle className="text-2xl">{industry.name}</DialogTitle>
                        </div>
                        <DialogDescription className="text-base text-slate-600 mt-2">
                          {industry.description}
                        </DialogDescription>
                      </DialogHeader>

                      <div className="mt-6">
                        <h3 className="text-lg font-semibold text-slate-800 mb-3">Industry Challenges</h3>
                        <ul className="space-y-3 mb-6">
                          {industry.challenges.map((challenge, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-700">{challenge}</span>
                            </li>
                          ))}
                        </ul>

                        <h3 className="text-lg font-semibold text-slate-800 mb-3">Our Solutions</h3>
                        <div className="grid sm:grid-cols-2 gap-4 mb-6">
                          {getRelatedSolutions(industry.id).map((solution) => (
                            <div
                              key={solution.id}
                              className="flex items-start gap-3 p-4 rounded-lg border border-slate-100 hover:border-blue-100 hover:bg-blue-50"
                            >
                              <div className={`${solution.color} p-2 rounded-lg inline-flex flex-shrink-0`}>
                                <solution.icon className="h-4 w-4" />
                              </div>
                              <div>
                                <h4 className="font-medium text-slate-800">{solution.name}</h4>
                                <p className="text-xs text-slate-500 mb-2">{solution.shortDescription}</p>
                                <Button
                                  variant="ghost"
                                  className="p-0 h-auto text-blue-600 hover:text-blue-700 hover:bg-transparent text-xs group"
                                >
                                  Learn More
                                  <ChevronRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl p-6 text-white">
                          <h3 className="text-lg font-semibold mb-2">Case Study</h3>
                          <h4 className="font-medium mb-2">{industry.caseStudy.title}</h4>
                          <p className="text-sm text-blue-50 mb-4">{industry.caseStudy.excerpt}</p>
                          <Button
                            variant="outline"
                            className="bg-transparent text-white border-white hover:bg-white/10"
                          >
                            Read Case Study
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-blue-600 hover:text-blue-700 hover:bg-transparent group"
                    onClick={() => {
                      setSelectedIndustryDetail(industry);
                      setIsIndustryDetailOpen(true);
                    }}
                  >
                    Quick View
                    <ArrowUpRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-blue-50 mb-8"
            >
              Our technology experts are ready to help you implement the right solutions for your unique business
              challenges. Let&apos;s start the conversation today.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
              Why Choose TechSoss Solutions
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We combine deep technical expertise with business acumen to deliver solutions that drive real results for
              our clients.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-100 hover:shadow-md transition-all duration-300 hover:border-blue-100">
              <div className="bg-blue-50 p-3 rounded-lg inline-flex mb-4">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Expert Team</h3>
              <p className="text-slate-600">
                Our team of certified professionals brings years of experience across various technology domains and
                industries.
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-100 hover:shadow-md transition-all duration-300 hover:border-blue-100">
              <div className="bg-green-50 p-3 rounded-lg inline-flex mb-4">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Proven Results</h3>
              <p className="text-slate-600">
                Our solutions have helped hundreds of businesses achieve measurable improvements in efficiency, revenue,
                and customer satisfaction.
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-100 hover:shadow-md transition-all duration-300 hover:border-blue-100">
              <div className="bg-purple-50 p-3 rounded-lg inline-flex mb-4">
                <Network className="h-5 w-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">End-to-End Support</h3>
              <p className="text-slate-600">
                From initial consultation to implementation and ongoing maintenance, we provide comprehensive support
                throughout your technology journey.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

