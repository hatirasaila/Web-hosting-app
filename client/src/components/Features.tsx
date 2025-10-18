import { Zap, Shield, HardDrive, Clock, Headphones, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Lightning-Fast SSD",
    description: "Ultra-fast SSD storage ensures your website loads in milliseconds, not seconds."
  },
  {
    icon: Shield,
    title: "DDoS Protection",
    description: "Enterprise-grade security keeps your website safe from attacks 24/7."
  },
  {
    icon: HardDrive,
    title: "Free SSL Certificates",
    description: "Secure your site with automatic SSL certificates at no extra cost."
  },
  {
    icon: Clock,
    title: "Automatic Backups",
    description: "Daily automated backups ensure your data is always safe and recoverable."
  },
  {
    icon: Headphones,
    title: "24/7 Expert Support",
    description: "Our hosting experts are available around the clock to help you succeed."
  },
  {
    icon: TrendingUp,
    title: "99.9% Uptime SLA",
    description: "Industry-leading uptime guarantee keeps your website always accessible."
  }
];

export default function Features() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-card/50" id = "features">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold" data-testid="text-features-title">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-features-subtitle">
            Powerful features designed to help your website perform at its best
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover-elevate"
              data-testid={`card-feature-${index}`}
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold" data-testid={`text-feature-title-${index}`}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`text-feature-description-${index}`}>
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
