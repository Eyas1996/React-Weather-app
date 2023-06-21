import { useEffect, useState } from "react";

import Current from "./Components/Current";
import SearchInput from "./Components/SearchInput";
import Cities from "./Components/Cities";
import Info from "./Components/Info";

import "./App.css";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Berlin");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");



  useEffect(() => {
    const fetchData = async () => {
      setError("");
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=44f47ce10e9f96180cf1dcf529849f54`
      );
      // this function now checks the response status using response.ok. If the response status is not within the range of 200-299 (indicating a successful response), it means the city name provided is incorrect or not found.
      if (response.ok) {
        const data = await response.json();
        setWeather(data);
        setLoading(false);

        console.log(data.weather[0].main);
      } else {
        setError("City not found. Please enter a valid city name!");
        setLoading(true);
      }
    };

    fetchData();
  }, [city]);

  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  const handlePopularCitySelect = (selectedCity) => {
    setCity(selectedCity);
  };

  return (
    <div>
      <div
        id="app"
        
      >
        <div className="container">
          <header>
            <h1 className="title">
              {error !== "" ? [error] : "The Weather Now..."}
            </h1>
            {loading ? <p className="loading">Loading...</p> : <Current weather={weather} />}
          </header>
          <div className="card">
            <SearchInput onSearch={handleSearch} />
            <Cities onSelect={handlePopularCitySelect} />
            {loading ? <p className="loading">Loading...</p> : <Info weather={weather} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
