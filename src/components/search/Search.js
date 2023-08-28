import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`,
        geoApiOptions
      );

      const data = await response.json();

      if (response.ok) {
        // Hvis responsen er OK, opprett en ny array av alternativer basert på dataen
        const options = data?.data?.map((city) => ({
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        }));

        return { options }; // Returner responsen med "options" som et array av alternativer
      } else {
        console.error("API request failed:", data);
      }
    } catch (error) {
      console.error("API request failed:", error);
    }

    return { options: [] }; // Hvis noe går galt, returner en tom array av alternativer
  };
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  return (
    <AsyncPaginate
      placeholder="Søk etter by"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};
export default Search;
