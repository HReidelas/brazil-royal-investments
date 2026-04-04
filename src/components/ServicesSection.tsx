import { motion } from "framer-motion";
import { Briefcase, MessageSquare, Handshake, Package, Award, Eye, Target } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Business Management",
    texts: [
      "Brazil Royal Investments provides strategic business management services focused on the commercial expansion of products and brands.",
      "Our company manages product commercialization, international market positioning, and distribution strategies to ensure efficient growth across global markets.",
      "Through structured commercial planning and operational coordination, we support manufacturers and partners in scaling their products beyond local markets.",
    ],
  },
  {
    icon: MessageSquare,
    title: "Business Consulting",
    texts: [
      "Brazil Royal Investments advises manufacturers and partners on commercial development, international market access, and export strategies.",
      "Our consulting services focus on identifying market opportunities, structuring commercial agreements, and developing sustainable growth strategies for products entering global markets.",
    ],
  },
  {
    icon: Handshake,
    title: "Commercial Representation",
    texts: [
      "Brazil Royal Investments acts as a commercial representative for selected manufacturers and brands, managing their international commercialization and market expansion.",
      "Through strategic representation agreements, we develop distribution channels, negotiate commercial partnerships, and position products within international markets.",
    ],
  },
  {
    icon: Package,
    title: "Wholesale Distribution",
    texts: [
      "Brazil Royal Investments engages in the wholesale distribution of food and agricultural products across international markets.",
      "Our product portfolio includes categories such as coffee, sugar, meat, poultry, edible oils, grains, frozen products, and other food commodities.",
    ],
  },
  {
    icon: Award,
    title: "Brand & Intangible Asset Management",
    texts: [
      "Brazil Royal Investments develops and manages commercial brands, trademarks, and other non-financial intangible assets related to product commercialization.",
      "Through brand strategy, intellectual property management, and market positioning, we build long-term commercial value for products distributed through our platform.",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-20">
          <p className="text-primary font-body text-sm tracking-[0.4em] uppercase mb-4">What We Do</p>
          <h2 className="text-3xl md:text-5xl font-display text-gradient-gold mb-6">Our Services</h2>
          <div className="bg-gradient-gold-horizontal h-px w-32 mx-auto" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto mb-20">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative p-8 md:p-10 border border-border hover:border-primary group transition-all duration-500 bg-background hover:shadow-gold w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.4rem)]"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <s.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-xl font-display text-primary mb-4">{s.title}</h3>
              {s.texts.map((text, j) => (
                <p key={j} className="text-muted-foreground font-body text-sm leading-relaxed mb-3 last:mb-0">{text}</p>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-background border border-border p-8 md:p-10 hover:border-primary transition-all duration-500 hover:shadow-gold">
            <Target className="w-10 h-10 text-primary mb-6" />
            <h3 className="text-xl font-display text-primary mb-4">Our Mission</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              To build scalable global brands from Brazilian production while providing investors with direct participation in product commercialization and growth.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-background border border-border p-8 md:p-10 hover:border-primary transition-all duration-500 hover:shadow-gold">
            <Eye className="w-10 h-10 text-primary mb-6" />
            <h3 className="text-xl font-display text-primary mb-4">Our Vision</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              To become the leading Brazilian brand and export platform in international markets.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
