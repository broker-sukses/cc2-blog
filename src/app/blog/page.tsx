import { getAllBlogPost } from "@/utils/contentful-data";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document } from "@contentful/rich-text-types";

// Define the TypeScript type for a blog post (if you're using TypeScript)
type BlogPost = {
  slug: string;
  title: string;
  thumbnailImage: string; // Ensure this is a valid URL
  content: Document; // Contentful rich-text document type
};

export async function getStaticProps() {
  const posts: BlogPost[] = await getAllBlogPost(); // Ensure `getAllBlogPost` returns this structure
  return {
    props: {
      posts,
    },
    revalidate: 10, // Revalidate the page every 10 seconds
  };
}

export default function BlogPage({ posts }: { posts: BlogPost[] }) {
  return (
    <>
      <section className="mx-8 pt-20">
        <div className="border w-full bg-[#090d1f] flex justify-center items-center">
          <h1 className="font-sans text-[100px] text-white">THE BLOG</h1>
        </div>

        <div>
          {posts?.map((item) => (
            <article key={item.slug}>
              {/* Handle Image Rendering */}
              <div className="relative w-full h-32">
                {item.thumbnailImage ? (
                  <Image
                    src={item.thumbnailImage}
                    alt={item.title || "Thumbnail image"}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="bg-gray-300 w-full h-full flex items-center justify-center">
                    <p>No Image Available</p>
                  </div>
                )}
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold mt-4">{item.title}</h2>

              {/* Rich-Text Content */}
              {item.content &&
                documentToReactComponents(item.content, {
                  renderNode: {
                    [BLOCKS.HEADING_2]: (node, children) => (
                      <h2 className="text-3xl font-bold">{children}</h2>
                    ),
                  },
                })}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
