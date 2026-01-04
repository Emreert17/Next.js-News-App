import MoreNewsCard from "./MoreNewsCard";
import { Article } from "@/app/types/news";

type MoreNewsProps ={
  articles: Article[];
}

export default function MoreNews({ articles }:MoreNewsProps) {
  const moreNews = articles.slice(10, 30);

  return (
    <>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold px-8">MOST POPULAR</h2>
        <div className="grid grid-cols-4 gap-10 px-6">
          {moreNews.map((news) => (
            <a target="_blank" key={news.url} href={news.url}>
              <MoreNewsCard news={news} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

// ${getSlug(news.title)}
//  <Link key={news.url} href={`/news/${news.url}`}></Link>
