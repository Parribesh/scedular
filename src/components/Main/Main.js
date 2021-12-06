import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Main() {
  const [myDates, setMyDates] = useState([0]);
  const [value, onChange] = useState(new Date());
  const [show, setShow] = useState(false);

  function showDay() {
    setShow(true);
    console.log(value);
  }
  function handleClick() {
    setMyDates([value]);
    console.log(value);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pick A Schedule</h1>
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
  );
}

export default Main;
