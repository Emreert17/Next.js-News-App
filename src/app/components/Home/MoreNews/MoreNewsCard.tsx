import { Article } from "@/app/types/news";
import { getEditorialLabel } from "@/app/utils/getEditorialLabel";

type NewsCardProps = {
  news: Article;
}

export default function MoreNewsCard({ news }:NewsCardProps) {
  const label = getEditorialLabel(news);
  return (
    <>
      <div className="h-[480px] flex flex-col gap-2 border-b-2 border-stone-200 px-2">
        <div className="w-full aspect-[3/2] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={news?.urlToImage}
            alt={news.title}
          />
        </div>
        <div className="flex flex-col gap-2 py-2">
          <h4 className="text-xs font-bold uppercase text-red-600">{label}</h4>
          <h3 className="text-lg font-bold hover:underline leading-snug tracking-wider cursor-pointer">
            {news.title}
          </h3>
          <p className="text-sm font-medium leading-relaxed">
            {news.description}
          </p>
          <span className="text-xs font-medium uppercase text-stone-500 tracking-widest py-1">
            BY {news.author}
          </span>
        </div>
      </div>
    </>
  );
}
