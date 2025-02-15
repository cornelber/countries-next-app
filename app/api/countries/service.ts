import { CountryAPIResponse } from "@/types/definitions";

export class CountryService {
  private readonly API_URL: string;

  constructor(apiUrl: string = "https://restcountries.com/v3.1") {
    this.API_URL = apiUrl;
  }

  async getAllCountries(): Promise<CountryAPIResponse[]> {
    const response = await fetch(`${this.API_URL}/all`);

    if (!response.ok) {
      throw new Error(`REST Countries error: ${response.statusText}`);
    }

    return response.json();
  }

  transformData(countries: CountryAPIResponse[]) {
    return countries.map((country) => ({
      name: country.name.common,
      code: country.cca2,
      flag: country.flags.png,
      region: country.region,
      population: country.population,
      capital: [country.capital?.[0] || "N/A"],
    }));
  }
}
