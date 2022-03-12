import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { ApolloProvider } from "@apollo/client";
import client from "../graphql/Client";
import BikeList from "../components/bike/BikeList";

function AppRouter(){
    return(
      <ApolloProvider client={client}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<BikeList/>}/>
            </Routes>
        </BrowserRouter>
      </ApolloProvider>
    )
}
export default AppRouter;