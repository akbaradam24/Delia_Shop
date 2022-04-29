import React, { useState } from "react";
import "../Styling/navbar.scss";
import menu from "../Assets/menu.png";

export default function Navbar() {
  // state for sidebar collapsibel
  const [sidebarCollapsible, setsidebarCollapsible] = useState(true);
  // function to show/hide sidebar
  const handleSidebar = () => {
    setsidebarCollapsible(!sidebarCollapsible);
  };

  return (
    <div>
      <nav className="navbar">
        <button onClick={handleSidebar}>
          <img src={menu} alt="" />
        </button>
        <p>Ini Navbar</p>
      </nav>
      <aside className={[sidebarCollapsible ? "sidebarOff" : "sidebar"]}></aside>
    </div>
  );
}
