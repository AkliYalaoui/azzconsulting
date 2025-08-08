'use client';

import { useEffect, useState, useMemo } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { POSTS_QUERY } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import { Link } from "@/i18n/navigation";

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const t = useTranslations('BlogPage');
  const locale = useLocale();

  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('desc');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getPosts = async () => {
      const fetched = await client.fetch(POSTS_QUERY, {
        locale,
      });

      setPosts(fetched);
    };
    getPosts();
  }, [locale]);

  // Filter + sort posts
  const filteredPosts = useMemo(() => {
    let filtered = [...posts];

    if (search) {
      const lower = search.toLowerCase();
      filtered = filtered.filter((post) =>
        post.title.toLowerCase().includes(lower)
      );
    }

    filtered.sort((a, b) => {
      const dateA = new Date(a.publishedAt);
      const dateB = new Date(b.publishedAt);
      return sort === 'asc' ? dateA - dateB : dateB - dateA;
    });

    return filtered;
  }, [posts, search, sort]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  return (
    <main className="max-w-6xl mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold mb-8 text-center">{t('title')}</h1>

      {/* Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
        <input
          type="text"
          placeholder={t('searchPlaceholder')}
          className="border px-4 py-2 rounded-md w-full md:w-1/2"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />

        <select
          className="border px-4 py-2 rounded-md"
          value={sort}
          onChange={(e) => {
            setSort(e.target.value);
            setPage(1);
          }}
        >
          <option value="desc">{t('newest')}</option>
          <option value="asc">{t('oldest')}</option>
        </select>
      </div>

      {/* Posts Grid */}
      {paginatedPosts.length === 0 ? (
        <p className="text-center text-gray-500">{t('noResults')}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedPosts.map((post) => (
            <Link
              key={post._id}
              href={`/blogs/${post.slug.current}`}
              className="block border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              {post.coverImage && (
                <img
                  src={post.coverImage.asset?.url}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-5">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-1">
                  {new Date(post.publishedAt).toLocaleDateString(locale)}
                </p>
                <p className="text-gray-700 mb-3 line-clamp-3">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 text-sm text-blue-600">
                  {post.tags?.map((tag) => (
                    <span key={tag} className="bg-blue-50 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-12 flex justify-center gap-3">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => setPage(n)}
              className={`px-4 py-2 rounded-md border ${
                n === page
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      )}
    </main>
  );
}
