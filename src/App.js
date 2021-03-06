import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";

function App() {
   return (
      <>
         <Router>
            <Navbar></Navbar>
            <Header></Header>
            <Switch>
               <Route exact path="/">
                  <Home></Home>
               </Route>
               <Route path="/home">
                  <Home></Home>
               </Route>
               <Route exact path="/dashboard">
                  <Dashboard></Dashboard>
               </Route>
            </Switch>
         </Router>
      </>
   );
}

export default App;
