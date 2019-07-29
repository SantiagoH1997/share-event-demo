import React, { useState } from "react";
import "./ShareEvent.css";

import appleIcon from "../../assets/images/apple.svg";
import googleIcon from "../../assets/images/google.svg";
import outlookIcon from "../../assets/images/outlook.svg";
import yahooIcon from "../../assets/images/yahoo.svg";

const ShareEvent = ({ event }) => {
  let options = React.createRef();
  let [isExpanded, setIsExpanded] = useState(false);

  const formatDate = date => date.toISOString().replace(/-|:|\.\d+/g, "");

  const formatDuration = ms => {
    let minutes = Math.floor((ms / (1000 * 60)) % 60),
      hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return hours + "" + minutes;
  };

  const google = event => {
    return `https://www.google.com/calendar/event?action=TEMPLATE&text=${encodeURI(
      event.title
    )}&dates=${formatDate(event.start)}/${formatDate(
      event.end
    )}&details=${encodeURI(event.description)}&location=${encodeURI(
      event.location
    )}`;
  };

  const outlookOnline = event => {
    return `https://outlook.live.com/owa/?path=%2fcalendar%2faction%2fcompose#startdt=${formatDate(
      event.start
    )}&enddt=${formatDate(event.end)}&subject=${encodeURI(
      event.title
    )}&location=${encodeURI(event.location)}&body=${encodeURI(
      event.description
    )}`;
  };

  const yahoo = event => {
    var duracion = formatDuration(event.end - event.start);
    return `https://calendar.yahoo.com/?v=60&view=d&type=20&title=${encodeURI(
      event.title
    )}&st=${formatDate(event.start)}&dur=${duracion}&desc=${encodeURI(
      event.description
    )}&in_loc=${encodeURI(event.location)}`;
  };

  const ics = event => {
    let data = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      "DTSTART:" + formatDate(event.start),
      "DTEND:" + formatDate(event.end),
      "SUMMARY:" + event.title,
      "DESCRIPTION:" + event.description,
      "LOCATION:" + event.location,
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\n");

    return encodeURI("data:text/calendar;charset=utf8," + data);
  };

  const toggleOptions = () => {
    // btnToggle.addEventListener("click", function() {
    //   let expanded = options.getAttribute("aria-expanded");
    //   expanded == "true"
    //     ? options.setAttribute("aria-expanded", false)
    //     : options.setAttribute("aria-expanded", true);
    // });
    console.log();
  };

  return (
    <article data-share-event="share-event">
      <button onClick={toggleOptions} data-share-event="btn-toggle">
        Share Event
      </button>
      <ul data-share-event="options" ref={options} aria-expanded="false">
        <a href={google(event)}>
          <img src={googleIcon} alt="Google logo" class="calendar-logo" />
        </a>
        <a href={ics(event)}>
          <img src={outlookIcon} alt="Outlook logo" class="calendar-logo" />
        </a>
        <a href={outlookOnline(event)}>
          <img src={outlookIcon} alt="Outlook logo" class="calendar-logo" />
        </a>
        <a href={ics(event)}>
          <img src={appleIcon} alt="Apple logo" class="calendar-logo" />
        </a>
        <a href={yahoo(event)}>
          <img src={yahooIcon} alt="Yahoo logo" class="calendar-logo" />
        </a>
      </ul>
    </article>
  );
};

export default ShareEvent;
