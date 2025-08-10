import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Hero() {
  const t = useTranslations("HomePage.hero");

  return (
    <section className="bg-gradient-to-br from-indigo-100 via-white to-emerald-50">
      <div className="container mx-auto px-6 pt-28 pb-24 flex flex-col items-center text-center space-y-6">
        
        {/* Decorative Blobs for Depth */}
        <div className="absolute top-20 left-0 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

        {/* Title */}
        <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-800 leading-tight max-w-4xl">
          {t("title")}
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
          {t("subtitle")}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link
            href="/contact"
            className="bg-slate-800 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-slate-700 transition"
          >
            {t("cta")}
          </Link>
       
        </div>
      </div>
    </section>
  );
}
