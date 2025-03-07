"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function CtaSection() {
  const router = useRouter()
  return (
    <section
      className="relative overflow-hidden px-4 py-20 md:px-8"
      style={{
        background: "linear-gradient(135deg, #EBF3FF 0%, #F5F9FF 100%)",
      }}
    >
      {/* Decorative elements */}
      <div
        className="absolute -right-16 -top-16 w-64 h-64 rounded-full opacity-10 md:w-96 md:h-96"
        style={{
          background: "radial-gradient(circle, #4285F4 0%, #2563EB 100%)",
        }}
      ></div>
      
      <div
        className="absolute left-8 top-1/4 w-64 h-64 rounded-full opacity-20 md:w-96 md:h-96"
        style={{
          border: "2px dashed rgba(37, 99, 235, 0.3)",
        }}
      ></div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-5">
            Get Started Today
          </span>
          
          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-normal md:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
              Transform Your Business with Techsoss
            </span>
          </h2>
          
          <p className="text-slate-600 mx-auto max-w-2xl text-base md:text-lg mb-8">
            Ready to leverage cutting-edge technology solutions for your business? Our team of experts is ready to help you navigate the digital landscape and implement solutions that drive growth.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button 
              onClick={()=>router.push('https://calendly.com/harsh-langaliya-holbox/30min')}
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-md hover:shadow-lg p-6 px-8 text-white rounded-full text-base font-medium"
            >
              Schedule a Consultation
            </Button>
            
            <Button
            onClick={()=>router.push('/solutions')}
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300 p-6 px-8 rounded-full text-base font-medium"
            >
              View Our Solutions
            </Button>
          </div>
        </div>
        

      </div>
    </section>
  )
}