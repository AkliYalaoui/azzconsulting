"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { GraduationCap, BookOpenCheck, Users, FileBadge2 } from "lucide-react";
import { Link } from "@/i18n/navigation";

const programs = [
  {
    id: "riskManagement",
    icon: GraduationCap,
  },
  {
    id: "regulatoryCompliance",
    icon: BookOpenCheck,
  },
  {
    id: "financialModeling",
    icon: FileBadge2,
  },
  {
    id: "dataAnalytics",
    icon: Users,
  },
];

export default function TrainingPage() {
  const t = useTranslations("TrainingPage");
  const [activeTab, setActiveTab] = useState("riskManagement");

  const ActiveProgram = programs.find((p) => p.id === activeTab);
  const ActiveIcon = ActiveProgram?.icon || GraduationCap;

  return (
    <main className="bg-white text-[#111827]">
      {/* HERO */}
      <section className="bg-gradient-to-r from-indigo-50 to-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-indigo-900 mb-4">
            {t("hero.title")}
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            {t("hero.subtitle")}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-indigo-700 text-white py-3 px-6 rounded-full font-semibold hover:bg-indigo-800 transition"
          >
            {t("hero.cta")}
          </Link>
        </div>
      </section>

      {/* TRAINING PROGRAMS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12 text-indigo-900">
            {t("programs.title")}
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {programs.map(({ id, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition
                  ${activeTab === id
                    ? "bg-indigo-100 text-indigo-800 border-indigo-400"
                    : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
                  }`}
              >
                <Icon className="w-4 h-4" />
                {t(`programs.items.${id}.title`)}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="bg-gradient-to-br from-white to-indigo-50 p-8 rounded-xl shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-indigo-200 text-indigo-800 flex items-center justify-center">
                <ActiveIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-indigo-900">
                {t(`programs.items.${activeTab}.title`)}
              </h3>
            </div>

            <p className="text-gray-700 mb-6">
              {t(`programs.items.${activeTab}.description`)}
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-[#111827] mb-1">
                  {t("programs.labels.objectives")}
                </h4>
                <p className="text-sm text-gray-600">
                  {t(`programs.items.${activeTab}.objectives`)}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#111827] mb-1">
                  {t("programs.labels.audience")}
                </h4>
                <p className="text-sm text-gray-600">
                  {t(`programs.items.${activeTab}.audience`)}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#111827] mb-1">
                  {t("programs.labels.outcomes")}
                </h4>
                <p className="text-sm text-gray-600">
                  {t(`programs.items.${activeTab}.outcomes`)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-extrabold text-indigo-900 mb-6">
            {t("cta.title")}
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            {t("cta.subtitle")}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-indigo-700 text-white py-3 px-6 rounded-full font-semibold hover:bg-indigo-800 transition"
          >
            {t("cta.button")}
          </Link>
        </div>
      </section>
    </main>
  );
}
