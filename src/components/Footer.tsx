import logo from "@/assets/logo.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <img src={logo} alt="BR Investments" className="w-16 h-16 mx-auto rounded-full object-cover mb-6" />
        <p className="font-display text-lg text-gradient-gold mb-2">Brazil Royal Investments</p>
        <p className="font-elegant text-muted-foreground italic mb-6">{t.footer.tagline}</p>
        <div className="bg-gradient-gold-horizontal h-px w-24 mx-auto mb-6" />
        <p className="font-body text-xs text-muted-foreground tracking-wider">
          © {new Date().getFullYear()} Brazil Royal Investments. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
