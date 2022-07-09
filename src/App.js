// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import SimpleImagePicker from "./pages/Photo";

//styled components
import { StyledContainer } from "./components/Styles";

// Loader css
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// auth & redux
import AuthRoute from "./components/AuthRoute";
import BasicRoute from "./components/BasicRoute";
import { connect } from "react-redux";

function App({ checked }) {
  return (
    <Router>
      {checked && (
        <StyledContainer>
          <Switch>
            <BasicRoute path="/signup">
              <Signup />
            </BasicRoute>
            <BasicRoute path="/login">
              <Login />
            </BasicRoute>
            <AuthRoute path="/photo">
              <SimpleImagePicker />
            </AuthRoute>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </StyledContainer>
      )}
    </Router>
  );
}
const mapStateToProps = ({ session }) => ({
  checked: session.checked,
});

export default connect(mapStateToProps)(App);
