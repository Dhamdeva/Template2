import { Parallelogram, Topimage, Twoslides } from "../../../component/Layout";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export function Insurances() {
  return (
    <div className="main consumers">
      <Header />
      <div className="mainpagehead">
        <Topimage
          img1={require("../../../asset/sample1/consumers/c17.png")}
          h1={`Peace. `}
          h2={`Protection. `}
          h3={`Promise.`}
          p1={"Get insured today for safer tommorow."}
          img2={require("../../../asset/sample1/consumers/c18.png")}
        />

        <Twoslides
          classname={"col-11 col-xl-10  mx-auto two-slides-one"}
          img1={require("../../../asset/sample1/consumers/c19.png")}
          h1={`Choose an Insurance Solution`}
          icon={"fa fa-check"}
          li1={`Seamless and Cashless options`}
          li2={`Compare Best of Insurance Services`}
          li3={`Personal, Vehicle, Medical Insurance and more`}
          li4={`Leading Insurance partners to choose from`}
        />
        <Parallelogram h1={"One size does not fit all."} />

        <Twoslides
          classname={"col-11 col-xl-10  mx-auto two-slides-one"}
          img1={require("../../../asset/sample1/consumers/c20.png")}
          h1={`We make getting insured quick and easy for you`}
          icon={"fa fa-check"}
          li1={`1000 + Insurance Options to select`}
          li2={`Digital Insurance Services`}
          li3={`Quick Renewals`}
          li4={`Top plans recommendation during Renewal`}
        />
      </div>
      <Footer />
    </div>
  );
}
