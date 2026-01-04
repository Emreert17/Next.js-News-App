"use client";
import FeaturedCard from "@/app/components/Featured/FeaturedCard";
import NewsCard from "@/app/components/NewsList/NewsCard";
import { Article } from "@/app/types/news";
import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import SectionHeading from "@/app/components/SectionHeading/SectionHeading";
import Loading from "./Loading";

const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
const DEFAULT_QUERY = "Trump";

export default function SearchPage() {
  const [query, setQuery] = useState<string>("");
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>();

  const fetchArticle = async (searchQuery: string) => {
    if (!searchQuery.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=${searchQuery}&sortBy=popularity&pageSize=30&apiKey=${apiKey}`
      );
      if (!res.ok) throw new Error(`API Status: ${res.status}`);
      const data = await res.json();
      setArticles(data.articles);
      console.log();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setQuery(DEFAULT_QUERY);
    fetchArticle(DEFAULT_QUERY);
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    setQuery("");
    e.preventDefault();
    fetchArticle(query);
  };

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full flex flex-col gap-2 my-2">
          <SectionHeading>Search stories from Daily Scope</SectionHeading>
          <SearchForm
            query={query}
            setQuery={setQuery}
            handleSearch={handleSearch}
          />
          {articles.length > 0 && (
            <>
              <div className="grid grid-cols-2 gap-12 px-12 py-6">
                {articles.slice(0, 2).map((article) => (
                  <a target="_blank" key={article.url} href={article.url}>
                    <FeaturedCard news={article} />
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-6 px-12 py-6">
                {articles.slice(2, 12).map((article) => (
                  <a target="_blank" key={article.url} href={article.url}>
                    <NewsCard news={article} />
                  </a>
                ))}
              </div>
            </>
          )}
          {loading && <Loading />}
        </div>
      </div>
    </>
  );
}
