import { Address, Register } from "../../component/Layout";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";

export function Contact() {
  return (
    <div className="main">
      <Header />
      <div className="mainpagehead contact-us">
        <div className="row contact mx-0">
          <div className="col-md-6" data-aos="fade-up">
            <div className="row justify-content-evenly mx-0 p-0">
              <h2 className="fw-bold text-center">
                Have any questions? We would love to hear from you.
              </h2>
              <div className="col-md-6">
                <input
                  type={"text"}
                  className="col-12 p-2"
                  placeholder="Name"
                />
              </div>
              <div className="col-md-6">
                <input
                  type={"email"}
                  className="col-12 p-2"
                  placeholder="Email"
                />
              </div>
              <div className="col-md-6">
                <input
                  type={"number"}
                  className="col-12 p-2"
                  placeholder="Phone"
                />
              </div>
              <div className="col-md-6">
                <input
                  type={"text"}
                  className="col-12 p-2"
                  placeholder="City"
                />
              </div>
              <div className="col-md-12">
                <input
                  type={"tel"}
                  className="col-12 p-2"
                  placeholder="Pincode"
                />
              </div>

              <div className="col-md-12">
                <input
                  type={"text"}
                  className="col-12 py-4"
                  placeholder="Enter your Query"
                />
              </div>
              <div className="col-md-6 col-8 text-center">
                <a type="submit" className="col-12 p-2 button">
                  Submit
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              data-aos="fade-down"
              className="img-fluid"
              src={require("../../asset/sample1/c1.png")}
              alt="."
            />
          </div>
        </div>
        <div className="d-flex flex-wrap contact-address my-5 py-5">
          <div className="col-md-6">
            <img
              data-aos="zoom-in"
              className="img-fluid"
              src={require("../../asset/sample1/c2.png")}
              alt="."
            />
          </div>
          <div className="col-md-6 register">
            <Register
              icon={"fa fa-location-dot col-3"}
              h6={"Registered Address"}
              p={`PayPe Fintech Pvt. Ltd, 2nd Floor, DLF Centre, Sansad
                    Marg, New Delhi-110001`}
            />
            <Register
              icon={"fa fa-location-dot col-3"}
              h6={"Corporate Address"}
              p={`PayPe Fintech Pvt. Ltd, A-8, 7&8th Floor (Q-Tower),
                  Sector-68, Noida-201309`}
            />
            <Register
              icon={"fa fa-envelope col-3"}
              h6={"Email"}
              p={`contact@PayPe.com`}
            />
            <Register
              icon={"fa fa-phone col-3"}
              h6={"Phone no"}
              p={`+91-120-6366034`}
            />
            <Register
              icon={"fa fa-book col-3"}
              h6={"CIN"}
              p={`U72200DL2009PTC189149`}
            />
          </div>
        </div>

        <div className="row mx-0 map my-5 bg-white py-5">
          <div className="col-md-6 text-center regional" data-aos="slide-up">
            <h2 className="fw-bold">Regional Office</h2>
            <h5 className="fw-bold">Pudukkottai</h5>
            <p>
              No.278. Periyar Nagar, Railway Junction Road, Post,
              Rajagopalapuram, Pudukkottai, Tamil Nadu 622003
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              data-aos="zoom-in"
              className="img-fluid"
              src={require("../../asset/sample1/c3.png")}
              alt="."
            />
          </div>
        </div>

        <Address />
      </div>
      <Footer />
    </div>
  );
}
