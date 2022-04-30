import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeDetail from "./page/HomePage/HomeDetail/HomeDetail";
import Layout from "./template/Layout";
import ListRoom from "./page/ListRoom/ListRoom";
import DetailRoom from "./page/DetailRoom/DetailRoom";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import { createBrowserHistory } from "history";
export let history = createBrowserHistory();
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
        <Route path="/login" exact component={Login} />
        <Route path={"/register"} exact component={Register} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
