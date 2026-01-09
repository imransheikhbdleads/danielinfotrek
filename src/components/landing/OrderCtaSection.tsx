import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

const OrderCtaSection = () => {
  return (
    <section
      id="order-section"
      className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary to-primary-dark"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <ShoppingCart className="w-10 h-10 text-accent-foreground" />
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            অর্ডার করতে প্রস্তুত?
          </h2>

          <p className="text-primary-foreground/80 text-lg mb-8">
            অর্ডার করতে নিচের বাটনে ক্লিক করুন—আপনি আমাদের WordPress checkout page
            এ চলে যাবেন।
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://danielinfotrek.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground text-xl font-bold px-10 py-5 rounded-2xl shadow-accent hover:brightness-105 transition-all"
          >
            <ShoppingCart className="w-6 h-6" />
            Order Now (Checkout)
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default OrderCtaSection;
