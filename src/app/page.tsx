import Image from "next/image";
import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { getBasePath } from "@/utils/getBasePath";

const description =
  "Здесь я делюсь своими мыслями и опытом, пытаюсь рассуждать на философские темы. Надеюсь, вы найдете что-то полезное и интересное!";

export const metadata: Metadata = {
  title: "Путь к истине в жизни",
  description,
};

export default function Home() {
  return (
    <section>
      <PageHeader>
        👋 Добро пожаловать в мой блог &quot;Путь к истине в жизни&quot;!
      </PageHeader>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
        <div className="relative min-w-1/4">
          <Image
            className="rounded-3xl"
            src={`${getBasePath()}/avatar.jpg`}
            alt="Аватар"
            width={200}
            height={200}
            priority
          />
        </div>
        <div>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
}
