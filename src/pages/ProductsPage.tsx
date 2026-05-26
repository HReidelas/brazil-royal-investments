import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/i18n/LanguageContext";
import { categories } from "@/data/productCategories";

const ProductsPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="container mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body text-sm mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.nav.about}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-primary font-body text-sm tracking-[0.4em] uppercase mb-4">
              {t.products.subtitle}
            </p>
            <h1 className="text-4xl md:text-6xl font-display text-gradient-gold mb-6">
              {t.products.title}
            </h1>
            <div className="bg-gradient-gold-horizontal h-px w-32 mx-auto mb-8" />
            <p className="text-muted-foreground font-elegant text-lg max-w-3xl mx-auto leading-relaxed">
              {t.products.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-6 space-y-20">
          {categories.map((c, ci) => (
            <div key={c.slug}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8"
              >
                <div>
                  <h2 className="text-2xl md:text-3xl font-display text-gradient-gold mb-2">
                    {t.products[c.nameKey] as string}
                  </h2>
                  <div className="bg-gradient-gold-horizontal h-px w-24 mb-3" />
                  <p className="text-muted-foreground font-body text-sm max-w-2xl">
                    {t.products[c.descKey] as string}
                  </p>
                </div>
                <Link
                  to={`/products/${c.slug}`}
                  className="font-body text-sm tracking-widest uppercase text-primary hover:text-gold-light transition-colors whitespace-nowrap"
                >
                  →
                </Link>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {c.products.map((p, i) => (
                  <motion.div
                    key={`${c.slug}-${i}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <Link
                      to={`/products/${c.slug}`}
                      className="group block border border-border hover:border-primary transition-all duration-500 relative overflow-hidden"
                    >
                      {(c.comingSoon || c.outOfStock) && (
                        <div
                          className={`absolute top-0 left-0 right-0 z-20 py-1.5 text-center font-display text-xs tracking-[0.3em] uppercase ${
                            c.outOfStock ? "bg-red-600 text-white" : "bg-yellow-500 text-background"
                          }`}
                        >
                          {c.outOfStock ? "Out of Stock" : "Soon"}
                        </div>
                      )}
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={p.image}
                          alt={t.products[p.titleKey] as string}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-base font-display text-primary mb-1 group-hover:text-gold-light transition-colors">
                          {t.products[p.titleKey] as string}
                        </h3>
                        <p className="text-muted-foreground font-body text-xs">
                          {t.products[p.subKey] as string}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductsPage;
