import React from "react";
import NavBar from "./NavBar";

export default function Bikes() {
  const places = [
    {
        carname: "Royal Enfield Hunter 350",
        model_year: "2023 ",
        Price:"₹ 1,49,900L",
        description:
          "Accessible seat height 350cc engine churns out good performance Very easy to ride in the city",
        url: "https://imgd.aeplcdn.com/664x374/n/cw/ec/124013/hunter-350-right-front-three-quarter.jpeg?isig=0&q=80",
      },
    {
      carname: "TVS Ronin",
      model_year: "2022 ",
      Price:"₹ 1,35,064",
      description:
        "The Ronin is a scrambler-style neo-retro motorcycle from TVS. The bike is available in four distinctive variants that are differentiated by their colour schemes.",
      url: "https://imgd.aeplcdn.com/664x374/n/cw/ec/124775/ronin-225-left-rear-three-quarter.jpeg?isig=0&q=80",
    },

   
  ];
   
  return (
    <div>
      <NavBar />

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {places.map((place) => (
          <div className="col">
            <div className="card">
              <img src={place.url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{place.carname}</h5>
                <p className="card-text">{place.model_year}</p>
                <p className="card-text">{place.Price}</p>
                <p className="card-text">{place.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}