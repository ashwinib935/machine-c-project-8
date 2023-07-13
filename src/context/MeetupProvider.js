import React, { createContext, useContext, useReducer } from "react";
import { meetups } from "../data/meetupData";

export const MeetupContext = createContext();
const handleMeetup = (state, action) => {
  switch (action.type) {
    case "SEARCH":
      return { ...state, search: action.payload };
    case "SORT_BY_EVENT_TYPE": {
      const selectedType = action.payload;
      console.log("selectedType", selectedType);
      return {
        ...state,
        sortEventType: action.payload,
      };
    }

    default:
      return state;
  }
};
function MeetupProvider({ children }) {
  const [state, dispatch] = useReducer(handleMeetup, {
    meetupData: meetups,
    search: "",
    sortEventType: "Both",
  });
  return (
    <MeetupContext.Provider value={{ state, dispatch }}>
      {children}
    </MeetupContext.Provider>
  );
}
export const useMeetup = () => useContext(MeetupContext);
export default MeetupProvider;
