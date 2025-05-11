import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "../../public/your-business-in-motion-web-logo.svg";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4">
          <a
            href="#"
            className="text-2xl font-bold tracking-tighter text-foreground"
          >
            <img
              src={logo}
              alt="Your Business in Motion - Video Creation "
              width={isMobile ? 120 : 160}
              height="auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm font-medium subtle-underline">
              Home
            </a>

            <a
              href="#services"
              className="text-sm font-medium subtle-underline"
            >
              Services
            </a>
            <a href="#about" className="text-sm font-medium subtle-underline">
              About
            </a>
            {/* <a
              href="#portfolio"
              className="text-sm font-medium subtle-underline"
            >
              Portfolio
            </a> */}
            <a href="#contact" className="text-sm font-medium subtle-underline">
              Contact
            </a>
          </nav>

          <div className="hidden md:block">
            <a href="#services">
              <Button className="bg-primary text-white hover:bg-primary/90">
                View Plans
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white shadow-lg"
        >
          <nav className="flex flex-col py-4 px-6 space-y-4">
            <a
              href="#home"
              className="text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            {/* <a
              href="#portfolio"
              className="text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </a> */}
            <a
              href="#contact"
              className="text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="bg-primary w-full">Get Started</Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
