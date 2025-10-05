import path from "path";
import fs from "fs";
import { PostMetadata } from "@/types/PostMetadata";
import { PostPageMetadata } from "@/types/PostPageMetadata";

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

async function getMDXData(dir: string): Promise<PostPageMetadata[]> {
  const mdxFiles = getMDXFiles(dir);
  return Promise.all(
    mdxFiles.map(async (file) => {
      const slug = path.basename(file, path.extname(file));
      const { metadata }: { metadata: PostMetadata } = await import(
        `@/posts/${slug}.mdx`
      );

      return {
        metadata,
        slug,
      };
    }),
  );
}

export async function getPostsMetadatas() {
  return getMDXData(path.join(process.cwd(), "src", "posts"));
}
