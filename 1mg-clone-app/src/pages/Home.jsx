import React from "react";
import HomeFooter from "../Components/Footer/HomeFooter";
import { UpperHeading } from "../Components/Middle/UpperHeading";
import { UpperMiddle } from "../Components/Middle/UpperMiddle";
import UpperPoster from "../Components/Middle/UpperPoster";

export default function Home() {
  return (
    <div>
      {" "}
      <UpperMiddle />
      <UpperHeading />
      <UpperPoster />
      <HomeFooter />
    </div>
  );
}
