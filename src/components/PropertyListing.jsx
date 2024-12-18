import Card from "./Card";
import { useContext } from "react";
import PropertyContext from "../context/PropertyContext";

function PropertyListing() {
  const { houses } = useContext(PropertyContext);

  return (
    <div className="flex flex-wrap gap-5 justify-between items-center">
      {houses.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default PropertyListing;
