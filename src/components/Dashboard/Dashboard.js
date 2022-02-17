import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import Styled from "styled-components";
import { AuthContext } from "../../App";
import Navigator from "./Navigator";
import Calender from "../Calendar/Calender";
import Sidebar from "./Sidebar";
import Menubar from "../Main/Menubar";

export default function Home() {
  const { state } = useContext(AuthContext);

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
        <div className="main-view">
          <div className="menu-bar">
            <Menubar />
          </div>
          <div className="calendar-section">
            <Calender />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = Styled.section`
 * {
    box-sizing: border-box;
  }

  .sidebar{
   max-width: 500px;
  }

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
  flex-wrap: wrap;
  border: 3px solid #d9f0c5;
  border-radius: 10px;
  margin: 20px;
  padding-bottom: 10px;
  background-color: #edf4f7;
  width: 620px;
}
.main-view{
   width: 100%;
}
`;
