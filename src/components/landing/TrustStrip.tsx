import { motion } from "framer-motion";
import { Star, Truck, Zap, Target } from "lucide-react";

const trustItems = [
  { icon: Star, text: "হাজারো শিক্ষার্থীর পছন্দ" },
  { icon: Truck, text: "COD Available" },
  { icon: Zap, text: "Fast Delivery" },
  { icon: Target, text: "Exam Focused" },
];

const TrustStrip = () => {
  return (
    <section className="py-8 bg-primary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-6 md:gap-12"
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-3 text-primary-foreground"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
              >
                <item.icon className="w-5 h-5 md:w-6 md:h-6" />
              </motion.div>
              <span className="text-sm md:text-base font-medium">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustStrip;
