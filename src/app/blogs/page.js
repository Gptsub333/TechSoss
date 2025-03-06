"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Calendar,
  User,
  Clock,
  Search,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Bookmark,
  Tag,
  TrendingUp,
} from "lucide-react"
import Footer from "@/components/footer"

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "The Future of Cloud Computing: Trends to Watch",
    excerpt:
      "Explore the emerging trends in cloud computing that are shaping the future of business technology infrastructure. From serverless computing to multi-cloud strategies, discover what's next.",
    image: "/images/vendor1.jpg",
    date: "Mar 15, 2023",
    author: "Sarah Johnson",
    readTime: "5 min read",
    category: "Cloud",
    featured: true,
    tags: ["Cloud Computing", "Technology Trends", "Digital Transformation"],
  },
  {
    id: 2,
    title: "Cybersecurity Best Practices for Remote Workforces",
    excerpt:
      "Learn how to protect your business and employees from cyber threats in the era of remote and hybrid work environments. Implement these security measures to safeguard your data.",
    image: "/images/vendor1.jpg",
    date: "Apr 22, 2023",
    author: "Michael Chen",
    readTime: "7 min read",
    category: "Security",
    featured: false,
    tags: ["Cybersecurity", "Remote Work", "Data Protection"],
  },
  {
    id: 3,
    title: "Leveraging AI for Business Process Automation",
    excerpt:
      "Discover how artificial intelligence is revolutionizing business process automation and driving operational efficiency. Real-world examples of AI implementation in various industries.",
    image: "/images/vendor1.jpg",
    date: "May 10, 2023",
    author: "Jessica Williams",
    readTime: "6 min read",
    category: "AI",
    featured: true,
    tags: ["Artificial Intelligence", "Automation", "Business Efficiency"],
  },
  {
    id: 4,
    title: "Building Scalable Microservices Architecture",
    excerpt:
      "A comprehensive guide to designing and implementing microservices architecture that scales with your business needs. Best practices and common pitfalls to avoid.",
    image: "/images/vendor1.jpg",
    date: "Jun 5, 2023",
    author: "David Rodriguez",
    readTime: "8 min read",
    category: "Development",
    featured: false,
    tags: ["Microservices", "Software Architecture", "Scalability"],
  },
  {
    id: 5,
    title: "The Rise of Edge Computing in IoT Applications",
    excerpt:
      "How edge computing is transforming IoT applications by reducing latency and improving real-time data processing capabilities. Use cases across industries.",
    image: "/images/vendor1.jpg",
    date: "Jul 18, 2023",
    author: "Emily Chang",
    readTime: "6 min read",
    category: "IoT",
    featured: false,
    tags: ["Edge Computing", "IoT", "Real-time Processing"],
  },
  {
    id: 6,
    title: "Data Privacy Regulations: What Businesses Need to Know",
    excerpt:
      "Navigate the complex landscape of data privacy regulations including GDPR, CCPA, and emerging frameworks. Compliance strategies for global businesses.",
    image: "/images/vendor1.jpg",
    date: "Aug 3, 2023",
    author: "Robert Kim",
    readTime: "9 min read",
    category: "Security",
    featured: true,
    tags: ["Data Privacy", "Compliance", "Regulations"],
  },
  {
    id: 7,
    title: "Blockchain Beyond Cryptocurrency: Enterprise Applications",
    excerpt:
      "Explore how blockchain technology is being applied beyond cryptocurrencies to solve business challenges in supply chain, healthcare, and financial services.",
    image: "/images/vendor1.jpg",
    date: "Sep 12, 2023",
    author: "Alicia Martinez",
    readTime: "7 min read",
    category: "Blockchain",
    featured: false,
    tags: ["Blockchain", "Enterprise Solutions", "Distributed Ledger"],
  },
  {
    id: 8,
    title: "DevOps Best Practices for Continuous Deployment",
    excerpt:
      "Implement effective DevOps practices to achieve continuous deployment and delivery. Tools, techniques, and cultural changes needed for success.",
    image: "/images/vendor1.jpg",
    date: "Oct 25, 2023",
    author: "Thomas Wilson",
    readTime: "8 min read",
    category: "DevOps",
    featured: false,
    tags: ["DevOps", "Continuous Deployment", "Automation"],
  },
  {
    id: 9,
    title: "5G Technology: Transforming Business Connectivity",
    excerpt:
      "How 5G technology is revolutionizing business connectivity and enabling new use cases in augmented reality, autonomous vehicles, and smart cities.",
    image: "/images/vendor1.jpg",
    date: "Nov 8, 2023",
    author: "Sophia Lee",
    readTime: "6 min read",
    category: "Networking",
    featured: true,
    tags: ["5G", "Connectivity", "Digital Transformation"],
  },
]

