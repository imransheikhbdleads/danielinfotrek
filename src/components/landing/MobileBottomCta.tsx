import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

const MobileBottomCta = () => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
    >
      <div className="bg-card/95 backdrop-blur-md border-t border-border shadow-strong p-3">
        <a
          href="https://danielinfotrek.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full btn-accent flex items-center justify-center gap-2 py-3"
        >
          <ShoppingCart className="w-5 h-5" />
          Order Now
        </a>
      </div>
    </motion.div>
  );
};

export default MobileBottomCta;
