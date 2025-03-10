"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"
import {
  Building,
  Globe,
  Mail,
  Phone,
  User,
  Briefcase,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Send,
  Info,
  HelpCircle,
} from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useEffect } from "react";



// Form schema using zod
const formSchema = z.object({
  // Company Information
  companyName: z.string().min(2, { message: "Company name is required" }),
  website: z.string().url({ message: "Please enter a valid URL" }),
  foundingYear: z.string().regex(/^\d{4}$/, { message: "Please enter a valid year" }),
  companySize: z.string(),
  companyDescription: z
    .string()
    .min(50, { message: "Description must be at least 50 characters" })
    .max(500, { message: "Description must not exceed 500 characters" }),

  // Contact Information
  contactName: z.string().min(2, { message: "Contact name is required" }),
  contactEmail: z.string().email({ message: "Please enter a valid email address" }),
  contactPhone: z.string().min(10, { message: "Please enter a valid phone number" }),
  contactPosition: z.string().min(2, { message: "Position is required" }),

  // Solution Categories
  primaryCategory: z.string(),
  secondaryCategories: z.array(z.string()).optional(),

  // Technical Details
  technicalCapabilities: z.array(z.string()),
  deploymentModels: z.array(z.string()),
  integrationOptions: z.array(z.string()),

  // Market Information
  targetIndustries: z.array(z.string()),
  geographicCoverage: z.array(z.string()),
  clientSizePreference: z.array(z.string()),

  // Credentials
  certifications: z.array(z.string()).optional(),
  partnerships: z.string().optional(),
  yearsInBusiness: z.string(),

  // Additional Information
  valueProposition: z.string().min(50, { message: "Value proposition must be at least 50 characters" }),
  competitiveAdvantage: z.string().min(20, { message: "Please provide your competitive advantage" }),
  caseStudyAvailable: z.boolean(),
  referenceAvailable: z.boolean(),

  // Terms and Conditions
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
  marketingConsent: z.boolean().optional(),
})

// Solution categories
const solutionCategories = [
  "Cloud Infrastructure",
  "Cybersecurity",
  "Data Analytics",
  "Artificial Intelligence",
  "Software Development",
  "Mobile Solutions",
  "DevOps",
  "Internet of Things (IoT)",
  "Blockchain",
  "Virtual Reality/Augmented Reality",
  "E-commerce Solutions",
  "Enterprise Resource Planning (ERP)",
  "Customer Relationship Management (CRM)",
  "IT Consulting",
  "Managed Services",
  "Network Solutions",
  "Digital Marketing Technology",
  "Business Intelligence",
  "Unified Communications",
  "Other",
]

// Industries
const industries = [
  "Finance & Banking",
  "Healthcare",
  "Retail & E-commerce",
  "Manufacturing",
  "Energy & Utilities",
  "Professional Services",
  "Education",
  "Government",
  "Transportation & Logistics",
  "Telecommunications",
  "Media & Entertainment",
  "Hospitality & Tourism",
  "Real Estate",
  "Agriculture",
  "Non-profit",
  "Other",
]

// Geographic regions
const regions = [
  "North America",
  "South America",
  "Europe",
  "Middle East",
  "Africa",
  "Asia Pacific",
  "Australia/Oceania",
  "Global",
]

// Technical capabilities
const technicalCapabilities = [
  "Custom Development",
  "API Integration",
  "Legacy System Migration",
  "Data Migration",
  "Security Implementation",
  "Performance Optimization",
  "Scalability Solutions",
  "Mobile Development",
  "Web Development",
  "Database Management",
  "Cloud Architecture",
  "DevOps Implementation",
  "AI/ML Implementation",
  "Blockchain Development",
  "IoT Development",
]

// Deployment models
const deploymentModels = [
  "Cloud-based SaaS",
  "On-premises",
  "Hybrid",
  "Private Cloud",
  "Public Cloud",
  "Mobile Application",
  "Web Application",
  "Desktop Application",
]

// Integration options
const integrationOptions = [
  "REST API",
  "SOAP API",
  "Webhooks",
  "SDK/Libraries",
  "Database Integration",
  "File-based Integration",
  "Third-party Connectors",
  "Custom Integration",
]

// Client size preferences
const clientSizes = [
  "Startups",
  "Small Businesses (1-50 employees)",
  "Medium Businesses (51-500 employees)",
  "Large Enterprises (501-5000 employees)",
  "Global Enterprises (5000+ employees)",
]

