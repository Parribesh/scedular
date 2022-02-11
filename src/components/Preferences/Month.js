import React from "react";
import styled from "styled-components";
import Day from "./Day";
import "./Month.css";

export default function Month({ month }) {
  return (
    <div className="container-calendar">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((d, ind) => (
            <Day className="day-tile" day={d} key={ind} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

const Wrapper = styled.section``;
