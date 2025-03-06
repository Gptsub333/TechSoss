"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  Globe,
  Target,
  Users,
  Award,
  Clock,
  Building,
  ArrowRight,
  Briefcase,
  LucideGlobe,
  Gem,
  Shield,
} from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"

export default function AboutUsPage() {
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
              Our Story
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-700 to-cyan-500 bg-clip-text text-transparent"
            >
              About TechSoss
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-600 mb-8"
            >
              We connect businesses with premium technology solutions to drive innovation, efficiency, and growth in an
              increasingly digital world.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-5">
                Our Company
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                Bridging Technology Gaps Since 2010
              </h2>
              <p className="text-slate-600 mb-6">
                TechSoss was founded with a vision to simplify the complex process of finding, evaluating, and
                implementing technology solutions for businesses of all sizes. In an increasingly fragmented tech
                landscape, we serve as the trusted bridge between businesses seeking solutions and vendors offering
                cutting-edge technologies.
              </p>
              <p className="text-slate-600 mb-8">
                Our mission is to accelerate digital transformation by connecting organizations with the right
                technology partners. We believe that with the right technology partnerships, businesses can unlock
                unprecedented growth and innovation.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-lg mr-4">
                    <Target className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Our Mission</h4>
                    <p className="text-sm text-slate-600">Empowering business growth through technology</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-cyan-50 p-2 rounded-lg mr-4">
                    <Globe className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Global Reach</h4>
                    <p className="text-sm text-slate-600">Serving clients across 30+ countries</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 relative"
            >
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                <img
                  src="/images/hero.jpg"
                  alt="TechSoss Headquarters"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                  <p className="font-semibold">TechSoss Headquarters</p>
                  <p className="text-sm opacity-80">San Francisco, California</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-5">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
              Growth Through The Years
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From our humble beginnings to becoming an industry leader, our journey has been defined by innovation,
              resilience, and a commitment to excellence.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-100"></div>

            {/* Timeline items */}
            <div className="space-y-16">
              <TimelineItem
                year="2010"
                title="Company Founded"
                description="TechSoss was established with the vision of bridging the gap between businesses and technology solutions."
                position="left"
                icon={Building}
                iconColor="bg-blue-50 text-blue-600"
              />

              <TimelineItem
                year="2013"
                title="Global Expansion"
                description="Expanded operations to Europe and Asia, establishing a global presence and diverse client base."
                position="right"
                icon={Globe}
                iconColor="bg-cyan-50 text-cyan-600"
              />

              <TimelineItem
                year="2016"
                title="500th Vendor Partnership"
                description="Reached milestone of 500 verified technology vendors across multiple solution categories."
                position="left"
                icon={Briefcase}
                iconColor="bg-purple-50 text-purple-600"
              />

              <TimelineItem
                year="2019"
                title="Technology Excellence Award"
                description="Recognized with Industry Technology Excellence Award for our contribution to digital transformation."
                position="right"
                icon={Award}
                iconColor="bg-orange-50 text-orange-600"
              />

              <TimelineItem
                year="2022"
                title="Launch of TechSoss 2.0"
                description="Introduced our advanced platform with AI-powered matching between businesses and technology solutions."
                position="left"
                icon={Gem}
                iconColor="bg-indigo-50 text-indigo-600"
              />

              <TimelineItem
                year="Today"
                title="Industry Leader"
                description="Continuing to innovate and lead the industry in connecting businesses with premium technology solutions."
                position="right"
                icon={Target}
                iconColor="bg-green-50 text-green-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-5">
              Our Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
              Core Values That Drive Us
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our values shape every decision we make and every relationship we build, guiding us as we help businesses
              navigate the complex technology landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              icon={Shield}
              iconColor="bg-blue-50 text-blue-600"
              title="Integrity"
              description="We believe in transparency, honesty, and ethical conduct in all our business relationships."
            />

            <ValueCard
              icon={Users}
              iconColor="bg-green-50 text-green-600"
              title="Client Success"
              description="Our success is measured by the success of our clients. Their growth is our ultimate goal."
            />

            <ValueCard
              icon={LucideGlobe}
              iconColor="bg-purple-50 text-purple-600"
              title="Innovation"
              description="We continuously explore new technologies and approaches to deliver better solutions."
            />

            <ValueCard
              icon={CheckCircle}
              iconColor="bg-orange-50 text-orange-600"
              title="Excellence"
              description="We strive for excellence in everything we do, from client service to vendor partnerships."
            />

            <ValueCard
              icon={Award}
              iconColor="bg-cyan-50 text-cyan-600"
              title="Quality"
              description="We maintain rigorous standards for the solutions and vendors we recommend to our clients."
            />

            <ValueCard
              icon={Clock}
              iconColor="bg-indigo-50 text-indigo-600"
              title="Adaptability"
              description="We embrace change and help our clients navigate the rapidly evolving technology landscape."
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-5">
              Our Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
              Meet the Team
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our diverse team of technology experts, industry specialists, and business consultants is dedicated to
              helping your business succeed in the digital age.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember
              name="Sarah Johnson"
              role="Chief Executive Officer"
              image="/images/leader1.avif"
              bio="Sarah has 20+ years of experience in technology consulting and has led TechSoss since its founding in 2010."
            />

            <TeamMember
              name="Michael Chen"
              role="Chief Technology Officer"
              image="/images/leader3.avif"
              bio="Michael oversees our technology strategy and ensures we stay at the forefront of emerging tech trends."
            />

            <TeamMember
              name="Jessica Rodriguez"
              role="Chief Operations Officer"
              image="/images/leader2.jpg"
              bio="Jessica manages our global operations and ensures seamless execution of client and vendor relationships."
            />

            <TeamMember
              name="David Kim"
              role="VP of Vendor Relations"
              image="/images/leader1.avif"
              bio="David leads our vendor partnership program, ensuring we connect with the highest quality solution providers."
            />

            <TeamMember
              name="Priya Patel"
              role="VP of Client Success"
              image="/images/leader2.jpg"
              bio="Priya ensures our clients achieve their technology goals through appropriate solution matching and support."
            />

            <TeamMember
              name="Robert Wilson"
              role="VP of Global Strategy"
              image="/images/leader3.avif"
              bio="Robert develops our expansion strategies and identifies new market opportunities for TechSoss worldwide."
            />
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6">
              Our team extends beyond our leadership to include over 200 technology specialists, customer success
              managers, and industry experts worldwide.
            </p>
            <Button variant="outline" className="border-slate-300 hover:bg-slate-50 transition-all duration-300">
              Join Our Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-5">
              Our Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
              TechSoss by the Numbers
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our global reach and impact continue to grow as we help more businesses find the right technology
              solutions for their unique needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="30+" label="Countries" />
            <StatCard number="5,000+" label="Satisfied Clients" />
            <StatCard number="1,200+" label="Technology Vendors" />
            <StatCard number="15,000+" label="Solutions Implemented" />
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Global Presence</h3>
                <p className="mb-6">
                  With offices in 12 countries and clients in over 30 nations, TechSoss provides localized expertise
                  with a global perspective. Our international team ensures we understand regional needs while
                  delivering world-class solutions.
                </p>
                <Button className="bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300">
                  Contact Our Local Office
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <img
                  src="/images/vendor6.jpg"
                  alt="TechSoss Global Presence"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-50 mb-8">
              Connect with our team to discover how TechSoss can help you find the right technology solutions for your
              unique business challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-5">
              Client Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Discover how TechSoss has helped organizations across industries transform their businesses through the
              right technology partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="TechSoss helped us find the perfect cloud solutions provider, resulting in a 40% reduction in our IT infrastructure costs."
              author="Emily Chang"
              company="CFO, Global Retail Inc."
              image="images/leader1.avif"
            />

            <TestimonialCard
              quote="The vendor matching process was seamless. Within weeks, we had implemented a cybersecurity solution that met all our compliance requirements."
              author="James Wilson"
              company="CIO, Financial Services Ltd."
              image="images/leader1.avif"
            />

            <TestimonialCard
              quote="TechSoss understood our unique needs as a healthcare provider and connected us with specialized technology partners that truly understood our industry."
              author="Dr. Maria Rodriguez"
              company="CTO, HealthFirst Network"
              image="images/leader1.avif"
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/case-studies">
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-md hover:shadow-lg group">
                View All Case Studies
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

// Timeline Item Component
function TimelineItem({ year, title, description, position, icon: Icon, iconColor }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className={`flex md:items-center relative ${position === "right" ? "md:flex-row-reverse" : ""}`}>
      <motion.div
        initial={{ opacity: 0, x: position === "left" ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="md:w-1/2 flex flex-col items-start md:px-10"
      >
        <div className={`${iconColor} p-3 rounded-lg inline-flex mb-3`}>
          <Icon className="h-5 w-5" />
        </div>
        <span className="text-sm font-bold text-blue-600 mb-2">{year}</span>
        <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </motion.div>

      {/* Timeline center circle */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-blue-100 items-center justify-center z-10">
        <span className="text-blue-600 font-bold text-sm">{year.substring(0, 4)}</span>
      </div>

      {/* Empty div for spacing on the opposite side */}
      <div className="hidden md:block md:w-1/2"></div>
    </div>
  )
}

// Value Card Component
function ValueCard({ icon: Icon, iconColor, title, description }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300"
    >
      <div className={`${iconColor} p-3 rounded-lg inline-flex mb-4`}>
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </motion.div>
  )
}

// Team Member Component
function TeamMember({ name, role, image, bio }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300 group"
    >
      <div className="h-64 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">{name}</h3>
        <p className="text-blue-600 font-medium mb-3">{role}</p>
        <p className="text-sm text-slate-600">{bio}</p>
      </div>
    </motion.div>
  )
}

// Stat Card Component
function StatCard({ number, label }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h3 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
        {number}
      </h3>
      <p className="text-slate-600 font-medium">{label}</p>
    </motion.div>
  )
}

// Testimonial Card Component
function TestimonialCard({ quote, author, company, image }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300"
    >
      <div className="mb-6">
        <svg className="h-8 w-8 text-blue-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-slate-700 italic">{quote}</p>
      </div>
      <div className="flex items-center">
        <img src={image || "/placeholder.svg"} alt={author} className="w-12 h-12 rounded-full mr-4 object-cover" />
        <div>
          <h4 className="font-bold text-slate-800">{author}</h4>
          <p className="text-sm text-slate-600">{company}</p>
        </div>
      </div>
    </motion.div>
  )
}

