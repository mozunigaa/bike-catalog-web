import React, { useEffect, useState } from 'react';
import {useQuery, gql} from '@apollo/client'
import { GET_ALL_BIKES } from './services/graphql/Queries'
import "antd/dist/antd.css";
import { Table } from 'antd';

const columns = [
    {
        title: "Number",
        width: 100,
        dataIndex: "id",
        key: "id",
        fixed: "left",
    },
    {
        title: "Model",
        width: 100,
        dataIndex: "model",
        key: "model",
        fixed: "left",
    },
    {
        title: "Year",
        dataIndex: "year",
        key: "year",
        width: 150,
    },
    {
        title: "Price",
        dataIndex: "price",
        key: "price",
        width: 150,
    },
  ];

  const getBikes = (bikesData) => {
    const data = [];
    console.log("entro a get bikes")
    bikesData?.bikes.map((bike) =>
      data.push({
        key: bike?.id,
        id: bike?.id,
        model: bike?.model,
        year: bike?.year,
        price: bike?.price,
      })
    );
    return data;
  };

    const BikeList = ()=> {

      const AllBikes = () => {
        const { loading, error, data } = useQuery(GET_ALL_BIKES);
        console.log(data);
        
            if (loading) return <h2>Loading...</h2>;
            if (error) return  <h2>`Error! ${error.message}`</h2>
      
        return <Table columns={columns} datasource={()=>getBikes(data)}/>;
      };

        return (
            <AllBikes/>
        )
      }


export default BikeList;