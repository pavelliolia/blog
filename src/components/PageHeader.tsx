export function PageHeader({ children }: { children: string }) {
  return (
    <h1 className="mb-8 text-2xl font-semibold tracking-tighter">{children}</h1>
  );
}
