import React from "react";
import { Avatar, Box, Button, Text, useNavigate } from "zmp-ui";
import "zmp-ui/zaui.css";
import { getUserInfo } from "zmp-sdk/apis";
const UserCard = ({ user }) => {
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const { userInfo } = await getUserInfo({});
      const API_URL = `http://localhost:8080/info`;
      fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({
          username: userInfo.name,
          avatar: userInfo.avatar,
        }), // payload to api
      });
      navigate("/user");
    } catch (error) {
      // handle when call api failed
      console.log(error);
    }
  };
  return (
    <Box flex className="justify-between ">
      <Box flex>
        <Avatar
          story="default"
          online
          src={user.avatar.startsWith("http") ? user.avatar : undefined}
        >
          {user.avatar}
        </Avatar>
        <Box ml={4}>
          <Text>Xin chào,</Text>
          <Text.Title className="whitespace-nowrap">{user.name}</Text.Title>
        </Box>
      </Box>
      <Box ml={4} className="btn-card ">
        <Button className="btn-user-card" size="medium" onClick={getUser}>
          Hồ sơ của tôi
        </Button>
      </Box>
    </Box>
  );
};

export default UserCard;
