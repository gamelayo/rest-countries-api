import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BackButton } from "./BackButton";
import Spinner from "./Spinner";
const Country = () => {
  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(true);

  const { countryId } = useParams();

  const URL = `https://restcountries.com/v3.1/name/${countryId}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        setCountry(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [URL]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="bg-secondary h-[100%] w-full">
      <div className="w-[90%] m-auto pt-8">
        <BackButton url="/" />
        <div className="flex flex-col md:flex-row  w-full  md:justify-center md:gap-16 my-12">
          <div className="w-full md:w-[40%] md:h-[50vh]">
            <img
              src={country[0]?.flags.png}
              alt={country[0]?.flags.alt}
              className="w-full h-[100%]"
            />
          </div>
          <div className="my-8 md:my-4 md:w-[50%]">
            <h1 className="text-xl font-semibold">{country[0]?.name.common}</h1>
            <div className="flex flex-col md:flex-row my-4 justify-between">
              <div>
                <p className="mb-3 md:mb-1">
                  Native Name:
                  {Object.values(country[0]?.name.nativeName)[0]?.common}
                </p>
                <p className="mb-3 md:mb-1">
                  Population: {country[0]?.population}
                </p>
                <p className="mb-3 md:mb-1">Region: {country[0]?.region}</p>
                <p className="mb-3 md:mb-1">
                  Sub-region: {country[0]?.subregion}
                </p>
                <p className="mb-3 md:mb-1">Capital: {country[0]?.capital}</p>
              </div>
              <div className="my-4">
                <p className="mb-3 md:mb-1">
                  Top Level Domain: {country[0]?.tld}
                </p>
                <p className="mb-3 md:mb-1">
                  Currencies:
                  {Object.values(country[0]?.currencies).map((currency) => (
                    <span key={currency.name}> {`${currency.name}`}</span>
                  ))}
                </p>
                <p className="mb-3 md:mb-1">
                  Languages:
                  {Object.values(country[0]?.languages).map((language) => (
                    <span key={language}> {`${language}, `}</span>
                  ))}
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-2 md:items-center h-[40px]">
              <h2 className="mb-3 text-lg font-semibold md:font-normal md:text-sm whitespace-nowrap my-auto">
                Border Countries:{" "}
              </h2>
              <ul className="grid grid-cols-3 md:grid-cols-4 gap-4 ">
                {country[0]?.borders?.map((border) => (
                  <li className="bg-primary m-auto px-7  " key={border}>
                    {border}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
