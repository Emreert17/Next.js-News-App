"use client";
import { navbar_links } from "@/app/data/data";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { Lora } from "next/font/google";
import { usePathname } from "next/navigation";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Navbar() {
  const pathName = usePathname();
  return (
    <>
      <div className="flex flex-col h-[120px]">
        <div className="relative flex justify-center items-center my-5">
          <Link href="/">
            <h1
              className={`text-5xl font-medium text-red-600 tracking-[3px] ${lora.className}`}
            >
              Daily Scope
            </h1>
          </Link>
          <div className="absolute right-8 flex items-center gap-2">
            <Link
              href="/pages/search"
              className="p-2 rounded-full hover:bg-gray-200 transition-colors"
            >
              <IoSearch size={32} color="#7A7A73" />
            </Link>
            <Link
              href="/pages/favourites"
              className="p-2 rounded-full hover:bg-red-100 transition-colors"
            >
              <FaHeart size={28} color="#BF092F" />
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <ul className="w-full flex justify-center gap-4 border-t-3 border-b-3 border-stone-200 p-3">
            {navbar_links.map((link) => (
              <li
                key={link.id}
                className={`px-2 cursor-pointer font-normal ${lora.className}`}
              >
                <Link
                  href={link.href}
                  className={`${
                    pathName.startsWith(link.href)
                      ? "after:w-full"
                      : "after:w-0"
                  } after:block after:h-0.5 after:text-semibold after:bg-red-600 after:transition-all after:duration-300`}
                >
                  {link.title.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
