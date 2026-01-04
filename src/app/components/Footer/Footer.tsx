import { navbar_links } from "@/app/data/data";
import Link from "next/link";
import { FaInstagram, FaYoutube, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <>
      <div className="h-[180px] flex justify-evenly items-center gap-6 border-b border-stone-50 bg-stone-900 text-stone-50">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-4xl font-medium uppercase">Daily Scope</h2>
          <div className="flex gap-3">
            <span>
              <FaInstagram size={25} />
            </span>
            <span>
              <FaXTwitter size={25} />
            </span>
            <span>
              <FaYoutube size={25} />
            </span>
            <span>
              <FaPinterestP size={25} />
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-medium">More News</h3>
          <ul>
            {navbar_links.map((link) => (
              <li
                className="uppercase text-sm tracking-wider hover:underline cursor-pointer"
                key={link.id}
              >
               <Link href={link.href}>
                {link.title}
               </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-medium">Contact</h3>
          <ul>
            <li className="text-sm tracking-wider hover:underline cursor-pointer">
              Contact DS
            </li>
            <li className="text-sm tracking-wider hover:underline cursor-pointer">
              About US
            </li>
            <li className="text-sm tracking-wider hover:underline cursor-pointer">
              Careers
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
