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
          today
        </button>
        <h2>
          {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
        </h2>
        <div className="navigator-button">
          <button className="prev" onClick={handlePrevMonth}>
            Prev
          </button>
          <button className="next" onClick={handleNextMonth}>
            Next
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .prev {
      border-radius: 25px;
    }
    .next {
      border-radius: 25px;
    }
  }
`;
