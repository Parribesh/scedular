import { attempt, date } from "joi";
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Styled from "styled-components";

export default function Main() {
  const [myDates, setMyDates] = useState([0]);
  const [value, onChange] = useState(new Date());
  const [show, setShow] = useState(false);

  function showDay() {
    setShow(true);
    console.log(value);
  }
  function handleClick() {
    setMyDates([value]);
  }
  return (
    <Wrapper>
      <div className="App">
        <header className="App-header">
          <div
            className="head-date"
            dangerouslySetInnerHTML={{ __html: value }}
          ></div>
          <Calendar onChange={onChange} value={value} onClickDay={showDay} />
          <div>
            You have picked
            <h1>
              {show
                ? "add " +
                  value.getMonth() +
                  "/" +
                  value.getDate() +
                  " to your dates?"
                : "not selected"}
              <button type="submit" onClick={handleClick}>
                Yes
              </button>
            </h1>
          </div>
        </header>
      </div>
    </Wrapper>
  );
}

const Wrapper = Styled.section`
.App{
  display: flex;
  justify-content: center;
  align-item: center;
}
.head-date{
  display: flex;
  justify-content: center;
}
`;
