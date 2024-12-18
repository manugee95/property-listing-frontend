import Card from "./Card";
import { useContext } from "react";
import PropertyContext from "../context/PropertyContext";

function PropertyListing() {
  const { houses, loadingProperty } = useContext(PropertyContext);

  return (
    <>
      {loadingProperty ? (
        <div className="text-2xl text-center p-[200px]">Loading Properties...</div>
      ) : (
        <div className="flex flex-wrap gap-5 justify-between items-center">
          {houses.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      )}
    </>
  );
}

export default PropertyListing;
