import { useEffect, useState } from "react";
import ShowList from "../ShowList";
import { useSearch } from "../../Context";

function SearchWidget() {
  const [inputValue, setInputValue] = useState("");
  const [searchString, setSearchString] = useState("");
  const { setShowData } = useSearch();

  useEffect(() => {
    const SearchAPI = async () => {
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${searchString}`
      );
      const rawData = await response.json();
      const data = rawData.map((s) => s.show);
      setShowData(data);
    };
    SearchAPI();
  }, [searchString, setShowData]);

  function handleInput(e) {
    const newInput = e.target.value;
    setInputValue(newInput);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchString(inputValue);
    setInputValue("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} required />
        <input type="submit" value="search" />
      </form>
      <ShowList />
    </>
  );
}

export default SearchWidget;
