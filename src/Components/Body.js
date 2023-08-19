import { useEffect, useState } from "react";
import { options, url } from "./Constant";


const Body = () => {
   const [WeatData, SetWeatData] = useState("");
   useEffect(() => {
     fetchData();
   },[])

   const fetchData = async () => {
    const data = await fetch(url, options);
    const json = await data.json();
    console.log(json);
    SetWeatData(json);
   }
      const Data = WeatData?.current;
      console.log(Data);

    return (
        <div>
      
  <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
    <h1 className="display-6 text-center mb-4 ">Weather for Boston</h1>
    <p className="fs-5 text-body-secondary">
    </p>
  </div>
       <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
    <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm">
        <div className="card-header py-3">
          <h4 className="my-0 fw-normal">Temperature - {Data?.temp_c} </h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">
            <small className="text-body-secondary fw-light"></small>
          </h1>
          <ul className="list-unstyled mt-3 mb-4">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <button
            type="button"
            className="w-100 btn btn-lg btn-outline-primary"
          >
          </button>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm">
        <div className="card-header py-3">
          <h4 className="my-0 fw-normal">Pressure - {Data?.pressure_mb}</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">
            <small className="text-body-secondary fw-light"></small>
          </h1>
          <ul className="list-unstyled mt-3 mb-4">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <button type="button" className="w-100 btn btn-lg btn-primary">
          </button>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm border-primary">
        <div className="card-header py-3 text-bg-primary border-primary">
          <h4 className="my-0 fw-normal">Humidity - {Data?.humidity}</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">
            <small className="text-body-secondary fw-light"></small>
          </h1>
          <ul className="list-unstyled mt-3 mb-4">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <button type="button" className="w-100 btn btn-lg btn-primary">
          </button>
        </div>
      </div>
    </div>
  </div>
  <h2 className="display-6 text-center mb-4">Weather of Cities</h2>
  <div className="table-responsive">
    <table className="table text-center">
      <thead>
        <tr>
          <th style={{ width: "34%" }} />
          <th style={{ width: "22%" }}>Temp</th>
          <th style={{ width: "22%" }}>Feels_like</th>
          <th style={{ width: "22%" }}>Precipitation</th>
          <th style={{ width: "22%" }}>Wind speed</th>
          <th style={{ width: "22%" }}> Pressure</th>
          <th style={{ width: "22%" }}>Humidity
</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" className="text-start">
            Boston
          </th>
          <td> {Data?.temp_c}</td>
          <td> {Data?.feelslike_c}</td>
          <td> {Data?.precip_in} </td>
          <td> {Data?.wind_kph}</td>
          <td> {Data?.pressure_mb}</td>
          <td> {Data?.humidity}</td>
        </tr>
        <tr>
          <th scope="row" className="text-start">
            Bihar
          </th>
          <td />
          <td>
            <svg className="bi" width={24} height={24}>
              <use xlinkHref="#check" />
            </svg>
          </td>
          <td>
            <svg className="bi" width={24} height={24}>
              <use xlinkHref="#check" />
            </svg>
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <th scope="row" className="text-start">
            Dehradun
          </th>
          <td>
            <svg className="bi" width={24} height={24}>
              <use xlinkHref="#check" />
            </svg>
          </td>
          <td>
            <svg className="bi" width={24} height={24}>
              <use xlinkHref="#check" />
            </svg>
          </td>
          <td>
            <svg className="bi" width={24} height={24}>
              <use xlinkHref="#check" />
            </svg>
          </td>
        </tr>
        <tr>
          <th scope="row" className="text-start">
            Banglore
          </th>
          <td />
          <td>
            <svg className="bi" width={24} height={24}>
              <use xlinkHref="#check" />
            </svg>
          </td>
          <td>
            <svg className="bi" width={24} height={24}>
              <use xlinkHref="#check" />
            </svg>
          </td>
        </tr>
        <tr>
          <th scope="row" className="text-start">
            Kolkata
          </th>
          <td />
          <td>
            <svg className="bi" width={24} height={24}>
              <use xlinkHref="#check" />
            </svg>
          </td>
          <td>
            <svg className="bi" width={24} height={24}>
              <use xlinkHref="#check" />
            </svg>
          </td>
        </tr>
        <tr>
          <th scope="row" className="text-start">
            Banaras
          </th>
          <td />
          <td />
          <td>
            <svg className="bi" width={24} height={24}>
              <use xlinkHref="#check" />
            </svg>
          </td>
        </tr>
      </tbody>
    </table>
  </div>


        </div>
    )
}
export default Body;