import {
  Agent,
  Circle,
  Collapse,
  Testimonial,
  Top1image,
  Twoslides,
} from "../../../component/Layout";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export function Insuranceservices() {
  return (
    <div className="main">
      <Header />
      <div className="mainpagehead dbos">
        <Top1image
          h1={`Provide Insurance Services and grow your Business`}
          img={require("../../../asset/sample1/dbos/d10.png")}
        />
        <Twoslides
          classname={"col-12 col-xl-11 my-5 mx-auto two-slides"}
          img1={require("../../../asset/sample1/dbos/d11.png")}
          h1={`Insurance Services`}
          li1={`With PayPe, a retailer gets a chance to be part of a growing insurance network and help customers stay protected against uncertainties. They can provide a wide range of insurance products like 2-wheeler insurance, car insurance, commercial insurance, and hospicash directly from their shop.`}
          li2={`Using PayPe’s portal and app, retailers can provide insurance policies from leading insurance service providers to their customers, which not only helps them expand their business but provides an additional source of income. By becoming a PayPe agent (DBO), one can start an insurance business in their area without any extra documentation and capital investment.`}
        />

        <>
          <div className="service">
            <div className="service-image"></div>
            <div className="service-content text-center">
              <h1 className="mb-5">
                Why Start
                <br />
                <strong>Insurance Business with PayPe</strong>
              </h1>
              <div className=" service-box">
                <Circle
                  img={require("../../../asset/sample1/dbos/services/ds18.png")}
                  h6={"Premium starting as low as ₹ 75*"}
                />
                <Circle
                  img={require("../../../asset/sample1/dbos/services/ds19.png")}
                  h6={"Wide suite of insurance services"}
                />
                <Circle
                  img={require("../../../asset/sample1/dbos/services/ds20.png")}
                  h6={"Provide best plans from leading insurers"}
                />
                <Circle
                  img={require("../../../asset/sample1/dbos/services/ds21.png")}
                  h6={"Instant and paperless policy"}
                />

                <Circle
                  img={require("../../../asset/sample1/dbos/services/ds22.png")}
                  h6={"Incremental growth with better returns"}
                />
              </div>
            </div>
          </div>
        </>

        <div className="dbos-testimonial">
          <h1 className="text-center">
            What Our Retailers <strong>Say</strong>
          </h1>
          <div className="d-flex flex-wrap justify-content-around ">
            <Testimonial
              img={require("../../../asset/sample1/dbos/d12.png")}
              h5={`Mayank Kumar​​`}
              h6={"Tamil Nadu"}
              p={`I use PayPe Micro ATM services. I put up the ATM signage provided by PayPe and my customers increased after that. More customers, more business.​`}
            />
            <Testimonial
              img={require("../../../asset/sample1/dbos/d12.png")}
              h5={`Mayank Kumar​​`}
              h6={"Tamil Nadu"}
              p={`I use PayPe Micro ATM services. I put up the ATM signage provided by PayPe and my customers increased after that. More customers, more business.​`}
            />
            <Testimonial
              img={require("../../../asset/sample1/dbos/d12.png")}
              h5={`Mayank Kumar​​`}
              h6={"Tamil Nadu"}
              p={`I use PayPe Micro ATM services. I put up the ATM signage provided by PayPe and my customers increased after that. More customers, more business.​`}
            />
          </div>
        </div>

        <div className="bg-white py-5 my-5">
          <h1 className="text-center fw-bold mb-5 display-5">
            Frequently Asked Questions
          </h1>
          <Collapse
            idcall={"#one"}
            head={"Which insurance services can I provide?"}
            id={"one"}
            content={`PayPe agents can provide a wide range of insurance products to their customers like motor insurance which includes car insurance, bike insurance, and commercial insurance, hospicash, device insurance.`}
          />
          <Collapse
            idcall={"#two"}
            head={"Which insurance companies' policies can I provide?"}
            id={"two"}
            content={`Plans of all major insurance service providers like Reliance, Future Generali, Bajaj Allianz, TATA AIG, Digit, etc., are available on the PayPe agent app and portal. You can compare the plans of all these insurers and provide the best insurance plan to your customers.`}
          />
          <Collapse
            idcall={"#three"}
            head={"How can I start an insurance business with PayPe?"}
            id={"three"}
            content={`If you are a retailer and have a physical shop and documents like PAN and Aadhaar, then you first need to complete the PayPe KYC process. After successfully completing this step, you will get a login ID and password through which you can access the PayPe portal and app, and provide insurance services. Please contact at 0120-6366034 or you can fill the Contact Us form and our team will get back to you.`}
          />
        </div>

        <Agent />
      </div>
      <Footer />
    </div>
  );
}
