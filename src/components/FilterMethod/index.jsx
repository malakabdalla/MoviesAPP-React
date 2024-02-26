import ShowCard from "../ShowCard";
import { useSearch } from "../../Context";

function ShowFilter() {
  const { showData, filter } = useSearch();

  const sortedData = showData.slice().sort((a, b) => b.rating - a.rating);

  const filteredData = sortedData.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {filteredData.map((s) =>
        s.image ? <ShowCard key={s.id} show={s} /> : ""
      )}
    </>
  );
}

export default ShowFilter;
