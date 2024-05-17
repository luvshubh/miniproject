import logo from './logo.svg';
import './App.css';
import ContactUs from './Pages/ContactUs';
import Package from "./Pages/Package";
import Footer from "./Pages/Footer"

function App() {
  return (
    <div className="mx-auto">
      <ContactUs />
      <Package />
      <Footer/>
    </div>
  );
}

export default App;
