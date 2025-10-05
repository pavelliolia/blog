import Image from "next/image";
import React from "react";

export function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg" priority {...props} />;
}
