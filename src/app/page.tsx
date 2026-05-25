import SpringDemo from "./components/SpringDemo";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-12 bg-gradient-to-br from-zinc-50 via-pink-50 to-indigo-100 px-6 py-20 font-sans dark:from-zinc-950 dark:via-indigo-950 dark:to-zinc-900">
      <header className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          Next.js + React Spring
        </h1>
        <p className="mt-3 max-w-xl text-base text-zinc-600 dark:text-zinc-400">
          Animation demo dùng @react-spring/web. Click vào hộp để xem hiệu ứng.
        </p>
      </header>

      <SpringDemo />
    </div>
  );
}