// Common certifications
const commonCertifications = [
  "ISO 27001",
  "SOC 2",
  "GDPR Compliant",
  "HIPAA Compliant",
  "PCI DSS",
  "CMMI",
  "Microsoft Certified Partner",
  "AWS Partner",
  "Google Cloud Partner",
  "Salesforce Partner",
  "Oracle Partner",
  "IBM Partner",
  "Other",
]

export default function VendorFormPage() {


  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(16.67)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const totalSteps = 6

  // Add a new state to track which steps the user has visited
  const [visitedSteps, setVisitedSteps] = useState([1])

  // Initialize form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      website: "",
      foundingYear: "",
      companySize: "",
      companyDescription: "",
      contactName: "",
      contactEmail: "",
      contactPhone: "",
      contactPosition: "",
      primaryCategory: "",
      secondaryCategories: [],
      technicalCapabilities: [],
      deploymentModels: [],
      integrationOptions: [],
      targetIndustries: [],
      geographicCoverage: [],
      clientSizePreference: [],
      certifications: [],
      partnerships: "",
      yearsInBusiness: "",
      valueProposition: "",
      competitiveAdvantage: "",
      caseStudyAvailable: false,
      referenceAvailable: false,
      termsAccepted: false,
      marketingConsent: false,
    },
  })

  // Handle form submission
  function onSubmit(data) {
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log(data)
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 2000)
  }

  // Modify the nextStep function to track visited steps
  const nextStep = () => {
    if (step < totalSteps) {
      const newStep = step + 1
      setStep(newStep)
      setProgress((newStep / totalSteps) * 100)

      // Add the new step to visitedSteps if it hasn't been visited before
      if (!visitedSteps.includes(newStep)) {
        setVisitedSteps([...visitedSteps, newStep])
      }
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
      setProgress(((step - 1) / totalSteps) * 100)
    }
  }

  useEffect(() => {
    if (step === 2) {
      form.setValue("contactName", "");
      form.setValue("contactEmail", "");
      form.setValue("contactPhone", "");
      form.setValue("contactPosition", "");
    }
  }, [step, form]);
  


  // Check if current step is valid
  const isStepValid = () => {
    let isValid = true

    if (step === 1) {
      const fields = ["companyName", "website", "foundingYear", "companySize", "companyDescription"]
      fields.forEach((field) => {
        if (!form.getValues(field)) {
          form.setError(field, {
            type: "required",
            message: `${field.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())} is required`,
          })
          isValid = false
        }
      })
    } else if (step === 2) {
      const fields = ["contactName", "contactEmail", "contactPhone", "contactPosition"]
      fields.forEach((field) => {
        if (!form.getValues(field)) {
          form.setError(field, {
            type: "required",
            message: `${field.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())} is required`,
          })
          isValid = false
        }
      })
    } else if (step === 3) {
      if (!form.getValues("primaryCategory")) {
        form.setError("primaryCategory", {
          type: "required",
          message: "Primary category is required",
        })
        isValid = false
      }
    }

    return isValid
  }

  // Handle next button click with validation
  const handleNext = () => {
    if (isStepValid()) {
      nextStep()
    }
  }

  // Modify the renderStep function to conditionally reset fields when a step is first visited
  // Find the beginning of the renderStep function and replace it with this implementation:
  const renderStep = () => {

    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-800">Company Information</h3>
              <p className="text-sm text-slate-600">Tell us about your company and its background.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name*</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                        <Input className="pl-10" placeholder="Enter company name" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Website*</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                        <Input className="pl-10" placeholder="https://www.example.com" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="foundingYear"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Year Founded*</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. 2010" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="companySize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Size*</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-500">201-500 employees</SelectItem>
                        <SelectItem value="501-1000">501-1000 employees</SelectItem>
                        <SelectItem value="1001+">1001+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="companyDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Description*</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Provide a brief description of your company, its history, and core business..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>50-500 characters. This will be displayed on your vendor profile.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-800">Contact Information</h3>
              <p className="text-sm text-slate-600">
                Provide details of the primary contact person for this application.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="contactName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Name*</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                        <Input className="pl-10" placeholder="Enter full name" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contactPosition"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Position/Title*</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                        <Input className="pl-10" placeholder="e.g. CEO, CTO, Sales Director" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contactEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address*</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                        <Input className="pl-10" placeholder="email@example.com" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contactPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number*</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                        <Input className="pl-10" placeholder="+1 (555) 123-4567" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Alert className="bg-blue-50 border-blue-100">
              <Info className="h-4 w-4 text-blue-600" />
              <AlertTitle className="text-blue-800">Privacy Notice</AlertTitle>
              <AlertDescription className="text-blue-700 text-sm">
                Your contact information will only be used for communication regarding your vendor application and will
                not be shared with third parties.
              </AlertDescription>
            </Alert>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-800">Solution Categories</h3>
              <p className="text-sm text-slate-600">Tell us about the technology solutions your company provides.</p>
            </div>

            <FormField
              control={form.control}
              name="primaryCategory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Primary Solution Category*</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your primary category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {solutionCategories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>This is the main category your company will be listed under.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="secondaryCategories"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel>Secondary Categories (Optional)</FormLabel>
                    <FormDescription>
                      Select up to 3 additional categories that apply to your solutions.
                    </FormDescription>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {solutionCategories.map((item) => (
                      <FormField
                        key={item}
                        control={form.control}
                        name="secondaryCategories"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item}
                              className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, item])
                                      : field.onChange(field.value?.filter((value) => value !== item))
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">{item}</FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-semibold text-slate-800">Technical Capabilities</h3>
              <p className="text-sm text-slate-600">Select the technical capabilities your company offers.</p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="capabilities">
                <AccordionTrigger>Technical Capabilities</AccordionTrigger>
                <AccordionContent>
                  <FormField
                    control={form.control}
                    name="technicalCapabilities"
                    render={({ field }) => (
                      <FormItem>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                          {technicalCapabilities.map((item) => (
                            <FormItem key={item} className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, item])
                                      : field.onChange(field.value?.filter((value) => value !== item))
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">{item}</FormLabel>
                            </FormItem>
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="deployment">
                <AccordionTrigger>Deployment Models</AccordionTrigger>
                <AccordionContent>
                  <FormField
                    control={form.control}
                    name="deploymentModels"
                    render={({ field }) => (
                      <FormItem>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                          {deploymentModels.map((item) => (
                            <FormItem key={item} className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, item])
                                      : field.onChange(field.value?.filter((value) => value !== item))
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">{item}</FormLabel>
                            </FormItem>
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="integration">
                <AccordionTrigger>Integration Options</AccordionTrigger>
                <AccordionContent>
                  <FormField
                    control={form.control}
                    name="integrationOptions"
                    render={({ field }) => (
                      <FormItem>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                          {integrationOptions.map((item) => (
                            <FormItem key={item} className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, item])
                                      : field.onChange(field.value?.filter((value) => value !== item))
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">{item}</FormLabel>
                            </FormItem>
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-800">Market Information</h3>
              <p className="text-sm text-slate-600">Tell us about your target market and geographic coverage.</p>
            </div>

            <FormField
              control={form.control}
              name="targetIndustries"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel>Target Industries</FormLabel>
                    <FormDescription>Select the industries your solutions primarily serve.</FormDescription>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {industries.map((item) => (
                      <FormField
                        key={item}
                        control={form.control}
                        name="targetIndustries"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item}
                              className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, item])
                                      : field.onChange(field.value?.filter((value) => value !== item))
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">{item}</FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="geographicCoverage"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel>Geographic Coverage</FormLabel>
                    <FormDescription>Select the regions where you provide your services.</FormDescription>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {regions.map((item) => (
                      <FormField
                        key={item}
                        control={form.control}
                        name="geographicCoverage"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item}
                              className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, item])
                                      : field.onChange(field.value?.filter((value) => value !== item))
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">{item}</FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="clientSizePreference"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel>Client Size Preference</FormLabel>
                    <FormDescription>Select the client sizes your company typically serves.</FormDescription>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {clientSizes.map((item) => (
                      <FormField
                        key={item}
                        control={form.control}
                        name="clientSizePreference"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item}
                              className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, item])
                                      : field.onChange(field.value?.filter((value) => value !== item))
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">{item}</FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-800">Credentials & Experience</h3>
              <p className="text-sm text-slate-600">Tell us about your company&apos;s credentials and experience.</p>
            </div>

            <FormField
              control={form.control}
              name="yearsInBusiness"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Years in Business</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select years in business" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="<1">Less than 1 year</SelectItem>
                      <SelectItem value="1-3">1-3 years</SelectItem>
                      <SelectItem value="4-7">4-7 years</SelectItem>
                      <SelectItem value="8-10">8-10 years</SelectItem>
                      <SelectItem value="11-15">11-15 years</SelectItem>
                      <SelectItem value="16+">16+ years</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="certifications"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel>Certifications & Compliance</FormLabel>
                    <FormDescription>
                      Select all certifications and compliance standards that apply to your company.
                    </FormDescription>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {commonCertifications.map((item) => (
                      <FormField
                        key={item}
                        control={form.control}
                        name="certifications"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item}
                              className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, item])
                                      : field.onChange(field.value?.filter((value) => value !== item))
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">{item}</FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="partnerships"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Key Partnerships & Affiliations</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="List any key technology partnerships, affiliations, or reseller relationships..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    E.g., Microsoft Gold Partner, AWS Advanced Partner, Salesforce Consultant
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="caseStudyAvailable"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Switch checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Case Studies Available</FormLabel>
                      <FormDescription>
                        Do you have case studies that can be shared with potential clients?
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="referenceAvailable"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Switch checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Client References Available</FormLabel>
                      <FormDescription>Are you willing to provide client references upon request?</FormDescription>
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-800">Additional Information</h3>
              <p className="text-sm text-slate-600">
                Provide additional details about your value proposition and competitive advantage.
              </p>
            </div>

            <FormField
              control={form.control}
              name="valueProposition"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Value Proposition*</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your company's unique value proposition and how it benefits clients..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    What makes your solution unique and valuable to potential clients? (50-200 characters)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="competitiveAdvantage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Competitive Advantage*</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="What sets your company apart from competitors in your industry?"
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="pt-4">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Terms & Conditions</h3>

              <FormField
                control={form.control}
                name="termsAccepted"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 bg-slate-50">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Terms and Conditions*</FormLabel>
                      <FormDescription>
                        I agree to the{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                          Vendor Terms and Conditions
                        </a>{" "}
                        and confirm that all information provided is accurate and complete.
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="marketingConsent"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 mt-4">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Marketing Communications</FormLabel>
                      <FormDescription>
                        I consent to receive marketing communications from TechSoss about vendor opportunities, events,
                        and platform updates.
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </div>
        )

      default:
        return null
    }
  }

  // Success message after form submission
  const renderSuccess = () => {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Application Submitted Successfully!</h2>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          Thank you for applying to become a TechSoss vendor. Our team will review your application and contact you
          within 3-5 business days.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
            onClick={() => (window.location.href = "/")}
          >
            Return to Homepage
          </Button>
          <Button variant="outline" className="border-slate-300" onClick={() => (window.location.href = "/vendor")}>
            Explore Vendors
          </Button>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-5">
              Vendor Application
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 via-blue-700 to-cyan-500 bg-clip-text text-transparent">
              Become a TechSoss Vendor
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Join our network of premium technology vendors and connect with businesses looking for your solutions.
            </p>
          </motion.div>

          <Card className="border-slate-200 shadow-lg mb-8">
            <CardHeader className="pb-4">
              <CardTitle>Application Form</CardTitle>
              <CardDescription>Please complete all required fields marked with an asterisk (*).</CardDescription>
            </CardHeader>
            <CardContent>
              {!isSubmitted ? (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="mb-8">
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-sm font-medium text-slate-700">
                          Step {step} of {totalSteps}
                        </p>
                        <p className="text-sm text-slate-500">{Math.round(progress)}% Complete</p>
                      </div>
                      <Progress value={progress} className="h-2 bg-slate-100" />
                    </div>

                    {renderStep()}

                    <div className="flex justify-between pt-4 border-t">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                        disabled={step === 1 || isSubmitting}
                        className="border-slate-200"
                      >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Previous
                      </Button>

                      {step < totalSteps ? (
                        <Button
                          type="button"
                          onClick={handleNext}
                          disabled={isSubmitting}
                          className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
                        >
                          Next
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
                        >
                          {isSubmitting ? (
                            <>
                              <svg
                                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              Submitting...
                            </>
                          ) : (
                            <>
                              Submit Application
                              <Send className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      )}
                    </div>
                  </form>
                </Form>
              ) : (
                renderSuccess()
              )}
            </CardContent>
          </Card>

          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-md">
            <div className="flex items-start">
              <div className="bg-blue-50 p-3 rounded-lg mr-4">
                <HelpCircle className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-2">Need Help?</h3>
                <p className="text-slate-600 text-sm mb-4">
                  If you have any questions about the application process or need assistance, our vendor support team is
                  here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" className="border-slate-200 text-sm">
                    <Mail className="mr-2 h-4 w-4" />
                    vendors@techsoss.com
                  </Button>
                  <Button variant="outline" className="border-slate-200 text-sm">
                    <Phone className="mr-2 h-4 w-4" />
                    +1 (555) 123-4567
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

