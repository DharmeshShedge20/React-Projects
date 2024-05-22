import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCareousel from "../../components/HomeSectionCarousel/HomeSectionCareousel";
import { mens_kurta } from "../../../Data/mens_kurta";

const HomePage = () => {
  return (
    <div>
      <MainCarousel />

      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCareousel data={mens_kurta} sectionName={"Hoodies"} />
        <HomeSectionCareousel data={mens_kurta} sectionName={"Jackets"} />
        <HomeSectionCareousel data={mens_kurta} sectionName={"T-shirts"} />
        <HomeSectionCareousel data={mens_kurta} sectionName={"Pants"} />
        <HomeSectionCareousel data={mens_kurta} sectionName={"Shoes"} />
      </div>
    </div>
  );
};

export default HomePage;
