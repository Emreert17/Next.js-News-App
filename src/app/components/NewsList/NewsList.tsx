import NewsCard from "./NewsCard"
import { Article } from "@/app/types/news"

type NewsListProps = {
    news: Article[];
}
export default function NewsList({news}:NewsListProps){
    const newsListData = news.slice(10,20)
    return(
        <>
        <div className="flex flex-col gap-6 px-12">
         {newsListData.map((news)=>(
           <a target="_blank" key={news.url} href={news.url}>
            <NewsCard news={news}/>
           </a>
         ))}
        </div>
        </>
    )
}