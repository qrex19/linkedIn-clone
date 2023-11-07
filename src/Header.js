import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        {/* <LinkedInIcon/> */}
        <img
          className="iconImage"
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt="linkedIn"
        />

        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar={
            "https://media.istockphoto.com/id/1049869360/photo/cool-dog.webp?b=1&s=170667a&w=0&k=20&c=duwUokcIimKpjbe2vWM8qeqhuJwM_4Eq7Fd-f5ELM30="
          }
          title={"Me"}
        />
      </div>
    </div>
  );
}

export default Header;
