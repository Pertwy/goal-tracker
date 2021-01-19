import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar"
import CreateGoal from "./components/CreateGoal"
import CreateDiaryEntry from "./components/CreateDiaryEntry"

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      {/* <Route path="/" exact component={AllList} /> */}
      <Route path="/creategoal" component={CreateGoal} />
      <Route path="/creatediary" component={CreateDiaryEntry} />
 
      </div>
    </Router>
  );
}

export default App;
