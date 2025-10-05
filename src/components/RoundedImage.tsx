import React from "react";

export function RoundedImage(props: any) {
  return <img alt={props.alt} className="rounded-lg" {...props} />;
}
