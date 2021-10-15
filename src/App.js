import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";

function App() {
   return (
      <>
         <Router>
            <Navbar></Navbar>
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
