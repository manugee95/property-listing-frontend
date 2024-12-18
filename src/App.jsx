import PropertyListing from "./components/PropertyListing";
import { PropertyProvider } from "./context/PropertyContext";

function App() {
  return (
    <PropertyProvider>
      <div className="px-[5%]">
        <h1 className="text-center text-3xl font-bold text-orange-500 pt-[3%] pb-[5%]">
          Property Listing
        </h1>
        <PropertyListing />
      </div>
    </PropertyProvider>
  );
}

export default App;
