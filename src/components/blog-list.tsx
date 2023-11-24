import React, { useState, useEffect } from "react";
import { Button, Sheet, Text, Box, Page } from "zmp-ui";

export const ListBlog = () => {
  const [sheetVisible, setSheetVisible] = useState(false); //set status for sheet show details
  const [blog, setBlog] = useState([]); //save value response api return
  const [selectedBlog, setSelectedBlog] = useState(null); //usestade blog was click
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
  return (
    <Box className="w-full relative ">
      <Text.Title className="font-sans text-center my-5">List Blog</Text.Title>
      <div className=" grid grid-cols-2 gap-4">
        {blog.map(
          (
            blogItem, //map to render blog was usestate
          ) => (
            <>
              <Box
                className="w-full bg-red-400 rounded h-full"
                key={blogItem.blogID}
                onClick={() => handleBlogClick(blogItem)}
              >
                <Box className="">
                  <img
                    loading="lazy"
                    src={blogItem.avatar}
                    className=" w-full h-full rounded-lg"
                  />
                </Box>
                <Text className="font-mono py-0.5">{blogItem.title}</Text>
              </Box>
            </>
          ),
        )}
      </div>
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
