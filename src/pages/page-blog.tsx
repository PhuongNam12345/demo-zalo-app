import React, { useState, useEffect } from "react";
import { Button, Sheet, Text, Box, Page, Swiper, useNavigate } from "zmp-ui";

export const ListBlog = () => {
  const [sheetVisible, setSheetVisible] = useState(false);
  const [blog, setBLog] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:8080/blog`);
        const data = await response.json();
        console.log(data);
        setBLog(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  const handleBlogClick = (blogItem) => {
    setSheetVisible(true);
    setSelectedBlog(blogItem);
  };
  return (
    <Box className="w-full relative ">
      <Text.Title className="font-sans my-5 text-center">Bài Viết</Text.Title>
      <Box>
        <div className=" grid grid-cols-2 gap-4 h-full p-2 ">
          {blog.map((blogItem) => (
            <>
              <Box
                className="w-full bg-white rounded h-full"
                key={blogItem.blogid}
                onClick={() => handleBlogClick(blogItem)}
              >
                {" "}
                <Box className="">
                  <img
                    loading="lazy"
                    src={blogItem.avatar}
                    className=" w-full h-150"
                  />
                </Box>
                <Text className="font-mono my-1 text-center">
                  {blogItem.title}
                </Text>
                <Text className="font-mono my-1 text-center">
                  {blogItem.description}
                </Text>
              </Box>
            </>
          ))}
        </div>
      </Box>
      {selectedBlog && (
        <Sheet
          visible={sheetVisible}
          onClose={() => setSheetVisible(false)}
          height="8"
          mask
          handler
          swipeToClose
        >
          <Box
            p={4}
            flex
            flexDirection="column"
            className="sheet-blog justify-center items-center gap-4"
          >
            <img
              loading="lazy"
              src={selectedBlog.avatar}
              className=" w-1/2 h-1/2"
            />

            <Box>
              {/* <Text>
             Bác Sĩ:     </Text>*/}
              <Text.Title className="text-center" sizes="xLarge">
                {selectedBlog.title}
              </Text.Title>
            </Box>
            <Box>
              {/* <Text> Giới Tính:</Text> */}

              <Text.Title className="text-center" sizes="xLarge">
                {selectedBlog.description}
              </Text.Title>
            </Box>
            <Box></Box>
          </Box>
        </Sheet>
      )}
    </Box>
  );
};
