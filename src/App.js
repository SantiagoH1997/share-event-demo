import React, { useState } from "react";
import "./App.css";

import ShareEvent from "./components/ShareEvent/ShareEvent";
import EventForm from "./components/EventForm/EventForm";

function App() {
  let [event, setEvent] = useState({
    title: "Test event",
    description: "This is a random test event",
    start: new Date("March 9, 2020 15:00"),
    end: new Date("March 9, 2020 17:00"),
    location: "Random street 947"
  });

  let [message, setMessage] = useState(null);

  const handleSubmit = event => {
    if (
      event.title.trim().length === 0 ||
      event.description.trim().length === 0 ||
      event.location.trim().length === 0
    ) {
      setMessage("No fields should be empty.");
      return;
    }
    if (!Date.parse(event.start)) {
      setMessage('"Start" must have the specified format.');
      return;
    }
    if (!Date.parse(event.end)) {
      setMessage('"End" must have the specified format.');
      return;
    }

    setEvent({ ...event });
    setMessage("Generated!");
  };

  return (
    <div className="App">
      <header className="App-header">Share Event</header>
      <ShareEvent event={event} />
      <EventForm onSubmit={handleSubmit} message={message} />
    </div>
  );
}

export default App;
