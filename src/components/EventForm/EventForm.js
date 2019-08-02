import React from "react";
import "./EventForm.css";

import Input from "../Input/Input";

class EventForm extends React.Component {
  state = {
    title: "",
    description: "",
    start: "",
    end: "",
    location: ""
  };

  handleChange = e => {
    let field = e.target.id;
    this.setState({ [field]: e.target.value });
  };
  render() {
    return (
      <section className="EventForm">
        <form>
          <span>
            <span className="red-span">var</span>{" "}
            <span className="blue-span">event</span>{" "}
            <span className="red-span">=</span> {"{"}
          </span>
          <div className="label-input">
            <label htmlFor="title">
              <span className="key">title:</span>{" "}
            </label>
            "
            <Input
              inputField="title"
              placeholder="Test event"
              onChange={e => this.handleChange(e)}
              value={`${this.state.title}`}
            />
            "<span className="white">,</span>
          </div>
          <div className="label-input">
            <label htmlFor="description">
              <span className="key">description:</span>
            </label>{" "}
            "
            <Input
              inputField="description"
              placeholder="This is a random test event"
              onChange={e => this.handleChange(e)}
              value={this.state.description}
            />
            "<span className="white">,</span>
          </div>
          <div className="label-input">
            <label htmlFor="start">
              <span className="key">start:</span>{" "}
              <span className="red-span">new</span>{" "}
              <span className="date-span">Date</span>('
            </label>
            <Input
              inputField="start"
              placeholder="March 9, 2020 15:00"
              onChange={e => this.handleChange(e)}
              value={this.state.start}
            />
            ')<span className="white">,</span>
          </div>
          <div className="label-input">
            <label htmlFor="end">
              <span className="key">end:</span>{" "}
              <span className="red-span">new</span>{" "}
              <span className="date-span">Date</span>('
            </label>
            <Input
              inputField="end"
              placeholder="March 9, 2020 17:00"
              onChange={e => this.handleChange(e)}
              value={this.state.end}
            />
            ')<span className="white">,</span>
          </div>
          <div className="label-input">
            <label htmlFor="location">
              <span className="key">location:</span>{" "}
            </label>
            "
            <Input
              inputField="location"
              placeholder="Random street 947"
              onChange={e => this.handleChange(e)}
              value={this.state.location}
            />
            "
          </div>
          {"}"}
          <button className="btn-form">Generate!</button>
        </form>
      </section>
    );
  }
}

export default EventForm;
