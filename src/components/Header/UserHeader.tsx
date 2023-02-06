import { Avatar } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const UserHeader = () => {
  return (
    <Link to={"/home"}>
    <div className="User-header">
     
        <div className="User-header_avartar">
          <Avatar
            size={40}
            icon={<img src={require("../../assets/image/Frame433.png")} />}
          />
        </div>
        <div className="User-header_GroupName">
          <p className="User-header_GroupName-name">Ng.Tuyết</p>
          <p className="User-header_GroupName-role">Admin</p>

        </div>

    </div>
    </Link>
  );
};

export default UserHeader;
