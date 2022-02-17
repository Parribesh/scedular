import Styled from "styled-components";

export default function Menubar() {
  return (
    <Wrapper>
      <div className="menubar">
        <nav>
          <a href="/calendar">Your Calendar</a>
          <a href="/events">Events</a>
          <a href="/menu1">Menu1</a>
          <a href="/menu2">Menu2</a>
        </nav>
      </div>
    </Wrapper>
  );
}

const Wrapper = Styled.section`
{
 nav{
   display: flex;
    gap: 0.5 rem; 
 }
a {
  flex: 1;
  background-color: #333;
  color: #fff;
  border: 1px solid;
  padding: 0.5rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.5s ease-out;
}

a:hover,
a:focus {
  background-color: #fff;
  color: #333;
}
}
`;
