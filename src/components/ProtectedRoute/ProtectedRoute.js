import React from "react";
import { Route, Redirect } from "react-router-dom";
import Preloader from "../Preloader/Preloader";

const ProtectedRoute = ({ component: Component, ...props }) => {
    return (
      <Route>
        {() =>
         props.loggedIn===undefined? <Preloader isOpen={true} /> : props.loggedIn===true ? <Component {...props} /> : <Redirect to="./signin" />
        }
      </Route>
    );
  };
  
  export default ProtectedRoute; 
