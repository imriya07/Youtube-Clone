import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../Utils/constants";
import { cacheResults } from "../Utils/searchSlice";

function Head() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSugsestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSugsestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    //console.log(json[1]);
    setSuggestions(json[1]);

    // update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-1 m-2 shadow-lg ">
      <div className="flex col-span-1 mx-2">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0MAAUOBQikpKQpJSadnZ309PUAAAAIAADZ2Nj8/Pyop6cYExXBwMAtKSpta2xpZ2draWpfXV7BwcGvrq77CGWbAAABG0lEQVR4nO3cwXKCMBQFUApFTQAVtf3/Ty3tsKhLZpKSxnP+4M57JCwyt2kAAAAAAAAAAAAAAADgFQ1TX4ZpyJJvvIXYlSGGecyQcI5v5Yi39AGHsHeqJyH9ovYljXAZ4qeEm9W/pc29pCHmOGma8R7iexky3RbLovbHMvR5bnwAAAAAAAAAANhkPJUhV77hcT2U4frI8mToI5zbUpzDJX3A06Hd+7neL22X/mHbpbDXl+mHeOz2DvUk9skT1j/D+r/DZYiVn6UvcB9+2/tnZpUrHgAAAAAAAAAAbDBMe5ftrXK17M619yZq2f1bGfpLp5JGmKWDtv6E9W9p/SfNz22xdxn7Kl/LbuW9+gAAAAAAAAAAAAAAAPCffAHLSDTi5JU+gwAAAABJRU5ErkJggg=="
        ></img>
        <a href="/">
          <img
            className="h-10 mx-2"
            alt="YouTube"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png?20200109235614"
          ></img>
        </a>
      </div>
      <div className="col-span-10  justify-center ">
        <div>
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
            className="w-1/4 border border-gray-400 p-2 rounded-l-full"
            type="text"
          ></input>
          <button className="border border-gray-400 px-5 py-2 bg-gray-100 rounded-r-full">
            🔍
          </button>
        </div>
        {showSuggestion && (
          <div className="fixed bg-white py-2 px-5 w-[37rem] shadow-lg rounded-lg">
            <ul>
              {suggestions.map((result) => (
                <li key={result} className=" py-2 shadow-sm hover:bg-gray-100">
                  {result}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          alt="User icon"
          src="data:image/png;base64,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"
        ></img>
      </div>
    </div>
  );
}

export default Head;
