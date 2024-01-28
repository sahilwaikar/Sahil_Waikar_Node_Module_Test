import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Banner from './Components/Banner';
import Giveaway from './Components/Giveaway';
import Footer from './Components/Footer';

function App() {
  return (
    <div> 
      <NavBar/>
      <Banner/>
      <Giveaway/> 
      <Footer/>
    </div>
  );
}

export default App;
