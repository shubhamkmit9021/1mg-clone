import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import ".././Slick/Slick.css";

import { Box, Image, Center } from "@chakra-ui/react";
// import ProHeading from "./Heading";

import React, { useEffect, useState } from "react";

const SlidingBox = () => {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(false);

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  useEffect(() => {
    const getdata = () => {
      setLoading(true);
      fetch(`https://json-server-1mg.herokuapp.com/SlidingBox_sec1`)
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
      {/* <ProHeading /> */}
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
            <Box>
              <Image
                src={elem.img}
                alt={elem.alt}
                style={{ height: "190px" }}
              />
            </Box>
          </Box>
        ))}
      </Slider>
      <Box my="7"></Box>
    </>
  );
};

export default SlidingBox;
