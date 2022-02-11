import React, { useContext, useEffect, useState } from "react";
import styledComponents from "styled-components";
import { AuthContext } from "../../App";
import Weather from "../Sidebar/Weather";

export default function Sidebar() {
  const { state } = useContext(AuthContext);
  const [news, setNews] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const location = Weather();
  const fetchApi = state.fetchApi_url;
  const fetchWeather = state.weatherApi_url;

  useEffect(() => {
    fetch(fetchApi)
      .then((response) => response.json())
      .then((data) => setNews(data.articles))
      .catch((error) => console.log(error));
  }, [fetchApi]);

  useEffect(() => {
    // if (location.loaded) {
    //   const fetchLocationData = location.coordinates;
    //   fetch(fetchWeather, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(fetchLocationData),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => setWeatherData(data))
    //     .catch((error) => console.log(error));
    // }
  }, [location]);

  return (
    <Wrapper>
      <aside className="container-sidebar">
        <div className="weather-container">
          <div>
            <h2>Today's Weather</h2>
            <div>
              {weatherData ? (
                <div className="data-container">
                  <span>
                    Current City:&nbsp;
                    {/* {weatherData.name} */}
                  </span>
                  <span>
                    Current Temp:&nbsp;
                    {/* {weatherData.main.temp} */}
                  </span>
                </div>
              ) : (
                "Location not available"
              )}
            </div>
          </div>
        </div>
        <div>
          <h2>News Today</h2>
        </div>
        <div className="news-container">
          {news.map((item, key) => {
            return (
              <div>
                <h4>{item.title}</h4>
                <br></br>
              </div>
            );
          })}
        </div>
      </aside>
    </Wrapper>
  );
}

const Wrapper = styledComponents.section`

    .container-sidebar{
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      margin: 0px;
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
      width: 15rem;
      height: 93vh;
      
    }
    .news-container{
      overflow-y:auto;
      
    }
    .data-container{
      display: flex;
      flex-direction: column;
    }
`;
