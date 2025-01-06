import { getAllBlogPost } from "@/utils/contentful-data";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

export default async function BlogPage() {
  const posts = await getAllBlogPost();
  return (
    <>
      <section className="mx-8 pt-20">
        <div className="border w-full  bg-[#090d1f] flex justify-center items-center">
          <h1 className="font-sans text-[100px] text-white">THE BLOG</h1>
        </div>

        <div>
          {posts?.map((item) => {
            return (
              <article key={item.slug}>
                <div className="relative w-full h-32">
                  <Image
                    src={item.thumbnailImage}
                    alt="Thumbnail image"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2>{item.title}</h2>
                {documentToReactComponents(item.content, {
                  renderNode: {
                    [BLOCKS.HEADING_2]: (node, children) => {
                      return <h2 className="text-3xl font-bold">{children}</h2>;
                    },
                    // [BLOCKS.PARAGRAPH]: (node, children) => {
                    //   return <p className="text-xl">{children}</p>;
                    // },
                  },
                })}
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
