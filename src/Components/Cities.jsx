const Cities = ({ onSelect }) => {
  const popCities = [
    "Sapporo",
    "Kingston",
    "California",
    "Yellowknife",
    "Yaounde",
    "Moscow",
  ];

  const handleCitySelect = (city) => {
    onSelect(city);
  };
  const listCities = popCities.map((city, id) => (
    <li key={id} className="city" onClick={() => handleCitySelect(city)}>
      {city}
    </li>
  ));

  return (
    <div className="cities">
      <ul id="popular-cities">{listCities}</ul>
    </div>
  );
};

export default Cities;
