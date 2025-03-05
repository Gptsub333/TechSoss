"use client"

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, User, Clock } from "lucide-react"

const blogs = [
  {
    id: 1,
    title: "The Future of Cloud Computing: Trends to Watch",
    excerpt:
      "Explore the emerging trends in cloud computing that are shaping the future of business technology infrastructure.",
    image: "/images/vendor1.jpg",
    date: "Mar 15, 2023",
    author: "Sarah Johnson",
    readTime: "5 min read",
    category: "Cloud",
  },
  {
    id: 2,
    title: "Cybersecurity Best Practices for Remote Workforces",
    excerpt:
      "Learn how to protect your business and employees from cyber threats in the era of remote and hybrid work environments.",
    image: "/images/vendor2.jpg",
    date: "Apr 22, 2023",
    author: "Michael Chen",
    readTime: "7 min read",
    category: "Security",
  },
  {
    id: 3,
    title: "Leveraging AI for Business Process Automation",
    excerpt:
      "Discover how artificial intelligence is revolutionizing business process automation and driving operational efficiency.",
    image: "/images/vendor3.avif",
    date: "May 10, 2023",
    author: "Jessica Williams",
    readTime: "6 min read",
    category: "AI",
  },
]

export default function Blogs() {
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
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="blogs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-5">
            Latest Insights
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
            Tech Insights & Trends
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Stay updated with the latest technology trends, insights, and best practices from our experts and industry
            leaders.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-3 gap-8"
        >
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-medium py-1 px-2 rounded">
                  {blog.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-xs text-slate-500 mb-3">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-3 w-3 mr-1" />
                    {blog.date}
                  </div>
                  <div className="flex items-center mr-4">
                    <User className="h-3 w-3 mr-1" />
                    {blog.author}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {blog.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2">{blog.title}</h3>
                <p className="text-slate-600 mb-4 line-clamp-3">{blog.excerpt}</p>
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

        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-md hover:shadow-lg group">
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}

