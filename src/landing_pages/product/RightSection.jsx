import React from "react";

export default function RightSection({
  image,
  productName,
  productDescription,
  link1,
}) {
  return (
    <>
      <div className="container text-start " style={{ color: "#242424" }}>
        <div className="row px-5">
          <div className="col d-flex flex-column justify-content-center">
            <h2 className="mb-4">{productName}</h2>
            <p>{productDescription}</p>
            <p className="mb-4">
              <a href="">
                {link1} <i className="fa-solid fa-arrow-right"></i>
              </a>
            </p>
          </div>
          <div className="col">
            <img src={image} alt="" width={"100%"} />
          </div>
        </div>
      </div>
    </>
  );
}
