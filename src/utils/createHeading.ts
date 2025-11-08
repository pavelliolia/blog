import CyrillicToTranslit from "cyrillic-to-translit-js";
import React from "react";

const cyrillicToTranslit = CyrillicToTranslit();

function slugify(heading: string) {
  return cyrillicToTranslit
    .transform(heading, "-")
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function extractStringHeading(children: React.ReactNode): string {
  return (
    React.Children.map(children, (child) => {
      if (typeof child === "object") {
        const nestedChildren = (
          child as React.ReactElement<{ children: React.ReactNode }>
        ).props.children;
        return extractStringHeading(nestedChildren);
      } else if (typeof child === "string") {
        return child;
      } else {
        return child?.toString();
      }
    })?.join("-") ?? ""
  );
}

export function createHeading(level: number) {
  const Heading = ({ children }: { children: React.ReactNode }) => {
    const stringHeading = extractStringHeading(children);
    const slug = slugify(stringHeading);

    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children,
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}
