import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"; // Adjust import path if needed

const FAQSection = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600">
              Find answers to common questions about our vendor registration process and TechSoss.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold text-slate-800">
                How long does the application review process take?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                Our team typically reviews vendor applications within 5-7 business days. Once your application is
                reviewed, you'll receive an email notification with the status and next steps.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold text-slate-800">
                What happens after my application is approved?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                After approval, you'll be assigned a dedicated account manager who will guide you through the
                onboarding process. This includes setting up your vendor profile, providing access to our vendor
                portal, and discussing marketing opportunities.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold text-slate-800">
                Are there any fees to join the vendor network?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                There is no fee to apply or join our basic vendor network. We offer premium tiers with additional
                benefits and features that have associated fees. Your account manager will discuss these options
                during onboarding.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold text-slate-800">
                How are leads and client connections managed?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                When a client expresses interest in your solutions, you'll receive a notification through our vendor
                portal. You can manage all leads, communications, and client relationships directly through the
                portal, ensuring a streamlined process.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-semibold text-slate-800">
                Can I update my vendor profile after submission?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                Yes, you can update your vendor profile at any time through our vendor portal. We encourage vendors to
                keep their profiles current with the latest information, solutions, and case studies.
              </AccordionContent>
            </AccordionItem>

            {/* Additional Questions About TechSoss */}
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-semibold text-slate-800">
                When was TechSoss founded and what is your company history?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                TechSoss was founded in 2010 with a mission to bridge the gap between businesses and technology solution providers. Over the past decade, we've grown from a small startup to a global marketplace connecting thousands of businesses with vetted technology partners. Our journey has been marked by continuous innovation and a commitment to creating value for both clients and vendors.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-lg font-semibold text-slate-800">
                What makes TechSoss different from other tech marketplaces?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                TechSoss stands out through our rigorous vendor vetting process, our AI-powered matching algorithm that connects businesses with the most suitable technology partners, and our end-to-end support system. Unlike other platforms, we don't just make introductions—we facilitate relationships, provide implementation support, and offer ongoing optimization services to ensure successful partnerships.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-lg font-semibold text-slate-800">
                What industries and technology categories does TechSoss cover?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                TechSoss covers a wide range of industries including finance, healthcare, retail, manufacturing, education, and more. Our technology categories include cloud solutions, cybersecurity, CRM, ERP, data analytics, AI and machine learning, digital marketing technologies, custom software development, and IoT solutions. We're continuously expanding our coverage to meet emerging business needs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="text-lg font-semibold text-slate-800">
                How does TechSoss ensure the quality of vendors on the platform?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                We employ a multi-stage vetting process that includes technical assessment, reference checks, security compliance verification, and business stability evaluation. Additionally, we maintain an active review system where clients can provide feedback on their vendor experiences. Vendors are required to maintain a minimum satisfaction rating to remain active on our platform, ensuring consistent quality.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger className="text-lg font-semibold text-slate-800">
                Does TechSoss offer services for international businesses?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                Yes, TechSoss operates globally with vendor partners across North America, Europe, Asia, Australia, and parts of Africa and South America. We help international businesses find technology solutions that comply with local regulations and can handle region-specific requirements. Our platform supports multiple languages and our support team can assist with cross-border technology implementation challenges.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11">
              <AccordionTrigger className="text-lg font-semibold text-slate-800">
                How does TechSoss handle data privacy and security?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                TechSoss takes data privacy and security very seriously. We're compliant with GDPR, CCPA, and other relevant data protection regulations. All data transmitted through our platform is encrypted, and we employ strict access controls. We regularly undergo third-party security audits and penetration testing to ensure the highest standards of data protection for both our clients and vendors.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12">
              <AccordionTrigger className="text-lg font-semibold text-slate-800">
                What support does TechSoss provide during the implementation phase?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                Once a match is made, TechSoss provides implementation support through our Customer Success team. This includes project management assistance, regular check-ins, milestone tracking, and conflict resolution if needed. For complex implementations, we can also connect you with certified implementation partners who specialize in ensuring smooth technology transitions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-13">
              <AccordionTrigger className="text-lg font-semibold text-slate-800">
                Does TechSoss offer any resources for businesses new to digital transformation?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                Absolutely! TechSoss offers a variety of resources including our Technology Readiness Assessment, Digital Transformation Guidebook, webinars, case studies, and a knowledge base with articles on best practices. For businesses just starting their digital journey, we offer complimentary consultation sessions with our technology advisors to help map out a strategic approach.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;