import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="marquee">
        <p>
          OPx Feed 🔥✉️🔥 &nbsp;Four Seasons Total Landscaping. Furries are the
          Highest Form of Human Culture. Among all the chaotic happenings of
          last week’s election, one particular incident might take the cake.
          Though not actually “confirmed” (obviously due to embarrassment),
          Trump held a post-election press conference last week at Four Seasons
          Total Landscaping, a small and unspectacular local landscaping
          business in Philly rather than the famous luxury hotel by the same
          name, likely due to a booking mistake from his team. The
          super-memeable happening has been immortalized in VR Chat as a new
          spot for users to hang out in…which is nothing particularly notable
          except for how it has quickly become a gathering spot for online VR
          furries. Check out the desecration of Trump’s bootleg “Four Season’s”
          press conference, here.
        </p>
      </div>
      <div className="content-sidebar">
        <div className="header">
          <div className="title">Offline Projects</div>
          <img src="../../assets/op.png" alt="" />
        </div>

        <div className="links__sidebar">
          <div className="links__sidebar__main">Work</div>
          <div className="links__sidebar__main">Contacts</div>
          <div className="links__sidebar__mid">+++</div>
          <div className="links__sidebar__main">OPx</div>
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
    </div>
  );
}

export default Sidebar;
