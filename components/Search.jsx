"use client";

import { useDebounce } from "@/hooks/useDebounce";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SearchResult from "./SearchResult";

export default function Search({ docs }) {
  const [searchResult, setSearchResult] = useState([]);
  const [term, setTerm] = useState("");

  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value;
    setTerm(value);
    doSearch(value);
  };

  const doSearch = useDebounce((term) => {
    const found = docs.filter((doc) => {
      return doc.title.toLowerCase().includes(term.toLowerCase());
    });
    setSearchResult(found);
  }, 500);

  const closeSearchResult = (e) => {
    e.preventDefault();
    router.push(e.target.href);
    setTerm("");
  };
  return (
    <>
      <div className="relative hidden lg:block lg:max-w-md lg:flex-auto">
        <button
          type="button"
          className="focus:[&amp;:not(:focus-visible)]:outline-none hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex"
        >
          <Image
            src="/search.svg"
            className="h-5 w-5"
            width={50}
            height={50}
            alt="searchIcon"
          />
          <input
            type="text"
            value={term}
            placeholder="Search..."
            onChange={handleChange}
            className="flex-1 focus:border-none focus:outline-none"
          />
          <kbd className="ml-auto w-auto text-2xs text-zinc-400 dark:text-zinc-500">
            <kbd className="font-sans">Ctrl </kbd>
            <kbd className="font-sans">K</kbd>
          </kbd>
        </button>
        {/* <!-- result card -->
        
      </div> */}
        {/* <!-- Mobile Responsive Header Starts --> 
      <div className="flex items-center gap-5 lg:hidden">
        <button
          type="button"
          className="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5"
          aria-label="Toggle navigation"
        >
          <img
            src="./assets/icons/hamburger.svg"
            alt="Menu"
            className="w-2.5 stroke-zinc-900 dark:stroke-white"
          />
        </button>
        <a aria-label="Home" href="/">
          <img src="./assets/icons/logo.svg" alt="Protocol" className="h-6" />
        </a>
      </div> */}
        {/* <--Mobile Responsive Header Ends --> 
      <div className="flex items-center gap-5">
        <div className="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15"></div>
        <div className="flex gap-4">
          <div className="contents lg:hidden">
            <button
              type="button"
              className="focus:[&amp;:not(:focus-visible)]:outline-none flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5 lg:hidden"
              aria-label="Find something..."
            >
              <img
                src="./assets/icons/search.svg"
                alt="Search"
                className="h-5 w-5"
              />
            </button>
          </div>
        </div>
      </div> */}
      </div>
      {term && term.trim().length > 0 && (
        <SearchResult
          results={searchResult}
          term={term}
          closeSearchResult={closeSearchResult}
        />
      )}
    </>
  );
}
