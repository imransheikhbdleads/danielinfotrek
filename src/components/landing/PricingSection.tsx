import { motion } from "framer-motion";
import { Gift, Truck, Clock, Timer } from "lucide-react";
import { useState, useEffect } from "react";

const PricingSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Get or set the countdown end time in localStorage
    const storedEndTime = localStorage.getItem("offerEndTime");
    let endTime: number;

    if (storedEndTime) {
      endTime = parseInt(storedEndTime, 10);
    } else {
      endTime = Date.now() + 24 * 60 * 60 * 1000; // 24 hours from now
      localStorage.setItem("offerEndTime", endTime.toString());
    }

    const timer = setInterval(() => {
      const now = Date.now();
      const difference = endTime - now;

      if (difference <= 0) {
        // Reset the timer for another 24 hours
        const newEndTime = Date.now() + 24 * 60 * 60 * 1000;
        localStorage.setItem("offerEndTime", newEndTime.toString());
        setTimeLeft({ hours: 24, minutes: 0, seconds: 0 });
      } else {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToOrder = () => {
    const orderSection = document.getElementById("order-section");
    orderSection?.scrollIntoView({ behavior: "smooth" });
  };

  const padNumber = (num: number) => num.toString().padStart(2, "0");

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

              {/* Countdown Timer */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-6"
              >
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Timer className="w-5 h-5 text-accent animate-pulse" />
                  <span className="text-primary-foreground/90 font-medium">
                    অফার শেষ হচ্ছে:
                  </span>
                </div>
                <div className="flex justify-center gap-3">
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl px-4 py-3 min-w-[70px]">
                    <div className="text-3xl md:text-4xl font-bold text-accent">
                      {padNumber(timeLeft.hours)}
                    </div>
                    <div className="text-xs text-primary-foreground/70">ঘণ্টা</div>
                  </div>
                  <div className="text-3xl font-bold text-accent self-center">:</div>
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl px-4 py-3 min-w-[70px]">
                    <div className="text-3xl md:text-4xl font-bold text-accent">
                      {padNumber(timeLeft.minutes)}
                    </div>
                    <div className="text-xs text-primary-foreground/70">মিনিট</div>
                  </div>
                  <div className="text-3xl font-bold text-accent self-center">:</div>
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl px-4 py-3 min-w-[70px]">
                    <div className="text-3xl md:text-4xl font-bold text-accent">
                      {padNumber(timeLeft.seconds)}
                    </div>
                    <div className="text-xs text-primary-foreground/70">সেকেন্ড</div>
                  </div>
                </div>
              </motion.div>

              {/* Price */}
              <div className="mb-8">
                <span className="text-5xl md:text-6xl font-bold text-accent">
                  ৳599
                </span>
              </div>

              {/* Features */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <div className="flex items-center justify-center gap-2 text-primary-foreground/90">
                  <Truck className="w-5 h-5" />
                  <span>সারা বাংলাদেশে ফ্রি ডেলিভারি</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-primary-foreground/90">
                  <Clock className="w-5 h-5" />
                  <span>Cash on Delivery</span>
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
