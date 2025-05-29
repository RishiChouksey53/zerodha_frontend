import TicketRow from "./TicketRow";

function TicketContainer() {
  return (
    <>
      <div className="container mt-5 text-start d-flex flex-column align-items-center">
        <h3 className="mb-5" style={{ color: "#666666" }}>
          To create a ticket, select a relevant topic.
        </h3>
        <div>
          <TicketRow
            cardData={[
              {
                heading: "Account Opening",
                arr: [
                  "Getting started",
                  "Online",
                  "Offline",
                  "Charges",
                  "company, Partnership and HUF",
                  "Non Resident Indian (NRI)",
                ],
                icon: "fa-solid fa-plus",
              },
              {
                heading: "Account Opening",
                arr: [
                  "Login credentials",
                  "Your Profile",
                  "Account modification and segment addition",
                  "ChCMR & DP ID",
                  "Nomination",
                  "Transfer and conversion of shares",
                ],
                icon: "fa-solid fa-user",
              },
              {
                heading: "Account Opening",
                arr: [
                  "Getting started",
                  "Online",
                  "Offline",
                  "Charges",
                  "company, Partnership and HUF",
                  "Non Resident Indian (NRI",
                ],
                icon: "fa-solid fa-chart-simple",
              },
            ]}
          />
          <TicketRow
            cardData={[
              {
                heading: "Funds",
                arr: [
                  "Fund withdrawal",
                  "Adding funds",
                  "Adding bank accounts",
                  "eMandates",
                ],
                icon: "fa-solid fa-credit-card",
              },
              {
                heading: "Console",
                arr: [
                  "IPO",
                  "Portfolio",
                  "Funds statement",
                  "Profile",
                  "Reports",
                  "Referral program",
                ],
                icon: "fa-solid fa-circle-notch",
              },
              {
                heading: "Coin",
                arr: [
                  "Understanding mutual funds and Coin",
                  "Coin app",
                  "Coin web",
                  "Transactions and reports",
                  "National Pension Scheme (NPS)",
                ],
                icon: "fa-solid fa-coins",
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default TicketContainer;
