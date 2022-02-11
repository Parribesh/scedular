import React from "react";

const CalenderContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
});

export default CalenderContext;
