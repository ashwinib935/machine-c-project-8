import React from "react";
import "./Header.css";
import { useMeetup } from "../../context/MeetupProvider";
function Header() {
  const { state, dispatch } = useMeetup();
  return (
    <div className="header-container">
      <h1>Meetup</h1>
      <label htmlFor="">
        <input
          type="text"
          placeholder="Serch by title and tag"
          onChange={(e) =>
            dispatch({ type: "SEARCH", payload: e.target.value })
          }
        />
      </label>
    </div>
  );
}

export default Header;
