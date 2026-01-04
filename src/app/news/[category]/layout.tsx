import { ReactNode } from "react";
import {Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface CategoryLayoutProps {
  children: ReactNode;
}

export default function CategoryLayout({children}:CategoryLayoutProps){
    return(
        <>
            <div className={`flex flex-col gap-20 px-12 ${inter.className}`}>
                {children}
            </div>
        </>
    )
}
