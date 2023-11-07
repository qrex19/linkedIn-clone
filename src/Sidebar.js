import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
          alt="doggo"
        />
        <Avatar className="sidebar__avatar" />
        <h2>Nishant jha</h2>
        <h4>nishanttjhaa25@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,546,890</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on posts</p>
          <p className="sidebar__statNumber">2,546,845</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("Dogs")}
        {recentItem("cats")}
        {recentItem("Engineering")}
        {recentItem("Design")}
      </div>
    </div>
  );
}

export default Sidebar;
