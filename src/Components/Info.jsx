const Info = ({ weather }) => {
  return (
    <div className="info">
      <h2 className="details">Weather Details</h2>
      <div>
        <span>Feels Like</span>
        <span id="feel">{Math.trunc(weather.main.feels_like)}°</span>
      </div>
      <div>
        <span>Sky description</span>
        <span id="description">{weather.weather[0].description}</span>
      </div>
      <div>
        <span>Humidity</span>
        <span id="humidity">{Math.trunc(weather.main.humidity)}%</span>
      </div>
      <div>
        <span>Wind Speed</span>
        <span id="wind">{Math.trunc(weather.wind.speed)}km/h</span>
      </div>
      <div>
        <span>Pressure</span>
        <span id="pressure">{Math.trunc(weather.main.pressure)}mbar</span>
      </div>
    </div>
  );
};

export default Info;
