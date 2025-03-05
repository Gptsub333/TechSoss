import Hero from "@/components/hero"
import Statistics from "@/components/statistics"
import Partners from "@/components/partners"
import BecomeVendor from "@/components/become-vendor"
import PreferredVendors from "@/components/preferred-vendors"
import AboutUs from "@/components/about-us"
import Solutions from "@/components/solutions"
import Blogs from "@/components/blogs"
import Career from "@/components/career"
import Industries from "@/components/industries"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Hero />
      <Statistics />
      <Partners />
      <BecomeVendor />
      <PreferredVendors />
      <AboutUs />
      <Solutions />
      <Blogs />
      <Industries />
      <Career />
      <Contact />
      <Footer />
    </main>
  )
}

