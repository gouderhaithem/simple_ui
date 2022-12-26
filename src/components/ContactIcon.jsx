import React from "react";
import profile from "../images/profile-user.png";
function ContactIcon({ name, email, phone_number }) {
  return (
    <div className="card">
      <div className="card-title">
        <h3 className="name">{name}</h3>
        <img
          style={{ zIndex: 12 }}
          width={30}
          src={profile}
          alt={name || "username"}
        />
      </div>
      <p className="push-me">email:{email}</p>
      <p>N°:{phone_number}</p>
    </div>
  );
}

export default ContactIcon;
