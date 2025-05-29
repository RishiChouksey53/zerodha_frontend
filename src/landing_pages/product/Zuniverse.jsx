import React from "react";

export default function Zuniverse({description1, img1, description2, img2}) {
  return (
    <>
      <div className="row p-5 d-flex flex-column justify-content-center align-items-center">
        <div className="col mb-5">
          <img className="p-4" src={img1} alt="" width={"100%"} />
          <p>{description1}</p>
        </div>
        <div className="col">
          <img className="p-4" src={img2} alt="" width={"100%"} />
          <p>{description2}</p>
        </div>
      </div>
    </>
  );
}
