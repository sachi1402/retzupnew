import React, { useState } from "react";
import "./AccCard.css";

const AccCard = () => {
  const [NavigationItems, setNavigationItems] = useState([
    { id: 1, title: "Personals info" ,selected: true },
    { id: 2, title: "Login & security"  ,selected: false },
    { id: 3, title: "Payments & payouts" ,selected: false },
    { id: 4, title: "Notifications",selected: false  },
    { id: 4, title: "Privacy & sharing",selected: false  }
  ]);
  return (
    <div className="AccCard">
      <div className="AccCard-pfp">
        <img
          className="AccCard-img"
          src="https://shorturl.at/fgGJN"
          alt="pfp"
        />
        <p>Upload Photo</p>
      </div>
      <div className="AccCard-nav">
        {NavigationItems.map((e) => (
          <div key={e.id} className="AccCard-nav-item " id={e.selected?'AccCard-nav-item-selected':''}> {e.title} </div>
        ))}
      </div>
    </div>
  );
};

export default AccCard;
