import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import Styled from "styled-components";
import { AuthContext } from "../../App";
import Navigator from "./Navigator";
import Calender from "../Preferences/Calender";
import Sidebar from "./Sidebar";

export default function Home() {
  const { state, dispatch } = useContext(AuthContext);

  if (!state.isLoggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <Wrapper>
      <div className="Nav">
        <Navigator />
      </div>
      <div className="main-container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="calendar-section">
          <Calender />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = Styled.section`
.main-container{
  display: flex;
}
.Nav{
  top: 0;
  position: sticky;
}
.calendar-section{
  display: flex;
  justify-content: center;
  margin: 0 auto;
}
.sidebar{
  
}
`;
