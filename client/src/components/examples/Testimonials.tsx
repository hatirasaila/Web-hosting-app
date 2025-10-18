import Testimonials from '../Testimonials';
import femaleAvatar from '@assets/generated_images/Female_customer_testimonial_portrait_c8347439.png';
import maleAvatar from '@assets/generated_images/Male_customer_testimonial_portrait_7124bcc7.png';

export default function TestimonialsExample() {
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

  return <Testimonials testimonials={testimonials} />;
}
