import Image from "next/image";
import { getAllBlogPost } from "@/utils/contentful-data";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

import HeroSection from "@/components/hero-section";

export default async function HomePage() {
  const posts = await getAllBlogPost();
  return (
    <>
      <HeroSection />
      <section className="border p-5 bg-[#090d1f] text-white">
        <h2 className="text-white pb-5 text-2xl">Featured Post</h2>
        <div className="bg-[#090d1f] flex flex-row ">
          <div>
            {posts?.map((item) => {
              return (
                <article key={item.slug}>
                  <div className="relative w-full h-32">
                    <Image
                      src={item.thumbnailImage}
                      alt="Thumbnail image"
                      fill
                      className="object-cover -z-20"
                    />
                  </div>
                  <h2>{item.title}</h2>
                  {documentToReactComponents(item.content, {
                    renderNode: {
                      [BLOCKS.HEADING_2]: (node, children) => {
                        return (
                          <h2 className="text-3xl font-bold">{children}</h2>
                        );
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
        </div>
      </section>
      <section className="border p-5 bg-[#090d1f] text-white">
        <h2 className="text-white pb-5 text-2xl">All blog posts</h2>
        <div className="bg-[#090d1f] flex flex-row ">
          <div>
            {posts?.map((item) => {
              return (
                <article key={item.slug}>
                  <div className="relative w-full h-32">
                    <Image
                      src={item.thumbnailImage}
                      alt="Thumbnail image"
                      fill
                      className="object-cover -z-20"
                    />
                  </div>
                  <h2>{item.title}</h2>
                  {documentToReactComponents(item.content, {
                    renderNode: {
                      [BLOCKS.HEADING_2]: (node, children) => {
                        return (
                          <h2 className="text-3xl font-bold">{children}</h2>
                        );
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
        </div>
      </section>
    </>
  );
}
