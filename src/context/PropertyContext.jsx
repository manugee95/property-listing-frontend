import { createContext, useEffect, useState } from "react";

const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [houses, setHouses] = useState([]);
  const [loadingProperty, setLoadingProperty] = useState(false);

  useEffect(() => {
    fetchProperty();
  }, []);

  const fetchProperty = async () => {
    setLoadingProperty(true);
    try {
      const res = await fetch(`http://localhost:3000/properties`);
      const data = await res.json();
      setHouses(data);
    } catch (error) {
      console.error("Error fetching property:", error);
      setHouses([]);
    } finally {
      setLoadingProperty(false);
    }
  };

  return (
    <PropertyContext.Provider value={{ houses, loadingProperty }}>
      {children}
    </PropertyContext.Provider>
  );
};

export default PropertyContext