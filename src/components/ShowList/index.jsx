import ShowCard from "../ShowCard";
import { useSearch } from "../../Context";

function ShowList() {
  const { showData } = useSearch();
  return (
    <>
      {showData.map((s) => (s.image ? <ShowCard key={s.id} show={s} /> : ""))}
    </>
  );
}

export default ShowList;
