import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SearchResult() {
     
    const [flightDetails, setFlightDetails] = useState([]);

    useEffect(() => {
      console.log(window.location.href);
      const from = window.location.href.split("/").reverse()[2];
      const to = window.location.href.split("/").reverse()[1];
        const date = window.location.href.split("/").reverse()[0];
        
      const config = {
        method: "get",
        url: `http://localhost:8080/api/v1/flights/${from}/${to}/${date}`,
        // headers: {
        //   "Content-Type": "application/json",
        //   "X-Auth-Token": "b75f515919a94829830c8199beb46c05",
        // },
      };

      axios(config)
        .then((response) => {
          console.log(response.data);
          setFlightDetails(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },[]);

    if (flightDetails === undefined) {
      return <h3>Loading...</h3>;
    }



    return(
        <div className="container py-5">
            <table className="table mt-0 table-dark">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Departure</th>
                        <th scope="col"></th>
                        <th scope="col">Handle</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
            </table>
        </div>
    )
 }

export default SearchResult;
