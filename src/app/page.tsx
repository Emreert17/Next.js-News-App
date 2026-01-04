import TrendingNews from "./components/Home/SideBar/TrendingNews";
import Hero from "./components/Home/Hero/Hero";
import MoreNews from "./components/Home/MoreNews/MoreNews";
import Slider from "./components/Home/Slider/Slider";
import { ApiResponse } from "./types/news";

const apiKey = process.env.NEWS_API_KEY;
const heroNewsUrl = `https://newsapi.org/v2/everything?q=world&sortBy=popularity&pageSize=60&apiKey=${apiKey}`;
const trendNewsUrl = `https://newsapi.org/v2/everything?q=trending&sortBy=popularity&pageSize=8&apiKey=${apiKey}`;

export default async function Home() {
  const heroNews = await fetch(heroNewsUrl, { next: { revalidate: 600 } });
  const heroData: ApiResponse = await heroNews.json();

  const trendNews = await fetch(trendNewsUrl, { next: { revalidate: 600 } });
  const trendData: ApiResponse = await trendNews.json();
  return (
    <>
      <div className="flex flex-col gap-25">
        <div className="flex justify-center">
          <Slider articles={heroData.articles} />
        </div>
        <div className="grid grid-cols-8 gap-8">
          <div className="col-span-6">
            <Hero articles={heroData.articles} />
          </div>
          <div className={`col-span-2 w-full`}>
            <TrendingNews articles={trendData.articles} />
          </div>
        </div>
        <div className="border-t-3 border-stone-300 py-8 px-8">
          <MoreNews articles={heroData.articles} />
        </div>
      </div>
    </>
  );
}
