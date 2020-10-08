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
        <div className="container-fluid bg-dark" id="plm">
            <table className="table table-dark">
                    <thead>
                    <tr>
                        <th scope="col">Departure</th>
                        <th scope="col">Arrival</th>
                        <th scope="col">Departure Date</th>
                        <th scope="col">Arrival Date</th>
                        <th scope="col">Price</th>
                        <th scope="col">Buy</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
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
