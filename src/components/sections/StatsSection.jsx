import { useTranslations } from "next-intl";

export default function StatsSection() {
  const t = useTranslations("HomePage.stats");

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-indigo-50 via-white to-emerald-50">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        
        {/* --- Stats --- */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-10 sm:gap-y-0">
          <div>
            <p className="text-6xl font-extrabold text-emerald-600">{`20+`}</p>
            <p className="mt-2 text-slate-600 text-lg">{t("experience")}</p>
          </div>
          <div className="sm:border-l sm:border-slate-300 sm:pl-8">
            <p className="text-6xl font-extrabold text-emerald-600">{`10+`}</p>
            <p className="mt-2 text-slate-600 text-lg">{t("clients")}</p>
          </div>
          <div className="sm:border-l sm:border-slate-300 sm:pl-8">
            <p className="text-6xl font-extrabold text-emerald-600">{`100%`}</p>
            <p className="mt-2 text-slate-600 text-lg">{t("satisfaction")}</p>
          </div>
        </div>

        {/* --- Teaching & Feedback --- */}
        <div className="space-y-3 text-slate-700 text-base leading-relaxed">
          <p className="italic">{t("teaching")}</p>
          <p className="italic">{t("feedback")}</p>
        </div>
      </div>
    </section>
  );
}
