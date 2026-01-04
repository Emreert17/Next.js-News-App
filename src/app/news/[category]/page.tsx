import { ApiResponse } from "@/app/types/news";
import FeaturedList from "@/app/components/Featured/FeaturedList";
import NewsList from "@/app/components/NewsList/NewsList";
import SectionHeading from "@/app/components/SectionHeading/SectionHeading";

type PageProps = {
  params: {
    category: string;
  };
};
const apiKey = process.env.NEWS_API_KEY;

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const pageUrl = `https://newsapi.org/v2/everything?q=${category}&sortBy=popularity&pageSize=60&apiKey=${apiKey}`;

  const res = await fetch(pageUrl, { next: { revalidate: 600 } });
  const pageData: ApiResponse = await res.json();

  return (
    <>
      <div className="flex justify-center border-b-3 border-stone-200 py-3">
        <SectionHeading> {category.toUpperCase()}</SectionHeading>
      </div>
      <FeaturedList news={pageData?.articles ?? []} />
      <NewsList news={pageData?.articles ?? []} />
    </>
  );
}
