"use client"
import { useState } from "react";
import Link from "next/link";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { GoDot } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import { Article } from "@/app/types/news";

type SliderProps = {
  articles: Article[],
};

export default function Slider({ articles }: SliderProps) {
  const sliderArticles = articles.slice(0, 3);
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNext() {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderArticles.length - 1 ? 0 : prevIndex + 1
    );
  }
  function handlePrev() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderArticles.length - 1 : prevIndex - 1
    );
  }
  return (
    <>
      
        <div className="max-w-6xl w-full h-[480px] relative overflow-hidden rounded-md border-2 border-stone-200">
        {sliderArticles.map((article, index) => (
          <img
            key={article.url}
            src={article.urlToImage}
            alt={article.title}
            className={`
        absolute inset-0 w-full h-full object-cover
        transition-opacity duration-800 ease-in-out
        ${index === currentIndex ? "opacity-100" : "opacity-0"}
      `}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute bottom-8 left-8 max-w-xl text-white">
          <span className="text-xs font-bold tracking-widest text-red-500 px-8">
            TOP STORY
          </span>
        <Link target="_blank" href={sliderArticles[currentIndex]?.url}>
           <h2 className="text-3xl font-bold mt-2 leading-tight tracking-wide px-8 hover:underline">
            {sliderArticles[currentIndex]?.title}
           </h2>
        </Link>
        </div>

        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white cursor-pointer"
        >
          <IoIosArrowDropleftCircle size={35} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white cursor-pointer"
        >
          <IoIosArrowDroprightCircle size={35} />
        </button>
        <div className="absolute bottom-7 left-1/2 transform -translate-x-1/2 flex gap-2 text-white">
          {sliderArticles.map((_, dotIndex) => (
            <span
              className="cursor-pointer"
              key={dotIndex}
              onClick={() => setCurrentIndex(dotIndex)}
            >
              {currentIndex === dotIndex ? (
                <GoDotFill size={25} />
              ) : (
                <GoDot size={25} />
              )}
            </span>
          ))}
        </div>
      </div>
     
    </>
  );
}
