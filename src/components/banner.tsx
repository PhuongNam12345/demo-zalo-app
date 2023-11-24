import React from "react";
import { Box, Icon, Swiper, Text } from "zmp-ui";
const Banner = () => {
  return (
    <Box
      flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Swiper autoplay loop>
        <Swiper.Slide>
          <img
            className="slide-img"
            src="https://stc-zmp.zadn.vn/zmp-zaui/images/0e05d63a7a93a6cdff826.jpg"
            alt="slide-1"
          />
        </Swiper.Slide>
        <Swiper.Slide>
          <img
            className="slide-img"
            src="https://stc-zmp.zadn.vn/zmp-zaui/images/0f7c061caab576eb2fa45.jpg"
            alt="slide-2"
          />
        </Swiper.Slide>
        <Swiper.Slide>
          <img
            className="slide-img"
            src="https://stc-zmp.zadn.vn/zmp-zaui/images/321fb45f18f6c4a89de78.jpg"
            alt="slide-3"
          />
        </Swiper.Slide>
      </Swiper>
    </Box>
  );
};
export default Banner;
