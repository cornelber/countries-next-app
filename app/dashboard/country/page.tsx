"use client";
import { useCountries } from "@/context/CountryProvider";
import Image from "next/image";

export default function CountryPage() {
  const { countries, loading, error } = useCountries();

  if (loading) return <>loading...</>;
  if (error) return <> error occured</>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Countries</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {countries.map((country) => (
          <li key={country.code} className="p-4 border rounded-lg shadow">
            <Image
              src={country.flag}
              alt={`${country.name} flag`}
              width={16}
              height={10}
            />
            <h2 className="font-semibold">{country.name}</h2>
            <p>Region: {country.region}</p>
            <p>Population: {country.population.toLocaleString()}</p>
            <p>Capital: {country?.capital?.join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
