import React, { Component } from "react";
import Dropdown from "./components/Dropdown";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      locations: [
        {
          label: "Visual Moderation",
          value: "visualmod",
        },
        {
          label: "Text Moderation",
          value: "text",
        },
        {
          label: "Audio Moderation",
          value: "audio",
        },
        {
          label: "Demographic",
          value: "demographic",
        },
        {
          label: "Logo and Logo Location",
          value: "logo",
        },
        {
          label: "Visual Context",
          value: "visualcon",
        },
      ],
    };
  }

  onChange = (item, name) => {
    console.log(item, name);
  };

  render() {
    const { locations } = this.state;

    return (
      <div className="App">
        <header className="Header">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5OCIgaGVpZ2h0PSIyOCIgZmlsbD0ibm9uZSIgeG1sbnM6dj0iaHR0cHM6Ly92ZWN0YS5pby9uYW5vIj48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xNC4yMTkgMS4zMTNjLjc1NCAwIDEuNDc4LjMxMSAyLjAxMS44NjRzLjgzMyAxLjMwMy44MzMgMi4wODV2MTkuOTE1YzAgLjc4Mi0uMyAxLjUzMi0uODMzIDIuMDg1cy0xLjI1Ny44NjQtMi4wMTEuODY0LTEuNDc4LS4zMTEtMi4wMTEtLjg2NC0uODMzLTEuMzAzLS44MzMtMi4wODVWNC4yNjFjMC0uNzgyLjMtMS41MzIuODMzLTIuMDg1czEuMjU3LS44NjQgMi4wMTEtLjg2NHoiIGZpbGw9InVybCgjQSkiLz48cGF0aCBkPSJNNS45MDYgNi4xMjVjLjc1NCAwIDEuNDc4LjMxNyAyLjAxMS44ODFzLjgzMyAxLjMyOS44MzMgMi4xMjZ2MTAuMTc0YzAgLjc5OC0uMyAxLjU2Mi0uODMzIDIuMTI2cy0xLjI1Ny44ODEtMi4wMTEuODgxLTEuNDc4LS4zMTctMi4wMTEtLjg4MS0uODMzLTEuMzI5LS44MzMtMi4xMjZWOS4xMzJjMC0uNzk4LjMtMS41NjIuODMzLTIuMTI2czEuMjU3LS44ODEgMi4wMTEtLjg4MXoiIGZpbGw9InVybCgjQikiLz48cGF0aCBkPSJNMjIuNTMxIDYuMTI1Yy43NTQgMCAxLjQ3OC4zMTcgMi4wMTEuODgxcy44MzMgMS4zMjkuODMzIDIuMTI2djEwLjE3NGMwIC43OTgtLjMgMS41NjItLjgzMyAyLjEyNnMtMS4yNTcuODgxLTIuMDExLjg4MS0xLjQ3Ny0uMzE3LTIuMDExLS44ODEtLjgzMy0xLjMyOS0uODMzLTIuMTI2VjkuMTMyYzAtLjc5OC4zLTEuNTYyLjgzMy0yLjEyNnMxLjI1Ny0uODgxIDIuMDExLS44ODF6IiBmaWxsPSJ1cmwoI0MpIi8+PC9nPjxwYXRoIGQ9Ik00OS4zMjUgNS45NnYxNi41aC0zLjQ1VjUuOTZoMy40NXptLTEwLjcyNSAwdjE2LjVoLTMuNDVWNS45NmgzLjQ1em05LjA3NSA2Ljc3NXYyLjc3NWgtMTAuOHYtMi43NzVoMTAuOHpNNTkuMDgxIDUuOTZ2MTYuNWgtMy40NVY1Ljk2aDMuNDV6bTIwLjUzOSAwbC02IDE2LjVoLTQuMDI1TDYzLjU3IDUuOTZoMy42NWwzLjQ3NSAxMC41Ljk1IDMuMjUuOTI1LTMuMjI1IDMuNS0xMC41MjVoMy41NXptNC40OTggMTYuNVY1Ljk2aDEyLjM3NXYyLjc3NWgtOC45MjV2NC4xaDcuMDI1djIuNjVoLTcuMDI1djQuMmg5LjI3NXYyLjc3NUg4NC4xMTl6IiBmaWxsPSIjMzEzMTMxIi8+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJBIiB4MT0iMTQuMjE5IiB5MT0iMS4zMTMiIHgyPSIxNC4yMTkiIHkyPSIyNy4xMjUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjMTc1Y2ZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzY5M2Y5Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9IkIiIHgxPSI1LjkwNiIgeTE9IjYuMTI1IiB4Mj0iNS45MDYiIHkyPSIyMi4zMTMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjMTc1Y2ZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzY5M2Y5Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9IkMiIHgxPSIyMi41MzEiIHkxPSI2LjEyNSIgeDI9IjIyLjUzMSIgeTI9IjIyLjMxMyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiMxNzVjZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzNjkzZjkiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4="
            alt="logo"
          />
        </header>

        <div className="Dropdown">
          <Dropdown
            name="single"
            title="Single select"
            list={locations}
            onChange={this.onChange}
          />
        </div>
        <div className="Dropdown">
          <Dropdown
            name="multi"
            title="Multi select"
            list={locations}
            onChange={this.onChange}
            multiselect={true}
          />
        </div>
      </div>
    );
  }
}

export default App;
