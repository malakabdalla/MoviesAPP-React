/* eslint-disable react/prop-types */
function ShowCard({ show }) {
  return (
    <div className="show-card">
      <div>
        <img src={show.image.medium} />
      </div>
      <div>
        <div>{show?.rating?.average}</div>
        <h2>{show.name}</h2>
        <em>
          {show.language} {show.premiered}
        </em>
        <div dangerouslySetInnerHTML={{ __html: show.summary }}></div>
      </div>
    </div>
  );
}

export default ShowCard;
