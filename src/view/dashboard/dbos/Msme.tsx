import {
  Address,
  Agent,
  Circle,
  Collapse,
  Testimonial,
  Top1image,
  Twoslides,
} from "../../../component/Layout";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export function Msme() {
  return (
    <div className="main">
      <Header />
      <div className="mainpagehead dbos">
        <Top1image
          h1={`Get Funds For All Your Business Needs`}
          img={require("../../../asset/sample1/dbos/d19.png")}
        />
        <Twoslides
          classname={"col-12 col-xl-11 my-5  mx-auto two-slides"}
          img1={require("../../../asset/sample1/dbos/d20.png")}
          h1={`PayPe’s Business Loan Facility `}
          li1={`There are times when a retailer requires emergency funds to run his business efficiently, which he may not be able to manage from his current cash flows. This is when our business loans come in handy. PayPe’s business loan helps its agents bridge these cash flow gaps. Our retailers can avail of business loans to support their existing enterprises or start a new venture.  `}
          li2={`Our pre-approved business loans are easy on the pocket with low-interest rates and are provided based on the retailer’s eligibility. Our retailers also enjoy the flexibility of making their loan repayments online seamlessly saving one from the hassles of manual submission. `}
        />

        <div className="business-testimonial bg-white py-5">
          <h1 className="text-center py-4">
            Advantages of <strong>PayPe Business Loan </strong>
          </h1>
          <div className="d-flex flex-wrap justify-content-around ">
            <Testimonial
              img={require("../../../asset/sample1/dbos/d21.png")}
              h5={`​Pre-approved Loan`}
              p={`We fulfill your financial needs with our pre-approved offers..​`}
            />
            <Testimonial
              img={require("../../../asset/sample1/dbos/d22.png")}
              h5={`Easy Processing`}
              p={`We don't require any documents and provide smooth facilitation.​`}
            />
            <Testimonial
              img={require("../../../asset/sample1/dbos/d23.png")}
              h5={`Quick Disbursal`}
              p={`We disburse your loan instantly to help your business grow.`}
            />
            <Testimonial
              img={require("../../../asset/sample1/dbos/d24.png")}
              h5={`No Hidden Charges`}
              p={`We are transparent about our fees and charges.​`}
            />
          </div>
        </div>

        <>
          <div className="service">
            <div className="service-image"></div>
            <div className="service-content text-center">
              <h1 className="mb-5">
                Why Our Agents Prefer
                <br />
                <strong>PayPe Business Loan </strong>
              </h1>
              <div className="service-box">
                <Circle
                  img={require("../../../asset/sample1/dbos/services/ds34.png")}
                  h6={"Attractive interest rates "}
                />
                <Circle
                  img={require("../../../asset/sample1/dbos/services/ds35.png")}
                  h6={"Multiple repayment modes "}
                />
                <Circle
                  img={require("../../../asset/sample1/dbos/services/ds36.png")}
                  h6={"Dedicated Customer Support"}
                />
                <Circle
                  img={require("../../../asset/sample1/dbos/services/ds37.png")}
                  h6={"Pre-approved offers "}
                />
                <Circle
                  img={require("../../../asset/sample1/dbos/services/ds38.png")}
                  h6={"Minimal documentation "}
                />
                <Circle
                  img={require("../../../asset/sample1/dbos/services/ds39.png")}
                  h6={"Collateral-free loan  "}
                />
              </div>
            </div>
          </div>
        </>

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

        <Address />

        <Agent />
      </div>
      <Footer />
    </div>
  );
}
