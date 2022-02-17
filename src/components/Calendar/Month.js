import dayjs from "dayjs";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Day from "./Day";
import SubmitEventForm from "./SubmitEventForm";

export default function Month({ month }) {
  const [currentDay, setCurrentDay] = useState();
  const [eventList, setEventList] = useState([]);

  return (
    <Wrapper>
      <div className="container-calendar">
        <ul className="calendar-weekdays-ul">
          {month.map((r, k) =>
            r.map(
              (day, indx) =>
                k === 1 && (
                  <li key={indx}>
                    <strong>{day.format("ddd").toUpperCase()}</strong>
                  </li>
                )
            )
          )}
        </ul>
        <ul className="calendar-days-ul">
          <div
            className="popup"
            style={{
              visibility: currentDay ? "visible" : "hidden",
            }}
          >
            <div className="popup-header">
              <strong>
                {currentDay ? `${currentDay.format("DD-MM-YY")}: ` : ""}
              </strong>
              <button onClick={() => setCurrentDay(null)}>close</button>
            </div>

            <div className="event-form">
              <span>Please add an event</span>
              <SubmitEventForm
                setEventList={setEventList}
                currentDay={currentDay}
              />
            </div>
          </div>
          {month.map((row, i) =>
            row.map((d, ind) => (
              <li
                onClick={() => setCurrentDay(d)}
                className="day-tile-item"
                key={ind}
              >
                <Day event={eventList} day={d} />
              </li>
            ))
          )}
        </ul>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .popup {
    position: absolute;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 150px;
    text-align: center;
    background-color: #cad7e3;
    opacity: 0.8;
    top: 105%;
  }

  .popup-header {
    display: flex;
    justify-content: space-between;
  }

  .popup-header button {
    border-radius: 20%;
  }

  .container-calendar {
    position: relative;
    margin: 0;
    min-width: 0;
  }

  .day-tile {
  }

  .calendar-weekdays-ul {
    list-style: none;
    display: table;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .calendar-weekdays-ul li {
    border: 2px solid #aee8b1;
    text-align: center;
    display: table-cell;
    width: 80px;
    padding: 10px;
    color: grey;
  }

  .calendar-days-ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 1px;
    column-gap: 1px;
    padding: 0;
    margin: 0;
    border: 1px solid #c4ebf5;
  }

  .day-tile-item {
    border: 1px solid #bab6b6;
    background-color: #bddef2;
  }

  .day-tile-item :hover {
    background-color: #94a0f2;
  }

  .weekdays {
    color: blue;
    padding: 20px;
    text-align: center;
    margin: 10px;
  }
`;
