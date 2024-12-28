import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [search, setSearch] = useState(""); // Search query
  const [cities, setCities] = useState([]); // List of cities fetched from API
  const [filteredCities, setFilteredCities] = useState([]); // Filtered cities based on search

  useEffect(() => {
    const endpoint =
      "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
    axios.get(endpoint).then((response) => {
      setCities(response.data);
      console.log(cities);
    });
  }, []);

  // Find matching cities or states based on user input (ghanta samaj aya video se T-T)
  function findMatches(wordToMatch, cities) {
    return cities.filter((place) => {
      const regex = new RegExp(wordToMatch, "gi"); // This creates a regular expression object for pattern matching. wordToMatch: The string to match. "gi": Flags for the regex. g: Global search (matches all instances, not just the first one). i: Case-insensitive search (doesn't differentiate between uppercase and lowercase letters).
      //The regex is used to search for the wordToMatch string within the city or state fields of the place object.
      return place.city.match(regex) || place.state.match(regex);
    });
  }

  useEffect(() => {
    if (search) {
      const matchedAreas = findMatches(search, cities);
      setFilteredCities(matchedAreas);
    } else {
      setFilteredCities([]);
    }
  }, [search, cities]);

  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <input
        
        type="text"
        placeholder="Search for cities or states"
        className="bg-gray-500 text-xl text-white p-2 rounded "
        value={search}
        onChange={(e) => setSearch(e.target.value)} // Update search query
      />
      <button className="bg-blue-300 text-white p-1 rounded">Search</button>

      <ul>
        {filteredCities.length > 0 ? (
          filteredCities.map((place, index) => (
            <li key={index}>
              {place.city}, {place.state}
            </li>
          ))
        ) : (
          <li>No matches found</li>
        )}
      </ul>
    </div>
  );
};

export default App;
