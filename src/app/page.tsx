import Image from "next/image";

export const metadata = {
  title: 'Павел Лёля - Блог',
  description: 'Главная страница.',
}

export default function Home() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Добро пожаловать в мой блог!
      </h1>
      <Image
          className="dark:invert"
          src="/avatar.jpg"
          alt="Next.js logo"
          width={150}
          height={150}
          priority
        />
      <p className="mb-4">
        Привет! Меня зовут Паша, здесь я делюсь своими мыслями и опытом. Надеюсь, вы найдете здесь что-то полезное и интересное!
      </p>
    </section>
  );
}
