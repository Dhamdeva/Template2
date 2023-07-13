import { Form, Top1image, Twoslides } from "../../component/Layout";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";

export function About() {
  return (
    <div className="main">
      <Header />

      <div className="mainpagehead about">
        <Top1image
          h1={`About Us`}
          p={`PayPe is driven by a vision to grow and lead digital bank as a service in the country with its financial super App NYE. Whether you’re a consumer, a retailer, or an MSME, you can bank upon us. For consumers, we offer a wide suite of banking & financial services, and for businesses, we have assisted payment services, POS solutions, and MSME loans.`}
          img={require("../../asset/sample1/about.png")}
        />
        <div
          className="col-lg-11 col-xl-10 mx-auto row justify-content-around value mx-0 py-3"
          data-aos="zoom-in"
        >
          <img
            className="img-fluid"
            src={require("../../asset/sample1/a2.png")}
            alt="."
          />
          <h1 className="fw-bold text-center pb-4">Our Values </h1>
          <div className="col-md-3">
            <h3>Integrity</h3>
            <p>We endorse honesty in all our actions.</p>
          </div>
          <div className="col-md-3">
            <h3>Trust</h3>
            <p>We honour the promises made to you.</p>
          </div>
          <div className="col-md-3">
            <h3>Customer First</h3>
            <p>We place our customers at the heart of what we do.</p>
          </div>
          <div className="col-md-3">
            <h3>Transparency</h3>
            <p>
              We take pride in communicating our beliefs and decisions with
              complete openness.
            </p>
          </div>
        </div>
        <Twoslides
          classname={"col-12  mx-auto two-slides"}
          img1={require("../../asset/sample1/a3.png")}
          h1={`NYE - Beyond Banking`}
          h5={`NYE`}
          li1={`NYE means One. We believe our customers don’t need multiple Apps for their banking and financial requirements. They need just one app and that is NYE. It’s the coolest banking experience that will give you more control over your money, savings and spends. Start your NYE Banking now and experience the awesomeness.`}
        />

        <div className="d-flex justify-content-center long my-4">
          <img
            className="img-fluid"
            src={require("../../asset/sample1/a4.png")}
            alt=""
          />
        </div>
      </div>
      <Form />
      <Footer />
    </div>
  );
}
