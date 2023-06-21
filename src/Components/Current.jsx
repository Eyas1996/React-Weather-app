const Current = ({ weather }) => {
  return (
    <div className="current">
      <div className="temperature">
        <span id="current-temp">{Math.trunc(weather.main.temp)}°</span>

        <span id="min-max-temp" className="min-max">
          {Math.trunc(weather.main.temp_min)}°/
          {Math.trunc(weather.main.temp_max)}°
        </span>
      </div>
      <div className="location">
        <span id="current-city">{weather.name}</span>
      </div>
      <div className="weather">
        <span>
          <img
            id="icon"
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={""}
          />
        </span>
        <span id="status">{weather.weather[0].main}</span>
      </div>
    </div>
  );
};

export default Current;
