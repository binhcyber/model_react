import { BrowserRouter, Route, Switch } from "react-router-dom";
import DetailRoom from "./page/DetailRoom/DetailRoom";
import Test from "./page/DetailRoom/test";
import test from "./page/DetailRoom/test";
import HomeDetail from "./page/HomePage/HomeDetail/HomeDetail";
import Layout from "./template/Layout";
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
        <Route path={"/test"} exact component={Test} />
        <Route
          path="/room/:id"
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
