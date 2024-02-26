import { useEffect, useState } from "react";
import GalleryImg from "../GalleryImg";
import { Link } from "react-router-dom";

function ShowGallery() {
  const [shows, setShows] = useState([]);
  useEffect(() => {
    const displayShows = async () => {
      const response = await fetch("https://api.tvmaze.com/shows");
      const data = await response.json();
      setShows(data);
    };
    displayShows();
  }, []);

  return (
    <div className="shows">
      {shows.map((show) => (
        <Link key={show.id} to={`/shows/${show.id}`}>
          <GalleryImg Key={show.id} show={show} />
        </Link>
      ))}
    </div>
  );
}

export default ShowGallery;
