import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5"; // close icon (optional)
import { logout } from "../../firebase";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      <div className="navbar">
        <div className="bars" onClick={openSidebar}>
          <FaBars />
        </div>

        <div className="navbar-left">
          <img src={logo} alt="logo" />
        </div>

        <div className="navbar-middle">
          <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>

        <div className="navbar-right">
          <img src={search_icon} alt="" className="icons" />
          <p>children</p>
          <img src={bell_icon} alt="" className="icons" />
          <div className="navbar-profile">
            <img src={profile_img} alt="" className="profile" />
            <img src={caret_icon} alt="" />
            <div className="dropdown">
              <p
                onClick={() => {
                  logout();
                }}
              >
                Signout
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={closeSidebar} />
      )}

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-close-btn">
          <button onClick={closeSidebar}>
            <IoClose />
          </button>
        </div>
        <div className="sidebar-header">
          <span>Menu</span>
        </div>

        <ul className="sidebar-menu">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
