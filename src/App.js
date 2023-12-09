import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./lib/fontawesome/css/all.min.css"
import Header from "./components/Header";
import WatchList from './components/WatchList';
import Watched from './components/Watched';
import Add from './components/Add';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/"  element={<WatchList />}/>
        <Route path="/watched"  element={<Watched />}/>
        <Route path="/add"  element={<Add />}/>
      </Routes>
    </Router>
  );
}

export default App;
