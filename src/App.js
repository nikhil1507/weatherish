import React, { useEffect, useState } from "react";
import Axios from "axios";
import Container from "./components/Container";
import DataViewer from "./components/DataViewer";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Spinner from "react-loader-spinner";
import "./styles/style.css";

export default function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState(" ");
  const [isVisible, setVisible] = useState(false);
  const [temp, setTemp] = useState(" ");
  const [weather, setWeather] = useState(" ");
  const [input, setInput] = useState("");
  const [toShow, setShow] = useState(false);

  const getData = async () => {
    setVisible(true);
    const { data } = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=1d853f80e1b21a910e0cf6f967d46909&units=metric`
    );
    setData(data);
    setLocation(data.name);
    setCountry(data.sys.country);
    setTemp(data.main.temp);
    setWeather(data.weather[0].main);
    setVisible(false);
    setShow(true);
  };

  return (
    <Container>
      <Navbar title="Weatherish" />
      <div className="positionDiv">
        <Search
          value={input}
          onChange={(e) => setInput(e.target.value)}
          isShow={input}
          onClick={() => getData()}
        />
        {isVisible ? (
          <div className="dataViewer">
            <Spinner
              visible={isVisible}
              type="Puff"
              color="#845ec2"
              height={100}
              width={100}
            />
          </div>
        ) : (
          <DataViewer
            temp={temp}
            searchedLocation={location}
            parentCountry={country}
            weather={weather}
            toShow={toShow}
          />
        )}
      </div>
    </Container>
  );
}
