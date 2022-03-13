import { gql } from "@apollo/client";

export const GET_ALL_BIKES = gql`
  query getAllBikes{
    bikes {
        id
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
