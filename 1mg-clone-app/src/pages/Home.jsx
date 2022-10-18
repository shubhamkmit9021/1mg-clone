import React from "react";
import TabCarousal from "../Components/Middle/TabCarousal";
import HomeFooter from "../Components/Footer/HomeFooter";
import { UpperHeading } from "../Components/Middle/UpperHeading";
import { UpperMiddle } from "../Components/Middle/UpperMiddle";
import UpperPoster from "../Components/Middle/UpperPoster";
import CarousalComponent from "../Components/Middle/CarousalComponent";
import { HomeData } from "../Components/Middle/HomeData";
import { bgGrey } from "../Colors/Color";
import { Box } from "@chakra-ui/react";

import Ayurveda from "../Components/Products/Ayurveda/Ayurveda";
import MineralSupliment from "../Components/Products/Mineral Supplements/MineralSupliment";

import Footer1 from "../Components/Footer/Footer1";
import DiseaseSec from "../Components/Products/Disease/DiseaseSec";
import Brands from "../Components/Products/Featured brands/Brands";

export default function Home() {
  return (
    <Box bg="##f6f6f6">
      {" "}
      <UpperMiddle />
      <UpperHeading />
      <UpperPoster />
      <DiseaseSec />
      <Brands />
      <MineralSupliment />
      <Ayurveda />
      {/* <CarousalComponent
        data={HomeData.ShopbyHealthConcerns}
        text={"Shop by Health Concerns"}
      />
      <CarousalComponent
        data={HomeData.FeaturedBrands}
        text={"Featured brands"}
      />
      <CarousalComponent
        data={HomeData.TopSellersFromZandu}
        text={"Top Sellers From Zandu"}
      />
      <CarousalComponent
        data={HomeData.PopularCategories}
        text={"Popular categories"}
      />
      <CarousalComponent
        data={HomeData.PopularComboDeals}
        text={"Popular Combo Deals"}
      />
      <CarousalComponent data={HomeData.AdultDiapers} text={"Adult diapers"} />
      <CarousalComponent
        data={HomeData.IronSupplementoftheweek}
        text={"Iron | Supplement of the week"}
      />
      <CarousalComponent data={HomeData.HEALTHUTSAV} text={"HEALTH UTSAV"} />
      <CarousalComponent
        data={HomeData.DiabetesNutrition}
        text={"Diabetes Nutrition"}
      />
      <CarousalComponent
        data={HomeData.IntheSpotlight}
        text={"In the spotlight"}
      /> */}
      <HomeFooter />
    </Box>
  );
}
