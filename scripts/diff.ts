import { CloudflareServerLocations as LocationsOld } from "../index.bak.ts";
import { CloudflareServerLocations as LocationsNew } from "../index.ts";

if (Object.keys(LocationsOld).length !== Object.keys(LocationsNew).length) {
  console.log("Locations have different number of entries");
  process.exit(1);
}

for (const key in LocationsOld) {
  //@ts-expect-error
  if (LocationsOld[key] !== LocationsNew[key]) {
    console.log(
      //@ts-expect-error
      `Key ${key} has different values: ${LocationsOld[key]} vs ${LocationsNew[key]}`,
    );
    process.exit(1);
  }
}

console.log("All locations are the same");