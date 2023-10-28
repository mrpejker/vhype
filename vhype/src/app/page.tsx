import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <h1 className="text-5xl font-bold">VHYPE</h1>
      <p className="mt-4 text-2xl">A place to share your hype</p>
      <Link href="/prize">
        <p className="mt-4 rounded bg-[#2e026d] px-4 py-2 text-white hover:bg-[#15162c]">
          Win your amazing prize!
        </p>
      </Link>
    </main>
  );
}
