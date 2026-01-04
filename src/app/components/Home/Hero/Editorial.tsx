import { Article } from "@/app/types/news";
import { getEditorialLabel } from "@/app/utils/getEditorialLabel";

type EditorialProps = {
  news: Article;
}

export default function Editorial({ news }:EditorialProps) {
  const label = getEditorialLabel(news);
  return (
    <>
      <div className="flex flex-col gap-2 border-b-2 border-stone-200">
        <div className="w-full aspect-[3/2] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={news.urlToImage}
            alt="editorial-image"
          />
        </div>
        <div className="flex flex-col gap-1 py-3">
          <h4 className="text-xs font-bold uppercase text-red-600">{label}</h4>
          <h3 className="text-3xl font-extrabold hover:underline leading-snug tracking-wider cursor-pointer">
            {news.title}
          </h3>
          <p className="font-medium leading-relaxed">{news.description}</p>
          <span className="text-xs font-medium uppercase text-stone-500 tracking-wider py-1">
            BY {news.author}
          </span>
        </div>
      </div>
    </>
  );
}
