import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../Slick/Slick.css";

import { Box, Text, Image, Center } from "@chakra-ui/react";
import ProHeading from "./Heading";

import React, { Component, useEffect, useState } from "react";

const Ayurveda = () => {
  const [ayurvedadata, setAyurvedadata] = useState([]);
  const [loading, setLoading] = useState(false);

  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const getdata = () => {
      setLoading(true);
      fetch(`https://json-server-1mg.herokuapp.com/Ayurveda_sec`)
        .then((res) => res.json())
        .then((data) => {
          setAyurvedadata(data);
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
        {ayurvedadata.map((elem) => (
          <Box key={elem.id}>
            <Box
              className="childdiv"
              _hover={{
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                borderRadius: "15px",
                h: "max-content",
              }}
            >
              <Image src={elem.img} />
              <Text as="b" py="1" px="2">
                {elem.name}
              </Text>
              <Text fontSize="xs" textAlign="justify" py="1" px="2" pb="3">
                {elem.desc}
              </Text>
            </Box>
          </Box>
        ))}
      </Slider>
      <Box my="7"></Box>
      <Box bg="#ddd" h="30px"></Box>
    </>
  );
};

export default Ayurveda;
