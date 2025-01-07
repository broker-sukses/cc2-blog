import * as contentful from "contentful";
import { Document } from "@contentful/rich-text-types";

const client = contentful.createClient({
  space: "cyunbquyskzk",
  environment: "master", // defaults to 'master' if not set
  accessToken: "8xCbOianbeaNilYpL609FOtgFyhOYDlmIUpXq8HffqE",
});

// client
//   .getAssets()
//   .then((response) => console.log(response.items))
//   .catch(console.error);

export async function getAllEntries() {
  try {
    const data = await client.getEntries();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// get entries for blog post only
export async function getAllBlogPost() {
  try {
    const data = (await client.getEntries({
      content_type: "blogPost",
    })) as unknown as {
      items: {
        fields: {
          title: string;
          slug: string;
          content: Document;
          thumbnailImage: { fields: { file: { url: string } } };
          featuredImage: { fields: { file: { url: string } } };
          category: string;
        };
      }[];
    };
    return data.items.map((posts) => {
      let thumbnailUrl = posts?.fields?.thumbnailImage?.fields?.file.url;
      if (!thumbnailUrl) {
        thumbnailUrl =
          "//mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500-300x300.jpg";
      }
      return {
        title: posts.fields.title,
        slug: posts.fields.slug,
        content: posts.fields.content,
        featuredImage: posts.fields.featuredImage.fields.file.url,
        thumbnailImage: `https:${thumbnailUrl}`,
        category: posts.fields.category,
      };
    });
  } catch (error) {
    console.error(error);
    return null;
  }
}

// get entries for hero section only
export async function getAllHeroSection() {
  try {
    const data = await client.getEntries({
      content_type: "heroSection",
    });
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

//one spesific post by slug
export async function getSingleBlogPost() {}

//some specific posts by title
export async function searchPostsByTitle(keyword: string) {
  try {
    const res = await client.getEntries({
      content_type: "blogPost",
      "fields.title[match]": keyword,
    });
    return res.items;
  } catch (error) {
    console.error(error);
    return null;
  }
}

//some specific posts by category
export async function searchPostsByCategory() {}
