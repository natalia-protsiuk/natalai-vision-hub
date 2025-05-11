import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Showreel from "./Showreel";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-natalai-100/30 to-transparent opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-12 md:pt-32 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block bg-natalai-100/30 rounded-full px-3 py-1 text-sm font-medium text-natalai-900 mb-6">
                Professional Videographer & Content Creator
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="heading-xl"
            >
              Affordable <span className="text-primary">Video Content</span> for
              Small - Medium Sized Businesses
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground"
            >
              Video content for your Website, TikTok, Instagram, YouTube, and
              more - professional reults without agency-level prices.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a href="#services">
                <Button className="bg-primary text-white hover:bg-primary/90 h-12 px-8">
                  View Plans
                </Button>
              </a>

              <Button variant="outline" className="h-12 px-8">
                Watch Showreel
              </Button>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center pt-6"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                  >
                    <div className="w-full h-full bg-natalai-200"></div>
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <p className="font-medium">Trusted by</p>
                <p className="text-sm text-muted-foreground">
                  100+ happy clients
                </p>
              </div>
            </motion.div> */}
          </div>

          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className=" w-full rounded-2xl overflow-hidden bg-gradient-to-tr from-natalai-100 to-natalai-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full"></div>
                </div>
              </div>
              <Showreel />

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-natalai-100 rounded-lg opacity-50"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-natalai-300 rounded-lg opacity-30"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
