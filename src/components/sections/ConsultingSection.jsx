import { useTranslations } from "next-intl";
import { BarChart3, ShieldCheck, Banknote } from "lucide-react";
import ConsultingCard from "./ConsultingCard";

export default function ConsultingSection() {
  const t = useTranslations("HomePage.consulting");

  const services = [
    {
      icon: BarChart3,
      title: t("marketFinanceTitle"),
      description: t("marketFinanceDesc"),
      link: "/consulting",
    },
    {
      icon: ShieldCheck,
      title: t("creditRiskTitle"),
      description: t("creditRiskDesc"),
      link: "/consulting",
    },
    {
      icon: Banknote,
      title: t("regulatoryRiskTitle"),
      description: t("regulatoryRiskDesc"),
      link: "/consulting",
    },
  ];

  return (
    <section id="consulting" className="py-24 px-6 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">{t("title")}</h2>
        <p className="text-lg text-slate-500 mb-12">{t("preview")}</p>

        <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-2">
          {services.map((s, index) => (
            <ConsultingCard
              key={index}
              icon={s.icon}
              title={s.title}
              description={s.description}
              link={s.link}
              more={t("learnMore")}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
}
