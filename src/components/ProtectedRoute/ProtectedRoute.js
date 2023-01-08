import React from "react";
import { Route, Redirect } from "react-router-dom";
import Preloader from "../Preloader/Preloader";

const ProtectedRoute = ({ component: Component, ...props }) => {
    return (
      <Route>
        {() =>
         {if (props.loggedIn===undefined) {return <Preloader isOpen={true} />} 
         if (props.loggedIn===true) {return <Component {...props} />} 
         if (props.loggedIn===false) {return <Redirect to="./" />}}
        }
      </Route>
    );
  };
  
  export default ProtectedRoute; 
