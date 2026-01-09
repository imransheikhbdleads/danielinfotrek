import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { X, ZoomIn } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const carouselImages = [
  "https://danielinfotrek.com/wp-content/uploads/2024/06/WhatsApp-Image-2025-12-13-at-2.11.46-PM.jpeg",
  "https://danielinfotrek.com/wp-content/uploads/2024/06/WhatsApp-Image-2025-12-13-at-2.10.45-PM.jpeg",
  "https://danielinfotrek.com/wp-content/uploads/2024/06/WhatsApp-Image-2025-12-13-at-2.31.39-PM.jpeg",
  "https://danielinfotrek.com/wp-content/uploads/2024/06/WhatsApp-Image-2025-12-13-at-2.12.42-PM.jpeg",
  "https://danielinfotrek.com/wp-content/uploads/2024/06/WhatsApp-Image-2025-12-13-at-2.10.45-PM.jpeg",
];

const CarouselSection = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            বইয়ের কিছু পাতা (Preview)
          </h2>
          <p className="text-muted-foreground">
            ছবিতে ক্লিক করে বড় করে দেখুন
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {carouselImages.map((image, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative group cursor-pointer"
                  onClick={() => setLightboxImage(image)}
                >
                  <img
                    src={image}
                    alt={`Book preview page ${index + 1}`}
                    className="w-full h-80 object-cover rounded-xl shadow-medium"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 rounded-xl transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="w-10 h-10 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
              onClick={() => setLightboxImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl max-h-[90vh]"
              >
                <button
                  onClick={() => setLightboxImage(null)}
                  className="absolute -top-12 right-0 text-primary-foreground hover:text-accent transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
                <img
                  src={lightboxImage}
                  alt="Book preview enlarged"
                  className="max-w-full max-h-[85vh] object-contain rounded-xl"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: hsl(152 65% 18%);
          background: hsl(0 0% 100% / 0.9);
          width: 44px;
          height: 44px;
          border-radius: 50%;
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px;
          font-weight: bold;
        }
        .swiper-pagination-bullet {
          background: hsl(152 65% 18%);
        }
        .swiper-pagination-bullet-active {
          background: hsl(43 95% 49%);
        }
      `}</style>
    </section>
  );
};

export default CarouselSection;
