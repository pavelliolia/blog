import type { MDXComponents } from "mdx/types";
import { PageHeader } from "@/components/PageHeader";
import { Code } from "@/components/Code";
import { CustomLink } from "@/components/CustomLink";
import { RoundedImage } from "@/components/RoundedImage";
import { createHeading } from "@/utils/createHeading";

const components: MDXComponents = {
  h1: PageHeader,
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
