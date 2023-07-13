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

export function Bbps() {
  return (
    <div className="main">
      <Header />
      <div className="mainpagehead dbos">
        <Top1image
          h1={`Provide Instant Bill Payment & Recharge Service`}
          img={require("../../../asset/sample1/dbos/d16.png")}
        />
        <Twoslides
          classname={"col-12 col-xl-11 my-5  mx-auto two-slides"}
          img1={require("../../../asset/sample1/dbos/d17.png")}
          h1={`BBPS & Recharge Services`}
          li1={`Retailers can open new gateways for their business by providing a wide range of BBPS services using PayPe’s portal or app. They can make their shop a one-stop solution for all bill payments like electricity, telecom, gas, water, FasTag recharge and many more. Not just bill payments, PayPe agents (DBOs) can also provide mobile and DTH recharges to their consumers. All major mobile and DTH service providers’ recharge plans are available.`}
          li2={`By joining PayPe’s vast network of Fintailers, a retailer can provide convenient, safe, and reliable bill payment and recharge services to their customers and help them pay their bills digitally. This additional service also ensures that the retailers earn great commissions on every recharge.`}
        />

        <>
          <div className="service">
            <div className="service-image"></div>
            <div className="service-content text-center">
              <h1 className="mb-5">
                Why Start
                <br />
                <strong>Bill Payment & Recharge Business with PayPe</strong>
              </h1>
              <div className="service-box">
                <Circle
                  img={require("../../../asset/sample1/dbos/services/ds29.png")}
                  h6={"All bill payments & recharges under one roof"}
                />
                <Circle
                  img={require("../../../asset/sample1/dbos/services/ds30.png")}
                  h6={"More customer footfall & retention"}
                />
                <Circle
                  img={require("../../../asset/sample1/dbos/services/ds31.png")}
                  h6={"Instant confirmation"}
                />
                <Circle
                  img={require("../../../asset/sample1/dbos/services/ds32.png")}
                  h6={"Increased revenue opportunity"}
                />

                <Circle
                  img={require("../../../asset/sample1/dbos/services/ds33.png")}
                  h6={"Attractive commission on recharges"}
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
              img={require("../../../asset/sample1/dbos/d18.png")}
              h5={`​Gayatri Devi​`}
              h6={"Haryana"}
              p={`BBPS is in high demand. My shop is a popular shop because of all kinds of bills and recharge services. Thanks to PayPe​​`}
            />
            <Testimonial
              img={require("../../../asset/sample1/dbos/d18.png")}
              h5={`​Gayatri Devi​`}
              h6={"Haryana"}
              p={`BBPS is in high demand. My shop is a popular shop because of all kinds of bills and recharge services. Thanks to PayPe​​`}
            />
            <Testimonial
              img={require("../../../asset/sample1/dbos/d18.png")}
              h5={`​Gayatri Devi​`}
              h6={"Haryana"}
              p={`BBPS is in high demand. My shop is a popular shop because of all kinds of bills and recharge services. Thanks to PayPe​​`}
            />
          </div>
        </div>

        <div className="bg-white py-5 my-5">
          <h1 className="text-center fw-bold mb-5 display-5">
            Frequently Asked Questions
          </h1>
          <Collapse
            idcall={"#one"}
            head={"What is BBPS?"}
            id={"one"}
            content={`BBPS stands for Bharat Bill Payment System which is a Reserve Bank of India (RBI) conceptualised system driven by the National Payments Corporation of India (NPCI). BBPS was started to integrate bill payment system in India by offering interoperable and accessible bill payment services to customers through a network of agents.`}
          />
          <Collapse
            idcall={"#two"}
            head={"What bill payment services are offered under BBPS?"}
            id={"two"}
            content={`Using BBPS, an agent can provide a host of bill payment services to his customers like electricity, gas, landline, broadband, mobile, water, etc. In addition to that, they can also provide services like loan repayment, FasTag recharge, and subscription fee payment.`}
          />
          <Collapse
            idcall={"#three"}
            head={"Which recharge options are available with PayPe?"}
            id={"three"}
            content={`Mobile recharges and DTH recharges of all major service providers are available on the PayPe portal and app like Vodafone prepaid recharge, JIO recharge, Airtel recharge, Dish TV recharge etc. Customers can recharge their mobile and DTH with their preferred recharge plans. They also get instant confirmation and an automatic receipt at the end of each transaction.`}
          />
        </div>

        <Agent />
      </div>
      <Footer />
    </div>
  );
}
