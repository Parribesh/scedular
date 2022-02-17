import dayjs from "dayjs";
import React, { useContext } from "react";
import styled from "styled-components";
import CalenderContext from "../../context/CalenderContext";

export default function CalenderNavigator() {
  const { monthIndex, setMonthIndex } = useContext(CalenderContext);

  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };

  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };

  const handleToday = () => {
    setMonthIndex(dayjs().month());
  };

  return (
    <Wrapper>
      <div className="header">
        <h1>Calendar</h1>
        <button className="today" onClick={handleToday}>
          <strong> Today</strong>
        </button>
        <h2>
          {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
        </h2>
        <div className="navigator-button">
          <button className="prev" onClick={handlePrevMonth}>
            <strong>{`-`}</strong>
          </button>
          Month
          <button className="next" onClick={handleNextMonth}>
            <strong>{`+`}</strong>
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #585c59;
    .prev {
      border-radius: 50px;
      background-color: #a0e2f2;
      font-size: 20px;
    }
    .next {
      border-radius: 50px;
      background-color: #a0e2f2;
      font-size: 20px;
    }
  }
  button {
    outline: none;
    border: none;
    background-color: #a0e2f2;
    border-radius: 20px;
  }
  .navigator-button {
    display: flex;
    justify-content: space-between;
    width: 100px;
    font-size: 20px;
  }
  button: hover {
    background-color: #b8d1f5;
  }
  .next: hover, .prev: hover {
    background-color: #b8d1f5;
  }
`;
