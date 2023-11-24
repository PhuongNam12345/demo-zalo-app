import React from "react";
import { Box, Icon, Text } from "zmp-ui";
import "zmp-ui/zaui.css";
const Member = () => {
  return (
    <Box className="member  rounded shadow-xl p-5">
      <Box flex justifyContent="space-between">
        <Box flex className="gap-x-2">
          <Icon icon="zi-members-solid"></Icon>
          <Text.Title>Members</Text.Title>
        </Box>
        <Box flex className="whitespace-nowrap gap-x-3 " alignItems="center">
          <Text>Aura point:</Text>
          <Text.Title>0</Text.Title>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
};
export default Member;
