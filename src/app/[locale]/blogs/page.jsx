import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("BlogsPage");

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4">{t("title")}</h1>
      <p className="text-lg text-gray-700">{t("description")}</p>
    </div>
  );
}
