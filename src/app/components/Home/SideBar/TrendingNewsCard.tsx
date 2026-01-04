import { Article } from "@/app/types/news";
import { getEditorialLabel } from "@/app/utils/getEditorialLabel";

type TrendingNewsCard = {
  news: Article;
}

export default function TrendingNewsCard({ news }:TrendingNewsCard) {
  const label = getEditorialLabel(news);
  return (
    <>
      <div className="border-b-2 border-stone-200 py-3">
        <div className="flex gap-2 justify-between">
          <div className="flex flex-col flex-1 gap-1">
            <h4 className="text-xs font-bold uppercase text-red-600">
              {label}
            </h4>
            <p className="text-md font-bold hover:underline leading-relaxed cursor-pointer">
              {news.title}
            </p>
            <span className="text-sm font-medium text-stone-500">
              BY {news.author}
            </span>
          </div>
          <div className=" w-20 h-25 flex-shrink-0 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={news.urlToImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
