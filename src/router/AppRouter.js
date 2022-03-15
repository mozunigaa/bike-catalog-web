import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { ApolloProvider } from "@apollo/client";
import client from "../graphql/Client";
import Home from "../pages/home";

function AppRouter(){
    return(
      <ApolloProvider client={client}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<Home/>}/>
            </Routes>
        </BrowserRouter>
      </ApolloProvider>
    )
}
export default AppRouter;