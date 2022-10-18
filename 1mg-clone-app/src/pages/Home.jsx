import React from "react";
import { Box } from "@chakra-ui/react";

import HomeFooter from "../Components/Footer/HomeFooter";

import { UpperHeading } from "../Components/Middle/UpperHeading";
import { UpperMiddle } from "../Components/Middle/UpperMiddle";
import UpperPoster from "../Components/Middle/UpperPoster";

import DiseaseSec from "../Components/Products/Disease/DiseaseSec";
import Brands from "../Components/Products/Featured brands/Brands";
import TopSellers from "../Components/Products/Top Sellers From Himalaya/TopSellers";

import PopularCategories from "../Components/Products/Popular categories/PopularCategories";
import FitnessSupplements from "../Components/Products/Fitness and supplements/FitnessSupplements";
import PopularCombo from "../Components/Products/Popular Combo Deals/PopularCombo";

import Ayurveda from "../Components/Products/Ayurveda/Ayurveda";
import MineralSupliment from "../Components/Products/Mineral Supplements/MineralSupliment";

import HealthUtsav from "../Components/Products/HEALTH UTSAV/HealthUtsav";

import HomeopathyBrands from "../Components/Products/Homeopathy top brands/HomeopathyBrands";

import HealthFoodsDrinks from "../Components/Products/Health food & drinks/HealthFoodsDrinks";

import HealthCareDevice from "../Components/Products/Healthcare Devices - Top Brands/HealthCareDevice";
import AyurvedaShop from "../Components/Products/Ayurveda - Shop by concern/AyurvedaShop";

import Footer1 from "../Components/Footer/Footer1";

import TabCarousal from "../Components/Middle/TabCarousal";
import CarousalComponent from "../Components/Middle/CarousalComponent";
import { HomeData } from "../Components/Middle/HomeData";
import { bgGrey } from "../Colors/Color";

export default function Home() {
  return (
    <Box bg="##f6f6f6">
      {" "}
      <UpperMiddle />
      <UpperHeading />
      <UpperPoster />
      <DiseaseSec />
      <Brands />
      <TopSellers />
      <PopularCategories />
      <FitnessSupplements />
      <PopularCombo />
      <HealthUtsav />
      <HomeopathyBrands />
      <HealthFoodsDrinks />
      <MineralSupliment />
      <HealthCareDevice />
      <AyurvedaShop />
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
