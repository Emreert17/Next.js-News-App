import React from "react";
import { IoSearch } from "react-icons/io5";

type SearchFormProps = {
  query: string;
  setQuery: (value: string) => void;
  handleSearch: (e: React.FormEvent) => void;
};

export default function SearchForm({
  query,
  setQuery,
  handleSearch,
}: SearchFormProps) {
  return (
    <>
      <form
        onSubmit={handleSearch}
        className="flex justify-center gap-3 border-b-3 border-stone-200 pb-6"
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          className="w-120 border-2 border-stone-400 rounded-md p-2"
          placeholder="Search news..."
        />
        <button
          type="submit"
          className="rounded-full text-stone-50 bg-stone-400 hover:bg-stone-500 cursor-pointer p-3"
        >
          <IoSearch size={28} />
        </button>
      </form>
    </>
  );
}
