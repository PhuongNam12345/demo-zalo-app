import React from "react";
import { Route } from "react-router-dom";
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from "zmp-ui";
import { RecoilRoot } from "recoil";
import HomePage from "../pages";
import About from "../pages/about";
import Form from "../pages/form";
import User from "../pages/user";
import { ListProduct } from "../pages/page-product";
import { ListDoctor } from "../pages/page-doctor";
import BottomNavigationPage from "./navigation";
import { ListBlog } from "../pages/page-blog";

const MyApp = () => {
  return (
    <RecoilRoot>
      <App>
        <SnackbarProvider>
          <ZMPRouter>
            <AnimationRoutes>
              <Route path="/" element={<HomePage></HomePage>}></Route>
              <Route path="/about" element={<About></About>}></Route>
              <Route path="/form" element={<Form></Form>}></Route>
              <Route path="/user" element={<User></User>}></Route>
              <Route
                path="/listproduct"
                element={<ListProduct></ListProduct>}
              ></Route>
              <Route
                path="/listdoctor"
                element={<ListDoctor></ListDoctor>}
              ></Route>
              <Route path="/listblog" element={<ListBlog></ListBlog>}></Route>
            </AnimationRoutes>
            <BottomNavigationPage />
          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
};
export default MyApp;
