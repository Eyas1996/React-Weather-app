
import { useState } from "react";
import { FaSistrix } from "react-icons/fa";

const SearchInput = ({ onSearch }) => {
  const [searchCity, setSearchCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSearch(searchCity);
    setSearchCity("");
  };
  return (
    <form className="input-section" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search City"
        id="search"
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
      />
      <button type="submit">
        <FaSistrix />
      </button>
    </form>
  );
};

export default SearchInput;
