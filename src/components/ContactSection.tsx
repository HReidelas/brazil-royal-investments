import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.4em] uppercase mb-4">Get In Touch</p>
          <h2 className="text-3xl md:text-5xl font-display text-gradient-gold mb-6">Contact Us</h2>
          <div className="bg-gradient-gold-horizontal h-px w-32 mx-auto mb-8" />
          <p className="text-muted-foreground font-elegant text-lg max-w-2xl mx-auto">
            We are dedicated to nurturing long-term relationships and fostering innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Mail, label: "Email", value: "info@brazilroyalinvestments.com" },
            { icon: Phone, label: "Phone", value: "+55 (11) 0000-0000" },
            { icon: MapPin, label: "Location", value: "São Paulo, Brazil" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center p-8 border border-border hover:border-primary transition-all duration-500 bg-background"
            >
              <item.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <p className="font-body text-sm text-muted-foreground mb-1">{item.label}</p>
              <p className="font-body text-sm text-foreground">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
