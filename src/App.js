import React, { useState } from "react";
import "./App.css";

import ShareEvent from "./components/ShareEvent/ShareEvent";

function App() {
  let [event, setEvent] = useState({
    title: "Test event",
    description: "This is a random test event",
    start: new Date("March 9, 2020 15:00"),
    end: new Date("March 9, 2020 17:00"),
    location: "Random street 947"
  });

  return (
    <div className="App">
      <header className="App-header">Share Event</header>
      <ShareEvent event={event} />
    </div>
  );
}

export default App;
