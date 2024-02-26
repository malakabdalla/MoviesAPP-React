import { useState, useContext, createContext } from "react";

const SearchContext = createContext();
// eslint-disable-next-line react/prop-types
export const SearchProvider = ({ children }) => {
  const [showData, setShowData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [searchString, setSearchString] = useState("");
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("rating");
  const [data, setData] = useState([]);
  const [selectedFilterOption, setSelectedFilterOption] = useState("all");

  return (
    <SearchContext.Provider
      value={{
        showData,
        setShowData,
        inputValue,
        setInputValue,
        searchString,
        setSearchString,
        filter,
        setFilter,
        sortBy,
        setSortBy,
        data,
        setData,
        selectedFilterOption,
        setSelectedFilterOption,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSearch = () => useContext(SearchContext);