// Get all unique categories
const allCategories = ["All", ...new Set(blogPosts.map((post) => post.category))]

// Get all unique tags
const allTags = [...new Set(blogPosts.flatMap((post) => post.tags))]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(6)
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Get featured posts
  const featuredPosts = blogPosts.filter((post) => post.featured)

  // Get current posts for pagination
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  // Calculate total pages
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

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
              Knowledge Hub
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-700 to-cyan-500 bg-clip-text text-transparent"
            >
              Tech Insights & Trends
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-600 mb-8"
            >
              Stay updated with the latest technology trends, insights, and best practices from our experts and industry
              leaders.
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
                placeholder="Search articles..."
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
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                  Featured Articles
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredPosts.slice(0, 3).map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-medium py-1 px-2 rounded">
                      {post.category}
                    </div>
                    <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-medium py-1 px-2 rounded flex items-center">
                      <Bookmark className="h-3 w-3 mr-1" />
                      Featured
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-xs text-slate-500 mb-3">
                      <div className="flex items-center mr-4">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center mr-4">
                        <User className="h-3 w-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto text-blue-600 hover:text-blue-700 hover:bg-transparent group"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Blog Posts */}
            <div className="w-full md:w-3/4">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                  All Articles
                </h2>
                {filteredPosts.length > 0 && (
                  <p className="text-sm text-slate-500">
                    Showing {indexOfFirstPost + 1}-{Math.min(indexOfLastPost, filteredPosts.length)} of{" "}
                    {filteredPosts.length} articles
                  </p>
                )}
              </div>

              {filteredPosts.length === 0 ? (
                <div className="bg-white rounded-xl p-10 text-center border border-slate-200">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">No articles found</h3>
                  <p className="text-slate-600 mb-6">We couldn&apos;t find any articles matching your search criteria.</p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchTerm("")
                      setSelectedCategory("All")
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
                  className="grid md:grid-cols-2 gap-8"
                >
                  {currentPosts.map((post) => (
                    <motion.div
                      key={post.id}
                      variants={itemVariants}
                      className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 hover:shadow-lg transition-shadow duration-300 group"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-medium py-1 px-2 rounded">
                          {post.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-xs text-slate-500 mb-3">
                          <div className="flex items-center mr-4">
                            <Calendar className="h-3 w-3 mr-1" />
                            {post.date}
                          </div>
                          <div className="flex items-center mr-4">
                            <User className="h-3 w-3 mr-1" />
                            {post.author}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>
                        <Button
                          variant="ghost"
                          className="p-0 h-auto text-blue-600 hover:text-blue-700 hover:bg-transparent group"
                        >
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Pagination */}
              {filteredPosts.length > 0 && totalPages > 1 && (
                <div className="flex justify-center mt-12">
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => paginate(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className="h-8 w-8"
                    >
                      <ChevronLeft className="h-4 w-4" />
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
                      size="icon"
                      onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className="h-8 w-8"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="w-full md:w-1/4">
              {/* Categories */}
              <div className="bg-white rounded-xl shadow-md border border-slate-100 p-6 mb-8">
                <h3 className="text-lg font-bold text-slate-800 mb-4">Categories</h3>
                <div className="space-y-2">
                  {allCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category)
                        setCurrentPage(1)
                      }}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === category
                          ? "bg-blue-50 text-blue-600 font-medium"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-white rounded-xl shadow-md border border-slate-100 p-6 mb-8">
                <h3 className="text-lg font-bold text-slate-800 mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {allTags.slice(0, 10).map((tag) => (
                    <div
                      key={tag}
                      className="bg-slate-50 text-slate-700 text-xs font-medium px-2.5 py-1.5 rounded-full border border-slate-200 flex items-center"
                    >
                      <Tag className="h-3 w-3 mr-1 text-blue-500" />
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl shadow-md p-6 text-white">
                <h3 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-sm text-blue-50 mb-4">
                  Get the latest articles and tech insights delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                  <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <Footer />
    </main>
  )
}

