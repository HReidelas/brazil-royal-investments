import { motion } from "framer-motion";
import productSteaks from "@/assets/product-steaks.jpg";
import productChicken from "@/assets/product-chicken.jpg";
import productWhole from "@/assets/product-whole-chicken.jpg";
import productPremium from "@/assets/product-premium-chicken.jpg";
import productAngus from "@/assets/product-angus.jpg";
import productSaria from "@/assets/product-saria.jpg";

const featuredProducts = [
  { image: productAngus, title: "Premium Angus Steaks", subtitle: "100% Certified Angus Beef" },
  { image: productSteaks, title: "Luxurious Angus Steaks", subtitle: "USDA Prime Certified" },
  { image: productChicken, title: "Luxurious Chicken", subtitle: "100% Organic, All Natural" },
  { image: productPremium, title: "Premium Chicken", subtitle: "Farm-Fresh Boneless Breasts" },
  { image: productWhole, title: "Whole Chicken", subtitle: "Farm-Fresh, All Natural" },
  { image: productSaria, title: "Saria Poultry", subtitle: "Halal Certified, Grade A" },
];

const productCategories = [
  { title: "Sugar", desc: "Brazilian sugar renowned worldwide for exceptional quality and reliability, meeting the highest standards of taste and purity." },
  { title: "Cereals & Grains", desc: "Premium corn, soybeans, and staple grains carefully sourced and processed for quality and consistency." },
  { title: "Coffee", desc: "Roasted, ground, and instant coffee sourced from premium beans from Brazil and Guatemala." },
  { title: "Oils", desc: "Premium cooking, specialty, and health-focused oils for human consumption from trusted suppliers." },
  { title: "Ice Cream & Desserts", desc: "Artisanal ice cream, gourmet sorbets, and decadent desserts with dietary-friendly options." },
  { title: "Fuels, Minerals & Steel", desc: "Intermediation of fuels, minerals, steel products, and chemicals ensuring seamless supply chains." },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-primary font-body text-sm tracking-[0.4em] uppercase mb-4">Premium Selection</p>
          <h2 className="text-3xl md:text-5xl font-display text-gradient-gold mb-6">Our Products</h2>
          <div className="bg-gradient-gold-horizontal h-px w-32 mx-auto mb-8" />
          <p className="text-muted-foreground font-elegant text-lg max-w-2xl mx-auto">
            The quality of Brazilian products and the standards used in the food industry are unquestionable.
          </p>
        </motion.div>

        {/* Featured product gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {featuredProducts.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden border border-border hover:border-primary transition-all duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div>
                  <h3 className="text-xl font-display text-primary mb-1">{p.title}</h3>
                  <p className="text-muted-foreground font-body text-sm">{p.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Product categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-display text-gradient-gold mb-4">Complete Product Portfolio</h3>
          <div className="bg-gradient-gold-horizontal h-px w-32 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border p-8 hover:border-primary transition-all duration-500 group"
            >
              <h4 className="text-lg font-display text-primary mb-3 group-hover:text-gold-light transition-colors duration-300">{c.title}</h4>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
