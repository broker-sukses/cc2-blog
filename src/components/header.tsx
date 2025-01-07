import Link from "next/link";
// import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed w-full">
      <nav className="flex flex-row items-center justify-between gap-2 w-full p-6 pb-7 border bg-[#090d1f] text-white">
        <div className="pl-2">
          <p>anas juliansyah</p>
        </div>
        <div className="flex flex-row items-center justify-between pr-2">
          <ul className="pr-4">
            <li className="flex gap-4 justify-center">
              <Link href="/">Home</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/blog-categories">Categories</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <button className="border px-4 py-2 rounded hover:bg-slate-300">
            Sign In
          </button>
        </div>
      </nav>
    </header>
  );
}
