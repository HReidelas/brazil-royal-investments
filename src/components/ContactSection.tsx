import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  const contactItems = [
    { icon: Mail, label: t.contact.email, value: "brazilroyalinvestments@gmail.com", href: "mailto:brazilroyalinvestments@gmail.com" },
    { icon: MessageCircle, label: t.contact.whatsapp, value: "+966 503 253 273", href: "https://wa.me/966503253273" },
    { icon: Phone, label: t.contact.phoneKSA, value: "+966 567 723 702", href: "tel:+966567723702" },
    { icon: Phone, label: t.contact.phoneBrazil, value: "+55 43 99627-6267", href: "tel:+5543996276267" },
    { icon: Phone, label: t.contact.phoneUK, value: "+44 7342 984 748", href: "tel:+447342984748" },
  ];

  const addresses = [
    { label: t.contact.brazilOffice, value: "Av. Andira, 610, Centro, Doutor Camargo, PR – CEP: 87155-000" },
    { label: t.contact.ksaOffice, value: "Riyadh, Olaya Street, Al Rabee Tower, 6th Floor, Office 604" },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.4em] uppercase mb-4">{t.contact.subtitle}</p>
          <h2 className="text-3xl md:text-5xl font-display text-gradient-gold mb-6">{t.contact.title}</h2>
          <div className="bg-gradient-gold-horizontal h-px w-32 mx-auto mb-8" />
          <p className="text-muted-foreground font-elegant text-lg max-w-2xl mx-auto">{t.contact.description}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {contactItems.map((item, i) => (
            <motion.a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center p-6 border border-border hover:border-primary transition-all duration-500 bg-background group">
              <item.icon className="w-7 h-7 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <p className="font-body text-xs text-muted-foreground mb-1 tracking-wider uppercase">{item.label}</p>
              <p className="font-body text-sm text-foreground">{item.value}</p>
            </motion.a>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {addresses.map((addr, i) => (
            <motion.div key={addr.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }} className="text-center p-6 border border-border hover:border-primary transition-all duration-500 bg-background">
              <MapPin className="w-7 h-7 text-primary mx-auto mb-3" />
              <p className="font-body text-xs text-muted-foreground mb-1 tracking-wider uppercase">{addr.label}</p>
              <p className="font-body text-sm text-foreground">{addr.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
