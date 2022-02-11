import dayjs from "dayjs";
import React, { useContext } from "react";
import CalenderContext from "../../context/CalenderContext";
import styled from "styled-components";

export default function Day({ day, rowIdx }) {
  const { monthIndex } = useContext(CalenderContext);
  let month = dayjs(new Date(dayjs().year(), monthIndex)).format("MM");

  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? { backgroundColor: "blue" }
      : "";
  }

  function getDaysToBlur() {
    return month === day.format("MM") ? "" : "grey";
  }

  return (
    <Wrapper>
      <div className="day-tile">
        <header>
          {rowIdx === 0 && (
            <p className="weekdays">{day.format("ddd").toUpperCase()}</p>
          )}
          {getCurrentDayClass() ? (
            <h3
              className="day-text"
              style={{ backgroundColor: "#0099ff", borderRadius: "50%" }}
            >
              {day.format("DD")}
            </h3>
          ) : (
            <h3 className="day-text" style={{ color: getDaysToBlur() }}>
              {day.format("DD")}
            </h3>
          )}
        </header>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .day-tile {
    background-color: #4a524c;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    border: 1px solid #b6f2c5;
    padding: 20px;
  }
  .weekdays {
    text-align: center;
    margin: 10px 0 0 0;
    color: grey;
  }
  .day-text {
    text-align: center;
    color: white;
  }
`;
