// import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Form from "./Form/Form";
import List from "./Form/List";
import SignUpForm from "./Form/Form2";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* Check the first is matched or not */}
        <Route exact path="/" component={Form}></Route>
        <Route exact path="/Form2" component={SignUpForm}></Route>
        <Route exact path="/List" component={List}></Route>
      </Switch>
    </div>
  );
}

export default App;
