import "./SupportPortal.css";
function SupportPage() {
  return (
    <>
      <div className="container text-start Support " >
        <div className="row ">
          <div className="col-12 d-flex justify-content-between align-items-center py-5">
            <a href="">
              <h4>Support Portal</h4>
            </a>
            <a href="">Track tickets</a>
          </div>
          <div className="col-6">
            <div>
              <h3 className="pb-4">
                Search for an answer or browse help topics to create a ticket
              </h3>
            </div>
            <div className="d-flex align-items-center bg-white mt-1 mb-2">
              <input
                className="py-2 px-5 form-input "
                type="text"
                placeholder="Eg: how do i activate F&amp;O, why is my order getting rejected ..."
              />
              <i className="fa-solid fa-magnifying-glass px-4"></i>
            </div>
            <div className="d-flex flex-wrap justify-content-evenly">
              <a  href="">
                Track account opening
              </a>
              <a  href="">
                {" "}
                Track segment activation
              </a>
              <a  href="">
                Intraday margins
              </a>
              <a  href="">
                {" "}
                Kite user manual
              </a>
            </div>
          </div>
          <div className="col-6">
            <h5>Featured</h5>
            <ol>
              <li className="mb-3" ><a  href="">MCX Option contracts expiry - February 2025</a></li>
              <li  ><a  href="">MCX Base metals contract expiry - February 2025</a></li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
export default SupportPage;
