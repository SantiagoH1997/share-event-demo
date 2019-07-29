const shareEvent = {
  // Outlook Online

  // Yahoo

  // ICS
  ics(event) {
    var e = {
      ...this.event,
      ...event
    };

    var data = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      "DTSTART:" + this.formatDate(e.start),
      "DTEND:" + this.formatDate(e.end),
      "SUMMARY:" + e.title,
      "DESCRIPTION:" + e.description,
      "LOCATION:" + e.location,
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\n");

    return encodeURI("data:text/calendar;charset=utf8," + data);
  },

  toggleOptions: function(btnToggle, options) {
    btnToggle.addEventListener("click", function() {
      let expanded = options.getAttribute("aria-expanded");
      expanded == "true"
        ? options.setAttribute("aria-expanded", false)
        : options.setAttribute("aria-expanded", true);
    });
  },

  // Init
  init(event) {
    const btnGoogle = document.querySelector("[data-share-event='google']"),
      btnOutlookOnline = document.querySelector(
        "[data-share-event='outlook-online']"
      ),
      btnOutlook = document.querySelector("[data-share-event='outlook']"),
      btnICalendar = document.querySelector("[data-share-event='icalendar']"),
      btnYahoo = document.querySelector("[data-share-event='yahoo']"),
      btnToggle = document.querySelector("[data-share-event='btn-toggle']"),
      options = document.querySelector("[data-share-event='options']");

    if (btnGoogle) {
      btnGoogle.href = this.google(event);
      btnGoogle.rel = "noopener noreferrer";
      btnGoogle.target = "_blank";
      var liGoogle = document.createElement("li");
      liGoogle.innerHTML = btnGoogle.innerHTML + "Google";
      btnGoogle.innerHTML = "";
      btnGoogle.appendChild(liGoogle);
    }
    if (btnOutlookOnline) {
      btnOutlookOnline.href = this.outlookOnline(event);
      btnOutlookOnline.rel = "noopener noreferrer";
      btnOutlookOnline.target = "_blank";
      var liOutlookOnline = document.createElement("li");
      liOutlookOnline.innerHTML = btnOutlookOnline.innerHTML + "Outlook Online";
      btnOutlookOnline.innerHTML = "";
      btnOutlookOnline.appendChild(liOutlookOnline);
    }
    if (btnOutlook) {
      btnOutlook.href = this.ics(event);
      var liOutlook = document.createElement("li");
      liOutlook.innerHTML = btnOutlook.innerHTML + "Outlook";
      btnOutlook.innerHTML = "";
      btnOutlook.appendChild(liOutlook);
    }
    if (btnICalendar) {
      btnICalendar.href = this.ics(event);
      var liICal = document.createElement("li");
      liICal.innerHTML = btnICalendar.innerHTML + "iCalendar";
      btnICalendar.innerHTML = "";
      btnICalendar.appendChild(liICal);
    }
    if (btnYahoo) {
      btnYahoo.href = this.yahoo(event);
      btnYahoo.rel = "noopener noreferrer";
      btnYahoo.target = "_blank";
      var liYahoo = document.createElement("li");
      liYahoo.innerHTML = btnYahoo.innerHTML + "Yahoo";
      btnYahoo.innerHTML = "";
      btnYahoo.appendChild(liYahoo);
    }
    if (btnToggle && options) {
      this.toggleOptions(btnToggle, options);
    }
  }
};
