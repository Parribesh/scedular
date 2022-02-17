import React, { useState } from "react";
import Styled from "styled-components";

export default function SubmitEventForm({ setEventList, currentDay }) {
  const [event, setEvent] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    var newEvent = { event: event, day: currentDay };
    setEventList((oldArray) => [...oldArray, newEvent]);
    setEvent("");
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            style={{
              width: "80%",
              height: "80px",
              borderRadius: "20px",
              fontSize: "20px",
            }}
            type="text"
            value={event}
            placeholder="What do you want to add?"
            onChange={(e) => {
              setEvent(e.target.value);
            }}
          ></input>
          <button
            type="submit"
            value="Add"
            style={{
              width: "20%",
              padding: "1px",
              backgroundColor: "green",
              marginTop: "5px",
              borderRadius: "10px",
            }}
          >
            Add{" "}
          </button>
        </div>
      </form>
    </Wrapper>
  );
}

const Wrapper = Styled.section`

    input::-webkit-input-placeholder {
    font-size: 20px;
    line-height: 3;
    text-align: center;
}
`;
