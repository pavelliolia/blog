export default function publicLoader({ src }: { src: string }) {
  const basePath = process.env.BASE_PATH || "";
  return basePath ? `${basePath}/${src}` : src;
}
