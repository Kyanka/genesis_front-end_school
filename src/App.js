import './App.css';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getTrends} from "./redux/reducer";
import Trends from "./components/Trends/Trends";
import {Route} from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  //const state = useSelector((state) => state)
  useEffect(() => {
    dispatch(getTrends());
  }, []);
  return (
    <div className="App">
      <Route exact path='/' component={Trends}/>
    </div>
  );
}

export default App;
