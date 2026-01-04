import { Article } from "@/app/types/news";
import { getEditorialLabel } from "@/app/utils/getEditorialLabel";

type FeaturedCardProps = {
  news: Article;
};
export default function FeaturedCard({ news }: FeaturedCardProps) {
  const label = getEditorialLabel(news);
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="relative w-full overflow-hidden">
          <img
            className="w-full h-[300px] object-cover"
            src={news.urlToImage}
            alt={news.title}
          />
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <span className="text-xs font-bold uppercase text-red-600">
            {label}
          </span>
          <h3 className="text-3xl font-bold leading-snug hover:underline line-clamp-1">
            {news.title}
          </h3>
          <p className="text-md font-medium text-stone-800 leading-relaxed">
            {news.description}
          </p>
          <span className="text-xs font-medium uppercase text-stone-500 tracking-wider py-1">
            BY {news.author}
          </span>
        </div>
      </div>
    </>
  );
}
