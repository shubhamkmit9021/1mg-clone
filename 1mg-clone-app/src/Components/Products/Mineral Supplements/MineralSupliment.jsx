import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./MineralSupliment.css";

import { Box, Text, Image, Center } from "@chakra-ui/react";
import ProHeading from "./Heading";

import React, { Component, useEffect, useState } from "react";

const MineralSupliment = () => {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(false);

  const settings = {
    dots: false,
    autoplay: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  useEffect(() => {
    const getdata = () => {
      setLoading(true);
      fetch(`https://json-server-1mg.herokuapp.com/MineralSupliment_sec`)
        .then((res) => res.json())
        .then((data) => {
          setAllData(data);
          setLoading(false);
        });
    };

    getdata();
  }, []);

  return (
    <>
      <ProHeading />
      {loading && (
        <Box>
          {" "}
          <Center>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831"
              alt="loading_gif"
            />
          </Center>{" "}
        </Box>
      )}

      <Slider {...settings}>
        {allData.map((elem) => (
          <Box key={elem.id}>
            <Box
              className="childdiv"
              _hover={{
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                borderRadius: "15px",
                h: "max-content",
                cursor: "pointer",
              }}
            >
              <Image
                style={{ display: "flex", margin: "10px auto" }}
                src={elem.img}
              />
              <Text as="b" py="4" px="2">
                {elem.name}
              </Text>
            </Box>
          </Box>
        ))}
      </Slider>
      <Box my="7"></Box>
    </>
  );
};

export default MineralSupliment;
