import React, { useState } from "react";
import { Box, BottomNavigation, Icon, Page, useNavigate } from "zmp-ui";

const BottomNavigationPage = (props) => {
  const [activeTab, setActiveTab] = useState("home");
  const navigate = useNavigate();
  return (
    <div>
      <BottomNavigation
        className=""
        fixed
        activeKey={activeTab}
        onChange={(key) => setActiveTab(key)}
      >
        <BottomNavigation.Item
          key="home"
          label="Trang chủ"
          icon={<Icon icon="zi-home" />}
          onClick={() => navigate("/")}
        />

        <BottomNavigation.Item
          label="Thông báo"
          key="discovery"
          icon={<Icon icon="zi-notif" />}
          onClick={() => navigate("/notification")}
        />
        <BottomNavigation.Item
          key="cart"
          label="Giỏ hàng"
          icon={<Icon icon="zi-clock-1" />}
          onClick={() => navigate("/cart")}
        />
        <BottomNavigation.Item
          key="me"
          label="Cá nhân"
          icon={<Icon icon="zi-user" />}
          onClick={() => navigate("/user")}
        />
      </BottomNavigation>
    </div>
  );
};

export default BottomNavigationPage;
