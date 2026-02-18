import { useLanguage } from "@/contexts/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";

const FAQSection = () => {
  const { t } = useLanguage();

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
  ];

  return (
    <section id="faq" className="section-padding">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display text-foreground">
              {t("faq.title")}
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border border-border/60 rounded-xl px-6 !border-b data-[state=open]:border-primary/30 data-[state=open]:bg-card/50 transition-all duration-300 data-[state=open]:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.15)]"
                >
                  <AccordionTrigger className="text-left font-display text-lg text-foreground hover:no-underline hover:text-primary transition-colors py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQSection;
