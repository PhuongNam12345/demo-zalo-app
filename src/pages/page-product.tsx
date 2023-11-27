import React, { useState, useEffect } from "react";
import { Button, Sheet, Text, Box, Page, Swiper, useNavigate } from "zmp-ui";

export const ListProduct = () => {
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
  return (
    <Box className="w-full relative ">
      <Text.Title className="font-sans my-5 text-center">Sản Phẩm</Text.Title>
      <Box>
        <div className=" grid grid-cols-2 gap-4 h-full p-2 ">
          {product.map((productItem) => (
            <>
              <Box
                className="w-full bg-white rounded h-full"
                key={productItem.productid}
                onClick={() => handleProductClick(productItem)}
              >
                {" "}
                <Box className="">
                  <img
                    loading="lazy"
                    src={productItem.avatar}
                    className=" w-full h-150"
                  />
                </Box>
                <Text className="font-mono my-1 text-center">
                  {productItem.productname}
                </Text>
              </Box>
            </>
          ))}
        </div>
      </Box>

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
