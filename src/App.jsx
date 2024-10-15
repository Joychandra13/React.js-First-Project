import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import {FilterAndSearch} from './Components/Filter'
import {Trending} from './Components/TrendingCard'
import {BestSellingItem} from './Components/BestSelling'
import {Review} from './Components/Reviews'
import Vehicle from './Components/FindVehicles';
import {Footer} from './Components/footer'


function App() {

  return (
    <>
     <Navbar />
     <Hero/>
     <FilterAndSearch/>
     <Trending/>
     <BestSellingItem/>
     <Review/>
     <Vehicle/>
     <Footer/>
    </>
  )
}

export default App
