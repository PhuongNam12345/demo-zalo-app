import React, { useState, useEffect } from "react";
import { Button, Sheet, Text, Box, Page, useNavigate } from "zmp-ui";

export const ListCatelogy = () => {
  const [sheetVisible, setSheetVisible] = useState(false);
  const [product, setProduct] = useState([]);
  const [catelogy, setCatelogy] = useState([]); //save value response api return
  const [selectedCatelogy, setSelectedCatelogyID] = useState(null);
  // const [selectedProduct, setSelectedProduct] = useState(null); //usestade blog was click
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:8080/catelogy`);
        const data = await response.json();
        console.log(data);
        setCatelogy(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const response = await fetch(
        `http://localhost:8080/product?id=${selectedCatelogy}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }

    const gotoCatelogyClick = (catelogyId) => {
      console.log(catelogyId);
      setSelectedCatelogyID(catelogyId);
      setSheetVisible(true);

      fetchData();
    };

    // update info blog click
  }
  return (
    <Box className="w-full relative ">
      <Text.Title className="font-sans text-center my-5">Danh mục</Text.Title>
      <div className=" bg-white grid grid-cols-3 gap-4 flex flex-col justify-center">
        {catelogy.map((catelogyItem) => (
          <>
            <div
              key={catelogyItem.catelogyid}
              onClick={() => gotoCatelogyClick(catelogyItem.catelogyid)}
              className="flex
              flex-col
              space-y-2
              items-center
              shadow-sm"
              min-h-min
            >
              <img
                loading="lazy"
                src={catelogyItem.avatar}
                className="w-12 h-12 flex   items-center"
              />

              <Text className="text-center">{catelogyItem.catelogyname}</Text>
            </div>
          </>
        ))}
      </div>
      {/* show sheet when have value selectebBlog which is save from blogitem
      onclick */}
      {product && (
        <Sheet
          visible={sheetVisible}
          onClose={() => setSheetVisible(false)}
          autoHeight
          mask
          handler
          swipeToClose
        >
          <Box className="w-full relative ">
            <Text.Title className="font-sans my-5 text-center">
              Sản Phẩm
            </Text.Title>
            <Box>
              <div className=" grid grid-cols-2 gap-4 h-full p-2 ">
                {product.map((productItem) => (
                  <>
                    <Box
                      className="w-full bg-red-400 rounded h-full"
                      key={productItem.productid}
                    >
                      {" "}
                      <Box className="">
                        <img
                          loading="lazy"
                          src={productItem.avatar}
                          className=" w-full h-full rounded-lg"
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
          </Box>
        </Sheet>
      )}
    </Box>
  );
};
function gotoCatelogyClick(catelogyid: any): void {
  throw new Error("Function not implemented.");
}
