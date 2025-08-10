import { defineQuery } from "next-sanity";

// Latest Blogs
export const POSTS_LATEST =
  defineQuery(`*[_type == "post" && language == $locale] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    tags,
    coverImage {
      asset->{
        url
      }
    }
  }`);

// Descending (newest first)
export const POSTS_QUERY_DESC = defineQuery(`
  *[
    _type == "post" &&
    language == $locale &&
    ($search == null || title match $search)
  ]
  | order(publishedAt desc)[$start...$end] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    tags,
    coverImage {
      asset->{
        url
      }
    }
  }
`);

// Ascending (oldest first)
export const POSTS_QUERY_ASC = defineQuery(`
  *[
    _type == "post" &&
    language == $locale &&
    ($search == null || title match $search)
  ]
  | order(publishedAt asc)[$start...$end] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    tags,
    coverImage {
      asset->{
        url
      }
    }
  }
`);

export const POSTS_COUNT_QUERY = defineQuery(`
  count(*[
    _type == "post" &&
    language == $locale &&
    ($search == null || title match $search)
  ])
`);

export const POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug && language == $locale][0]{
      title,
      body,
      publishedAt,
      coverImage {
        asset -> {
          url
        }
      },
      tags
    }`);
