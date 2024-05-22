import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { mens_kurta } from "../../../Data/mens_kurta";

const HomeSectionCarousel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 2 },
    728: { items: 3 },
    1024: { items: 6 },
  };
  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data
    .slice(0, 10)
    .map((item) => <HomeSectionCard product={item} />);
  console.log(activeIndex);
  return (
    <div className="px-4 lg:px-8 ">
      <h2 className="text-2xl font-extrabold text-left text-gray-800 py-5">
        {sectionName}
      </h2>
      <div className="relative p-5 ">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex < items.length - 6 && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "50%",
              right: "-3rem",
              transform: "translateY(-50%) rotate(90deg)",
              backgroundColor: "white",
              "&:hover": {
                backgroundColor: "grey",
              },
            }}
            aria-label="Next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}

        {activeIndex !== 0 && (
          <Button
            variant="contained"
            onClick={slidePrev}
            className="z-50 bg-white"
            sx={{
              position: "absolute",
              top: "50%",
              left: "-3rem",
              transform: "translateY(-50%) rotate(90deg)",
              backgroundColor: "white",
              "&:hover": {
                backgroundColor: "grey",
              },
            }}
            aria-label="Previous"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(-90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
