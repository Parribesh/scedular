import dayjs from "dayjs";
import React, { useContext } from "react";
import CalenderContext from "../../context/CalenderContext";
import styled from "styled-components";

export default function Day({ event, day }) {
  const { monthIndex } = useContext(CalenderContext);
  let month = dayjs(new Date(dayjs().year(), monthIndex)).format("MM");
  var listOfEvents = [];
  var hasEvent = false;

  event.forEach((e) => {
    if (e.day === day) {
      listOfEvents.push(e);
    }
  });

  const getCurrentEventDay = () => {
    event.forEach((e) => {
      if (e.day === day) hasEvent = true;
    });
    return hasEvent;
  };

  const getCurrentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY");
  };

  function getDaysToBlur() {
    return month === day.format("MM") ? "" : "grey";
  }

  return (
    <Wrapper>
      <ul
        style={
          getCurrentEventDay()
            ? { justifyContent: "right", alignItems: "start" }
            : { justifyContent: "center", alignItems: "center" }
        }
        className="day-tile"
      >
        <li
          className={`${getCurrentDayClass() ? " currentDay" : ""}`}
          data-day
        ></li>
        <li
          style={
            getCurrentEventDay()
              ? { fontSize: "20px" }
              : { justifyContent: "center" }
          }
          className={`Day ${getDaysToBlur() ? " blur-day" : ""}`}
        >
          {day.format("DD")}
        </li>

        <li
          style={{ visibility: getCurrentEventDay() ? "visible" : "hidden" }}
          className="event-number"
        ></li>
        <li className="bottom-bar">
          {hasEvent ? (
            <div style={{ fontSize: "10px" }}>
              {listOfEvents.map((ind, key) => {
                return (
                  <div key={key}>
                    <br />
                    {ind.event}
                  </div>
                );
              })}
            </div>
          ) : (
            " "
          )}
        </li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .day-tile {
    padding: 0;
    position: relative;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    flex-wrap: wrap;
    list-style: none;
  }

  .currentDay {
    position: absolute;
    z-index: -1;
    padding: 20px;
    botton: 5px;
    background-color: #3399ff;
    border-radius: 20px;
  }
  .Day {
    font-size: 30px;
    text-align: center;
  }

  .Day:hover {
  }

  .blur-day {
    color: grey;
  }
  .event-number {
    position: absolute;
    z-inder: 99;
    bottom: 2px;
    right: 2px;
    z-index: -1000;
    background-color: green;
    border-radius: 50%;
    text-align: center;
    width: 5px;
    height: 5px;
  }
  .bottom-bar {
    position: absolute;
    z-inder: -10;
    bottom: 2px;
    left: 2px;
    opacity: 0.8;
    background-color: rgba(20, 255, 200, 0.3);
    border-radius: 10px;
    font-weight: bold;
    color: blue;
  }
`;
