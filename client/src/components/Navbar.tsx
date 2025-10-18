import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <a
                href="/"
                className="text-2xl font-bold text-primary"
                data-testid="link-logo"
              >
                Saila's Hosting
              </a>

              <nav className="hidden md:flex items-center gap-6">
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-pricing"
                >
                  Pricing
                </button>
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-features"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection("support")}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-about"
                >
                  Support
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-about"
                >
                  About Us
                </button>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                data-testid="button-login"
                onClick={() => setShowLogin(true)}
              >
                Login
              </Button>
              <Button
                data-testid="button-signup"
                onClick={() => setShowSignup(true)}
              >
                Sign Up
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
{/* Login Modal */}
{showLogin && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
    <div className="bg-background border border-border rounded-2xl shadow-xl p-8 w-96 max-w-full text-gray-50">
      <h2 className="text-2xl font-bold mb-6 text-primary">Login</h2>
     <input
  type="text"
  placeholder="Email"
  className="w-full mb-4 p-3 rounded-lg bg-white border border-border text-black focus:ring-2 focus:ring-primary outline-none placeholder:text-gray-400"
/>
<input
  type="password"
  placeholder="Password"
  className="w-full mb-6 p-3 rounded-lg bg-white border border-border text-black focus:ring-2 focus:ring-primary outline-none placeholder:text-gray-400"
/>
      <Button className="w-full mb-3" onClick={() => setShowLogin(false)}>
        Login
      </Button>
      <button
        className="w-full text-sm text-muted-foreground underline hover:text-foreground transition-colors"
        onClick={() => setShowLogin(false)}
      >
        Cancel
      </button>
    </div>
  </div>
)}

{/* Signup Modal */}
{showSignup && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
    <div className="bg-background border border-border rounded-2xl shadow-xl p-8 w-96 max-w-full text-gray-50">
      <h2 className="text-2xl font-bold mb-6 text-primary">Sign Up</h2>
      <input
  type="text"
  placeholder="Name"
  className="w-full mb-4 p-3 rounded-lg bg-white border border-border text-black focus:ring-2 focus:ring-primary outline-none placeholder:text-gray-400"
/>
<input
  type="text"
  placeholder="Email"
  className="w-full mb-4 p-3 rounded-lg bg-white border border-border text-black focus:ring-2 focus:ring-primary outline-none placeholder:text-gray-400"
/>
<input
  type="password"
  placeholder="Password"
  className="w-full mb-6 p-3 rounded-lg bg-white border border-border text-black focus:ring-2 focus:ring-primary outline-none placeholder:text-gray-400"
/>
      <Button className="w-full mb-3" onClick={() => setShowSignup(false)}>
        Sign Up
      </Button>
      <button
        className="w-full text-sm text-muted-foreground underline hover:text-foreground transition-colors"
        onClick={() => setShowSignup(false)}
      >
        Cancel
      </button>
    </div>
  </div>
)}

    </>
  );
}
