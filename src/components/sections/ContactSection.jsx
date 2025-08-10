import { Mail, CalendarClock } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function ContactSection() {
  const t = useTranslations("HomePage.contact");

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-br from-white to-gray-50 text-center border-t border-gray-200"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold text-slate-800 mb-6">
          {t("title")}
        </h2>
        <p className="text-lg text-slate-500 mb-12 leading-relaxed">
          {t("description")}
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-slate-800 text-white font-medium px-6 py-4 rounded-full shadow hover:bg-slate-700 transition"
          >
            <Mail className="w-5 h-5" />
            {t("cta")}
          </Link>

          {/* <Link
            href="/rendez-vous"
            className="inline-flex items-center justify-center gap-2 bg-white border border-slate-900 text-slate-800 font-medium px-6 py-4 rounded-full shadow hover:bg-slate-50 transition"
          >
            <CalendarClock className="w-5 h-5" />
            {t("ctaAppointment")}
          </Link> */}
        </div>
      </div>
    </section>
  );
}
