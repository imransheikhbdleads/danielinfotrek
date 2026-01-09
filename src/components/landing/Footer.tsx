import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 bg-foreground text-primary-foreground">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg font-semibold mb-2">DanielInfotrek</p>
          <p className="text-primary-foreground/60 text-sm mb-4">
            BCG of English — Basic to Advanced
          </p>
          <div className="flex justify-center gap-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Contact
            </a>
          </div>
          <p className="text-primary-foreground/40 text-xs mt-6">
            © {new Date().getFullYear()} DanielInfotrek. All rights reserved.
          </p>
        </motion.div>
      </div>
      {/* Spacer for mobile bottom CTA */}
      <div className="h-20 md:hidden"></div>
    </footer>
  );
};

export default Footer;
