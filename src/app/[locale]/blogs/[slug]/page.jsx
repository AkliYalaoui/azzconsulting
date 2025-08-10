import { client } from '@/sanity/lib/client';
import { POST_QUERY } from '@/sanity/lib/queries';
import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const { slug, locale } = await params;

  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug && language == $locale][0]{
      title,
      excerpt
    }`,
    { slug, locale }
  );

  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt || post.title,
  };
}


export default async function PostPage({ params }) {
  const { slug, locale } = await params;

  const post = await client.fetch(POST_QUERY, { slug, locale });

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl lg:text-5xl text-slate-800 text-center font-bold mb-6">{post.title}</h1>
      {post.coverImage?.asset?.url && (
        <img
          src={post.coverImage.asset.url}
          alt={post.title}
          className="w-full h-auto rounded mb-4"
        />
      )}
      <p className="text-slate-500 text-sm mb-8">
        {new Date(post.publishedAt).toLocaleDateString(locale)}
      </p>
      <div className="prose prose-blue max-w-none">
        <PortableText value={post.body} />
      </div>

      {post.tags?.length > 0 && (
        <div className="mt-10 flex gap-2 flex-wrap">
          {post.tags.map((tag) => (
            <span key={tag} className="text-sm bg-emerald-100 px-2 py-1 rounded text-emerald-600">
              #{tag}
            </span>
          ))}
        </div>
      )}
    </main>
  );
}
