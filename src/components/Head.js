import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { useSelector } from "react-redux";
import { MdLightMode, MdOutlineNightlightRound } from "react-icons/md";
import "../../src/style.css";
import { IoReorderThreeOutline } from "react-icons/io5";
import { YOU_TUBE_LOGO } from "../utils/constants";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [toggleMode, setToggleMode] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  useEffect(() => {
    const body = document.body;
    body.classList.add(toggleMode ? "dark-mode" : "light-mode");

    // Cleanup function to remove the class when the component unmounts
    return () => {
      body.classList.remove("dark-mode", "light-mode");
    };
  }, [toggleMode]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: data[1],
      })
    );
  };

  const toggleModeHandler = () => {
    setToggleMode((prevToggleMode) => !prevToggleMode);

    // Toggle body class for dark and light mode
    const body = document.body;
    body.classList.toggle("dark-mode", !toggleMode);
    body.classList.toggle("light-mode", toggleMode);
  };

  return (
    <>
      <div className="grid grid-flow-col p-3 m-1">
        <div className="flex col-span-1">
          <IoReorderThreeOutline
            className="h-10 cursor-pointer w-9"
            onClick={() => toggleMenuHandler()}
          />
          <a href="/">
            <img className="h-10 mx-2" alt="youtube-logo" src={YOU_TUBE_LOGO} />
          </a>
        </div>
        <div className="relative col-span-10">
          <div className="text-center">
            <input
              className="px-5 w-1/2 border text-black border-gray-400 p-2 rounded-l-full "
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            <button className="border border-gray-400 py-2 px-5 bg-gray-100 rounded-r-full">
              🔍
            </button>
          </div>

          {suggestions.length > 0 && showSuggestions && (
            <div className="absolute fixed bg-white ml-[270px] py-2 px-2 w-[37.5rem] rounded-xl shadow-lg border text-black border-gray-300">
              <ul>
                {suggestions.map((s) => (
                  <li
                    key={s}
                    className="py-2 px-3 cursor-pointer hover:bg-gray-100 rounded-lg "
                  >
                    🔍 {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="col-span-1">
          <img
            className="h-10"
            alt="user-icon"
            src="https://freesvg.org/img/abstract-user-flat-4.png"
          />
        </div>
        <div className="mt-2 pt-2" onClick={toggleModeHandler}>
          {toggleMode ? <MdOutlineNightlightRound /> : <MdLightMode />}
        </div>
      </div>
    </>
  );
};

export default Head;
