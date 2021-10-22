import { HomePage } from "./HomePage";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import {AboutPage} from "./AboutPage/AboutPage"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about">
          <AboutPage />
          </Route>
        <Route path="/">
          <HomePage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}


export default App;
