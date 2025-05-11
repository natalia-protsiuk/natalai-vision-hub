import { motion } from "framer-motion";
import { Check } from "lucide-react";

type PlanFeature = {
  text: string;
  included: boolean;
};

type Plan = {
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  buttonText: string;
  popular?: boolean;
};

const subscriptionPlans: Plan[] = [
  {
    name: "Starter",
    price: "1,999 SEK",
    description: "Perfect for individuals and small projects",
    features: [
      { text: "1 video (vertical or horizontal)", included: true },
      { text: "15-40 second video duration per video", included: true },
      { text: "1-2 hours onsite", included: true },
      { text: "1 review", included: true },
    ],
    buttonText: "Get Started",
  },
  {
    name: "Business Boost",
    price: "4,997 SEK",
    description: "Ideal for growing businesses and content creators",
    features: [
      { text: "2 videos (vertical or horizontal)", included: true },
      { text: "15-40 second video duration per video", included: true },
      { text: "2-3 hours onsite", included: true },
      { text: "3 review", included: true },
      { text: "3 images", included: true },
    ],
    buttonText: "Get Started",
    popular: true,
  },
  {
    name: "Social Pro",
    price: "9,990 SEK",
    description: "Complete solution for professional content creators",
    features: [
      { text: "5 videos (vertical or horizontal)", included: true },
      { text: "15-40 second video duration per video", included: true },
      { text: "4-8 hours onsite", included: true },
      { text: "6 review", included: true },
      { text: "7 images", included: true },
    ],
    buttonText: "Get Started",
  },
];

const SubscriptionPlans = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium mb-3"
          >
            PACKAGES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-lg mb-4"
          >
            Choose the Perfect Package for Your Needs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Flexible packages to suit your brand's content needs - from startups
            to established businesses.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {subscriptionPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`relative bg-white rounded-2xl shadow-soft overflow-hidden ${
                plan.popular ? "ring-2 ring-primary" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl md:text-4xl font-bold">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-2">/ ex. Moms</span>
                </div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div
                        className={`flex-shrink-0 rounded-full w-5 h-5 flex items-center justify-center mr-3 ${
                          feature.included
                            ? "bg-primary/10 text-primary"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {feature.included && <Check className="h-3 w-3" />}
                      </div>
                      <span
                        className={
                          feature.included
                            ? "text-foreground"
                            : "text-muted-foreground"
                        }
                      >
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-white"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                >
                  {plan.buttonText}
                </Button> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
