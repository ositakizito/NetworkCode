import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./home";
import ReviewMTN from "./reviewMTN";
import ReviewAirtel from "./reviewAirtel";
import ReviewMobile from "./reviewMobile";
import ReviewGlo from "./reviewGlo";
import About from "./about";



function App() {
  return (
    <div className="App">
   <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/" element={<Home/>}/>
         <Route path="reviewMTN" element={<ReviewMTN/>}/>
         <Route path="reviewAirtel" element={<ReviewAirtel/>}/>
         <Route path="reviewMobile" element={<ReviewMobile/>}/>
         <Route path="reviewGlo" element={<ReviewGlo/>}/>
         <Route path="about" element={<About/>}/>
       </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
