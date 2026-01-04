import { Article } from "@/app/types/news"
import FeaturedCard from "./FeaturedCard";

type FeaturedListProps ={
    news: Article[];
}

export default function FeaturedList({news}:FeaturedListProps){
    const featuredListData = news?.slice(4,6);

    return(
        <>
         <div className="grid grid-cols-2 gap-8 px-12">
            {featuredListData.map((news)=>(
                <a target="_blank" key={news.url} href={news.url}>
                    <FeaturedCard news={news}/>
                </a>
            ))}
         </div>
        </>
    )
}