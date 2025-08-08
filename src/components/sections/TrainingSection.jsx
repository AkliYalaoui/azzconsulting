import { useTranslations } from "next-intl";
import { GraduationCap, School, BriefcaseBusiness } from "lucide-react";
import TrainingBlock from "./TrainingBlock";

export default function TrainingSection() {
  const t = useTranslations("HomePage.trainings");

  return (
    <section id="trainings" className="py-24 px-6 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-blue-900">{t("title")}</h2>
          <p className="text-lg text-gray-600 mt-4">{t("preview")}</p>
        </div>

        <TrainingBlock
          title={t("universityTitle")}
          description={t("universityDesc")}
          icon={GraduationCap}
          imagePosition="left"
          href="/trainings#university"
        />

        <TrainingBlock
          title={t("institutesTitle")}
          description={t("institutesDesc")}
          icon={School}
          imagePosition="right"
          href="/trainings#institutes"
        />

        <TrainingBlock
          title={t("proTrainingTitle")}
          description={t("proTrainingDesc")}
          icon={BriefcaseBusiness}
          imagePosition="left"
          href="/trainings#pro"
        />
      </div>
    </section>
  );
}
