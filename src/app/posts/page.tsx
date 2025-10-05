import { PageHeader } from "@/components/PageHeader";
import { Metadata } from "next";
import { getPostsMetadatas } from "@/utils/getPostsMetadatas";
import Link from "next/link";
import { formatDate } from "@/utils/formatDate";

export const metadata: Metadata = {
  title: "Посты",
  description: "Список постов.",
};

export default async function Page() {
  const postsMetadatas = await getPostsMetadatas();

  return (
    <section>
      <PageHeader>Посты</PageHeader>
      {postsMetadatas
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/posts/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.description}
              </p>
            </div>
          </Link>
        ))}
    </section>
  );
}
