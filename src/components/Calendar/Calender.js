import React, { useContext, useState, useEffect } from "react";
import { getMonth } from "./util";
import Month from "./Month";
import CalenderNavigator from "./Navigator";
import CalenderContext from "../../context/CalenderContext";
import styled from "styled-components";

export default function Calender() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(CalenderContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <Wrapper>
      <div className="container-cal">
        <CalenderNavigator />
        <Month month={currentMonth} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .container-cal {
    display: flex;
    flex-direction: column;
    margin: 10px;
  }
`;
