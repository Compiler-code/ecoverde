import "../CSS/layout.css";

import React from 'react';
import PageHeader from "./PageHeader";
import { Outlet } from "react-router-dom";
import PageFooter from "./PageFooter";

const Layout = () => {
  return (
    <>
      <PageHeader />
      <Outlet />
      <PageFooter />
    </>
  );
};

export default Layout;