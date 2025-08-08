import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Branding & Short info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">{t("brand")}</h3>
          <p className="text-gray-400">{t("description")}</p>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">{t("services")}</h4>
          <ul className="space-y-2">
            <li><Link href="/services" className="hover:text-blue-400 transition">{t("consulting")}</Link></li>
            <li><Link href="/formation" className="hover:text-blue-400 transition">{t("training")}</Link></li>
            <li><Link href="/blogs" className="hover:text-blue-400 transition">{t("blogs")}</Link></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">{t("support")}</h4>
          <ul className="space-y-2">
            <li><Link href="/contact" className="hover:text-blue-400 transition">{t("contact")}</Link></li>
            <li><Link href="/privacy" className="hover:text-blue-400 transition">{t("privacyPolicy")}</Link></li>
            <li><Link href="/terms" className="hover:text-blue-400 transition">{t("termsOfService")}</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">{t("contactInfo")}</h4>
          <p>{t("email")}: <a href="mailto:consultant@example.com" className="hover:text-blue-400 transition">consultant@example.com</a></p>
          <p>{t("phone")}: <a href="tel:+1234567890" className="hover:text-blue-400 transition">+1 234 567 890</a></p>
          <p>{t("address")}</p>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} {t("copyright")}
      </div>
    </footer>
  );
}
