import { motion } from "framer-motion";
import { FileText, Maximize2 } from "lucide-react";

const PdfViewerSection = () => {
  const pdfUrl = "https://danielinfotrek.com/wp-content/uploads/2026/01/BCG-Crucial-gram-fa-imran.pdf";

  return (
    <section id="pdf-section" className="py-16 md:py-24 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            বইয়ের Contents / ভিতরের ডিটেইলস (PDF)
          </h2>
          <p className="text-muted-foreground">
            বইয়ের সূচিপত্র এখানে দেখুন — কী কী আছে বুঝে নিন
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="card-premium p-4 md:p-6">
            {/* PDF Embed */}
            <div className="relative bg-muted rounded-xl overflow-hidden">
              <iframe
                src={`${pdfUrl}#view=FitH`}
                title="BCG of English Contents PDF"
                className="w-full h-[400px] md:h-[600px] border-0"
              />
            </div>

            {/* Action Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2"
              >
                <Maximize2 className="w-5 h-5" />
                PDF ফুলস্ক্রিনে দেখুন
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={pdfUrl}
                download
                className="btn-outline flex items-center justify-center gap-2"
              >
                <FileText className="w-5 h-5" />
                PDF ডাউনলোড করুন
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PdfViewerSection;
