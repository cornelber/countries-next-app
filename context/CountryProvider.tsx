"use client";

import { Country, CountryContextType } from "@/types/definitions";
import { createContext, useContext, useEffect, useState } from "react";

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export const CountryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("/api/countries");
        if (!response.ok) {
          throw new Error("Failed to fetch countries");
        }
        const data = await response.json();
        setCountries(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return (
    <CountryContext.Provider value={{ countries, loading, error }}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountries = () => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error("useCountries must be used within a CountryProvider");
  }
  return context;
};
