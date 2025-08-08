"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Link } from "@/i18n/navigation";
import {
  LineChart,
  Shield,
  AlertCircle,
  FileText,
  BarChart3,
} from "lucide-react";

const tabs = [
  "marketFinance",
  "creditRisk",
  "marketRisk",
  "regulatoryRisk",
  "acmRisk",
];

const iconMap = {
  marketFinance: LineChart,
  creditRisk: Shield,
  marketRisk: AlertCircle,
  regulatoryRisk: FileText,
  acmRisk: BarChart3,
};

export default function ConsultingPage() {
  const t = useTranslations("ConsultingPage");
  const [activeTab, setActiveTab] = useState("marketFinance");

  return (
    <main className="bg-white text-[#111827]">
      {/* HERO */}
      <section className="bg-gradient-to-r from-indigo-50 to-white py-16 px-6">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-indigo-900 leading-tight mb-6">
            {t("hero.title")}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
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

      {/* NAVIGATION CARDS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-16">
            {tabs.map((tab) => {
              const Icon = iconMap[tab];
              const isActive = activeTab === tab;

              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex flex-col items-center justify-center rounded-xl p-6 text-center transition border
                    ${isActive
                      ? "bg-[#F0F3FF] border-[#3C4BD4] shadow-sm"
                      : "bg-white border-gray-200 hover:shadow hover:bg-gray-50"
                    }`}
                >
                  <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-3 
                    ${isActive ? "bg-[#3C4BD4] text-white" : "bg-gray-100 text-gray-600"}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`text-sm font-medium ${isActive ? "text-[#3C4BD4]" : "text-[#111827]"}`}>
                    {t(`expertise.items.${tab}.title`)}
                  </span>
                </button>
              );
            })}
          </div>

          {/* CONTENT WITH IMAGE */}
          <div className="grid md:grid-cols-2 gap-12 items-start bg-gradient-to-br from-blue-100 to-white rounded-xl p-10">
            {/* TEXT */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-[#111827]">
                {t(`expertise.items.${activeTab}.title`)}
              </h2>
              <p className="text-[#4B5563] leading-relaxed">
                {t(`expertise.items.${activeTab}.summary`)}
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-[#111827] font-semibold text-sm mb-1">
                    {t("expertise.items.common.useCases")}
                  </h3>
                  <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                    {t.raw(`expertise.items.${activeTab}.useCases`).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-[#111827] font-semibold text-sm mb-1">
                    {t("expertise.items.common.kpis")}
                  </h3>
                  <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                    {t.raw(`expertise.items.${activeTab}.kpis`).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-[#111827] font-semibold text-sm mb-1">
                    {t("expertise.items.common.methodology")}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {t(`expertise.items.${activeTab}.methodology`)}
                  </p>
                </div>
              </div>
            </div>

            {/* IMAGE */}
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={`/images/consulting/${activeTab}.svg`}
                alt={t(`expertise.items.${activeTab}.title`)}
                className="rounded-lg max-h-[300px] w-auto object-fit"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-extrabold text-blue-900 mb-6">
            {t("cta.title")}
          </h3>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
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
