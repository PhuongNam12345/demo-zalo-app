import React, { useState, useEffect } from "react";
import { Button, Sheet, Text, Box, Page, useNavigate } from "zmp-ui";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Doctor = () => {
  const [sheetVisible, setSheetVisible] = useState(false); //set status for sheet show details
  const [doctor, setDoctor] = useState([]); //save value response api return
  const [selectedDoctor, setSelectedDoctor] = useState(null); //usestade doctor was click
  const navigate = useNavigate();
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
    // update info doctor click
  };
  const settings = {
    autoplay: true, // Kích hoạt autoplay
    autoplaySpeed: 3000,

    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    centerMode: false,
  };
  return (
    <Box className="w-full relative ">
      <Box flex className="justify-between">
        <Text.Title className="font-sans text-center my-5">Bác Sĩ</Text.Title>
        <Text
          onClick={() => navigate("/listdoctor")}
          className="text-right font-sans  my-5 "
        >
          Xem thêm
        </Text>
      </Box>
      <Slider {...settings}>
        {doctor.map(
          (
            doctorItem //map to render doctor was usestate
          ) => (
            <>
              <div
                className=" flex flex-col m-2 items-center rounded"
                key={doctorItem.doctorid}
                onClick={() => handledoctorClick(doctorItem)}
              >
                <img
                  loading="lazy"
                  src={doctorItem.avatar}
                  className="box-doctor "
                />

                <Text className="text-center p-2">{doctorItem.fullname}</Text>
              </div>
            </>
          )
        )}
      </Slider>
      {/* show sheet when have value selectebdoctor which is save from doctoritem
      onclick */}
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
