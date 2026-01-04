import { Article } from "@/app/types/news";
import TrendingNewsCard from "./TrendingNewsCard";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
type TrendingNews = {
  articles: Article[];
}

export default function TrendingNews({ articles }:TrendingNews) {
  return (
    <>
      <div className={`flex flex-col gap-4 ${playfair.className}`}>
        <h2 className="text-xl font-bold tracking-widest">LATEST STORIES</h2>
        {articles.map((news) => (
         <a target="_blank" key={news.url} href={news.url}>
           <TrendingNewsCard key={news.url} news={news} />
         </a>
        ))}
      </div>
    </>
  );
}
