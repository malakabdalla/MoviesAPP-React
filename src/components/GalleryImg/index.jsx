/* eslint-disable react/prop-types */
function GalleryImg({ show }) {
  return (
    <div className="gallery-image">
      <img src={show.image.medium} />
    </div>
  );
}

export default GalleryImg;
