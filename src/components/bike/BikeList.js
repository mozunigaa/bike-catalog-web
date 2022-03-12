import React, { useEffect, useState } from 'react';
import {useQuery, gql} from '@apollo/client'
import { GET_ALL_BIKES } from './services/graphql/Queries'

function BikeList(){

const { error, loading, data } = useQuery(GET_ALL_BIKES);

useEffect(()=> {
    console.log(data);
},[data])
    return <div>
    </div>
}

export default BikeList;