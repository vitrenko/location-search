import {useState} from "react";
import Map from "./components/Map.tsx";
import LocationSearch from "./components/LocationSearch.tsx";
import type {Place} from "./api/Place.ts";

function App() {
  const [place, setPlace] = useState<Place | null>(null);

  return <div className="h-screen w-screen grid grid-cols-12">
    <div className="col-span-3 p-3">
      <LocationSearch onPlaceClick={(p) => setPlace(p)} />
    </div>
    <Map place={place} />
  </div>;
}

export default App;
