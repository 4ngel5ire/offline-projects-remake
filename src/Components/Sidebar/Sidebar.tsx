import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="header">
        <h2 className="title">Offline Projects</h2>
        <h1 className="acrn">OP</h1>
      </div>

      <div className="links">
        <h3>Work</h3>
        <h3>Contacts</h3>
        <h3>+++</h3>
        <h3>OPx</h3>
        <p>^ very cool newsletter</p>
      </div>

      <div className="bottom">
        <div className="bottom__title">
          OFFLINE PROJECTS is a creative studio.
        </div>
        <div className="bottom__subtitle">
          We partner with select clients to create groundbreaking 360 degree
          campaigns.
        </div>
        <div className="bottom__links">
          Creative Direction. Branding. Experiential. Live. Film. Digital.
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
