import { BrowserRouter, Route, Switch } from "react-router-dom";
import DetailRoom from "./page/DetailRoom/DetailRoom";
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
