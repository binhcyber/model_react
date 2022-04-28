import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeDetail from "./page/HomePage/HomeDetail/HomeDetail";
import Layout from "./template/Layout";
import ListRoom from "./page/ListRoom/ListRoom";
import DetailRoom from "./page/DetailRoom/DetailRoom";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact
          render={() => {
            return <Layout Component={HomeDetail} />;
          }}
        />
        <Route
          path="/room/"
          exact
          render={() => {
            return <Layout Component={ListRoom} />;
          }}
        />
        <Route
          path="/detailroom/:id"
          exact
          render={() => {
            return <Layout Component={DetailRoom} />;
          }}
        />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
