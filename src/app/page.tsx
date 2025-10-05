import Image from "next/image";
import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Павел Лёля - Блог",
  description: "Главная страница.",
};

export default function Home() {
  return (
    <section>
      <PageHeader>👋 Добро пожаловать в мой блог!</PageHeader>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
        <div className="relative min-w-1/4">
          <Image
            className="rounded-3xl"
            src="/avatar.jpg"
            alt="Next.js logo"
            width={200}
            height={200}
            priority
          />
        </div>
        <p className="">
          Привет! Меня зовут Паша, здесь я делюсь своими мыслями и опытом.
          Надеюсь, вы найдете здесь что-то полезное и интересное!
        </p>
      </div>
    </section>
  );
}
