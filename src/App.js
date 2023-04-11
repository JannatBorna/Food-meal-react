import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Pages/Header/Header';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import FoodHeader from './components/Pages/Foods/FoodHeader/FoodHeader';
import Breakfast from './components/Pages/Foods/Breakfast/Breakfast';
import Dinner from './components/Pages/Foods/Dinner/Dinner';
import Lunch from './components/Pages/Foods/Lunch/Lunch';
import SeeMore from './components/Pages/SeeMore/SeeMore';
import Meals from './components/Pages/Meals/Meals/Meals';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header />
          <Routes>
            <Route exact path="/" element={<Home />}>
            </Route>

            <Route exact path="/home" element={<Home />}>
            </Route>

            <Route exact path="/login" element={<Login />}>
            </Route>

            <Route exact path="/home" element={<FoodHeader />}>
            </Route>

            <Route exact path="/About" element={<Breakfast />}>
            </Route>

            <Route exact path="/blogs" element={<Dinner />}>
            </Route>

            <Route path="/profile" element={<Lunch />}>
            </Route>

            <Route path="/meals" element={<Meals />}>
            </Route>

            <Route path="/seemore" element={<SeeMore />}>
            </Route>
         </Routes>
     </BrowserRouter> 
    </div>
  );
}

export default App;
