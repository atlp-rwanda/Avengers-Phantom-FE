import React from "react";
import { SidebarItem } from "./SidebarItem.jsx";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Menubar = () => {
  return (
    <div>
      <div className="menubar">
        <div className="menubar_div">
          <ul>
            {SidebarItem.map((items, index) => {
              return (
                <li key={index} className="sidetext">
                  <Link to={items.path} className="linkstyle">
                    {items.icon}
                    <span>{items.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Menubar;
