import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface Plan {
  name: string;
  price: string;
  billing: string;
  popular?: boolean;
  features: string[];
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: "$4.99",
    billing: "/month",
    features: [
      "1 Website",
      "10 GB SSD Storage",
      "100 GB Bandwidth",
      "Free SSL Certificate",
      "Daily Backups",
      "Email Support"
    ]
  },
  {
    name: "Professional",
    price: "$9.99",
    billing: "/month",
    popular: true,
    features: [
      "5 Websites",
      "50 GB SSD Storage",
      "Unlimited Bandwidth",
      "Free SSL Certificate",
      "Daily Backups",
      "Priority Support",
      "Free Domain (1 year)",
      "Advanced Security"
    ]
  },
  {
    name: "Business",
    price: "$19.99",
    billing: "/month",
    features: [
      "Unlimited Websites",
      "200 GB SSD Storage",
      "Unlimited Bandwidth",
      "Free SSL Certificate",
      "Hourly Backups",
      "24/7 Phone Support",
      "Free Domain (1 year)",
      "Advanced Security",
      "Dedicated IP",
      "Performance Optimization"
    ]
  }
];

export default function HostingPlans() {
  return (
    <section className="py-16 md:py-24 lg:py-32" id="pricing">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold" data-testid="text-plans-title">
            Choose Your Perfect Plan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-plans-subtitle">
            All plans include our 30-day money-back guarantee. No contracts, cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card 
              key={plan.name}
              className={`relative hover-elevate ${plan.popular ? 'border-primary' : ''}`}
              data-testid={`card-plan-${plan.name.toLowerCase()}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground" data-testid="badge-popular">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="space-y-0 pb-8">
                <CardTitle className="text-2xl" data-testid={`text-plan-name-${plan.name.toLowerCase()}`}>
                  {plan.name}
                </CardTitle>
                <div className="pt-4">
                  <span className="text-5xl font-bold" data-testid={`text-price-${plan.name.toLowerCase()}`}>
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-1">{plan.billing}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li 
                      key={index} 
                      className="flex items-start gap-3"
                      data-testid={`list-feature-${index}`}
                    >
                      <Check className="w-5 h-5 text-chart-2 shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                  data-testid={`button-select-${plan.name.toLowerCase()}`}
                  onClick={() => console.log(`Selected ${plan.name} plan`)}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
