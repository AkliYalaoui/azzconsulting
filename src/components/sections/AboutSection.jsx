import { BookOpenCheck, Briefcase, Banknote } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function AboutSection() {
  const t = useTranslations("HomePage.about");

  const highlights = [
    {
      icon: <Briefcase className="w-7 h-7 text-emerald-500" />,
      title: t("experience.title"),
      desc: t("experience.desc"),
    },
    {
      icon: <Banknote className="w-7 h-7 text-emerald-500" />,
      title: t("markets.title"),
      desc: t("markets.desc"),
    },
    {
      icon: <BookOpenCheck className="w-7 h-7 text-emerald-500" />,
      title: t("pedagogy.title"),
      desc: t("pedagogy.desc"),
    },
  ];

  return (
    <section
      id="about"
      className="bg-gray-50 py-28 px-6 border-t border-gray-200"
    >
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-4xl font-extrabold text-slate-800 mb-4 tracking-tight">
            {t("title")}
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-12">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="bg-emerald-100 p-2 rounded-full">{item.icon}</div>
                <h3 className="text-lg font-semibold text-slate-800">
                  {item.title}
                </h3>
              </div>
              <p className="text-slate-500 text-base text-center">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/consulting"
            className="inline-block text-slate-800 border border-slate-800 hover:bg-slate-800 hover:text-white transition px-6 py-3 rounded-full font-medium shadow-sm"
          >
            {t("cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
