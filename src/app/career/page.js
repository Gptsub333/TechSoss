"use client"

import { useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload, CheckCircle, Briefcase, MapPin, Clock, ArrowRight } from "lucide-react"
import Footer from "@/components/footer"
import emailjs from 'emailjs-com';

const jobs = [
  {
    id: 1,
    title: "Senior Cloud Architect",
    location: "New York, NY (Remote)",
    type: "Full-time",
    department: "Engineering",
  },
  {
    id: 2,
    title: "Cybersecurity Analyst",
    location: "San Francisco, CA (Hybrid)",
    type: "Full-time",
    department: "Security",
  },
  {
    id: 3,
    title: "Data Scientist",
    location: "Remote",
    type: "Full-time",
    department: "Data",
  },
  {
    id: 4,
    title: "UX/UI Designer",
    location: "Austin, TX (On-site)",
    type: "Full-time",
    department: "Design",
  },
]

export default function Career() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [fileName, setFileName] = useState("")
  const [resumeFile, setResumeFile] = useState(null)
  const [isUploaded, setIsUploaded] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  
  const [formData, setFormData] = useState({
    from_name: "",
    to_name: "TechSoss HR",
    message: "",
    reply_to: "",
    subject: "Job Application",
    first_name: "",
    last_name: "",
    phone: "",
    position: "",
    resume_name: ""
  })

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

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    
    // First set specific field values
    setFormData({
      ...formData,
      [id.replace('-', '_')]: value
    });
    
    // Then set convenience fields that map to the EmailJS template
    if (id === "email") {
      setFormData(prev => ({ ...prev, reply_to: value }));
    } else if (id === "message") {
      setFormData(prev => ({ ...prev, message: value }));
    } else if (id === "first-name" || id === "last-name") {
      // Update from_name whenever first or last name changes
      const firstName = id === "first-name" ? value : formData.first_name;
      const lastName = id === "last-name" ? value : formData.last_name;
      setFormData(prev => ({ 
        ...prev, 
        from_name: `${firstName} ${lastName}`.trim()
      }));
    }
  }

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setFileName(file.name);
      setResumeFile(file);
      setIsUploaded(true);
      setFormData(prev => ({
        ...prev,
        resume_name: file.name
      }));
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Prepare data to send via EmailJS
    const templateParams = {
      from_name: formData.from_name,
      to_name: formData.to_name,
      message: formData.message,
      reply_to: formData.reply_to,
      subject: `Job Application: ${formData.position}`,
      first_name: formData.first_name,
      last_name: formData.last_name,
      phone: formData.phone,
      position: formData.position,
      resume_name: formData.resume_name
    };
    
    // Send email using EmailJS
    emailjs.send(
      "service_f1oy4hd",
      "template_hhw956l",
      templateParams,
      "sPRSvqX1oUVKYnD2M",
    ).then((result) => {
      console.log("Email sent successfully:", result.text);
      setSubmitStatus("success");
      // Reset form
      setFormData({
        from_name: "",
        to_name: "TechSoss HR",
        message: "",
        reply_to: "",
        subject: "Job Application",
        first_name: "",
        last_name: "",
        phone: "",
        position: "",
        resume_name: ""
      });
      setFileName("");
      setResumeFile(null);
      setIsUploaded(false);
    }).catch((error) => {
      console.error("Failed to send email:", error.text);
      setSubmitStatus("error");
    }).finally(() => {
      setIsSubmitting(false);
    });
  }

  return (
    <div>
    <section id="career" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-5">
            Join Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
            Career Opportunities
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Join our team of passionate technology professionals and help shape the future of tech solutions and
            services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Current Openings</h3>

            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={controls}
              className="space-y-4"
            >
              {jobs.map((job) => (
                <motion.div
                  key={job.id}
                  variants={itemVariants}
                  className="bg-white rounded-lg p-6 shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300"
                >
                  <h4 className="text-lg font-bold text-slate-800 mb-2">{job.title}</h4>
                  <div className="flex flex-wrap gap-y-2 mb-4">
                    <div className="flex items-center text-sm text-slate-600 mr-4">
                      <MapPin className="h-4 w-4 mr-1 text-blue-500" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm text-slate-600 mr-4">
                      <Clock className="h-4 w-4 mr-1 text-blue-500" />
                      {job.type}
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <Briefcase className="h-4 w-4 mr-1 text-blue-500" />
                      {job.department}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-slate-200 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-8">
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-md hover:shadow-lg group">
                View All Positions
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Submit Your Resume</h3>
            <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input 
                      id="first-name" 
                      placeholder="John" 
                      value={formData.first_name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input 
                      id="last-name" 
                      placeholder="Doe" 
                      value={formData.last_name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john.doe@example.com" 
                    value={formData.reply_to}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input 
                    id="phone" 
                    placeholder="+1 (555) 123-4567" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="position">Position of Interest</Label>
                  <Input 
                    id="position" 
                    placeholder="e.g. Cloud Architect" 
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Cover Letter</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about yourself and why you're interested in joining our team"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resume">Resume/CV</Label>
                  <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 text-center hover:bg-slate-50 transition-colors cursor-pointer relative">
                    <input
                      type="file"
                      id="resume"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      required
                    />
                    {isUploaded ? (
                      <div className="flex items-center justify-center text-green-600">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        <span>{fileName}</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center text-slate-500">
                        <Upload className="h-8 w-8 mb-2" />
                        <p className="text-sm">Drag and drop your resume here or click to browse</p>
                        <p className="text-xs mt-1">Supports PDF, DOCX (Max 5MB)</p>
                      </div>
                    )}
                  </div>
                </div>

                {submitStatus === "success" && (
                  <div className="p-3 bg-green-50 text-green-700 rounded-md">
                    Your application has been submitted successfully! We&apos;ll review it and get back to you soon.
                  </div>
                )}
                
                {submitStatus === "error" && (
                  <div className="p-3 bg-red-50 text-red-700 rounded-md">
                    There was an error submitting your application. Please try again later.
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </div>
  )
}