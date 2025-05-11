import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import Portfolio from "@/components/Portfolio";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Smooth scroll to anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        const id = target.getAttribute("href")?.substring(1);
        if (!id) return;

        const element = document.getElementById(id);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  // Stagger animation for elements as they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("stagger-visible");
            }, 100 * index);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".stagger-item").forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Hero />
        <SubscriptionPlans />

        {/* About Section */}
        <section id="about" className="section-padding">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden">
                  <div className="w-full h-full bg-natalai-200">
                    {/* Placeholder for profile image */}
                    <div className="flex items-center justify-center h-full text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-24 w-24 text-natalai-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-natalai-100 rounded-xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-natalai-300 rounded-xl -z-10"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-primary font-medium mb-3">ABOUT ME</p>
                <h2 className="heading-lg mb-6">Natalia Armour</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Based in Stockholm, I create high-quality video content for
                  local businesses across all industries - from cafés, salons,
                  and wellness studios to product brands, creatives, and
                  influencers. Whether it's a cozy café, a beauty salon, or a
                  handmade product, every business has a story worth sharing -
                  and I help tell it through stylish, social-ready videos.
                </p>
                <p className="text-muted-foreground mb-8">
                  My goal is to make professional content accessible to small
                  and growing businesses without the high costs of big agencies.
                  I offer flexible packages, including one-time shoots and
                  monthly plans, tailored to fit your brand, budget, and goals.
                </p>
                <p className="text-muted-foreground mb-8">
                  Let's create content that gets noticed - and connects with the
                  people who matter most to your business.
                </p>

                {/* <div className="grid grid-cols-2 gap-6">
                  <div className="stagger-item">
                    <h3 className="text-3xl font-bold text-primary mb-2">8+</h3>
                    <p className="text-muted-foreground">Years of Experience</p>
                  </div>
                  <div className="stagger-item">
                    <h3 className="text-3xl font-bold text-primary mb-2">
                      150+
                    </h3>
                    <p className="text-muted-foreground">Projects Completed</p>
                  </div>
                  <div className="stagger-item">
                    <h3 className="text-3xl font-bold text-primary mb-2">
                      50+
                    </h3>
                    <p className="text-muted-foreground">Regular Clients</p>
                  </div>
                  <div className="stagger-item">
                    <h3 className="text-3xl font-bold text-primary mb-2">
                      12+
                    </h3>
                    <p className="text-muted-foreground">Industry Awards</p>
                  </div>
                </div> */}
              </motion.div>
            </div>
          </div>
        </section>

        {/* <Portfolio /> */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
