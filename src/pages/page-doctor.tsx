import React, { useState, useEffect } from "react";
import { Button, Sheet, Text, Box, Page, Swiper, useNavigate } from "zmp-ui";

export const ListDoctor = () => {
  const [sheetVisible, setSheetVisible] = useState(false);
  const [doctor, setDoctor] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:8080/doctor`);
        const data = await response.json();
        console.log(data);
        setDoctor(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  const handledoctorClick = (doctorItem) => {
    setSheetVisible(true);
    setSelectedDoctor(doctorItem);
  };
  return (
    <Box className="w-full relative ">
      <Text.Title className="font-sans my-5 text-center">Bác Sĩ</Text.Title>
      <Box>
        <div className=" grid grid-cols-2 gap-4 h-full p-2 ">
          {doctor.map((doctorItem) => (
            <>
              <Box
                className="w-full bg-white  h-full"
                key={doctorItem.doctorid}
                onClick={() => handledoctorClick(doctorItem)}
              >
                {" "}
                <Box className="">
                  <img
                    loading="lazy"
                    src={doctorItem.avatar}
                    className=" w-full "
                  />
                </Box>
                <Text className="font-mono my-1 text-center">
                  {doctorItem.fullname}
                </Text>
              </Box>
            </>
          ))}
        </div>
      </Box>
      {selectedDoctor && (
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
            className="sheet-doctor justify-center items-center gap-4"
          >
            <img
              loading="lazy"
              src={selectedDoctor.avatar}
              className=" w-1/2 h-1/2"
            />

            <Box block>
              {/* <Text>
             Bác Sĩ:     </Text>*/}
              <Text.Title className="text-center" sizes="xLarge">
                {selectedDoctor.fullname}
              </Text.Title>
            </Box>
            <Box>
              {/* <Text> Giới Tính:</Text> */}

              <Text.Title className="text-center" sizes="xLarge">
                {selectedDoctor.gender}
              </Text.Title>
            </Box>
            <Box>
              {/* <Text>Ngày sinh</Text> */}
              <Text.Title className="text-center" sizes="xLarge">
                {selectedDoctor.date}
              </Text.Title>
            </Box>
            <Box>
              <Button variant="secondary" size="large">
                Liên Hệ
              </Button>
            </Box>
          </Box>
        </Sheet>
      )}
    </Box>
  );
};
