import React from "react";
import Header from "../../component/Header/Header";
import "./LandingPage.css";
import EventCard from "../../component/EventCard/EventCard";
import { useMeetup } from "../../context/MeetupProvider";
import { meetups } from "../../data/meetupData";
function LandingPage() {
  const { state, dispatch } = useMeetup();
  console.log("state", state);

  const getSearchMeetup = (meetup, search) => {
    const serachMeetup = search
      ? [...meetup].filter(
          (meetup) =>
            meetup.title.toLowerCase().includes(search.toLowerCase()) ||
            meetup.eventTags.some((ele) =>
              ele.toLowerCase().includes(search.toLowerCase())
            )
        )
      : [...meetup];
    return serachMeetup;
  };
  const getSortedMeetups = (serachMeetup, selectedType) => {
    let newMeetups = [...serachMeetup];
    if (selectedType === "Both") {
      return serachMeetup;
    } else {
      newMeetups = [...serachMeetup].filter(
        (meetup) => meetup.eventType === selectedType
      );
    }
    return newMeetups;
  };
  const serachMeetup = getSearchMeetup(meetups, state.search);
  const sortedMeetups = getSortedMeetups(serachMeetup, state.sortEventType);
  return (
    <div className="landing-container">
      <Header />
      <div className="meetup-main">
        <div className="header-container">
          <h2>Meetup Event</h2>
          <label htmlFor="">
            <select
              placeholder="Select event type"
              defaultValue="Both"
              onChange={(e) =>
                dispatch({
                  type: "SORT_BY_EVENT_TYPE",
                  payload: e.target.value,
                })
              }
            >
              <option value="Both">Both</option>
              <option value="Offline">Offline</option>
              <option value="Online">Online</option>
            </select>
          </label>
        </div>
        <div className="meetup-container">
          {sortedMeetups.map((meetup) =>
            meetup ? <EventCard key={meetup.id} meetup={meetup} /> : null
          )}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
