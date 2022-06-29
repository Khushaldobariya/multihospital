import Header from "./componet/Header";
import Home from "./container/Home";
import { Switch, Route } from "react-router-dom";
import Departments from "./container/Departments/Departments";
import About from "./container/About/About";
import Doctor from "./container/Doctor/Doctor";
import Contact from "./container/Contact/Contact";
import Footer from "./componet/Footer";
import Auth from "./container/Auth/Auth";
import Medicine from "./container/Medicine/Medicine";
import PublicRoute from "./Route/PublicRoute";
import PrivateRoute from "./Route/PrivateRoute";
import Appointment from "./container/Appoinment/Appoinment";
import ListAppintment from "./container/Appoinment/ListAppintment";
import ContactList from "./container/Contact/ContactList";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/Store";
import Counter from "./container/Counter/Counter";

function App() {
  const store= ConfigureStore ()
  return (
    <>
<Provider store={store}>
      <Header />
      <Switch>
        <PublicRoute exact path={"/"} component={Home} />
        <PublicRoute exact path={"/Departments"} component={Departments} />
        <PublicRoute exact path={"/doctor"} component={Doctor} />
        <PublicRoute exact path={"/About"} component={About} />
        <PrivateRoute exact path={"/Medicine"} component={Medicine} />
        <PublicRoute exact path={"/Contact"} component={Contact} />
        <PublicRoute exact path={"/ContactList"} component={ContactList} />
        <PublicRoute exact path={"/Counter"} component={Counter} />
        <PublicRoute exact path={"/Appointment"} component={Appointment} />
        <PublicRoute exact  path={"/ListAppintment"}  component={ListAppintment}/>
        <PublicRoute restricated={true} exact path={"/Auth"} component={Auth} />
      </Switch>
      <Footer />
      </Provider>
    </>
  );
}

export default App;
