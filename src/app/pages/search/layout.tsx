import { ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface SearchLayoutProps {
  children: ReactNode;
}

export default function SearchLayout({ children }: SearchLayoutProps) {
  return (
    <>
      <div
        className={`min-h-screen flex flex-col gap-20 px-18 ${inter.className}`}
      >
        {children}
      </div>
    </>
  );
}
