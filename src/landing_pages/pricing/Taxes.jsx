function taxes({ img, header, description }) {
  return (
    <div className="row p-5 d-flex flex-column justify-content-center align-items-center">
      <div className="col">
        <img src={img} alt="" />
      </div>
      <div className="col">
        <h2 className="mb-4">{header}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default taxes;
