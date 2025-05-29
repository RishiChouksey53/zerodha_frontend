import TicketCard from "./TicketCard";

function TicketRow({ cardData }) {
  return (
    <div className="row mb-4">
      {cardData.map((item, idx) => (
        <div key={idx} className="col-4 ps-4">
          <TicketCard heading={item.heading} arr={item.arr} icon={item.icon} />
        </div>
      ))}
    </div>
  );
}

export default TicketRow;
