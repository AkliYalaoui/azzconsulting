import { useTranslations } from "next-intl";

export default function StatsSection() {
    const t = useTranslations("HomePage.stats");

    return (
        <section className="py-20 px-6 bg-gradient-to-br from-indigo-50 via-white to-emerald-50">
            <div className="max-w-6xl mx-auto text-center">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-12 sm:gap-y-0 sm:gap-x-8 text-center">
                    <div>
                        <p className="text-6xl font-black text-emerald-500 tracking-tight">20+</p>
                        <p className="mt-2 text-slate-600 text-lg">{t("experience")}</p>
                    </div>

                    <div className="relative before:absolute before:top-2 before:bottom-2 before:-left-4 before:w-px before:bg-slate-500 sm:before:block before:hidden">
                        <p className="text-6xl font-black text-emerald-500 tracking-tight">50+</p>
                        <p className="mt-2 text-slate-600 text-lg">{t("clients")}</p>
                    </div>

                    <div className="relative before:absolute before:top-2 before:bottom-2 before:-left-4 before:w-px before:bg-slate-500 sm:before:block before:hidden">
                        <p className="text-6xl font-black text-emerald-500 tracking-tight">100%</p>
                        <p className="mt-2 text-slate-600 text-lg">{t("satisfaction")}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
