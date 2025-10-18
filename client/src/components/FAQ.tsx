import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is your uptime guarantee?",
    answer: "We guarantee 99.9% uptime for all our hosting plans. This means your website will be accessible to visitors virtually all the time. In the rare event we don't meet this guarantee, you'll receive service credits."
  },
  {
    question: "Can I upgrade or downgrade my plan anytime?",
    answer: "Absolutely! You can upgrade or downgrade your hosting plan at any time. Upgrades take effect immediately, and for downgrades, the changes will apply at the start of your next billing cycle. Our team is here to help make the transition seamless."
  },
  {
    question: "Do you offer website migration services?",
    answer: "Yes! We offer free website migration for all new customers. Our expert team will handle the entire process, ensuring zero downtime and no data loss. Just contact our support team, and we'll take care of everything."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We provide 24/7 customer support through multiple channels. Starter plans include email support with typical response times under 2 hours. Professional and Business plans get priority support, and Business plan customers also have access to phone support."
  },
  {
    question: "Is my website data backed up?",
    answer: "Yes! All plans include automatic daily backups of your website and databases. Business plans get hourly backups for extra protection. You can restore your site to any backup point with just a few clicks from your control panel."
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a 30-day money-back guarantee on all hosting plans. If you're not completely satisfied within the first 30 days, contact us for a full refund—no questions asked. This gives you risk-free time to test our services."
  }
];

export default function FAQ() {
  return (
    <section className="py-16 md:py-24 lg:py-32" id = "support">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold" data-testid="text-faq-title">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-faq-subtitle">
            Everything you need to know about our hosting services
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border rounded-md px-6"
              data-testid={`accordion-item-${index}`}
            >
              <AccordionTrigger 
                className="text-left hover:no-underline"
                data-testid={`accordion-trigger-${index}`}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent 
                className="text-muted-foreground"
                data-testid={`accordion-content-${index}`}
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
