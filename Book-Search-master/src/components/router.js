import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../App";
import Book from "./book";


const Router = () => (


   <BrowserRouter>
   
       <Switch>
           <Route path ="/" component ={App} exact />
           <Route path ="/book/:id" component ={Book} />
       </Switch>

   </BrowserRouter>

);

export default Router;