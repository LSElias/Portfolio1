// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sideBar">
      <ul>
      <Link className="sidelink" to={"/projects/greenwallet"} ><li> GreenWallet  </li></Link>
      <Link className="sidelink" to={"/projects/hardtech"} ><li> HardTech  </li></Link>
      </ul>
    </div>
  );
};

export default SideBar;
