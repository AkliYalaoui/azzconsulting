'use client';

import { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { POSTS_QUERY_DESC, POSTS_QUERY_ASC, POSTS_COUNT_QUERY } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import { Link } from '@/i18n/navigation';

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const t = useTranslations('BlogPage');
  const locale = useLocale();

  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [sort, setSort] = useState('desc');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  // Debounce search input
  useEffect(() => {
    const id = setTimeout(() => setDebouncedSearch(search.trim()), 350);
    return () => clearTimeout(id);
  }, [search]);

  // Reset to page 1 when search/sort/locale changes
  useEffect(() => setPage(1), [debouncedSearch, sort, locale]);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      const start = (page - 1) * POSTS_PER_PAGE;
      const end = start + POSTS_PER_PAGE;

      const params = {
        locale,
        search: debouncedSearch ? `*${debouncedSearch}*` : null,
        start,
        end,
      };

      try {
        const query = sort === 'desc' ? POSTS_QUERY_DESC : POSTS_QUERY_ASC;
        const [fetched, count] = await Promise.all([
          client.fetch(query, params),
          client.fetch(POSTS_COUNT_QUERY, { locale, search: params.search }),
        ]);

        if (!cancelled) {
          setPosts(fetched || []);
          setTotal(typeof count === 'number' ? count : 0);
        }
      } catch (err) {
        console.error('Failed to load posts', err);
        if (!cancelled) setPosts([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [locale, debouncedSearch, sort, page]);

  const totalPages = Math.ceil(total / POSTS_PER_PAGE);

  return (
    <main>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-indigo-50 to-white py-16 px-6">
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-indigo-900 leading-tight mb-6">
            {t('title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-xl leading-relaxed mb-8 mx-auto md:mx-0">
            Strategic insights, market trends, and in-depth analysis from finance professionals.
          </p>
        </div>
      </section>


      {/* Controls */}
      <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-4 justify-between items-center">
        <input
          type="text"
          placeholder={t('searchPlaceholder')}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-5 py-3 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-900"
        />
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-5 py-3 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-900"
        >
          <option value="desc">{t('newest')}</option>
          <option value="asc">{t('oldest')}</option>
        </select>
      </div>


      {/* Posts grid */}
      <div className="px-4 md:px-6 max-w-6xl mx-auto">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: POSTS_PER_PAGE }).map((_, i) => (
              <div key={i} className="animate-pulse space-y-3 bg-white rounded-xl p-4 shadow">
                <div className="h-40 bg-gray-200 rounded" />
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-3 bg-gray-200 rounded w-1/2" />
              </div>
            ))}
          </div>
        ) : posts.length === 0 ? (
          <p className="text-center text-gray-500">{t('noResults')}</p>
        ) : (
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6">
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/blogs/${post.slug?.current ?? ''}`}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
              >
                {post.coverImage?.asset?.url && (
                  <div className="overflow-hidden h-40">
                    <img
                      src={post.coverImage.asset.url}
                      alt={post.title}
                      className="w-full h-full object-fit transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-6">
                  <p className="text-sm text-gray-500">{new Date(post.publishedAt).toLocaleDateString(locale)}</p>
                  <h2 className="mt-2 text-2xl font-serif font-semibold text-gray-900 group-hover:text-[#14532d] transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-gray-600 line-clamp-3">{post.excerpt}</p>
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

        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-2 ">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-3 py-2 rounded-lg border bg-white shadow-sm disabled:opacity-50"
          >
            {t('prev')}
          </button>

          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={`px-3 py-2 rounded-lg border transition ${n === page
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-white hover:bg-indigo-50'
                  }`}
                aria-current={n === page ? 'page' : undefined}
              >
                {n}
              </button>
            ))}
          </div>

          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-3 py-2 rounded-lg border bg-white shadow-sm disabled:opacity-50"
          >
            {t('next')}
          </button>
        </div>
      )}
    </main>
  );
}
