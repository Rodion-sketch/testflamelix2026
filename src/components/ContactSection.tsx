import { useState } from "react";
import { Mail, MessageCircle, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="section-padding section-dark">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — info */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-5">
              {t("contact.subtitle")}
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-display mb-6"
              style={{ color: "hsl(var(--dark-fg))" }}
            >
              {t("contact.title")}
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: "hsl(var(--dark-muted))" }}>
              {t("contact.description")}
            </p>

            <div className="space-y-5">
              <a href="mailto:info@flamelix.com" className="flex items-center gap-3 group">
                <Mail className="h-4 w-4 text-primary" strokeWidth={1.5} />
                <span className="text-sm group-hover:text-primary transition-colors" style={{ color: "hsl(var(--dark-fg))" }}>
                  info@flamelix.com
                </span>
              </a>
              <a href="https://wa.me/79032317693" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                <MessageCircle className="h-4 w-4 text-primary" strokeWidth={1.5} />
                <span className="text-sm group-hover:text-primary transition-colors" style={{ color: "hsl(var(--dark-fg))" }}>
                  +7 903 231-76-93
                </span>
              </a>
              <a href="https://t.me/rodionbat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                <Send className="h-4 w-4 text-primary" strokeWidth={1.5} />
                <span className="text-sm group-hover:text-primary transition-colors" style={{ color: "hsl(var(--dark-fg))" }}>
                  @rodionbat
                </span>
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-widest mb-2 block" style={{ color: "hsl(var(--dark-muted))" }}>
                    {t("contact.form.name")}
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    placeholder={t("contact.form.name.ph")}
                    className="w-full bg-transparent border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors placeholder:opacity-40"
                    style={{
                      borderColor: "hsl(var(--dark-border))",
                      color: "hsl(var(--dark-fg))",
                    }}
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest mb-2 block" style={{ color: "hsl(var(--dark-muted))" }}>
                    {t("contact.form.email")}
                  </label>
                  <input
                    type="email"
                    required
                    maxLength={255}
                    placeholder={t("contact.form.email.ph")}
                    className="w-full bg-transparent border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors placeholder:opacity-40"
                    style={{
                      borderColor: "hsl(var(--dark-border))",
                      color: "hsl(var(--dark-fg))",
                    }}
                  />
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest mb-2 block" style={{ color: "hsl(var(--dark-muted))" }}>
                  {t("contact.form.project")}
                </label>
                <textarea
                  required
                  maxLength={1000}
                  rows={5}
                  placeholder={t("contact.form.project.ph")}
                  className="w-full bg-transparent border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors resize-none placeholder:opacity-40"
                  style={{
                    borderColor: "hsl(var(--dark-border))",
                    color: "hsl(var(--dark-fg))",
                  }}
                />
              </div>
              <button
                type="submit"
                className={`w-full py-4 rounded-full text-sm font-medium transition-all ${
                  sent
                    ? "bg-green-600 text-white"
                    : "bg-primary text-primary-foreground hover:opacity-90"
                }`}
              >
                {sent ? t("contact.form.sent") : t("contact.form.submit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
