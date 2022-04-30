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
      <aside>
        <div className={[sidebarCollapsible ? "sidebarOff" : "sidebar"]}>
          <p>Login</p>
          <p>About Us</p>
        </div>
      </aside>
    </div>
  );
}
