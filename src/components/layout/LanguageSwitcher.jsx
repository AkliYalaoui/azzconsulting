"use client";

import { useRouter, usePathname } from '@/i18n/navigation'
import { useLocale } from "next-intl";
import { locales } from "@/i18n/config";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleLocaleChange = (e) => {
    const newLocale = e.target.value;
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <select
      onChange={handleLocaleChange}
      value={currentLocale}
      className="text-sm text-gray-600 border rounded px-2 py-1 hover:border-blue-400 transition"
      aria-label="Select language"
    >
      {locales.map((locale) => (
        <option key={locale} value={locale}>
          {locale.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
