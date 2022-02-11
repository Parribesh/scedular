import React, { useContext } from "react";
import { AuthContext } from "../../App";
import Styled from "styled-components";

export default function Navigator() {
  const { state, dispatch } = useContext(AuthContext);
  const { avatar_url, name } = state.user;

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="content">
          <div className="avatar">
            <img src={avatar_url} alt="Avatar" />
            <span className="profile-name">{name}</span>
          </div>
          <div className="search-field">
            <input
              className="input-event"
              type={"text"}
              placeholder="Search an Event"
            ></input>
            <button>Search</button>
          </div>

          <button className="logout" onClick={() => handleLogout()}>
            Logout
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = Styled.section`
.container{

  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: Arial;
}
  .logout{
    all: unset;
    width: 100px;
    height: 35px;
    margin: 10px 0px 0 0;
    background-color: #0041C2;
    color: #fff;
    text-align: center;
    border-radius: 3px;
    border: 1px solid #0041C2;
    &:hover{
      background-color: #fff;
      color: #0041C2;
    }
  }
    .content{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 8px 10px; 
      height: 50px;
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
      width: auto;
      .avatar{
        display: flex;
        justify-content: center;
        margin: 0;
        border-radius: 25px;
        background-color: #F5F5DC;

        .profile-name{
          margin-left: 8px;
          margin-right: 10px;
        }
  
      img{
        height: 50px;
        width: 50px;
        border-radius: 50%;
      }
  
      >span:nth-child(2){
        margin-top: 20px;
        font-weight: bold;
      }
  
      >span:not(:nth-child(2)){
        margin-top: 20px;
        font-size: 14px;
      }
  
    }
}
.search-field{
       display: flex;
       justify-content: center;
       align-items: center;
       margin: 0;
       flex-grow: 1;
       input{
        width: 70%;
        height: 30px;
        text-align: center;
        border-radius: 25px;
        border: 2px solid #73AD21;  
       }
     
`;
