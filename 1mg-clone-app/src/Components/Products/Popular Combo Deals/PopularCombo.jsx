import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, Text, Image, Center, Flex } from "@chakra-ui/react";
import Heading from "./Heading";

import React, { useEffect, useState } from "react";

const PopularCombo = () => {
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
          dots: true,
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
      fetch(`https://json-server-1mg.herokuapp.com/Popular_Combo`)
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
      <Heading />
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
            <Box style={{ cursor: "pointer" }}>
              <Image
                h="165px"
                mt="0px"
                w="70px"
                style={{ display: "flex", margin: "2px auto" }}
                src={elem.img}
              />
              <Text textAlign="left" py="1" px="2">
                {elem.name}
              </Text>
              <Text ml="2" fontSize="xs">
                {elem.desc}
              </Text>
              <Flex ml="2">
                <Text mr="1">{elem.striked.s1}</Text>
                <Text as="s" mr="1">
                  {elem.striked.s2}
                </Text>
                <Text color="#19AB2A" mr="1">
                  {elem.striked.s3}
                </Text>
              </Flex>
              <Text ml="2" as="b">
                {elem.price}
              </Text>
            </Box>
          </Box>
        ))}
      </Slider>
      <Box my="7"></Box>
    </>
  );
};

export default PopularCombo;
