import { motion } from "framer-motion";
import { BookOpen, PenTool, Brain, Target } from "lucide-react";

const benefits = [
  {
    icon: BookOpen,
    title: "Grammar Mastery",
    description:
      "Crucial থেকে Advanced পর্যন্ত সব Grammar — সহজ ভাষায়, পরীক্ষার জন্য গোছানো।",
  },
  {
    icon: PenTool,
    title: "Writing Pack",
    description:
      "CV, Letter, Application, Essay, Paragraph — সব ফরম্যাট ও উদাহরণসহ।",
  },
  {
    icon: Brain,
    title: "Vocabulary Boost",
    description:
      "Synonym–Antonym + Prefix/Suffix — বাংলা অর্থসহ মনে রাখার কৌশল।",
  },
  {
    icon: Target,
    title: "Exam Focused",
    description:
      "SSC/HSC/Admission/Cadet/BCS/Job + IELTS Basics — সব পরীক্ষার উপযোগী।",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            এই বইটি কেন নেবেন?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="card-premium text-center"
            >
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
