export interface Country {
    name: string;
    code: string;
    flag: string;
    region: string;
    population: number;
    capital?: string[];
}

export interface CountryAPIResponse {
    name: {
        common: string;
    };
    cca2: string;
    flags: {
        png: string;
    };
    region: string;
    population: number;
    capital?: string[];
}

export interface CountryContextType {
    countries: Country[];
    loading: boolean;
    error: string | null;
  }