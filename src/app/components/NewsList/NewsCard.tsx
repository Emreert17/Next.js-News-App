import { Article } from "@/app/types/news";
import { getEditorialLabel } from "@/app/utils/getEditorialLabel";

type NewsCardProps = {
  news: Article;
};

export default function NewsCard({ news }: NewsCardProps) {
  const label = getEditorialLabel(news);
  return (
    <>
      <div className="grid grid-cols-6 items-center gap-6 border-b-2 border-stone-200 py-5">
        <div className="col-span-2">
          <div className="w-full h-[200px] overflow-hidden">
            <img
              src={news.urlToImage}
              alt={news.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="col-span-4 flex flex-col gap-2 px-4">
          <span className="text-xs font-bold uppercase text-red-600">
            {label}
          </span>
          <h4 className="text-2xl font-extrabold hover:underline leading-snug tracking-wider">
            {news.title}
          </h4>
          <p className="font-medium leading-relaxed">{news.description}</p>
          <span className="text-xs font-medium uppercase text-stone-500 tracking-wider py-1">
            BY {news.author}
          </span>
        </div>
      </div>
    </>
  );
}
