import { Route, Routes } from "react-router";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import EventDetails from "./component/EventDetails/EventDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/details/:eventId" element={<EventDetails />} />
      </Routes>
    </div>
  );
}

export default App;
