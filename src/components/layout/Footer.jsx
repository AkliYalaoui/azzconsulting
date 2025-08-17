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
            <li><Link href="/consulting" className="hover:text-blue-400 transition">{t("consulting")}</Link></li>
            <li><Link href="/training" className="hover:text-blue-400 transition">{t("training")}</Link></li>
            <li><Link href="/blogs" className="hover:text-blue-400 transition">{t("blogs")}</Link></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">{t("support")}</h4>
          <ul className="space-y-2">
            <li><Link href="/contact" className="hover:text-blue-400 transition">{t("contact")}</Link></li>
            <li><Link href="/terms" className="hover:text-blue-400 transition">{t("termsOfService")}</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">{t("contactInfo")}</h4>
          <p>{t("email")}: <a href="mailto:azzboudjit@gmail.com" className="hover:text-blue-400 transition">azzboudjit@gmail.com</a></p>
          <p>{t("phone")}: <a href="tel:+33699982152" className="hover:text-blue-400 transition">+33 6 99 98 21 52</a></p>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} {t("copyright")}
      </div>
    </footer>
  );
}
