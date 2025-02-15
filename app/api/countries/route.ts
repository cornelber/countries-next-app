import { NextResponse } from "next/server";
import { CountryService } from "./service";

export async function GET() {
  try {
    const service = new CountryService();

    const countries = await service.getAllCountries();
    const transformedData = service.transformData(countries);

    return NextResponse.json(transformedData, {
      headers: {
        "Cache-Control": "public, s-maxage=3600", // Cache 1 hour
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Eroare necunoscută" },
      { status: 500 }
    );
  }
}
