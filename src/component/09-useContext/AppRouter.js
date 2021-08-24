import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutScreen } from "./AboutScreen";
import { LoginScreen } from "./LoginScreen";
import { HomeScreen } from "./HomeScreen";
import { NavBar } from "./NavBar";
export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="container">
          <Switch>
            {/* exact sirve para redirigir exactament como lo indica el path asi se evita que la expresion regular tome todo en lugar de lo que solo se le presente ej. "/" /login */}
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/about" component={AboutScreen} />
            <Route exact path="/login" component={LoginScreen} />

            {/*Este es para crear un default donde las rutas que no esten definidas van a este lugar */}
            <Route component={HomeScreen} />

            {/* Este es por si quieres redireccionar a un gar */}
          </Switch>
        </div>
      </div>
    </Router>
  );
};
