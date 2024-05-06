import React, { useRef } from "react";
import items from "../../Data/items.json";

function BackgroundsSection(props) {
  const backgroundsFilteredArray = items.filter(
    (el) => el.elementCategory === "backgrounds"
  );

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target.result;
        props.addToBackground(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="itemsSection">
      <div className="clearBackgroundWrap">
        <span
          className="clearBackgroundText"
          onClick={() => {
            props.removeBackground();
          }}
        >
          Click to clear background
        </span>
      </div>
      <div className="itemsWrapper">
        {backgroundsFilteredArray.map((item, i) => (
          <div className="imageContainer" key={i}>
            <img
              src={item.source}
              alt=""
              className="itemsImage"
              draggable="false"
              elementcategory={item.elementCategory}
              onClick={(e) => {
                props.addToBackground(e.target.src);
              }}
            />
          </div>
        ))}
      </div>
      {/* Hidden file input for uploading images */}
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
        ref={fileInputRef}
      />
      <button onClick={handleUploadButtonClick}>Upload Image</button>
    </div>
  );
}

export default BackgroundsSection;
