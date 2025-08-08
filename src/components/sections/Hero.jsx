import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("HomePage.hero");

  return (
    <section className="bg-gradient-to-r from-indigo-50 to-white py-28 px-6">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-indigo-900 leading-tight mb-6">
            {t("title")}
          </h1>
          <p className="text-lg text-gray-600 max-w-xl leading-relaxed mb-8 mx-auto md:mx-0">
            {t("subtitle")}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-indigo-700 text-white py-3 px-6 rounded-full font-semibold hover:bg-indigo-800 transition"
          >
            {t("cta")}
          </Link>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/hero.svg"
            alt="Hero Illustration"
            width={500}
            height={500}
            className="drop-shadow-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
