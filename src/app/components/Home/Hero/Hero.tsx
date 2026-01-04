import {Inter } from "next/font/google";
import Featured from "./Featured";
import Editorial from "./Editorial";
import Feed from "./Feed";
import {Article} from "@/app/types/news";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
type HeroProps = {
  articles: Article[];
}

export default function Hero({ articles }: HeroProps ) {
  const features = articles.slice(3, 6);
  const editorial = articles.slice(6, 7);
  const feed = articles.slice(7, 9);

  return (
    <>
      <div className={`grid grid-cols-6 gap-10 ${inter.className}`}>
        <div className="col-span-2">
          <div className="flex flex-col gap-6">
            {features.map((news) => (
              <a target="_blank" key={news.url} href={news.url}>
                <Featured key={news.url} news={news} />
              </a>
            ))}
          </div>
        </div>
        <div className="col-span-4">
          <div className="flex flex-col gap-6">
            {editorial.map((news) => (
             <a target="_blank" href={news.url} key={news.url}>
               <Editorial key={news.url} news={news} />
             </a>
            ))}

            <div className="flex flex-col gap-8">
              {feed.map((news) => (
                <a target="_blank" href={news.url} key={news.url}>
                  <Feed key={news.url} news={news} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
