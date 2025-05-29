import React from "react";

export default function LeftSection({
  image,
  productName,
  productDescription,
  link1,
  link2,
}) {
  return (
    <>
      <div className="container text-start " style={{ color: "#242424" }}>
        <div className="row px-5">
          <div className="col">
            <img src={image} alt="" width={"100%"} />
          </div>
          <div className="col py-5 ps-5 d-flex flex-column justify-content-center">
            <h2 className="mb-4">{productName}</h2>
            <p>{productDescription}</p>
            <p className="mb-4">
              <a href="">{link1}</a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="">{link2}</a>
            </p>
            <div>
              <a href="">
                <img src="media/images/googlePlayBadge.svg" alt="GoogleBadge" />
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="">
                <img src="media/images/appstoreBadge.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
