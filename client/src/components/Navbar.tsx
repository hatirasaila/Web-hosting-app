import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="text-2xl font-bold text-primary" data-testid="link-logo">
              HostFlow
            </a>
            
            <nav className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-pricing"
              >
                Pricing
              </button>
              <a 
                href="#features" 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-features"
              >
                Features
              </a>
              <a 
                href="#about" 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-about"
              >
                About
              </a>
              <a 
                href="#support" 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-support"
              >
                Support
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Button 
              variant="ghost"
              data-testid="button-login"
              onClick={() => console.log('Login clicked')}
            >
              Login
            </Button>
            <Button 
              data-testid="button-signup"
              onClick={() => console.log('Sign Up clicked')}
            >
              Sign Up
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
