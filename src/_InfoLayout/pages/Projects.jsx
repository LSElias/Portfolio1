// eslint-disable-next-line no-unused-vars
import React from "react";
import SideBar from "../../components/components-projects/SideBar";
import { Outlet } from "react-router-dom";

const Projects = () => {
  return (
    <div className="container-fluid p-0 m-0 row sidebarside">
      <div className="col-md-3">
        <SideBar />
      </div>
      <div className="col-md-9 p-0 projects project-show">
        <Outlet />
      </div>
    </div>
  );
};

export default Projects;
