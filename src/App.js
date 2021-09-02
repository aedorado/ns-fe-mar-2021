import { Route, Switch } from "react-router-dom";
import Pokelist from "./Pokelist";
import Pokemon from "./Pokemon";

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/p/:id">
          <Pokemon />
        </Route>
        <Route match="*">
          <Pokelist />
        </Route>
      </Switch>
      
    </>
  );
}