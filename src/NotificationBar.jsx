import React from "react";
import "./NotificationBar.css";

const NotificationBar = () => {
  const notifications = [
    "VARIS MUHAMMED HAS ENROLLED IN CYBER SECURITY AND ETHICAL HACKING BOOTCAMP",
    "MANDALIYA ANKIT HAS ENROLLED IN REACT BOOTCAMP",
    "A.AGESTA JENIFER HAS ENROLLED IN JAVA BOOTCAMP",
    "NARENDRA REDDY HAS ENROLLED IN FIGMA BOOTCAMP",
    "SAI KIRAN BASHETTY HAS ENROLLED IN FIGMA BOOTCAMP",
  ];

  return (
    <div className="notification-bar">
      <div className="notification-wrapper">
        {notifications.map((notification, index) => (
          <div key={index} className="notification-item">
            {notification}
          </div>
        ))}
        {/* Duplicate notifications for smooth looping */}
        {notifications.map((notification, index) => (
          <div key={`duplicate-${index}`} className="notification-item">
            {notification}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationBar;
