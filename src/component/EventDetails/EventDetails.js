import React from "react";
import Header from "../Header/Header";
import { useParams } from "react-router";
import { useMeetup } from "../../context/MeetupProvider";

function EventDetails() {
  const { eventId } = useParams();
  const { state, dispatch } = useMeetup();
  const selectedEvent = [...state.meetupData].find(
    (meetup) => meetup.id === eventId
  );
  console.log("selectedEvent", selectedEvent);
  return (
    <div>
      <Header />
      <div className="event-details"></div>
    </div>
  );
}

export default EventDetails;
