import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShowCard } from "../../components";

function ShowPage() {
  const { id } = useParams();

  const [show, setShow] = useState({ image: {}, rating: {} });

  useEffect(() => {
    const displayShows = async () => {
      const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const data = await response.json();
      setShow(data);
    };
    displayShows();
  }, [id]);

  return <ShowCard show={show} />;
}

export default ShowPage;
