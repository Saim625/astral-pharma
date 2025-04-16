import Body from "./components/Body";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PoultryProducts from "./components/PoultryProducts";
import LivestockProducts from "./components/LivestockProducts";
import Footer from "./components/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <BrowserRouter>
       <ScrollToTop/>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path="/poultry-products" element={<PoultryProducts />} />
        <Route path="/livestock-products" element={<LivestockProducts />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
