import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PerformanceMetrics from "@/components/PerformanceMetrics";
import Features from "@/components/Features";
import HostingPlans from "@/components/HostingPlans";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

import heroImage from '@assets/generated_images/Modern_data_center_hero_image_e1ad719a.png';
import femaleAvatar from '@assets/generated_images/Female_customer_testimonial_portrait_c8347439.png';
import maleAvatar from '@assets/generated_images/Male_customer_testimonial_portrait_7124bcc7.png';

export default function Home() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Founder",
      company: "DesignStudio",
      image: femaleAvatar,
      quote: "Switching to HostFlow was the best decision for my business. The speed improvement was immediate, and their support team is incredibly responsive.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Developer",
      company: "TechStart",
      image: maleAvatar,
      quote: "I've tried many hosting providers, but HostFlow stands out with their performance and reliability. The 99.9% uptime is not just a promise—it's reality.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero heroImage={heroImage} />
      <PerformanceMetrics />
      <Features />
      <HostingPlans />
      <TechStack />
      <Testimonials testimonials={testimonials} />
      <FAQ />
      <Footer />
    </div>
  );
}
