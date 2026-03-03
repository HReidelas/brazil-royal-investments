import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import productSteaks from "@/assets/product-steaks.jpg";
import productChicken from "@/assets/product-chicken.jpg";
import productWhole from "@/assets/product-whole-chicken.jpg";
import productPremium from "@/assets/product-premium-chicken.jpg";
import productAngus from "@/assets/product-angus.jpg";
import productSaria from "@/assets/product-saria.jpg";
import productCoffeeTin from "@/assets/product-coffee-tin.jpg";
import productCoffeeBag from "@/assets/product-coffee-bag.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { categories } from "@/data/productCategories";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Product {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

const ProductsSection = () => {
  const { t } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const featuredProducts: Product[] = [
    { image: productAngus, title: t.products.angusTitle, subtitle: t.products.angusSub, description: t.products.angusDesc },
    { image: productSteaks, title: t.products.luxSteaksTitle, subtitle: t.products.luxSteaksSub, description: t.products.luxSteaksDesc },
    { image: productChicken, title: t.products.chickenTitle, subtitle: t.products.chickenSub, description: t.products.chickenDesc },
    { image: productPremium, title: t.products.premChickenTitle, subtitle: t.products.premChickenSub, description: t.products.premChickenDesc },
    { image: productWhole, title: t.products.wholeTitle, subtitle: t.products.wholeSub, description: t.products.wholeDesc },
    { image: productSaria, title: t.products.sariaTitle, subtitle: t.products.sariaSub, description: t.products.sariaDesc },
    { image: productCoffeeTin, title: t.products.coffeeTinTitle, subtitle: t.products.coffeeTinSub, description: t.products.coffeeTinDesc },
    { image: productCoffeeBag, title: t.products.coffeeBagTitle, subtitle: t.products.coffeeBagSub, description: t.products.coffeeBagDesc },
  ];

  return (
    <>
      <section id="products" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-20">
            <p className="text-primary font-body text-sm tracking-[0.4em] uppercase mb-4">{t.products.subtitle}</p>
            <h2 className="text-3xl md:text-5xl font-display text-gradient-gold mb-6">{t.products.title}</h2>
            <div className="bg-gradient-gold-horizontal h-px w-32 mx-auto mb-8" />
            <p className="text-muted-foreground font-elegant text-lg max-w-2xl mx-auto">{t.products.description}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {featuredProducts.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden border border-border hover:border-primary transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedProduct(p)}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
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

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-display text-gradient-gold mb-4">{t.products.portfolioTitle}</h3>
            <div className="bg-gradient-gold-horizontal h-px w-32 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c, i) => (
              <motion.div key={c.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Link
                  to={`/products/${c.slug}`}
                  className="block bg-card border border-border p-8 hover:border-primary transition-all duration-500 group"
                >
                  <h4 className="text-lg font-display text-primary mb-3 group-hover:text-gold-light transition-colors duration-300">
                    {t.products[c.nameKey] as string}
                  </h4>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {t.products[c.descKey] as string}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl bg-card border-border p-0 overflow-hidden">
          {selectedProduct && (
            <>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={selectedProduct.image} alt={selectedProduct.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 md:p-8">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-display text-primary mb-1">{selectedProduct.title}</DialogTitle>
                  <DialogDescription className="text-primary/70 font-body text-sm mb-4">{selectedProduct.subtitle}</DialogDescription>
                </DialogHeader>
                <div className="bg-gradient-gold-horizontal h-px w-20 mb-6" />
                <div className="text-muted-foreground font-body text-sm leading-relaxed whitespace-pre-line">{selectedProduct.description}</div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductsSection;
