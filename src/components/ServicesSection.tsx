import { motion } from "framer-motion";
import { Briefcase, Shield, Handshake } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Business Management",
    text: "We specialize in business management consultancy, guiding organizations to sustainable growth and operational excellence. With tailored strategies, we empower businesses to navigate challenges, optimize resources, and seize opportunities, driving efficiency and maximizing profitability.",
  },
  {
    icon: Shield,
    title: "Non-Financial Intangible Assets",
    text: "We specialize in managing non-financial intangible assets, helping businesses unlock and leverage their valuable intellectual property, brand equity, and other intangible resources. Through strategic guidance and innovative solutions, we empower organizations to maximize the value of their intangible assets, driving sustainable growth and competitive advantage in today's dynamic market landscape.",
  },
  {
    icon: Handshake,
    title: "Intermediation & Agency",
    text: "We offer intermediation and agency services for businesses, bridging gaps and facilitating connections to streamline operations and optimize outcomes. With expertise in matchmaking and negotiations, we ensure seamless transactions and foster mutually beneficial partnerships that drive success for all parties involved.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-primary font-body text-sm tracking-[0.4em] uppercase mb-4">What We Do</p>
          <h2 className="text-3xl md:text-5xl font-display text-gradient-gold mb-6">Our Services</h2>
          <div className="bg-gradient-gold-horizontal h-px w-32 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative p-8 md:p-10 border border-border hover:border-primary group transition-all duration-500 bg-background"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <s.icon className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-display text-primary mb-4">{s.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
