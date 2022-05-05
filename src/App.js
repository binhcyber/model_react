import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeDetail from "./page/HomePage/HomeDetail/HomeDetail";
import Layout from "./template/Layout";
import ListRoom from "./page/ListRoom/ListRoom";
import DetailRoom from "./page/DetailRoom/DetailRoom";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import { createBrowserHistory } from "history";
import UserInfor from "./page/UserInfor/UserInfor";
import NotFoundPages from "./page/NotFound/NotFoundPages";
import Loading from "./component/Loading/Loading";
import NotFoundLayout from "./template/NotFoundLayout";
import ManageUser from "./page/ManageUser/ManageUser";
import EditUser from "./page/ManageUser/EditUser";
export let history = createBrowserHistory();
function App() {
  return (
    <>
      <Loading />
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
            path="/room"
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
          <Route
            path="/user"
            exact
            render={() => {
              return <Layout Component={UserInfor} />;
            }}
          />
          {/* <Route
            path={"*"}
            exact
            render={() => {
              return <NotFoundLayout Component={NotFoundPages} />;
            }}
          /> */}
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/admin" exact component={ManageUser} />
          <Route path="/edituser" exact component={EditUser} />
          <Route path="*" exact component={NotFoundPages} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default App;
