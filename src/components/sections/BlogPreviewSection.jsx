import { CalendarDays } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { POSTS_LATEST } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';

export default async function BlogPreviewSection({ lang }) {

  const t = await getTranslations("HomePage.blog");
  const posts = await client.fetch(POSTS_LATEST, { locale: lang });

  return (
    <section id="blog" className="py-24 px-6 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">
          {t("title")}
        </h2>
        <p className="text-lg text-slate-500 mb-12 max-w-3xl mx-auto">
          {t("preview")}
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post, index) => (
            <Link
              href={`/blogs/${post.slug?.current ?? ''}`}
              key={index}
              className="group bg-gray-50 border border-gray-200 hover:shadow-lg transition rounded-xl overflow-hidden"
            >
              <img
                src={post.coverImage.asset.url}
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-6 text-left">
                <div className="flex items-center text-sm text-slate-500 mb-2">
                  <CalendarDays className="w-4 h-4 mr-2 text-emerald-500" />
                  {new Date(post.publishedAt).toLocaleDateString(lang)}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 group-hover:underline">
                  {post.title}
                </h3>
                <p className="mt-2 text-slate-500 text-sm">{post.excerpt}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm border border-gray-300 rounded-full text-gray-600"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/blogs"
            className="inline-block bg-slate-800 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-slate-700 transition"
          >
            {t("seeMore")}
          </Link>
        </div>
      </div>
    </section>
  );
}
