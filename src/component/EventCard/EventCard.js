import React from "react";
import "./EventCard.css";
import { useNavigate } from "react-router";
function EventCard({ meetup }) {
  const navigate = useNavigate();
  return (
    <div
      className="event-card"
      onClick={() => navigate(`/details/${meetup.id}`)}
    >
      <img src={meetup.eventThumbnail} alt="" />
      <p>{meetup.eventStartTime}</p>
      <h5>{meetup.title}</h5>
    </div>
  );
}

export default EventCard;
