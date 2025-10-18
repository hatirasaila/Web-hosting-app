import { Button } from "@/components/ui/button";
import { Server, Shield, Zap } from "lucide-react";

interface HeroProps {
  heroImage: string;
}

export default function Hero({ heroImage }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight" data-testid="text-hero-title">
                Lightning-Fast
                <span className="text-primary block">Web Hosting</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl" data-testid="text-hero-subtitle">
                Deploy your websites instantly with blazing-fast SSD storage, unbeatable uptime, and enterprise-grade security. Trusted by over 500,000 websites worldwide.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="text-base"
                data-testid="button-get-started"
                onClick={() => console.log('Get Started clicked')}
              >
                Get Started Free
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base backdrop-blur-sm"
                data-testid="button-view-plans"
                onClick={() => console.log('View Plans clicked')}
              >
                View Plans
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4 text-primary" />
                <span>30-Day Guarantee</span>
              </div>
            </div>
          </div>

          <div className="relative lg:block hidden">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Modern data center infrastructure" 
                className="w-full h-auto"
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
