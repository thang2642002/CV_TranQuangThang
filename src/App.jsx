import LaptopTablet from "./components/laptop-tablet/LaptopTablet";
import Mobile from "./components/mobile/Mobile";
function App() {
  return (
    <>
     <div className="hidden md:block"> <LaptopTablet/></div>
     <div className="block md:hidden"><Mobile/></div>
    </>
  );
}

export default App;
