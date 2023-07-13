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

export function Dmt() {
  return (
    <div className="main">
      <Header />
      <div className="mainpagehead dbos">
        <Top1image
          h1={`Fund Transfer Made Easy with PayPe’s DMT Service`}
          img={require("../../../asset/sample1/dbos/d8.png")}
        />
        <Twoslides
          classname={"col-12 col-xl-11 my-5  mx-auto two-slides"}
          img1={require("../../../asset/sample1/dbos/d7.png")}
          h1={`PayPe’s Domestic Money Transfer Service`}
          li1={`DMT is a cash-to-bank-account remittance service provided by business correspondents. A retailer can provide PayPe’s domestic money transfer (DMT) service from his shop and help customers transfer money to their loved ones across the country. They can remit funds to any nationalised and private banks that operate in India and support NEFT/IMPS.`}
          li2={`PayPe offers hassle-free and instant domestic fund transfer service for the migrant and unbanked population via its robust network of 6 lakhs+ agents across India.`}
        />

        <>
          <div className="service">
            <div className="service-image"></div>
            <div className="service-content text-center">
              <h1 className="mb-5">
                Benefits of becoming
                <br />
                <strong>PayPe’s DMT service provider</strong>
              </h1>
              <div className="service-box">
                <Circle
                  img={require("../../../asset/sample1/dbos/services/ds13.png")}
                  h6={"Real time transaction"}
                />
                <Circle
                  img={require("../../../asset/sample1/dbos/services/ds14.png")}
                  h6={"Money transfer available 365 days"}
                />
                <Circle
                  img={require("../../../asset/sample1/dbos/services/ds15.png")}
                  h6={"Secure and encrypted network"}
                />
                <Circle
                  img={require("../../../asset/sample1/dbos/services/ds16.png")}
                  h6={"Attractive Commission"}
                />
                <Circle
                  img={require("../../../asset/sample1/dbos/services/ds17.png")}
                  h6={"Transfer funds to any bank in India"}
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
              img={require("../../../asset/sample1/dbos/d9.png")}
              h5={`Anupam Mudak​`}
              h6={"Tamil Nadu"}
              p={`I use PayPe Micro ATM services. I put up the ATM signage provided by PayPe and my customers increased after that. More customers, more business.​`}
            />
            <Testimonial
              img={require("../../../asset/sample1/dbos/d9.png")}
              h5={`Anupam Mudak​`}
              h6={"Tamil Nadu"}
              p={`I use PayPe Micro ATM services. I put up the ATM signage provided by PayPe and my customers increased after that. More customers, more business.​`}
            />
            <Testimonial
              img={require("../../../asset/sample1/dbos/d9.png")}
              h5={`Anupam Mudak​`}
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
            head={"Who can become a domestic money transfer agent?"}
            id={"one"}
            content={`By becoming a PayPe agent DBO, any retailer can become a DMT agent and start providing domestic money transfer services to their customers. Retailers will just have to use the PayPe agent app or portal to transfer their customers’ money to any bank account in India. Additionally, a retailer can earn extra income in the form of DMT commission which he gets on every money transfer transaction.`}
          />
          <Collapse
            idcall={"#two"}
            head={"In which all bank accounts I can send money?"}
            id={"two"}
            content={`A DMR (Domestic Money Remittance) agent using National Electronic Fund Transfer (NEFT), Immediate Payment Service (IMPS) can send his customers’ money to all major nationalised and private banks based in India like SBI, PNB, ICICI, HDFC, Canara etc. A list of member banks providing IMPS/NEFT service is available at https://www.npci.org.in/what-we-do/imps/live-members`}
          />
          <Collapse
            idcall={"#three"}
            head={
              "Are there any domestic money transfer charges a customer needs to pay?"
            }
            id={"three"}
            content={`Just like the micro ATM and AePS service of PayPe that allow customers to withdraw cash instantly, the domestic money transfer facility of PayPe lets your customer transfer funds in a hassle-free and secure manner without any charges. They simply need to provide their mobile number and bank account details to transfer money.`}
          />
        </div>

        <Agent />
      </div>
      <Footer />
    </div>
  );
}
