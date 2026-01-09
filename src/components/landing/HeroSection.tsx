import { motion } from "framer-motion";
import { Truck, MapPin, TrendingUp } from "lucide-react";

const HeroSection = () => {
  const scrollToOrder = () => {
    const orderSection = document.getElementById("order-section");
    orderSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPdf = () => {
    const pdfSection = document.getElementById("pdf-section");
    pdfSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4 md:mb-6">
              BCG of English —{" "}
              <span className="text-primary">Basic to Advanced</span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8 text-balance">
              Grammar + Writing + Vocabulary এক বইতেই — পরীক্ষামুখী সাজানো
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-3 mb-8">
              <div className="trust-badge">
                <Truck className="w-4 h-4 text-primary" />
                <span>Cash on Delivery</span>
              </div>
              <div className="trust-badge">
                <MapPin className="w-4 h-4 text-primary" />
                <span>সারা বাংলাদেশে ডেলিভারি</span>
              </div>
              <div className="trust-badge">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span>Beginner → Advanced</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToOrder}
                className="btn-accent text-lg px-8 py-4"
              >
                ক্যাশ অন ডেলিভারিতে অর্ডার করুন
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToPdf}
                className="btn-outline text-lg px-8 py-4"
              >
                বইয়ের ভিতরে দেখুন
              </motion.button>
            </div>
          </motion.div>

          {/* Right - Book Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-3xl transform rotate-6"></div>
              <img
                src="https://danielinfotrek.com/wp-content/uploads/2026/01/WhatsApp-Image-2025-09-30-at-19.38.01_64491f78.jpg"
                alt="BCG of English Book Cover"
                className="relative w-full max-w-md rounded-2xl shadow-strong object-cover"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
