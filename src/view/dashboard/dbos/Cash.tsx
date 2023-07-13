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

export function Cash() {
  return (
    <div className="main">
      <Header />
      <div className="mainpagehead dbos">
        <Top1image
          h1={`Provide CMS Service and Increase Customer Footfall `}
          img={require("../../../asset/sample1/dbos/d13.png")}
        />
        <Twoslides
          classname={"col-12 col-xl-11 my-5 mx-auto two-slides"}
          img1={require("../../../asset/sample1/dbos/d14.png")}
          h1={`Cash Management Service`}
          li1={`PayPe’s cash management service (CMS) allows retailers to convert their shops into a cash deposit centre and help their customers with the timely payment of their loan EMIs conveniently. PayPe’s CMS service is efficient, speedy, and safe to use.`}
          li2={`Our cash management service is functional on all days and lets retailers help customers with their EMI payments even on public holidays and non-banking hours. A retailer can accept cash from his customer and credit the EMI in the respective biller’s account immediately using the PayPe web portal and app.`}
          li3={`Cash management service allows retailers to grow their business and increase their monthly earnings by getting an attractive commission on every cash deposit.`}
        />

        <>
          <div className="service">
            <div className="service-image"></div>
            <div className="service-content text-center">
              <h1 className="mb-5">
                Benefits of Providing
                <br />
                <strong>PayPe’s CMS Service</strong>
              </h1>
              <div className="service-box">
                <Circle
                  img={require("../../../asset/sample1/dbos/services/ds23.png")}
                  h6={"Attractive commission"}
                />
                <Circle
                  img={require("../../../asset/sample1/dbos/services/ds24.png")}
                  h6={"150+ billers payments accepted"}
                />
                <Circle
                  img={require("../../../asset/sample1/dbos/services/ds25.png")}
                  h6={"Access to more customers  "}
                />
                <Circle
                  img={require("../../../asset/sample1/dbos/services/ds26.png")}
                  h6={"Real-time dashboard "}
                />
                <Circle
                  img={require("../../../asset/sample1/dbos/services/ds27.png")}
                  h6={"Maintain healthy cash flow "}
                />
                <Circle
                  img={require("../../../asset/sample1/dbos/services/ds28.png")}
                  h6={"Dedicated customer service team"}
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
              img={require("../../../asset/sample1/dbos/d15.png")}
              h5={`​J Spandana​​`}
              h6={"Andhra Pradesh​"}
              p={`I can accept loan EMIs for many banks/NBFCs as more than 100 billers are available with PayPe CMS service. My shop has become a popular cash deposit point in my area and my business is growing too.​`}
            />
            <Testimonial
              img={require("../../../asset/sample1/dbos/d15.png")}
              h5={`​J Spandana​​`}
              h6={"Andhra Pradesh​"}
              p={`I can accept loan EMIs for many banks/NBFCs as more than 100 billers are available with PayPe CMS service. My shop has become a popular cash deposit point in my area and my business is growing too.​`}
            />
            <Testimonial
              img={require("../../../asset/sample1/dbos/d15.png")}
              h5={`​J Spandana​​`}
              h6={"Andhra Pradesh​"}
              p={`I can accept loan EMIs for many banks/NBFCs as more than 100 billers are available with PayPe CMS service. My shop has become a popular cash deposit point in my area and my business is growing too.​`}
            />
          </div>
        </div>

        <div className="bg-white py-5 my-5">
          <h1 className="text-center fw-bold mb-5 display-5">
            Frequently Asked Questions
          </h1>
          <Collapse
            idcall={"#one"}
            head={"What is a CMS service? "}
            id={"one"}
            content={`CMS stands for cash management service that enables a retailer to accept cash from his customer and deposit the same in the respective biller account digitally in real time. These payments are generally loan EMIs that a customer has taken from a bank/NBFC/MFI. `}
          />
          <Collapse
            idcall={"#two"}
            head={"Which companies’ EMIs I can accept via PayPe CMS? "}
            id={"two"}
            content={`PayPe is facilitating cash management service in association with Airtel Payments Bank and Fingpay. A retailer can accept payments from a customer for more than 150 billers which can be credited digitally to the biller’s account in real time. `}
          />
          <Collapse
            idcall={"#three"}
            head={
              "How is the cash management service of PayPe is better than its competitors? "
            }
            id={"three"}
            content={`PayPe is India’s fastest-growing assisted payment services company with a PAN India presence and regional offices in all major metro cities. Our retailers get all the required help via our dedicated sales and customer support team. PayPe provides its retailers state-of-the-art web portal and the app that is safe, secure, and easy-to-use platform. `}
          />
        </div>

        <Agent />
      </div>
      <Footer />
    </div>
  );
}
