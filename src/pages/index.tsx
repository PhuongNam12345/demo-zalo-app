import React from "react";
import { List, Page, Icon, useNavigate } from "zmp-ui";
import { useRecoilValue } from "recoil";
import { userState } from "../state";

import UserCard from "../components/user-card";
import Member from "../components/member";
import Banner from "../components/banner";
import { ProductItem } from "../components/box-icon";
import { ListBlog } from "../components/blog-list";
import { ListProduct } from "../components/product-list";

const HomePage: React.FunctionComponent = () => {
  const user = useRecoilValue(userState);
  const navigate = useNavigate();
  return (
    <Page className="page">
      <div className="section-container">
        <UserCard user={user.userInfo} />
      </div>
      <div className="section-container">
        <Banner />
      </div>
      <div className="section-container">
        <Member />
        <ListProduct />
        <ListBlog />
      </div>
    </Page>
  );
};

export default HomePage;
