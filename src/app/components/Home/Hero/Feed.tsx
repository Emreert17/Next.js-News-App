import { Article } from "@/app/types/news";
import { getEditorialLabel } from "@/app/utils/getEditorialLabel";

type FeedProps= {
news: Article;
}

export default function Feed({ news }:FeedProps) {
  const label = getEditorialLabel(news);
  return (
    <>
      <div className="grid grid-cols-3 gap-2 border-b-2 border-stone-200 py-2">
        <div className="col-span-2">
          <div className="flex flex-col gap-1 py-1">
            <h4 className="text-xs font-bold uppercase text-red-600">
              {label}
            </h4>
            <h3 className="text-md font-extrabold hover:underline leading-snug tracking-wider cursor-pointer">
              {news.title}
            </h3>
            <p className="font-medium text-sm leading-relaxed tracking-wider">
              {news.description}
            </p>
            <span className="text-xs font-medium uppercase text-stone-500 tracking-wider py-1">
              BY {news.author}
            </span>
          </div>
        </div>
        <div className="col-span-1">
          <div className="w-full h-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={news.urlToImage ? news.urlToImage : "/default-image.webp"}
              alt={news.title}
            />
          </div>
        </div>
      </div>
    </>
  );
}
