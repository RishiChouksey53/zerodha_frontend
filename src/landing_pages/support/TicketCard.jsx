function TicketCard({ heading, arr, icon }) {
  return (
    <>
      <h3 className="fs-5 pb-3">
        <a className="text-decoration-none" style={{ color: "#222222" }} href="#">
          <i className={icon}></i>&nbsp;&nbsp;{heading}
        </a>
      </h3>
      <ul className="list-unstyled fs-6">
        {arr.map((items, index) => (
          <li key={index} className="my-2 ps-4">
            <a className="text-decoration-none"  style={{ color: '#387ed1' }} href="">
              {items}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TicketCard;
