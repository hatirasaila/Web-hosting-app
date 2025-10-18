import { Facebook, Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold text-primary" data-testid="text-footer-logo">
              HostFlow
            </h3>
            <p className="text-muted-foreground max-w-sm">
              Lightning-fast web hosting with 99.9% uptime guarantee. Trusted by over 500,000 websites worldwide.
            </p>
            <div className="flex gap-2">
              <Button 
                size="icon" 
                variant="ghost"
                data-testid="button-social-facebook"
                onClick={() => console.log('Facebook clicked')}
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost"
                data-testid="button-social-twitter"
                onClick={() => console.log('Twitter clicked')}
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost"
                data-testid="button-social-linkedin"
                onClick={() => console.log('LinkedIn clicked')}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost"
                data-testid="button-social-github"
                onClick={() => console.log('GitHub clicked')}
              >
                <Github className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-products">Products</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-web-hosting">Web Hosting</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-vps-hosting">VPS Hosting</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-dedicated-servers">Dedicated Servers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-domains">Domain Names</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-company">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-about">About Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-careers">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-partners">Partners</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-resources">Resources</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-blog">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-tutorials">Tutorials</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-documentation">Documentation</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-support">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground" data-testid="text-copyright">
              © 2025 HostFlow. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors" data-testid="link-privacy">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors" data-testid="link-terms">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors" data-testid="link-cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
