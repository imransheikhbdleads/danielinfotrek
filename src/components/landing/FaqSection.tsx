import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "এটা কি প্রিন্টেড বই?",
    answer: "হ্যাঁ, এটি সম্পূর্ণ প্রিন্টেড হার্ডকভার বই। PDF নয়।",
  },
  {
    question: "Cash on Delivery (COD) আছে?",
    answer: "হ্যাঁ, সারা বাংলাদেশে ক্যাশ অন ডেলিভারি সুবিধা রয়েছে। বই হাতে পেয়ে পেমেন্ট করুন।",
  },
  {
    question: "ডেলিভারি কতদিনে হয়?",
    answer: "ঢাকার ভেতরে ২-৩ দিন, ঢাকার বাইরে ৩-৫ দিনের মধ্যে ডেলিভারি।",
  },
  {
    question: "কারা এই বইটি পড়বেন?",
    answer:
      "SSC, HSC, Admission, Cadet, BCS, Job প্রস্তুতি এবং IELTS Basics যারা শিখতে চান — সবার জন্য।",
  },
  {
    question: "বইয়ের ভিতরে কী কী আছে?",
    answer:
      "Grammar (Crucial + Advanced), Writing Pack, Synonym-Antonym, Prefix-Suffix সব এক বইতে।",
  },
  {
    question: "Writing গাইড আছে?",
    answer:
      "হ্যাঁ, CV, Letter, Application, Essay, Paragraph — সব ধরনের Writing ফরম্যাট ও উদাহরণসহ আছে।",
  },
  {
    question: "Vocabulary Boost কীভাবে?",
    answer:
      "Synonym-Antonym বাংলা অর্থসহ + Prefix/Suffix দিয়ে শব্দ তৈরি ও বিশ্লেষণ শেখানো হয়েছে।",
  },
  {
    question: "অর্ডার সাবমিটের পর কী হবে?",
    answer:
      "অর্ডার করার পর আমরা ফোনে কনফার্ম করব এবং কুরিয়ারে বই পাঠিয়ে দেব।",
  },
];

const FaqSection = () => {
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
            অর্ডার করার আগে যা জানা দরকার
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border/50 px-6 shadow-soft"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
