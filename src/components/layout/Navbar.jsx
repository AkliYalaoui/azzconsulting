"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-indigo-700">
          {t("home")}
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex gap-8 font-medium text-gray-700 items-center">
          <Link href="/consulting" className="hover:text-indigo-700">{t("consulting")}</Link>
          <Link href="/training" className="hover:text-indigo-700">{t("training")}</Link>
          <Link href="/blogs" className="hover:text-indigo-700">{t("blogs")}</Link>
          <Link href="/contact" className="hover:text-indigo-700">{t("contact")}</Link>
          <LanguageSwitcher />
        </nav>

        {/* Mobile */}
        <button onClick={() => setOpen(!open)} className="md:hidden focus:outline-none">
          <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-md">
          <div className="flex flex-col px-6 py-4 space-y-4 text-gray-700">
            <Link href="/consulting" onClick={() => setOpen(false)}>{t("consulting")}</Link>
            <Link href="/training" onClick={() => setOpen(false)}>{t("training")}</Link>
            <Link href="/blogs" onClick={() => setOpen(false)}>{t("blogs")}</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>{t("contact")}</Link>
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
