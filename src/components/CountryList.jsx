import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryItem from "./CountryItem";
import Pagination from "./Pagination";
import { BsSearch } from "react-icons/bs";
import Spinner from "./Spinner";

function CountryList() {
  const [name, setName] = useState("");
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedRegion, setSortedRegion] = useState("");
  const [loading, setLoading] = useState(true);

  // Pagination State

  const [currentPage, setCurrentPage] = useState(1);
  const [countryPerPage, setCountryPerPage] = useState(8);
  const indexOfLastCountry = currentPage * countryPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countryPerPage;

  const URL = `https://restcountries.com/v3.1/all?fields=name,capital,currencies,region,subregion,flags,languages,flag,population`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(URL);
        setCountries(result.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [URL]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(name);
  };

  const handleRegion = (event) => {
    setSortedRegion(event.target.value);
  };

  const filteredByName = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredByRegion = filteredByName.filter((country) =>
    country.region.toLowerCase().includes(sortedRegion.toLowerCase())
  );

  const currentCountries = filteredByRegion.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="bg-secondary">
      <div className="flex flex-col md:flex-row  justify-between mx-10 pt-10">
        <div className="relative flex  justify-between items-center max-w-[600px]">
          <form
            onSubmit={handleSearch}
            className="flex flex-row-reverse  justify-around items-center w-full m-auto border
        border-gray-100 gap-2 py-2 px-3 bg-primary"
          >
            <div>
              <input
                className="bg-primary focus:outline-none"
                type="text"
                value={name}
                placeholder="Search by country name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <button type="submit">
              <BsSearch size={20} />
            </button>
          </form>
        </div>
        <select
          onChange={handleRegion}
          className="bg-primary focus:outline-none w-[60%] py-2 md:w-[25%] lg:w-[18%] mt-10 md:mt-0"
        >
          <option value="">Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {currentCountries.map((country) => (
          <CountryItem key={country.name.common} country={country} />
        ))}
      </div>
      <div className="m-auto">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          countryPerPage={countryPerPage}
          totalCountries={filteredByRegion.length}
        />
      </div>
    </div>
  );
}

export default CountryList;
