import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Destination from "./pages/Destinations/Destination";
import Footer from "./components/Footer/Footer";
import Triptpes from "./pages/Triptypes/Triptypes";
import Contacts from "./pages/contactus/Contacts";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/triptypes" element={<Triptpes />} />
      <Route path="/contactus" element={<Contacts/>}/>
  
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App