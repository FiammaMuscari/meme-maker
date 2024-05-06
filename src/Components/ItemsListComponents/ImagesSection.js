import React, { useState } from "react";
import items from "../../Data/items.json";

// images can be dragged or cliked for adding it to canvas

function ImagesSection(props) {
  // get images that are declared as photos from /Data/items.json
  const photosFilteredArray = items.filter(
    (el) => el.elementCategory === "photos"
  );

  return (
    <div className="itemsSection">
      <div className="itemsWrapper">
        {photosFilteredArray.map((item, i) => (
          <div className="imageContainer" key={i}>
            <img
              src={item.source}
              alt=""
              className="itemsImage"
              draggable="true"
              elementcategory={item.elementCategory}
              onDragStart={(e) => {
                props.onChangeDragUrl(e.target.src);
              }}
              onClick={(e) => {
                props.handleAddOnClick(e.target.src);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImagesSection;
