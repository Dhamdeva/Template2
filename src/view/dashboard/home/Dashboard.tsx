import "./Dashboard.styles.css";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { Fourboxes, Numbers, Twoslides } from "../../../component/Layout";
export function Dashboard() {
  return (
    <div className="main">
      <Header />
      <div className="mainpagehead p-0 home ">
        <div>
          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="digital px-lg-5 p-0">
                  <div className="col-md-6 col-xl-5" data-aos="slide-right">
                    <h1>Offering Digital Banking as a Service</h1>
                    <p>
                      Effortless,Efficient and Extrordinary Banking Service on a
                      SingleSuper App
                    </p>
                  </div>
                  <div className="col-md-6 col-xl-5 d-flex align-items-center justify-content-center">
                    <img
                      data-aos="slide-left"
                      src={require("../../../asset/sample1/home/img1.png")}
                      className="img-fluid "
                      alt="."
                    />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="digital px-lg-5 p-0">
                  <div className="col-md-6 col-xl-5">
                    <h1>
                      New Age <br />
                      New You <br />
                      Neo Banking
                    </h1>
                    <p>
                      Introducing NYE, the New Age Banking.A single app to
                      control all your financial and banking needs
                    </p>
                  </div>
                  <div className="col-md-6 col-xl-5 d-flex align-items-center justify-content-center">
                    <img
                      src={require("../../../asset/sample1/home/img2.png")}
                      className="img-fluid mt-4 "
                      alt="."
                    />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="digital px-lg-5 p-0">
                  <div className="col-md-6 col-xl-5">
                    <h1>Become a PayPe Direct Business Outlet</h1>
                    <p>
                      Grow your Income and Business with PayPe Banking Service
                    </p>
                  </div>
                  <div className="col-md-6 col-xl-5 d-flex align-items-center justify-content-center">
                    <img
                      src={require("../../../asset/sample1/home/img3.png")}
                      className="img-fluid"
                      alt="."
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <Twoslides
          classname={"col-12  mx-auto two-slides py-3"}
          img={require("../../../asset/sample1/graph3.png")}
          img1={require("../../../asset/sample1/home/img4.png")}
          h1={`Digital Bank Account`}
          h5={`Digital Banking Services Served in a Single App.`}
          icon={"fa fa-check"}
          li1={`Leading Banks options to choose from`}
          li2={`Open & Manage Multiple Bank accounts`}
          li3={`Instant paperless Account opening`}
          li4={`Attractive Cashback and Rewards`}
          button={"Know More"}
          btnicon={"fa-solid fa-chevron-right"}
        />
        <Twoslides
          classname={"col-12 mx-auto two-slides-one"}
          img={require("../../../asset/sample1/graph1.png")}
          img1={require("../../../asset/sample1/home/img5.png")}
          h1={`Loans`}
          h5={`Personal or Business – Get for any purpose`}
          icon={"fa fa-check"}
          li1={`Quick approval and disbursal`}
          li2={`Paperless and Simple`}
          li3={`Flexi Loan Repayment options`}
          li4={`Customized Loan Amount`}
          button={"Know More"}
          btnicon={"fa-solid fa-chevron-right"}
        />
        <Twoslides
          classname={"col-12 mx-auto two-slides"}
          img={require("../../../asset/sample1/graph2.png")}
          img1={require("../../../asset/sample1/home/img6.png")}
          h1={`Investments`}
          h5={`Invest Smarter with your NYE account`}
          icon={"fa fa-check"}
          li1={`FD, mutual funds, stocks and more`}
          li2={`Easy Portfolio Tracking`}
          li3={`Algorithm based advisory`}
          li4={`Customized recommendation to grow your portfolio`}
          button={"Know More"}
          btnicon={"fa-solid fa-chevron-right"}
        />
        <Twoslides
          classname={"col-12  mx-auto two-slides-one"}
          img={require("../../../asset/sample1/graph4.png")}
          img1={require("../../../asset/sample1/home/img7.png")}
          h1={`Insurance`}
          h5={`All insurance needs in 𝗼𝗻𝗲 𝗮𝗽𝗽 Protect your belongings and loved ones.`}
          icon={"fa fa-check"}
          li1={`Better Premium Rates`}
          li2={`Insure vehicles, health, travel etc`}
          li3={`Instant Policy Renewal`}
          li4={`No Paperwork. Fully Digital Journey`}
          button={"Know More"}
          btnicon={"fa-solid fa-chevron-right"}
        />
        <Twoslides
          classname={"col-12 mx-auto two-slides last-img"}
          img={require("../../../asset/sample1/graph5.png")}
          img1={require("../../../asset/sample1/home/img8.png")}
          h1={`Grow your Business With PayPe Digital Banking Services`}
          h5={`Become a PayPe DBO`}
          icon={"fa fa-check"}
          li1={`Cost-effective MPOS Solutions`}
          li2={`Provide MATM & AEPS Services`}
          li3={`Offer Affordable Insurance Plans`}
          li4={`Bills & Utility Payments`}
          button={"Know More"}
          btnicon={"fa-solid fa-chevron-right"}
        />
      </div>
      <div className="py-5 my-5 bg-white four-boxes d-flex flex-wrap justify-content-around px-4">
        <Fourboxes
          classname={"four1"}
          h5={`Excellent Customer Service`}
          p={`Unparalleled customer support`}
          img={require("../../../asset/sample1/home/img9.png")}
        />
        <Fourboxes
          classname={"four2"}
          h5={`Excellent Customer Service`}
          p={`Unparalleled customer support`}
          img={require("../../../asset/sample1/home/img10.png")}
        />
        <Fourboxes
          classname={"four3"}
          h5={`Excellent Customer Service`}
          p={`Unparalleled customer support`}
          img={require("../../../asset/sample1/home/img11.png")}
        />
        <Fourboxes
          classname={"four4"}
          h5={`Excellent Customer Service`}
          p={`Unparalleled customer support`}
          img={require("../../../asset/sample1/home/img12.png")}
        />
      </div>
      <Numbers />
      {/* <div className="vh-100 services">
        <div className="imges"></div>
        <div className="h1">hi is that working</div>
      </div> */}
      <Footer />
    </div>
  );
}
