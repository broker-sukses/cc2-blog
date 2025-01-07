// import Image from "next/image";
// import Link from "next/link";

// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import { BLOCKS, Document } from "@contentful/rich-text-types";
// import { getAllBlogPost } from "@/utils/contentful-data";

// // async function getPosts() {
// //   try {
// //     const res = await fetch(
// //       "https://cdn.contentful.com/spaces/q6rx6pxhzrxs/environments/master/entries?access_token=OJYMRkGwWqI095c3PaIkK1fh7EgCCHwFa6q1nCNXZk4&content_type=blogPosts"
// //     );
// //     const data = await res.json();
// //     return data;
// //   } catch (error) {
// //     console.error(error);
// //     return null;
// //   }
// // }

// type Asset = {
//   sys: {
//     id: string;
//   };
//   fields: {
//     file: {
//       url: string;
//     };
//   };
// };

// type ContentfulBlogPost = {
//   items: Array<{
//     fields: {
//       title: string;
//       slug: string;
//       content: Document;
//       featuredImage: {
//         sys: {
//           id: string;
//         };
//       };
//     };
//   }>;
//   includes: {
//     Asset: Asset[];
//   };
// };

// // type Post = {
// //   title: string;
// //   slug: string;
// //   content: string;
// //   featuredImage: string;
// // };

// function mapBlogPost(data: ContentfulBlogPost) {
//   const posts = data.items.map((item) => {
//     const featuredImage = data.includes.Asset.find(
//       (asset) => asset.sys.id === item.fields.featuredImage.sys.id
//     );
//     return {
//       title: item.fields.title,
//       slug: item.fields.slug,
//       content: item.fields.content,
//       featuredImage: `https:${featuredImage?.fields.file.url}`,
//     };
//   });
//   return posts;
// }

// export default async function PostsPage() {
//   const posts = await getAllBlogPost();
//   // const posts = mapBlogPost(contentfulData);

//   // console.log(contentfulData);

//   return (
//     <section className="border border-10">
//       {posts.map((el) => {
//         return (
//           <Link href={`/posts/${el.slug}`} key={el.slug}>
//             <article>
//               <div className="relative w-full h-32">
//                 <Image
//                   src={el.featuredImage}
//                   alt="Image"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <h2>Written by: {el.title}</h2>
//               {documentToReactComponents(el.content, {
//                 renderNode: {
//                   [BLOCKS.HEADING_2]: (node, children) => {
//                     return <h2 className="text-xl text-red-500">{children}</h2>;
//                   },
//                   [BLOCKS.PARAGRAPH]: (node, children) => {
//                     return <p>{children}</p>;
//                   },
//                 },
//               })}
//             </article>
//           </Link>
//         );
//       })}
//     </section>
//   );
// }
