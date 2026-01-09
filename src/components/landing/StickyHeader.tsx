import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const StickyHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToOrder = () => {
    const orderSection = document.getElementById("order-section");
    orderSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-medium"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-bold text-primary">
              DanielInfotrek
            </span>
          </div>

          <button
            onClick={scrollToOrder}
            className="btn-primary text-sm md:text-base px-4 md:px-6 py-2 md:py-3"
          >
            অর্ডার করুন
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default StickyHeader;
