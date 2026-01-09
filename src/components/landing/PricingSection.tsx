import { motion } from "framer-motion";
import { Gift, Truck, Clock } from "lucide-react";

const PricingSection = () => {
  const scrollToOrder = () => {
    const orderSection = document.getElementById("order-section");
    orderSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-2xl"></div>

            <div className="relative bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 md:p-12 text-center shadow-strong">
              {/* Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold mb-6"
              >
                <Gift className="w-4 h-4" />
                আজকের অফার — প্রথম ১০০ জনের জন্য
              </motion.div>

              <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
                BCG of English
              </h2>

              <p className="text-primary-foreground/80 mb-6">
                Grammar + Writing + Vocabulary সব এক বইতে
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-5xl md:text-6xl font-bold text-accent">
                  ৳---
                </span>
                <p className="text-primary-foreground/60 text-sm mt-2">
                  (মূল্য চেকআউট পেজে দেখুন)
                </p>
              </div>

              {/* Features */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <div className="flex items-center justify-center gap-2 text-primary-foreground/90">
                  <Truck className="w-5 h-5" />
                  <span>Cash on Delivery</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-primary-foreground/90">
                  <Clock className="w-5 h-5" />
                  <span>২-৫ দিনে ডেলিভারি</span>
                </div>
              </div>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToOrder}
                className="btn-accent text-lg px-10 py-4 w-full sm:w-auto"
              >
                এখনই অর্ডার করুন
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
