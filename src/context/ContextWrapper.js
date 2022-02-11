import dayjs from "dayjs";
import React, { useState } from "react";
import CalenderContext from "./CalenderContext";

export default function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());

  return (
    <CalenderContext.Provider value={{ monthIndex, setMonthIndex }}>
      {props.children}
    </CalenderContext.Provider>
  );
}
