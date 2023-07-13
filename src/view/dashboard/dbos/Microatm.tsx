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

export function Microatm() {
  return (
    <div className="main">
      <Header />
      <div className="mainpagehead dbos">
        <Top1image
          h1={`Make your Shop an ATM with PayPe Micro ATM`}
          img={require("../../../asset/sample1/dbos/d1.png")}
        />
        <Twoslides
          classname={"col-12 col-xl-11 my-5  mx-auto two-slides"}
          img={require("../../../asset/sample1/dbos/d2.png")}
          h1={`Micro ATM Service`}
          li1={`Micro ATM (mATM) is a portable handheld device for cash withdrawal from users’ bank accounts. mATM services are used to withdraw cash and for balance enquiries just like a bank ATM.`}
          li2={`PayPe micro ATMs come in handy in areas where bank ATMs are far and few. It has made cash withdrawal more accessible and convenient for customers, especially in rural and Tier 2,3 areas. By using our micro ATM services, lakhs of Indian retailers are witnessing incremental growth in their income and business.`}
        />

        <>
          <div className="service">
            <div className="service-image"> </div>
            <div className="service-content text-center">
              <h1>
                Why <strong>PayPe Micro ATM Service</strong>
                <br /> Is the First Choice of Retailers
              </h1>
              <div className="service-box">
                <Circle
                  img={require("../../../asset/sample1/dbos/services/ds1.png")}
                  h6={"Commission on every transaction"}
                />
                <Circle
                  img={require("../../../asset/sample1/dbos/services/ds2.png")}
                  h6={"Instant settlement"}
                />
                <Circle
                  img={require("../../../asset/sample1/dbos/services/ds3.png")}
                  h6={"Accepts all debit cards"}
                />
                <Circle
                  img={require("../../../asset/sample1/dbos/services/ds4.png")}
                  h6={"2 Yrs device warranty"}
                />
                <Circle
                  img={require("../../../asset/sample1/dbos/services/ds5.png")}
                  h6={"Hybrid device - mATM & mPOS"}
                />
                <Circle
                  img={require("../../../asset/sample1/dbos/services/ds6.png")}
                  h6={"Dedicated customer service team​"}
                />
                <Circle
                  img={require("../../../asset/sample1/dbos/services/ds7.png")}
                  h6={"Best in industry sales support"}
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
              img={require("../../../asset/sample1/dbos/d3.png")}
              h5={`David Jones`}
              h6={"India"}
              p={`I use PayPe Micro ATM services. I put up the ATM signage provided by PayPe and my customers increased after that. More customers, more business.​`}
            />
            <Testimonial
              img={require("../../../asset/sample1/dbos/d3.png")}
              h5={`David Jones`}
              h6={"India"}
              p={`I use PayPe Micro ATM services. I put up the ATM signage provided by PayPe and my customers increased after that. More customers, more business.​`}
            />
            <Testimonial
              img={require("../../../asset/sample1/dbos/d3.png")}
              h5={`David Jones`}
              h6={"India"}
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
            head={"What is mATM ?"}
            id={"one"}
            content={`mATM, also known as a micro ATM is used by business correspondents (BCs) to provide cash withdrawal facilities to their customers. The card swipe facility on the device allows users to swipe their debit cards for cash withdrawals. While using a mATM, the business correspondent gives the requested cash to the user, which is then deposited into his wallet by the bank.`}
          />
          <Collapse
            idcall={"#two"}
            head={"How will mATM services help my business to grow?"}
            id={"two"}
            content={`Consumers don’t need to visit banks or find ATMs to draw cash. They can easily get cash from your shop via mATM service. Moreover, you will earn great commission on every transaction, and an increased customer footfall will also help your business grow further.`}
          />
          <Collapse
            idcall={"#three"}
            head={"How to start micro ATM business with PayPe?"}
            id={"three"}
            content={`To get a PayPe agent ID and start your micro ATM business, contact us at 0120-6366034 or meet our sales officer. You should have a physical store and documents like Aadhaar and PAN card. For more information, you can also fill out the Contact Us form and our team will get back to you.`}
          />
        </div>

        <Agent />
      </div>
      <Footer />
    </div>
  );
}
