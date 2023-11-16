import Map from "./components/Map";
import SplashScreen from "./components/SplashScreen";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/map" element={<Map />} />
    </BrowserRouter>
  );
}

export default App;
