import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <h1>
        <Link href="/">{t("title")}</Link>
      </h1>
      <h1>
        <Link href="/">{t("about")}</Link>
      </h1>
    </div>
  );
}
