import React, { useState } from 'react';
import { useQuery } from '@apollo/client'
import { GET_ALL_BIKES } from './services/graphql/Queries'
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import columns from '../constants/bikeColumns'

const BikeList = () => {
  const [bikeData, setBikeData ] = useState([]);
  
  const getBikes = (bikesData) => {
    return bikesData?.bikes.map((bike) => ({
      key: bike?.id,
      id: bike?.id,
      model: bike?.model,
      year: bike?.year,
      price: bike?.price,
      bikeType: bike?.bikeType?.name,
      manufacturer: bike?.manufacturer?.name,
    })
    );
  };

  const AllBikes = () => {
    const { loading, error, data } = useQuery(GET_ALL_BIKES);
    
    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>`Error! ${error.message}`</h2>

    return <BootstrapTable
      keyField='id'
      data={(getBikes(data))}
      columns={columns}
      striped
      hover
      condensed
      pagination={paginationFactory()}
    />
  };

  return (
    <AllBikes />
  )
}


export default BikeList;