import React, { useState, useEffect } from "react";
import { Button, Sheet, Text, Box, Page, useNavigate } from "zmp-ui";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navigate } from "react-router";
export const ListBlog = () => {
  const [sheetVisible, setSheetVisible] = useState(false); //set status for sheet show details
  const [blog, setBlog] = useState([]); //save value response api return
  const [selectedBlog, setSelectedBlog] = useState(null); //usestade blog was click
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:8080/blog`);
        const data = await response.json();
        console.log(data);
        setBlog(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  const handleBlogClick = (blogItem) => {
    setSheetVisible(true);
    setSelectedBlog(blogItem);
    // update info blog click
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
        <Text.Title className="font-sans text-center my-5">Bài Viết</Text.Title>
        <Text
          className="font-sans text-center my-5"
          onClick={() => navigate("/listblog")}
        >
          Xem thêm
        </Text>
      </Box>
      <Slider {...settings}>
        {blog.map(
          (
            blogItem //map to render blog was usestate
          ) => (
            <>
              <div
                className=" p-2 w-full rounded h-full"
                key={blogItem.blogID}
                onClick={() => handleBlogClick(blogItem)}
              >
                <Box className="">
                  <img
                    loading="lazy"
                    src={blogItem.avatar}
                    className=" w-full h-150 rounded-lg"
                  />
                </Box>
                <Text className="font-mono p-2">{blogItem.title}</Text>
              </div>
            </>
          )
        )}
      </Slider>
      {/* show sheet when have value selectebBlog which is save from blogitem
      onclick */}
      {selectedBlog && (
        <Sheet
          visible={sheetVisible}
          onClose={() => setSheetVisible(false)}
          autoHeight
          mask
          handler
          swipeToClose
        >
          <Box
            p={4}
            flex
            flexDirection="column"
            className=" sheet-blog gap-5 items-center"
          >
            <Box className="">
              <img
                loading="lazy"
                src={selectedBlog.avatar}
                className="w-full rounded-lg a"
              />
            </Box>
            <Box>
              <Text.Title className="uppercase	" sizes="xLarge">
                {selectedBlog.title}
              </Text.Title>
            </Box>
            <Box>
              <Text>{selectedBlog.description}</Text>
            </Box>
          </Box>
        </Sheet>
      )}
    </Box>
  );
};
