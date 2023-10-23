import React from "react";
import { Outlet } from "react-router";
import DashHeader from "./DashHeader";
import DashFooter from "./DashFooter";
const DashLayout = () => {
  return (
    <>
      <div className="dash-container">
        <DashHeader></DashHeader>
        <Outlet></Outlet>
        <DashFooter></DashFooter>
      </div>
    </>
  );
};

export default DashLayout;
