import { CalendarDays } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function BlogPreviewSection() {
  const t = useTranslations("HomePage.blog");

  const posts = [
    {
      title: "Comprendre le risque de crédit en 2025",
      date: "03 août 2025",
      excerpt: "Découvrez les nouvelles approches de modélisation du risque de crédit adaptées aux exigences réglementaires actuelles.",
      href: "/blogs/risque-credit-2025",
      image: "/images/blog-credit.jpg"
    },
    {
      title: "Les tendances de la finance de marché",
      date: "22 juillet 2025",
      excerpt: "Analyse des évolutions récentes dans les produits dérivés, la gestion de portefeuille et la régulation des marchés.",
      href: "/blogs/finance-marche-tendances",
      image: "/images/blog-marche.jpg"
    },
    {
      title: "Former aux risques : approche pédagogique",
      date: "10 juin 2025",
      excerpt: "Comment transmettre efficacement les enjeux de risque financier dans un cadre académique et professionnel.",
      href: "/blogs/former-aux-risques",
      image: "/images/blog-formation.jpg"
    }
  ];

  return (
    <section id="blog" className="py-24 px-6 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">
          {t("title")}
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          {t("preview")}
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post, index) => (
            <Link
              href={post.href}
              key={index}
              className="group bg-gray-50 border border-gray-200 hover:shadow-lg transition rounded-xl overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-6 text-left">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <CalendarDays className="w-4 h-4 mr-2" />
                  {post.date}
                </div>
                <h3 className="text-xl font-semibold text-blue-900 group-hover:underline">
                  {post.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/blogs"
            className="inline-block bg-blue-900 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-800 transition"
          >
            {t("seeMore")}
          </Link>
        </div>
      </div>
    </section>
  );
}
