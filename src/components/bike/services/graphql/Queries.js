import { gql } from "@apollo/client";

export const GET_ALL_BIKES = gql`
  query{
    allBikes{
      model
      year
      price
      bikeType{
        name
      }
      manufacturer{
        name
      }
    }
  }
`;
