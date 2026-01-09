import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";

const VideoSection = () => {
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
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            ১ মিনিটে বুঝে নিন বইটা কেন দরকার
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-strong bg-card">
            {/* Video Container - 9:16 aspect ratio for Shorts */}
            <div className="relative w-full" style={{ paddingTop: "177.78%" }}>
              <iframe
                src="https://www.youtube.com/embed/cVWlD2BSTc4"
                title="BCG of English Book Preview"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToOrder}
              className="btn-accent flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" />
              ভিডিও দেখে বুঝে নিন
            </motion.button>
            <a
              href="https://www.youtube.com/shorts/cVWlD2BSTc4"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              YouTube-এ দেখুন
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
