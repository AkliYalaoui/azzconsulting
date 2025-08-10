"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-br from-indigo-100 via-white to-emerald-50 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-slate-800 tracking-tight">
          {t("home")}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-slate-700">
          <Link href="/consulting" className="hover:text-emerald-500 transition">{t("consulting")}</Link>
          <Link href="/training" className="hover:text-emerald-500 transition">{t("training")}</Link>
          <Link href="/blogs" className="hover:text-emerald-500 transition">{t("blogs")}</Link>
          <Link href="/contact" className="hover:text-emerald-500 transition">{t("contact")}</Link>
          <LanguageSwitcher />
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-green-700">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gradient-to-br from-green-50 via-white to-purple-50 border-t border-gray-100">
          <div className="flex flex-col px-6 py-4 space-y-4 text-green-700">
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
