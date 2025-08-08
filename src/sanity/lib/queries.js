import { defineQuery } from "next-sanity";

export const POSTS_QUERY = defineQuery(
  `*[_type == "post" && language == $locale]{
        _id,
        title,
        slug,
        excerpt,
        coverImage {
          asset -> {
            url
          }
        },
        publishedAt,
        tags
      }`
);
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
