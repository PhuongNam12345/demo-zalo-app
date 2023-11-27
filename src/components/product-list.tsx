import React, { useState, useEffect } from "react";
import { Button, Sheet, Text, Box, Page, Swiper, useNavigate } from "zmp-ui";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Product = () => {
  const [sheetVisible, setSheetVisible] = useState(false);
  const [product, setProduct] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:8080/product`);
        const data = await response.json();
        console.log(data);
        setProduct(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  const handleProductClick = (productItem) => {
    setSheetVisible(true);
    setSelectedProduct(productItem);
  };
  const settings = {
    autoplay: true, // Kích hoạt autoplay
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    centerMode: false,
    centerPadding: "50px",
  };
  return (
    <Box className="w-full relative ">
      <Box flex className="justify-between">
        <Text.Title className="font-sans  my-5 text-left">Sản Phẩm</Text.Title>
        <Text
          onClick={() => navigate("/listproduct")}
          className="text-right font-sans  my-5 "
        >
          Xem thêm
        </Text>
      </Box>

      <Slider {...settings}>
        {product.map((productItem) => (
          <>
            <div
              key={productItem.productid}
              onClick={() => handleProductClick(productItem)}
              className="px-2"
            >
              {" "}
              <Box className="">
                <img
                  loading="lazy"
                  src={productItem.avatar}
                  className=" h-150 rounded-lg"
                />
              </Box>
              <Text className="font-mono my-1 text-center">
                {productItem.productname}
              </Text>
            </div>
          </>
        ))}
      </Slider>

      {selectedProduct && (
        <Sheet
          visible={sheetVisible}
          onClose={() => setSheetVisible(false)}
          autoHeight
          mask
          handler
          swipeToClose
        >
          <Box p={4} flex flexDirection="column" className=" sheet-blog gap-5 ">
            <Box className="">
              <img
                loading="lazy"
                src={selectedProduct.avatar}
                className="w-full rounded-lg a"
              />
            </Box>
            <Box>
              Tên Sản Phẩm:
              <Text.Title className="uppercase	" sizes="xLarge">
                {selectedProduct.productname}
              </Text.Title>
            </Box>
            <Box>
              Loại Sản Phẩm:
              <Text.Title className="uppercase	" sizes="xLarge">
                {selectedProduct.catelogy}
              </Text.Title>
            </Box>
            <Box>
              Price:
              <Text.Title className="uppercase	" sizes="xLarge">
                {selectedProduct.price}
              </Text.Title>
            </Box>
            <Box>
              Description:
              <Text.Title className="	" sizes="xLarge">
                {selectedProduct.description}
              </Text.Title>
            </Box>
          </Box>
        </Sheet>
      )}
    </Box>
  );
};
