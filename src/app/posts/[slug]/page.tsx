import { getPostsMetadatas } from "@/utils/getPostsMetadatas";
import { Metadata } from "next";
import { formatDate } from "@/utils/formatDate";
import { PageHeader } from "@/components/PageHeader";

export const dynamicParams = false;

export async function generateStaticParams() {
  const postsMetadatas = await getPostsMetadatas();

  return postsMetadatas.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  const postMetadata = (await getPostsMetadatas()).find(
    (post) => post.slug === slug,
  );
  if (!postMetadata) {
    return;
  }

  return {
    title: postMetadata.metadata.title,
    description: postMetadata.metadata.description,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post, metadata } = await import(`@/posts/${slug}.mdx`);

  return (
    <section>
      <PageHeader>{metadata.title}</PageHeader>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(metadata.publishedAt)}
        </p>
      </div>
      <article className="prose">
        <Post />
      </article>
    </section>
  );
}
