import { motion } from "framer-motion";
import { BookOpen, Edit3, GraduationCap, Languages, Sparkles } from "lucide-react";

const sections = [
  {
    icon: BookOpen,
    title: "Section 1: Crucial Grammar",
    description: "ইংরেজি Grammar-এর মূল ভিত্তি — Parts of Speech থেকে Tense পর্যন্ত।",
  },
  {
    icon: Edit3,
    title: "Section 2: Writing",
    description: "CV, Letter, Application, Essay, Paragraph — সব ফরম্যাট।",
  },
  {
    icon: GraduationCap,
    title: "Section 3: Advanced Grammar",
    description: "Narration, Voice, Transformation, Correction সব একসাথে।",
  },
  {
    icon: Languages,
    title: "Section 4: Synonym & Antonym",
    description: "বাংলা অর্থসহ হাজারো শব্দ — মনে রাখার সহজ কৌশল।",
  },
  {
    icon: Sparkles,
    title: "Section 5: Prefix/Suffix (Affix)",
    description: "Vocabulary Boost — শব্দ তৈরি ও বিশ্লেষণের দক্ষতা।",
  },
];

const chips = ["5 Sections", "Page Range: 1–510", "Practice + Examples", "Exam Oriented"];

const ContentMapSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            বইয়ের ভিতরে কী কী থাকছে?
          </h2>

          {/* Chips */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-6">
            {chips.map((chip, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium"
              >
                {chip}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="card-premium"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <section.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {section.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {section.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium">
            <span>📌</span>
            <span>সবকিছু এক বইতেই — Basic থেকে Advanced</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentMapSection;
