import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import companyLogo from "@/assets/logo.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { categories, type ProductItem } from "@/data/productCategories";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-display text-primary mb-4">Category not found</h1>
          <Link to="/#products" className="text-primary underline">
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const categoryName = t.products[category.nameKey] as string;
  const categoryDesc = t.products[category.descKey] as string;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="container mx-auto px-6">
          <Link
            to="/#products"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body text-sm mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.products.title}
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
              {categoryName}
            </h1>
            <div className="bg-gradient-gold-horizontal h-px w-32 mx-auto mb-8" />
            <p className="text-muted-foreground font-elegant text-lg max-w-3xl mx-auto leading-relaxed">
              {categoryDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      {category.products.length > 0 && (
        <section className="pb-24 md:pb-32">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.products.map((p, i) => (
                <motion.div
                  key={t.products[p.titleKey] as string}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative overflow-hidden border border-border hover:border-primary transition-all duration-500 cursor-pointer"
                  onClick={() => setSelectedProduct(p)}
                >
                  <div className="absolute top-4 right-4 z-10 rounded-md border border-border bg-background/90 p-2 backdrop-blur-sm">
                    <img
                      src={companyLogo}
                      alt="DR Investments logo"
                      className="h-8 w-8 object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={p.image}
                      alt={t.products[p.titleKey] as string}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-display text-primary mb-1">
                        {t.products[p.titleKey] as string}
                      </h3>
                      <p className="text-muted-foreground font-body text-sm">
                        {t.products[p.subKey] as string}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty state for categories without products yet */}
      {category.products.length === 0 && (
        <section className="pb-24 md:pb-32">
          <div className="container mx-auto px-6 text-center">
            <div className="bg-card border border-border p-12 max-w-2xl mx-auto">
              <p className="text-muted-foreground font-body">
                {t.products.comingSoon}
              </p>
            </div>
          </div>
        </section>
      )}

      <Footer />
      <WhatsAppButton />

      {/* Product Detail Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl bg-card border-border p-0 overflow-hidden">
          {selectedProduct && (
            <>
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute top-4 right-4 z-10 rounded-md border border-border bg-background/90 p-2 backdrop-blur-sm">
                  <img
                    src={companyLogo}
                    alt="DR Investments logo"
                    className="h-10 w-10 object-cover"
                  />
                </div>
                <img
                  src={selectedProduct.image}
                  alt={t.products[selectedProduct.titleKey] as string}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-display text-primary mb-1">
                    {t.products[selectedProduct.titleKey] as string}
                  </DialogTitle>
                  <DialogDescription className="text-primary/70 font-body text-sm mb-4">
                    {t.products[selectedProduct.subKey] as string}
                  </DialogDescription>
                </DialogHeader>
                <div className="bg-gradient-gold-horizontal h-px w-20 mb-6" />
                <div className="text-muted-foreground font-body text-sm leading-relaxed whitespace-pre-line">
                  {t.products[selectedProduct.descKey] as string}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CategoryPage;
